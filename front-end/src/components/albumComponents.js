function togglePageFlip(event) {
    if (event.target.tagName !== "IMG") {
        event.currentTarget.classList.toggle("turn");


        const clickedElement = event.currentTarget
        if (clickedElement.style.zIndex < 0) {
            event.currentTarget.style.zIndex = -event.currentTarget.style.zIndex
        } else {
            setTimeout(() => { clickedElement.style.zIndex = -clickedElement.style.zIndex }, 1000)
        }
    }
}

function toggleCoverFlip(event) {
    event.currentTarget.classList.toggle("turn");

    const clickedElement = event.currentTarget
    if (clickedElement.style.zIndex < 0) {
        event.currentTarget.style.zIndex = -event.currentTarget.style.zIndex
    } else {
        setTimeout(() => { clickedElement.style.zIndex = -clickedElement.style.zIndex }, 1000)
    }
}

export function Cover({ cover }) {
    return (
        <div class="page absolute duration-1000 flex items-end origin-right w-1/2 transition h-full transform turn"
            onClick={toggleCoverFlip}
            style={{ zIndex: 2 }}
            cover='true'>
            <div className="front bg-orange-400 h-[100%] w-full rounded-l-[4rem] flex justify-start items-center shadow-2xl absolute" >

            </div>
            <div className="back bg-orange-400 h-[100%] w-full rounded-r-[4rem] flex justify-center items-center shadow-2xl absolute" >
                <img src={cover} className={`h-[90%] w-[90%] rounded-r-[3rem]`} />
            </div>
        </div>
    )
}

export function BackCover() {
    return (
        <div class="page absolute duration-1000 flex items-end origin-right w-1/2 transition h-full transform turn"
            onClick={toggleCoverFlip}
            style={{ zIndex: -1 }}
            cover='true'>
            <div className="front bg-orange-400 h-[100%] w-full rounded-l-[4rem] flex justify-center items-center shadow-2xl absolute " >
                <p className='text-2xl sm:text-4xl text-green-500 bg-white p-7 font-bold '>Meu Album</p>
            </div>
            <div className="back bg-orange-400 h-[100%] w-full rounded-r-[4rem] flex justify-start items-center shadow-2xl absolute" >

            </div>
        </div>
    )
}

export function Page({ each, index, album, setDisplay, setFigInfo }) {
    return (
        <div class={`page  absolute duration-1000 flex items-end origin-right w-1/2 transition h-full transform turn `}
            data-page={index}
            onClick={togglePageFlip}
            style={{ zIndex: -index - 1 }}> {/*Pagina*/}
            <div className={`front shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] bg-yellow-50 w-full h-full pl-[5%] rounded-l-[3rem] absolute right-0`}> {/*frente*/}

                <p className='text-4xl text-black font-bold ml-16 pt-[2%] mb-14'> {each.title} </p>
                <div className="flex flex-wrap h-[90%] max-h-full max-w-full">
                    {each.Figurinhas.slice(0, Math.floor(each.Figurinhas.length / 2)).map((item) => {
                        return (
                            <Figurinha figurinha={item} key={item.index} setDisplay={setDisplay} setFigInfo={setFigInfo} />
                        )


                    })}
                </div>



            </div>
            <div className={`back shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] bg-yellow-50 w-full h-full pl-[5%] rounded-r-[3rem] absolute`}> {/*verso*/}
                {index === 0 ?
                    <div className="m-auto flex justify-center h-full items-center">
                        <p className="text-4xl text-black font-bold">Álbum &nbsp;</p>
                        <p className="text-4xl text-green-500 font-bold">{album.name}</p>
                    </div> :
                    <>
                        <p className='text-4xl text-black font-bold ml-16 pt-[2%] mb-14'> {album.Pages[index - 1].title} </p>
                        <div className="flex flex-wrap h-[90%] max-h-full max-w-full ">
                            {album.Pages[index - 1].Figurinhas.slice(Math.floor(album.Pages[index - 1].Figurinhas.length / 2, album.Pages[index - 1].Figurinhas.length)).map((item) => {
                                return (
                                    <Figurinha figurinha={item} key={item.index} setDisplay={setDisplay} setFigInfo={setFigInfo} />
                                )
                            })}
                        </div>
                    </>
                }


            </div>
        </div>
    )
}
export function LastPage({ pages, setDisplay, setFigInfo }) {
    return (
        <div class={`page  absolute duration-1000 flex items-end origin-right w-1/2 transition h-full transform turn `}
            onClick={togglePageFlip}
            style={{ zIndex: -pages.length - 1 }}> {/*Pagina*/}
            <div className={`front shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] bg-yellow-50
                            w-full h-full pl-[5%] rounded-l-[3rem] absolute right-0 flex justify-center items-center`}> {/*frente*/}
                <button className="bg-green-500 w-[50%] h-[20%] text-4xl text-black font-bold hover:border-green-950 "> Comprar Figurinhas </button>
            </div>
            <div className={`back shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] bg-yellow-50 w-full h-full pl-[5%] rounded-r-[3rem] absolute`}> {/*verso*/}
                <p className='text-4xl text-black font-bold ml-16 pt-[2%] mb-14'> {pages[pages.length - 1].title} </p>
                <div className="flex flex-wrap h-[90%] max-h-full max-w-full ">
                    {!pages ? '' :
                        pages[pages.length - 1].Figurinhas.slice(Math.floor(pages[pages.length - 1].Figurinhas.length / 2, pages[pages.length - 1].Figurinhas.length)).map((item) => {
                            return (
                                <Figurinha figurinha={item} key={item.index} setDisplay={setDisplay} setFigInfo={setFigInfo} />
                            )


                        })}
                </div>


            </div>
        </div>
    )
}

function Figurinha({ figurinha, setDisplay, setFigInfo }) {
    function handleClick() {
        setDisplay(true)
        setFigInfo({
            name: figurinha.name,
            image: figurinha.image,
            description: figurinha.description
        })
    }
    return (
        <>
            {figurinha.image === '' ?
                <div className="h-[30%] w-[27%] bg-slate-300 border-zinc-950 border mr-7 flex items-center justify-center ">
                    <p className='text-4xl text-black font-bold'> {figurinha.figurinhaNumber} </p>
                </div> :
                <img
                    src={figurinha.image}
                    alt="Album Photo"
                    className='h-[30%] mr-7 max-w-[27%] hover:shadow-xl hover:shadow-black'
                    onClick={handleClick}
                />}

        </>
    )
}

export function FigurinhaInfo({ name, image, description, display, setDisplay }) {
    const handleClick = (event) => {
        setDisplay(false)
    };
    return (
        <div className={`w-full h-full z-10 absolute backdrop-filter backdrop-blur flex items-center
                      bg-green-900 bg-opacity-60 ${display ? '' : 'hidden'}`} onClick={handleClick} >
            <div className="w-2/3 h-5/6 min-h-min sm:h-3/4 m-auto rounded-3xl flex opacity-100">
                <div className="w-1/2 flex justify-center items-center">
                    <img src={image} className='max-w-[90%] max-h-[80%]' />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-start">
                    <p className="text-5xl text-white font-bold mb-10">{name}</p>
                    <p className="text-xl text-white">{description}</p>
                </div>
            </div>
        </div>)
}