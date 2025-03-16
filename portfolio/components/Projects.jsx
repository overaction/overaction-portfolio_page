import React from 'react'
import keep0Img from '../public/assets/projects/keep/keep0.png'
import keep1Img from '../public/assets/projects/keep/keep1.png'
import keep2Img from '../public/assets/projects/keep/keep2.png'
import ins1 from '../public/assets/projects/1.png'
import ins2 from '../public/assets/projects/2.png'
import ins3 from '../public/assets/projects/3.png'
import ins4 from '../public/assets/projects/4.png'
import ins5 from '../public/assets/projects/5.png'
import ins6 from '../public/assets/projects/6.png'
import pyAssets1 from '../public/assets/projects/galag/back1.png'
import pyAssets2 from '../public/assets/projects/galag/game1.png'
import pyAssets3 from '../public/assets/projects/galag/boss.png'
import pyAssets4 from '../public/assets/projects/galag/galaggif.gif'
import { BiCodeAlt } from 'react-icons/bi'
import ImageSlider from './tools/ImageSlider'
import ImageSlider_info from './tools/ImageSlider_info'
const Projects = () => {
    const slides0 = [pyAssets4, pyAssets3, pyAssets1]
    const slides1 = [ins1, ins3, ins4]
    const slides2 = [keep1Img, keep2Img]
    return (
        <div id="projects" className="w-full p-20 lg:h-screen">
            <div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col items-center justify-center">
                <h1 className="text-center inline-block border-b-4 border-gray-300 py-2 mb-12">
                    수상 기록
                </h1>
                {/* 2 */}
                <div className="flex items-center justify-center gap-8 sm:m-auto">
                    <div className="flex items-center flex-col h-auto w-auto shadow-xl shadow-gray-400 rounded-xl p-10 lg:flex-row ">
                        
                        <div className="p-10 lg:w-[1000px]">
                            <h3 className="text-2xl mb-10 leading-10 tracking-wider text-center">
                                택배 운송장 암호화 서비스 <br />
                                Info-keeper
                            </h3>
                            <h1 className="text-3xl mb-4 text-center">
                                Description
                            </h1>
                            <div className="mb-4 font-sans leading-7">
                                <span>
                                    택배 운송장을 악용한 범죄를
                                    예방하기 위해 만든 솔루션 입니다.
                                </span> <br/>
                                개인정보를 노출시키지 않도록{' '}
                                <span className="font-bold">
                                    Google Qrcode generator
                                </span>
                                를 활용하였고 개인정보는 인증된 사용자에게만 제공됩니다.
                                <p className="mt-4"></p>
                                내부적으로 높은 보안성을 유지하기 위해,{' '}
                                <span className="font-bold">
                                    AES 대칭키 알고리즘에 의해 개인정보가 DB에 저장되며, 
                                    AWS KMS, Lambda, Api gateway 서비스를 활용하여 봉투 암호화 방식으로 암호화된 API를
                                    구현했습니다.
                                </span>
                                <p className="border-b-2 p-2 border-gray-400"></p>
                                <div className="flex font-bold text-2xl mt-8">
                                    <BiCodeAlt size={35} />
                                    <p className="ml-2">기술 스택</p>
                                </div>
                                <ul className="pt-4 list-disc ml-7">
                                    <li>
                                        React, React Hooks, React Router,
                                        PostCSS
                                    </li>
                                    <li>
                                        Firebase - Authentication,
                                        RealtimeDatabase
                                    </li>
                                    <li>Google Qrcode Generator</li>
                                    <li>
                                        CryptoJS, AWS KMS, AWS Lambda, AWS
                                        API-gateway
                                    </li>
                                </ul>
                                <p className="font-bold mt-8 text-center">
                                    2021 겨울 융합 페어 Farm
                                    경진대회 <br />
                                    <span className="text-orange-500">
                                        최우수상(1위)
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-8 sm:m-auto">
                    <div className="flex items-center flex-col h-auto w-auto shadow-xl shadow-gray-400 rounded-xl p-10 lg:flex-row ">
                        <div className="p-10 lg:w-[500px]">
                            <h3 className="text-2xl mb-10 leading-10 tracking-wider text-center">
                                2021 교내 알고리즘 경진대회 <br />
                            </h3>
                            <p className="border-b-2 mb-8 border-gray-400"></p>
                            <div className="flex font-bold text-2xl mt-8">
                                    <BiCodeAlt size={35} />
                                    <p className="ml-2">알고리즘</p>
                                </div>
                                <ul className="pt-4 list-disc ml-7">
                                    <li>
                                        BFS DFS
                                    </li>
                                    <li>
                                        Dynamic Programming
                                    </li>
                                    <li>Sort Algorithm</li>
                                </ul>
                            <h1 className="text-3xl mt-8 text-center">
                                Result
                            </h1>
                            <div className="mb-4 font-sans leading-7">
                                <p className="font-bold mt-8 text-center">
                                    2021 교내 프로그래밍
                                    경진대회 <br />
                                    <span className="text-orange-500">
                                        장려상(5위)
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* python */}
                {/* <div className="flex items-center justify-center gap-8 sm:m-auto">
                    <div className="flex items-center flex-col h-auto w-auto shadow-xl shadow-gray-400 rounded-xl p-10 lg:flex-row ">
                        <ImageSlider slides={slides0} />
                        <div className="p-10 lg:w-[1000px]">
                            <h3 className="text-2xl mb-10 leading-10 tracking-wider text-center">
                                GALAG2.0
                                <br />
                            </h3>
                            <h1 className="text-3xl mb-4 text-center">
                                Description
                            </h1>
                            <div className="mb-4 font-sans leading-7">
                                <span className="font-bold">
                                    파이썬을 공부하며 갤러그와 비슷한 게임을
                                    구현해본 프로젝트입니다. <br /> {}
                                </span>
                                적, 아이템, 체력, 운석 등을 클래스화 하여
                                구현했고 <br />
                                스테이지에 따른 난이도 조정, 각종 아이템 흭득
                                효과, 보스몬스터 등의 <br />
                                기능을 구현했습니다.
                                <p className="mt-4"></p>
                                <p className="border-b-2 p-2 border-gray-400"></p>
                                <div className="flex font-bold text-2xl mt-8">
                                    <BiCodeAlt size={35} />
                                    <p className="ml-2">사용한 기술</p>
                                </div>
                                <ul className="pt-4 list-disc ml-7">
                                    <li>Python, Pygame</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects
