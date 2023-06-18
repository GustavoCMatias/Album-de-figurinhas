export function Album({ percentage, item, index, router }) {
    return (
        <div key={index} className='flex-container flex flex-col justify-between items-center mx-auto h-full 
                            min-w-fit bg-gray-100 pb-4 border-4 border-gray-500  hover:border-green-500 mb-10 sm:mr-5 sm:mx-0 sm:pb-4 sm:mb-0'
            onClick={() => { router.push(`/album/${item.id}`) }}>
            <img
                src={item.cover}
                alt="Album Photo"
                className='w-full min-h-min object-contain sm:w-auto sm:h-3/4'
            />
            <p className='text-lg mx-auto my-2 sm:my-0'>{item.name}</p>
            <div className="w-[90%] bg-gray-400 dark:bg-gray-900">
                <div className={`w-[--album-percentage] bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none`}
                    style={{ width: percentage }}> {Math.round(item.owned_figurinhas / item.total_figurinhas * 10000) / 100}%</div>
            </div>

        </div>
    )

}

export function NewAlbum({ item, index, myAlbunsInfo }) {
    return (
        <div key={index} className={`flex flex-container flex-col justify-between items-center mx-auto min-h-[75%]
                            bg-gray-100 pb-4 border   mb-10 sm:mr-5 sm:mx-0 sm:pb-4 relative
                            ${myAlbunsInfo.filter(e => e.id === item.id).length > 0 ? '' : 'hover:shadow-xl hover:shadow-black'}
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

}