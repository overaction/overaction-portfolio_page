import React from 'react'
import keep0Img from '../public/assets/projects/keep0.png'
import keep1Img from '../public/assets/projects/keep1.png'
import keep2Img from '../public/assets/projects/keep2.png'
import { BiCodeAlt } from 'react-icons/bi'
import ImageSlider from './tools/ImageSlider'
const Projects = () => {
    const slides = [keep0Img, keep1Img, keep2Img]
    return (
        <div id="projects" className="w-full p-20 lg:h-screen">
            <div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col items-center justify-center">
                <h1 className="text-center inline-block border-b-4 border-gray-300 py-2 mb-12">
                    Projects
                </h1>
                <div className="flex items-center justify-center gap-8 sm:m-auto">
                    <div className="flex flex-col h-auto w-auto shadow-xl shadow-gray-400 rounded-xl p-10 lg:flex-row ">
                        <ImageSlider slides={slides} />
                        <div className="p-10">
                            <h3 className="text-2xl mb-10 leading-10 tracking-wider text-center">
                                택배 운송장 암호화 서비스 <br />
                                Info-keeper
                            </h3>
                            <h1 className="text-3xl mb-4 text-center">
                                Description
                            </h1>
                            <div className="mb-4 font-sans leading-7">
                                <span className="font-bold">
                                    택배 운송장을 악용한 범죄뉴스를 접하고 이를
                                    예방하기 위해 만든 서비스입니다.
                                </span>{' '}
                                개인정보를 노출시키지 않도록 QR코드 형태로
                                운송장에 부착되면 이는 인증된 사용자를 제외하면
                                알아볼 수 없습니다. <p className="mt-4"></p>
                                높은 보안성에 초점을 둔 프로젝트로,{' '}
                                <span className="font-bold">
                                    AES 알고리즘에 의해 DB에 저장되는 동시에 AWS
                                    KMS 서비스를 활용하여 암복호화 API를
                                    구현했습니다.
                                </span>
                                <p className="border-b-2 p-2 border-gray-400"></p>
                                <div className="flex font-bold text-2xl mt-8">
                                    <BiCodeAlt size={35} />
                                    <p className="ml-2">사용한 기술</p>
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
                                    {' '}
                                    2021 겨울 Energize Dongguk 융합 페어 Farm
                                    경진대회 <br />-{' '}
                                    <span className="text-orange-500">
                                        최우수상
                                    </span>
                                    (동국대학교 융합교육원, 대학혁신지원사업단)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
