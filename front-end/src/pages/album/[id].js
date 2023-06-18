import { BackCover, Cover, LastPage, Page, FigurinhaInfo } from "@/components/albumComponents";
import { Dashboard } from "@/components/Dashboard";
import { UserData } from "@/contexts/userContext";
import apiAlbum from "@/services/apiAlbum";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


export default function Album() {
    const { userInfo } = useContext(UserData)
    const router = useRouter();
    const [album, setAlbum] = useState([]);
    const [display, setDisplay] = useState(false)
    const [figInfo, setFigInfo] = useState({})

    const { id } = router.query

    useEffect(() => {
        if (!userInfo) { router.push('/') }
        else {
            apiAlbum.getSpecificAlbum(id, userInfo.token)
                .then((res) => {
                    setAlbum(res.data)
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }

    }, [id, userInfo])
    
    function toggleInsideCoverFlip(event) {
        if (event.target === event.currentTarget) {
            const pages = document.querySelectorAll('[cover]');
    
            const divWidth = event.currentTarget.offsetWidth;
            const clickX = event.clientX - event.currentTarget.getBoundingClientRect().left;
    
            if (clickX < divWidth / 2) {
                pages.forEach((item) => {
                    if (Number(item.style.zIndex) === -2) {
                        item.classList.toggle("turn");
                        item.style.zIndex = -item.style.zIndex
                    }
    
                })
            } else {
                pages.forEach((item) => {
                    if (Number(item.style.zIndex) === -1) {
                        item.classList.toggle("turn");
                        item.style.zIndex = -item.style.zIndex
                    }
    
                })
            }
    
        }
    }


    return (
        <>
            <Dashboard />
            <FigurinhaInfo description={figInfo.description} name={figInfo.name} image={figInfo.image} display={display} setDisplay={setDisplay}/>
            <div className={`h-screen w-screen heropattern-temple-gray-600/10 max-pt-6 flex items-center justify-center`}>
                <div className="h-[90%] w-10/12 perspective flex justify-start items-center"> {/*CONTAINER */}

                    <Cover cover={album.cover}/>

                    <BackCover/>

                    <div className="h-[97%] w-[99%] absolute left-[0.5%] perspective flex justify-start z-0" onClick={toggleInsideCoverFlip}>   {/*CONTAINER*/}

                        {!album.Pages?'':
                        album.Pages.map((each, index) => {
                            return (
                                <Page each={each} index={index} album={album} key={index} setDisplay={setDisplay} setFigInfo={setFigInfo}/>
                            )
                        })}

                        {!album.Pages?'':<LastPage pages={album.Pages} setDisplay={setDisplay} setFigInfo={setFigInfo}/>}
                    </div>

                </div>

            </div>


        </>
    )
}
