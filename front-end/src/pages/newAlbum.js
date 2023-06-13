import { useContext, useEffect, useState } from 'react'
import { Dashboard, Rodape } from '@/components/Dashboard'
import { UserData } from '@/contexts/userContext'
import apiAlbum from '@/services/apiAlbum'
import { useRouter } from 'next/router'
import { albunsData } from '@/contexts/albumContext'

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
                            <div key={index} className={`flex flex-container flex-col justify-between items-center mx-auto min-h-[75%]
                            bg-gray-100 pb-4 border hover:shadow-xl hover:shadow-black mb-10 sm:mr-5 sm:mx-0 sm:pb-4 relative
                            ${myAlbunsInfo.filter(e => e.id === item.id).length > 0 ? 'border-gray-500' : 'border-green-500'}`}>
                                <div className={`h-full w-full bg-black absolute z-10 bg-opacity-40 ${myAlbunsInfo.filter(e => e.id === item.id).length > 0 ? '' : 'hidden'}`}></div>
                                <img
                                    src={item.cover}
                                    alt="Album Photo"
                                    className='min-h-min h-full'
                                />
                                <p className='text-lg mx-auto mt-4 '>{item.name}</p>
                                <p className={`text-lg mx-auto mt-4 ${myAlbunsInfo.filter(e => e.id === item.id).length > 0 ? 'text-black font-bold' : 'text-white bg-green-600 p-2 hover:cursor-pointer'}`}  >{myAlbunsInfo.filter(e => e.id === item.id).length > 0 ? 'Iniciado' : 'Começar'}</p>


                            </div>
                        )


                    })}


                </div>
            </div>


        </>
    )
}
