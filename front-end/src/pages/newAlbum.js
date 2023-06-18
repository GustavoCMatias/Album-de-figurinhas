import { useContext, useEffect, useState } from 'react'
import { Dashboard, Rodape } from '@/components/Dashboard'
import { UserData } from '@/contexts/userContext'
import apiAlbum from '@/services/apiAlbum'
import { useRouter } from 'next/router'
import { albunsData } from '@/contexts/albumContext'
import { NewAlbum } from '@/components/homeComponents'

export default function newAlbum() {
    const { userInfo } = useContext(UserData)
    const { myAlbunsInfo } = useContext(albunsData)
    const [Albuns, setAlbuns] = useState([])

    const router = useRouter();

    useEffect(() => {
        if (!userInfo) { router.push('/') }
        else {
            apiAlbum.getAllAlbuns(userInfo.token)
                .then((res) => {
                    setAlbuns(res.data)


                })
                .catch((err) => {
                    console.log(err.response);
                });
        }


    }, [])
    return (
        <>
            <Dashboard />
            <div className='flex flex-col justify-center h-full w-full min-h-screen items-left heropattern-temple-gray-600/10 sm:pl-14 pt-[10%] sm:h-full'>
                <p className='text-3xl text-black font-bold mb-20 mt-12 mx-auto sm:mx-0 sm:mt-0'>Escolha um álbum para começar!</p>
                <div className='flex flex-wrap w-11/12 invisible-scrollbar  mb-12 flex-col mx-auto sm:flex-row sm:w-auto sm:mx-0 sm:h-3/6 '>
                    {Albuns.map((item, index) => {
                        return (
                            <NewAlbum index={index} item={item} key={index} myAlbunsInfo={myAlbunsInfo}/>
                        )


                    })}


                </div>
            </div>


        </>
    )
}
