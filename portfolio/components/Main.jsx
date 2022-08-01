import React from 'react'
import { AiFillGithub, AiOutlineBold } from 'react-icons/ai'

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
                        개발자 <span className="text-[#e9ab25]">김만철</span>{' '}
                        입니다.
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[100%] m-auto tracking-normal">
                        맡은 일에 대해 책임감을 가지고 완수하는것, <br />
                        새로운 시도를 두려워하지 않는 것이 저의 장점입니다.
                    </p>
                    <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">깃허브</p>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <a
                                    href="https://github.com/overaction"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillGithub />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">블로그</p>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <a
                                    href="https://tistoryaction.tistory.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiOutlineBold />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
