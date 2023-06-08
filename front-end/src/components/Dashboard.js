import {FaUserFriends} from 'react-icons/fa';

export function Dashboard(){
    return(
        <div className="h-1/6 max-h-24 w-full bg-white flex justify-between px-10 fixed top-0 left-0 items-center z-10">
        <p className='text-4xl text-green-500 font-bold '>Meu Album</p>
        <div className='flex h-full items-center'>
            <FaUserFriends size={50}/>
            <img
            src="/album.jpeg"
            alt="Albun Photo"
            className='h-2/3 rounded-full ml-7'
          />
        </div>
        
    </div>
    )
    
}