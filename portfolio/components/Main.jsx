import React from 'react'
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiFillGithub,
    AiOutlineBold,
    AiOutlineMail,
} from 'react-icons/ai'

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Let's build something together
                    </p>
                    <h1 className="py-4 text-gray-700 tracking-tighter">
                        안녕하세요
                    </h1>
                    <h1 className="py-4 text-gray-700 tracking-tighter">
                        개발자 <span className="text-[#e9ab25]">김만철</span> 입니다.
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[100%] m-auto tracking-normal">
                        맡은 일에 대해 책임감을 가지고 완수하는것, <br/>
                        새로운 시도를 두려워하지 않는 것이 저의 장점입니다.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiFillGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineBold />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
