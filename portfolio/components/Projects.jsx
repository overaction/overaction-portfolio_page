import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '../public/assets/skills/vue.png'
const Projects = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col items-center justify-center mt-20">
                <h1 className="text-center inline-block border-b-4 border-gray-300 py-2 mb-12">
                    Projects
                </h1>
                <div className="flex items-center justify-center gap-8 sm:m-auto">
                    <div className="flex flex-col h-auto w-auto shadow-xl shadow-gray-400 rounded-xl p-4 sm:flex-row ">
                        <Image className="rounded-xl" src={propertyImg} width='800px' height='800px'/>
                        <div>
                            <h3 className="text-2xl mb-4 tracking-wider text-center">
                                택배 운송장 암호화 서비스 <br/>Info-keeper
                            </h3>
                            <h1 className='text-3xl mb-4 text-center'>Description</h1>
                            <p className="mb-4">
                                택배 운송장에 기재된 개인정보를 악용한 범죄가 끊이지 않는다는 뉴스에서 아이디어를 얻어 제작한 서비스입니다.
                                개인정보를 QR코드 형태로 암호화 하여 택배기사님 또는 택배주인 외에 열람이 불가능하도록 하였고 암호화 알고리즘과 AWS를 활용하여 더욱 안전하게 정보를 보관합니다.
                                <br /> <p className='font-bold mt-4 text-center'> 2021 겨울 Energize Dongguk 융합 페어 Farm
                                경진대회 <br/>- 최우수상(동국대학교 융합교육원,
                                대학혁신지원사업단)</p>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
