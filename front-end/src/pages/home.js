import { useContext, useEffect, useState } from 'react'
import { Dashboard, Rodape } from '@/components/Dashboard'
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
            <Rodape/>
            <div className='flex flex-col justify-between h-full w-full items-left pt-0 heropattern-temple-gray-600/10 sm:pl-14 sm:pt-10 sm:h-screen'> {/* remove pl14 chaneg pt-10 -> pt0, h-screen->h-full*/}
                <p className='text-3xl text-black font-bold mb-7 mt-24 mx-auto sm:mx-0'>Meus Albuns</p>         {/* add mx-auto */}
                <div className='flex w-11/12 invisible-scrollbar  mb-12 flex-col mx-auto sm:flex-row sm:w-auto sm:mx-0 sm:h-3/6 sm:overflow-x-auto'>    {/* sadd flex-col w-11/12 mx-auto rem h-3/6 overflow-x-auto*/}
                    {myAlbuns.map((item, index) => {
                        return (
                            <div key={index} className='flex-container flex flex-col justify-between items-center mx-auto h-full 
                            min-w-fit bg-gray-100 pb-4 border border-gray-500 hover:shadow-xl hover:shadow-black mb-10 sm:mr-5 sm:mx-0 sm:pb-4 sm:mb-0'> {/* rem: mr-5 add: margin-auto, mb-10  change: pb7->pb4*/}
                                <img                                     
                                    src={item.cover}
                                    alt="Album Photo"
                                    className='w-full min-h-min object-contain sm:w-auto sm:h-3/4'
                                />   {/* change h-3/4 ->w-full  */}
                                <p className='text-lg mx-auto my-2 sm:my-0'>{item.name}</p> {/* add my-2  */}
                                <div className="w-[90%] bg-gray-400 dark:bg-gray-900">
                                    <div className={`w-[${Math.ceil(item.owned_figurinhas/item.total_figurinhas * 100)}%] bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none`} > {Math.round(item.owned_figurinhas/item.total_figurinhas * 10000) / 100}%</div>
                                </div>

                            </div>
                        )


                    })}
                </div>

                <div className='hidden sm:flex' >
                    <button className='w-80 h-16 bg-green-500 rounded-xl text-xl text-black font-bold mb-12 mr-7'>Comprar Figurinhas</button>
                    <button className='w-80 h-16 bg-green-500 rounded-xl text-xl text-black font-bold mb-12'>Começar um novo álbum</button>
                </div>
            </div>


        </>
    )
}
