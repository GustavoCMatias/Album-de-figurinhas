import { useRouter } from 'next/router';
import { FaUserFriends } from 'react-icons/fa';

export function Dashboard() {
    const router = useRouter()
    return (
        <div className="h-[12%] sm:h-1/6 max-h-24 w-full bg-white flex justify-between px-10 fixed top-0 left-0 items-center z-50 border-b-2 border-green-500 "> {/* change h-1/6 ->  h-[12%]*/}
            <p className='text-2xl sm:text-4xl text-green-500 font-bold hover:cursor-pointer' onClick={() => {router.push('/home')}}>Meu Album</p>
            <div className='flex h-full items-center'>
                <div className='hidden sm:flex'>
                    <FaUserFriends size={50} />
                </div>

                <img
                    src="/album.jpeg"
                    alt="Albun Photo"
                    className='h-2/3 rounded-full ml-7'
                />
            </div>

        </div>
    )

}

export function Rodape() {
    return (
        <div className="h-[12%] max-h-24 w-full bg-white flex justify-between px-10 fixed bottom-0 left-0 items-center z-10 border-t-2 border-green-500 sm:hidden">
            <button className='w-[45%] min-w-fit h-1/2 bg-green-500 rounded-xl text-md text-black font-bold'>Novo Álbum</button>
            <button className='w-[45%] h-1/2 bg-green-500 rounded-xl text-md text-black font-bold '> Figurinhas</button>

        </div>
    )

}