import { useContext, useEffect, useState } from 'react'
import { Dashboard } from '@/components/Dashboard'
import { UserData } from '@/contexts/context'
import apiAlbum from '@/services/apiAlbum'

export default function Home2() {
    const {userInfo} = useContext(UserData)
    const [myAlbuns, setMyAlbuns] = useState([])

    useEffect(() => {
        
        apiAlbum.getMyAlbuns(userInfo.token)
        .then((res) => {
            console.log(res.data)
            setMyAlbuns(res.data)
          })
          .catch((err) => {
            console.log(err.response);
          });
    },[])
    return (
        <>
            <Dashboard />
            <div className='flex flex-col justify-between h-screen w-full items-left pl-14 pt-10 heropattern-temple-gray-600/10'>
                <p className='text-3xl text-black font-bold mb-7 mt-24'>Meus Albuns</p>
                <div className='flex h-3/6 overflow-x-auto invisible-scrollbar'>
                    {myAlbuns.map((item, index) => {
                        return (
                            <div key={index} className='flex-container flex flex-col justify-between items-center mr-5 h-full 
                            min-w-fit bg-gray-100 pb-7 border border-gray-500 hover:shadow-xl hover:shadow-black'>
                                <img
                                    src={item.cover}
                                    alt="Album Photo"
                                    className='h-3/4 min-h-min object-contain'
                                />
                                <p className='text-lg mx-auto'>{item.name}</p>
                                <div className="w-[90%] bg-gray-400 dark:bg-gray-900">
                                    <div className={`w-[${Math.ceil(item.owned_figurinhas/item.total_figurinhas * 100)}%] bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none`} > {Math.round(item.owned_figurinhas/item.total_figurinhas * 10000) / 100}%</div>
                                </div>

                            </div>
                        )


                    })}
                </div>

                <div className='flex'>
                    <button className='w-80 h-16 bg-green-500 rounded-xl text-xl text-black font-bold mb-12 mr-7'>Comprar Figurinhas</button>
                    <button className='w-80 h-16 bg-green-500 rounded-xl text-xl text-black font-bold mb-12'>Começar um novo álbum</button>
                </div>
            </div>


        </>
    )
}
