import { useContext, useEffect, useState } from 'react'
import { Dashboard, Rodape } from '@/components/Dashboard'
import { UserData } from '@/contexts/userContext'
import apiAlbum from '@/services/apiAlbum'
import { useRouter } from 'next/router'
import { albunsData } from '@/contexts/albumContext'
import { Album } from '@/components/homeComponents'

export default function Home() {
    const { userInfo } = useContext(UserData)
    const { setMyAlbunsInfo } = useContext(albunsData)
    const [myAlbuns, setMyAlbuns] = useState([])

    const router = useRouter();

    useEffect(() => {
        if (!userInfo) { router.push('/') }
        else {
            apiAlbum.getMyAlbuns(userInfo.token)
                .then((res) => {
                    setMyAlbuns(res.data)
                    setMyAlbunsInfo(res.data)
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }

    }, [])
    return (
        <>
            <Dashboard />
            <Rodape />
            <div className='flex flex-col justify-between h-full w-full items-left heropattern-temple-gray-600/10 pb-[10%] pt-[10%] sm:pl-14 sm:pb-0  sm:h-screen'> 
                <p className='text-3xl text-black font-bold mb-7 mt-12 mx-auto sm:mx-0 sm:mt-0'>Meus Albuns</p>         
                <div className='flex w-11/12 invisible-scrollbar  mb-12 flex-col mx-auto sm:flex-row sm:w-auto sm:mx-0 sm:h-3/6 sm:overflow-x-auto'>    
                    {myAlbuns.map((item, index) => {
                        const percentage = Math.ceil(item.owned_figurinhas / item.total_figurinhas * 100) + '%'
                        return (
                            <Album percentage={percentage} item={item} index={index} router={router} key={index}/>
                        )


                    })}
                </div>

                <div className='hidden sm:flex' >
                    <button className='w-80 h-16 bg-green-500 rounded-xl text-xl text-black font-bold mb-12' onClick={() => { router.push('/newAlbum') }}>Começar um novo álbum</button>
                </div>
            </div>


        </>
    )
}
