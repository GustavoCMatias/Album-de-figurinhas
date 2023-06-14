import { Dashboard } from "@/components/Dashboard";
import { UserData } from "@/contexts/userContext";
import apiAlbum from "@/services/apiAlbum";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const sampleResponse = {
    "id": 17,
    "createdAt": "2023-06-07T14:22:48.463Z",
    "updatedAt": "2023-06-08T14:59:50.019Z",
    "name": "Copa Brasil 76",
    "cover": "http://www.bdportugal.info/Comics/Col/Cromo_BD/Panini_SpiderMan/icon/1.jpg",
    "Pages": [
        {
            "id": 54,
            "createdAt": "2023-06-07T14:22:48.476Z",
            "updatedAt": "2023-06-07T14:22:48.476Z",
            "albumid": 17,
            "pageNumber": 1,
            "title": "Japanese Bobtail",
            "color": "#111ebb",
            "Figurinhas": [
                {
                    "id": 627,
                    "createdAt": "2023-06-07T14:22:48.482Z",
                    "updatedAt": "2023-06-07T14:22:48.482Z",
                    "pageId": 54,
                    "figurinhaNumber": 1,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 628,
                    "createdAt": "2023-06-07T14:22:48.487Z",
                    "updatedAt": "2023-06-07T14:22:48.487Z",
                    "pageId": 54,
                    "figurinhaNumber": 2,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 629,
                    "createdAt": "2023-06-07T14:22:48.491Z",
                    "updatedAt": "2023-06-07T14:22:48.491Z",
                    "pageId": 54,
                    "figurinhaNumber": 3,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 630,
                    "createdAt": "2023-06-07T14:22:48.495Z",
                    "updatedAt": "2023-06-07T14:22:48.495Z",
                    "pageId": 54,
                    "figurinhaNumber": 4,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 631,
                    "createdAt": "2023-06-07T14:22:48.500Z",
                    "updatedAt": "2023-06-07T14:22:48.500Z",
                    "pageId": 54,
                    "figurinhaNumber": 5,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 632,
                    "createdAt": "2023-06-07T14:22:48.503Z",
                    "updatedAt": "2023-06-07T14:22:48.503Z",
                    "pageId": 54,
                    "figurinhaNumber": 6,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 633,
                    "createdAt": "2023-06-07T14:22:48.507Z",
                    "updatedAt": "2023-06-07T14:22:48.507Z",
                    "pageId": 54,
                    "figurinhaNumber": 7,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 634,
                    "createdAt": "2023-06-07T14:22:48.511Z",
                    "updatedAt": "2023-06-07T14:22:48.511Z",
                    "pageId": 54,
                    "figurinhaNumber": 8,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 635,
                    "createdAt": "2023-06-07T14:22:48.514Z",
                    "updatedAt": "2023-06-07T14:22:48.514Z",
                    "pageId": 54,
                    "figurinhaNumber": 9,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 636,
                    "createdAt": "2023-06-07T14:22:48.517Z",
                    "updatedAt": "2023-06-07T14:22:48.517Z",
                    "pageId": 54,
                    "figurinhaNumber": 10,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 637,
                    "createdAt": "2023-06-07T14:22:48.520Z",
                    "updatedAt": "2023-06-07T14:22:48.520Z",
                    "pageId": 54,
                    "figurinhaNumber": 11,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 638,
                    "createdAt": "2023-06-07T14:22:48.523Z",
                    "updatedAt": "2023-06-07T14:22:48.523Z",
                    "pageId": 54,
                    "figurinhaNumber": 12,
                    "image": "",
                    "name": "",
                    "description": ""
                }
            ]
        },
        {
            "id": 55,
            "createdAt": "2023-06-07T14:22:48.526Z",
            "updatedAt": "2023-06-07T14:22:48.526Z",
            "albumid": 17,
            "pageNumber": 2,
            "title": "Pixiebob",
            "color": "#5ddc8b",
            "Figurinhas": [
                {
                    "id": 639,
                    "createdAt": "2023-06-07T14:22:48.530Z",
                    "updatedAt": "2023-06-07T14:22:48.530Z",
                    "pageId": 55,
                    "figurinhaNumber": 13,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 640,
                    "createdAt": "2023-06-07T14:22:48.534Z",
                    "updatedAt": "2023-06-07T14:22:48.534Z",
                    "pageId": 55,
                    "figurinhaNumber": 14,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 641,
                    "createdAt": "2023-06-07T14:22:48.537Z",
                    "updatedAt": "2023-06-07T14:22:48.537Z",
                    "pageId": 55,
                    "figurinhaNumber": 15,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 642,
                    "createdAt": "2023-06-07T14:22:48.540Z",
                    "updatedAt": "2023-06-07T14:22:48.540Z",
                    "pageId": 55,
                    "figurinhaNumber": 16,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 643,
                    "createdAt": "2023-06-07T14:22:48.543Z",
                    "updatedAt": "2023-06-07T14:22:48.543Z",
                    "pageId": 55,
                    "figurinhaNumber": 17,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 644,
                    "createdAt": "2023-06-07T14:22:48.546Z",
                    "updatedAt": "2023-06-07T14:22:48.546Z",
                    "pageId": 55,
                    "figurinhaNumber": 18,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 645,
                    "createdAt": "2023-06-07T14:22:48.549Z",
                    "updatedAt": "2023-06-07T14:22:48.549Z",
                    "pageId": 55,
                    "figurinhaNumber": 19,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 646,
                    "createdAt": "2023-06-07T14:22:48.552Z",
                    "updatedAt": "2023-06-07T14:22:48.552Z",
                    "pageId": 55,
                    "figurinhaNumber": 20,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 647,
                    "createdAt": "2023-06-07T14:22:48.554Z",
                    "updatedAt": "2023-06-07T14:22:48.554Z",
                    "pageId": 55,
                    "figurinhaNumber": 21,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 648,
                    "createdAt": "2023-06-07T14:22:48.557Z",
                    "updatedAt": "2023-06-07T14:22:48.557Z",
                    "pageId": 55,
                    "figurinhaNumber": 22,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 649,
                    "createdAt": "2023-06-07T14:22:48.561Z",
                    "updatedAt": "2023-06-07T14:22:48.561Z",
                    "pageId": 55,
                    "figurinhaNumber": 23,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 650,
                    "createdAt": "2023-06-07T14:22:48.563Z",
                    "updatedAt": "2023-06-07T14:22:48.563Z",
                    "pageId": 55,
                    "figurinhaNumber": 24,
                    "image": "",
                    "name": "",
                    "description": ""
                }
            ]
        },
        {
            "id": 56,
            "createdAt": "2023-06-07T14:22:48.566Z",
            "updatedAt": "2023-06-07T14:22:48.566Z",
            "albumid": 17,
            "pageNumber": 3,
            "title": "Persian",
            "color": "#ee8beb",
            "Figurinhas": [
                {
                    "id": 651,
                    "createdAt": "2023-06-07T14:22:48.569Z",
                    "updatedAt": "2023-06-07T14:22:48.569Z",
                    "pageId": 56,
                    "figurinhaNumber": 25,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 652,
                    "createdAt": "2023-06-07T14:22:48.572Z",
                    "updatedAt": "2023-06-07T14:22:48.572Z",
                    "pageId": 56,
                    "figurinhaNumber": 26,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 653,
                    "createdAt": "2023-06-07T14:22:48.575Z",
                    "updatedAt": "2023-06-07T14:22:48.575Z",
                    "pageId": 56,
                    "figurinhaNumber": 27,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 654,
                    "createdAt": "2023-06-07T14:22:48.577Z",
                    "updatedAt": "2023-06-07T14:22:48.577Z",
                    "pageId": 56,
                    "figurinhaNumber": 28,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 655,
                    "createdAt": "2023-06-07T14:22:48.580Z",
                    "updatedAt": "2023-06-07T14:22:48.580Z",
                    "pageId": 56,
                    "figurinhaNumber": 29,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 656,
                    "createdAt": "2023-06-07T14:22:48.583Z",
                    "updatedAt": "2023-06-07T14:22:48.583Z",
                    "pageId": 56,
                    "figurinhaNumber": 30,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 657,
                    "createdAt": "2023-06-07T14:22:48.585Z",
                    "updatedAt": "2023-06-07T14:22:48.585Z",
                    "pageId": 56,
                    "figurinhaNumber": 31,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 658,
                    "createdAt": "2023-06-07T14:22:48.589Z",
                    "updatedAt": "2023-06-07T14:22:48.589Z",
                    "pageId": 56,
                    "figurinhaNumber": 32,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 659,
                    "createdAt": "2023-06-07T14:22:48.592Z",
                    "updatedAt": "2023-06-07T14:22:48.592Z",
                    "pageId": 56,
                    "figurinhaNumber": 33,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 660,
                    "createdAt": "2023-06-07T14:22:48.595Z",
                    "updatedAt": "2023-06-07T14:22:48.595Z",
                    "pageId": 56,
                    "figurinhaNumber": 34,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 661,
                    "createdAt": "2023-06-07T14:22:48.598Z",
                    "updatedAt": "2023-06-07T14:22:48.598Z",
                    "pageId": 56,
                    "figurinhaNumber": 35,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 662,
                    "createdAt": "2023-06-07T14:22:48.601Z",
                    "updatedAt": "2023-06-07T14:22:48.601Z",
                    "pageId": 56,
                    "figurinhaNumber": 36,
                    "image": "",
                    "name": "",
                    "description": ""
                }
            ]
        },
        {
            "id": 57,
            "createdAt": "2023-06-07T14:22:48.603Z",
            "updatedAt": "2023-06-07T14:22:48.603Z",
            "albumid": 17,
            "pageNumber": 4,
            "title": "Devon Rex",
            "color": "#ebeaab",
            "Figurinhas": [
                {
                    "id": 663,
                    "createdAt": "2023-06-07T14:22:48.606Z",
                    "updatedAt": "2023-06-07T14:22:48.606Z",
                    "pageId": 57,
                    "figurinhaNumber": 37,
                    "image": "https://loremflickr.com/640/480?lock=6859974351257600",
                    "name": "Bighead carp",
                    "description": "Ipsam nemo rerum deserunt magnam eligendi eaque quam cupiditate. Hic quos hic adipisci architecto quam aut eum nobis deserunt. Velit vitae libero. Nihil iste ea deleniti voluptas consectetur nisi unde. Aliquid dolorum eos eaque nulla accusamus quae neque qui. Suscipit reiciendis corporis ipsa quidem consequatur non fugit a reprehenderit."
                },
                {
                    "id": 664,
                    "createdAt": "2023-06-07T14:22:48.608Z",
                    "updatedAt": "2023-06-07T14:22:48.608Z",
                    "pageId": 57,
                    "figurinhaNumber": 38,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 665,
                    "createdAt": "2023-06-07T14:22:48.611Z",
                    "updatedAt": "2023-06-07T14:22:48.611Z",
                    "pageId": 57,
                    "figurinhaNumber": 39,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 666,
                    "createdAt": "2023-06-07T14:22:48.614Z",
                    "updatedAt": "2023-06-07T14:22:48.614Z",
                    "pageId": 57,
                    "figurinhaNumber": 40,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 667,
                    "createdAt": "2023-06-07T14:22:48.616Z",
                    "updatedAt": "2023-06-07T14:22:48.616Z",
                    "pageId": 57,
                    "figurinhaNumber": 41,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 668,
                    "createdAt": "2023-06-07T14:22:48.619Z",
                    "updatedAt": "2023-06-07T14:22:48.619Z",
                    "pageId": 57,
                    "figurinhaNumber": 42,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 669,
                    "createdAt": "2023-06-07T14:22:48.622Z",
                    "updatedAt": "2023-06-07T14:22:48.622Z",
                    "pageId": 57,
                    "figurinhaNumber": 43,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 670,
                    "createdAt": "2023-06-07T14:22:48.624Z",
                    "updatedAt": "2023-06-07T14:22:48.624Z",
                    "pageId": 57,
                    "figurinhaNumber": 44,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 671,
                    "createdAt": "2023-06-07T14:22:48.627Z",
                    "updatedAt": "2023-06-07T14:22:48.627Z",
                    "pageId": 57,
                    "figurinhaNumber": 45,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 672,
                    "createdAt": "2023-06-07T14:22:48.630Z",
                    "updatedAt": "2023-06-07T14:22:48.630Z",
                    "pageId": 57,
                    "figurinhaNumber": 46,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 673,
                    "createdAt": "2023-06-07T14:22:48.632Z",
                    "updatedAt": "2023-06-07T14:22:48.632Z",
                    "pageId": 57,
                    "figurinhaNumber": 47,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 674,
                    "createdAt": "2023-06-07T14:22:48.635Z",
                    "updatedAt": "2023-06-07T14:22:48.635Z",
                    "pageId": 57,
                    "figurinhaNumber": 48,
                    "image": "",
                    "name": "",
                    "description": ""
                }
            ]
        },
        {
            "id": 58,
            "createdAt": "2023-06-07T14:22:48.638Z",
            "updatedAt": "2023-06-07T14:22:48.638Z",
            "albumid": 17,
            "pageNumber": 5,
            "title": "Birman",
            "color": "#0c3db8",
            "Figurinhas": [
                {
                    "id": 676,
                    "createdAt": "2023-06-07T14:22:48.644Z",
                    "updatedAt": "2023-06-07T14:22:48.644Z",
                    "pageId": 58,
                    "figurinhaNumber": 50,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 675,
                    "createdAt": "2023-06-07T14:22:48.642Z",
                    "updatedAt": "2023-06-07T14:22:48.642Z",
                    "pageId": 58,
                    "figurinhaNumber": 49,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 677,
                    "createdAt": "2023-06-07T14:22:48.647Z",
                    "updatedAt": "2023-06-07T14:22:48.647Z",
                    "pageId": 58,
                    "figurinhaNumber": 51,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 678,
                    "createdAt": "2023-06-07T14:22:48.650Z",
                    "updatedAt": "2023-06-07T14:22:48.650Z",
                    "pageId": 58,
                    "figurinhaNumber": 52,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 679,
                    "createdAt": "2023-06-07T14:22:48.653Z",
                    "updatedAt": "2023-06-07T14:22:48.653Z",
                    "pageId": 58,
                    "figurinhaNumber": 53,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 680,
                    "createdAt": "2023-06-07T14:22:48.656Z",
                    "updatedAt": "2023-06-07T14:22:48.656Z",
                    "pageId": 58,
                    "figurinhaNumber": 54,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 681,
                    "createdAt": "2023-06-07T14:22:48.659Z",
                    "updatedAt": "2023-06-07T14:22:48.659Z",
                    "pageId": 58,
                    "figurinhaNumber": 55,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 682,
                    "createdAt": "2023-06-07T14:22:48.662Z",
                    "updatedAt": "2023-06-07T14:22:48.662Z",
                    "pageId": 58,
                    "figurinhaNumber": 56,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 683,
                    "createdAt": "2023-06-07T14:22:48.665Z",
                    "updatedAt": "2023-06-07T14:22:48.665Z",
                    "pageId": 58,
                    "figurinhaNumber": 57,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 684,
                    "createdAt": "2023-06-07T14:22:48.668Z",
                    "updatedAt": "2023-06-07T14:22:48.668Z",
                    "pageId": 58,
                    "figurinhaNumber": 58,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 685,
                    "createdAt": "2023-06-07T14:22:48.671Z",
                    "updatedAt": "2023-06-07T14:22:48.671Z",
                    "pageId": 58,
                    "figurinhaNumber": 59,
                    "image": "",
                    "name": "",
                    "description": ""
                },
                {
                    "id": 686,
                    "createdAt": "2023-06-07T14:22:48.674Z",
                    "updatedAt": "2023-06-07T14:22:48.674Z",
                    "pageId": 58,
                    "figurinhaNumber": 60,
                    "image": "",
                    "name": "",
                    "description": ""
                }
            ]
        }
    ]
}
export default function Album() {
    const { userInfo } = useContext(UserData)
    const router = useRouter();
    const [album, setAlbum] = useState([]);

    const { id } = router.query

    useEffect(() => {
        console.log(sampleResponse.Pages[3].Figurinhas.length / 2 + 1)
        console.log(sampleResponse.Pages[3].Figurinhas.slice(0, Math.floor(sampleResponse.Pages[3].Figurinhas.length / 2)))
        if (!userInfo) { router.push('/') }
        else {
            apiAlbum.getSpecificAlbum(id, userInfo.token)
                .then((res) => {
                    setAlbum(res.data)
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }

    }, [])

    return (
        <>
            <Dashboard />
            <div className='h-screen w-screen heropattern-temple-gray-600/10 max-pt-6 flex justify-center items-center'>
                <div className={`bg-red-300 w-5/12 h-[90%] pl-[1%]`}>
                    <p className='text-4xl text-black font-bold ml-16 pt-[2%] mb-14'> {sampleResponse.Pages[3].title} </p>
                    <div className="flex flex-wrap h-[90%] max-h-full max-w-full">
                        {sampleResponse.Pages[3].Figurinhas.slice(0, Math.floor(sampleResponse.Pages[3].Figurinhas.length / 2)).map((item) => {
                            return (
                                <>
                                    {item.image === '' ?
                                        <div className="h-[30%] w-[27%] bg-slate-500 border-zinc-950 border mr-7">
                                            <p className='text-4xl text-black font-bold'> {item.figurinhaNumber} </p>
                                        </div> :
                                        <img
                                            src={item.image}
                                            alt="Album Photo"
                                            className='h-[30%] mr-7 max-w-[27%]'
                                        />}

                                </>
                            )


                        })}
                    </div>

                </div>
                <div className="h-[90%] border border-black"></div>
                <div className={`bg-red-300 w-5/12 h-[90%] pl-[1%]`}>
                <p className='text-4xl text-black font-bold ml-16 pt-[2%] mb-14'> {sampleResponse.Pages[3].title} </p>
                    <div className="flex flex-wrap h-[90%] max-h-full max-w-full ">
                        {sampleResponse.Pages[3].Figurinhas.slice(Math.floor(sampleResponse.Pages[3].Figurinhas.length / 2, sampleResponse.Pages[3].Figurinhas.length)).map((item) => {
                            return (
                                <>
                                    {item.image === '' ?
                                        <div className="h-[30%] w-[27%] bg-slate-500 border-zinc-950 border mr-7 flex items-center justify-center">
                                            <p className='text-4xl text-black font-bold'> {item.figurinhaNumber} </p>
                                        </div> :
                                        <img
                                            src={item.image}
                                            alt="Album Photo"
                                            className='h-[30%] mr-7 max-w-[27%]'
                                        />}

                                </>
                            )


                        })}
                    </div>
                </div>
            </div>
        </>
    )
}