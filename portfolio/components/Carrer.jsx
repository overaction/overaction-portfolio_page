import Image from 'next/image'
import React from 'react'
import { BiChevronsRight } from 'react-icons/bi'
import { BsFillCircleFill } from 'react-icons/bs'
import wipsImg from '../public/assets/wips.gif'
const Carrer = () => {
    return (
        <div id='carrer' className="w-full lg:h-screen p-2">
            <div className="max-w[1240px] mx-auto flex flex-col justify-center items-center mt-16">
                <h1 className="inline-block border-b-4 border-gray-300 py-2 mb-12">
                    Career
                </h1>
                <div className="flex flex-col sm:flex-row gap-8">
                    <div className=''>
                    <div className="w-[200px] h-[200px] m-auto text-center leading-[16.5] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <Image
                            src={wipsImg}
                            width="150px"
                            height="100px"
                        />
                    </div>
                    </div>
                    <div className="flex flex-col flex-[40%] border-l-2 border-gray-300 p-6">
                        <h1 className="text-3xl mb-1">(주)윕스</h1>
                        <p className="mb-3 ml-1 text-gray-900">
                            2021.12 ~ 2022.06
                        </p>
                        <h3 className="mb-3">
                            데이터인텔리전스부 / 정보화전략팀 (인턴)
                        </h3>
                        <p className="mb-4">
                            <span className="font-bold">
                                Build CRM / Analytics
                            </span>{' '}
                            서비스의 개발 및 유지보수 업무를 담당했습니다.{' '}
                            <br />
                        </p>
                        <h2 className="text-2xl flex">
                            <BiChevronsRight size={35} />
                            기술 스택
                        </h2>
                        <p className="mb-6">
                            Javascript(Vuejs), Java(Spring boot), MSSQL, SQLite,
                            HTML, CSS, SVN
                        </p>
                        <h2 className="text-3xl flex">
                            <BiChevronsRight size={40} />
                            Build CRM
                        </h2>
                        <p className="mb-6">
                            회원들에게 제공되는 서비스들을 관리하기 위해 CRM을
                            개발하여 출시했습니다.
                            <br />
                            회원들의 상태를 관리하고 무료체험 제공, 계약된
                            서비스의 제어를 할 수 있으며
                            <br />그 외에 메일 전송, FAQ, QNA, 공지사항과 팝업을
                            한곳에서 관리할 수 있습니다.
                        </p>
                        <h2 className="text-3xl flex">
                            <BiChevronsRight size={40} />
                            Build Analytics
                        </h2>
                        <p>
                            Analytics 서비스는 사용자 스스로 데이터를 분석할 수
                            있는 서비스입니다.
                            <br />
                            데이터 치환, 데이터 분류 위젯에 새로운 기능을
                            추가하고 <br />
                            파일을 엑셀 형식으로 다운받을 수 있도록 다운로드
                            위젯을 개발하였습니다.
                            <br />
                            그 외에 프론트엔드, 백엔드에서 발생한 여러가지
                            오류사항들을 개선했습니다.
                            <br />
                            또한 개발했던 위젯에 대해 어디에서 어떤 모듈을
                            호출하는지 알아보기 쉽도록 <br />
                            위젯 흐름도를 작성하였습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrer
