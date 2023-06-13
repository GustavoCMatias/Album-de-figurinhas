import { useContext, useEffect, useState } from 'react'
import { Dashboard, Rodape } from '@/components/Dashboard'
import { UserData } from '@/contexts/userContext'
import apiAlbum from '@/services/apiAlbum'
import { useRouter } from 'next/router'
import { albunsData } from '@/contexts/albumContext'

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
                        return (
                            <div key={index} className='flex-container flex flex-col justify-between items-center mx-auto h-full 
                            min-w-fit bg-gray-100 pb-4 border border-gray-500 hover:shadow-xl hover:shadow-black mb-10 sm:mr-5 sm:mx-0 sm:pb-4 sm:mb-0'
                            onClick={() => {router.push(`/album/${item.id}`)}}> 
                                <img
                                    src={item.cover}
                                    alt="Album Photo"
                                    className='w-full min-h-min object-contain sm:w-auto sm:h-3/4'
                                />   
                                <p className='text-lg mx-auto my-2 sm:my-0'>{item.name}</p> 
                                <div className="w-[90%] bg-gray-400 dark:bg-gray-900">
                                    <div className={`w-[${Math.ceil(item.owned_figurinhas / item.total_figurinhas * 100)}%] bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none`} > {Math.round(item.owned_figurinhas / item.total_figurinhas * 10000) / 100}%</div>
                                </div>

                            </div>
                        )


                    })}
                </div>

                <div className='hidden sm:flex' >
                    <button className='w-80 h-16 bg-green-500 rounded-xl text-xl text-black font-bold mb-12 mr-7'>Comprar Figurinhas</button>
                    <button className='w-80 h-16 bg-green-500 rounded-xl text-xl text-black font-bold mb-12' onClick={() => { router.push('/newAlbum') }}>Começar um novo álbum</button>
                </div>
            </div>


        </>
    )
}
