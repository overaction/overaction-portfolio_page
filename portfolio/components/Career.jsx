import Image from 'next/image'
import React from 'react'
import { BiChevronsRight } from 'react-icons/bi'
import wipsImg from '../public/assets/wips.gif'
import autoImg from '../public/assets/autoever.png'
const Career = () => {
    return (
        <div id='career' className="w-full p-20">
            <div className="max-w[1240px] mx-auto flex flex-col justify-center items-center">
                <h1 className="inline-block border-b-4 border-gray-300 py-2 mb-12">
                    Career
                </h1>
                <div className="flex flex-col sm:flex-row gap-8 ml-11">
                    <div className=''>
                    <div className="w-[200px] h-[200px] m-auto text-center leading-[16.5] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <Image
                            src={autoImg}
                            width="330px"
                            height="330px"
                        />
                    </div>
                    </div>
                    <div className="flex flex-col flex-[40%] border-l-2 border-gray-300 p-6">
                        <h1 className="text-3xl mb-1">현대오토에버</h1>
                        <p className="mb-4 ml-1 text-gray-900">
                            2022.10 ~ 
                        </p>
                        <h3 className="text-xl mb-2">
                            차량제어서비스개발팀
                        </h3>
                        <p className="text-xl mb-8 font-mono">
                            <span className='font-mono' 
                            style={{fontFamily: 'Verdana, sans-serif', fontSize: '17px'}}>
                                디지털키2, 디스플레이 테마 프로젝트의 인프라 전개를 담당했습니다. </span>{' '}
                            <br />
                        </p>
                        <h2 className="text-2xl flex">
                            <BiChevronsRight size={35} />
                            기술 스택
                        </h2>
                        <p className="mb-14 ml-2 font-mono">
                            Public Cloud(AWS), Private Cloud, Kubernetes, Docker, ArgoCD, GCR
                            <br /> 
                            Jenkins, EFK stack, Jaeger, Helm, Kustomize, RDS, MariaDB
                        </p>
                        
                        <div className="mb-6 ml-11">
                            <ul className='list-disc text-[1.1rem] mb-7'>
                            <span className='font-mono' 
                            style={{fontFamily: 'Verdana, sans-serif', fontSize: '17px'}}>
                                <span className='font-bold'>Private Cloud / AWS</span> 인프라 아키텍처 설계 및 구축
                                <br/>
                                요구사항 기반 API 스펙 정의, DB 스키마 설계
                                <br/>
                                <span className='font-bold'>Kubernetes, Nginx, LB </span> 기반 네트워크 구축
                                <br/>
                                <span className='font-bold'>Jenkins CI/CD </span> 검증, 운영 프로세스 정의 및 통합
                                <br/>
                                <span className='font-bold'>Kustomize, Helm template</span> 작성 및 <span className='font-bold'>ArgoCD, GCR</span> 배포 프로세스 구축
                                <br/>
                                <span className='font-bold'>EFK stack </span>및 <span className='font-bold'>Jaeger </span> 활용한 모니터링 체계 구축
                                <br/>
                                성능 부하테스트 진행하며 DB hikari 설정 최적화, 현지 출장 테스트 및 운영 업무 수행
                                </span>{' '}
                            <br />
                            </ul>
                        </div>
                    </div>
                </div>
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
                        <h1 className="text-3xl mb-1">윕스</h1>
                        <p className="mb-4 ml-1 text-gray-900">
                            2021.12 ~ 2022.06
                        </p>
                        <h3 className="mb-2" style={{fontSize: '18px'}}>
                            데이터인텔리전스부 / 정보화전략팀 (현장실습)
                        </h3>
                        <p className="text-xl mb-8 font-mono">
                            <span className='font-mono' 
                            style={{fontFamily: 'Verdana, sans-serif', fontSize: '17px'}}>
                                Build CRM / Analytics 서비스의 개발/출시 및 고도화 업무를 담당했습니다.</span>{' '}
                            <br />
                        </p>
                        <h2 className="text-2xl flex">
                            <BiChevronsRight size={35} />
                            기술 스택
                        </h2>
                        <p className="mb-14 ml-2 font-mono">
                            Javascript(Vuejs), Java(Spring boot), MSSQL, SQLite,
                            HTML, CSS, SVN
                        </p>
                        <h2 className="text-3xl flex mb-3">
                            <BiChevronsRight size={40} />
                            Build CRM 서비스 개발
                        </h2>
                        <div className="mb-6 ml-5">
                            <ul className='list-disc text-[1.1rem] mb-7'>
                            <span className='font-mono' 
                            style={{fontFamily: 'Verdana, sans-serif', fontSize: '17px'}}>
                                <span className='font-bold'>회원관리 : </span>  회원 등록/탈퇴 및 다중 등록, 그룹 선택 기능, 검색 필터 등 개발
                                <br/>
                                <span className='font-bold'>무료체험 : </span> 무료체험 등록/승인/거절 기능, 메일 발송 에디터 기능, 메모 기능 등 개발
                                <br/>
                                <span className='font-bold'>계약관리 : </span> 계약 내용, 계약 프로세스 및 결제 내역 등 개발
                                <br/>
                                <span className='font-bold'>주문관리 : </span> 주문 정보, 주문 상태 관리 및 상태에 따른 이메일 발송 기능 등 개발
                                <br/>
                                <span className='font-bold'>기타 : </span> API 사용 내역, 사내 공지사항/이용약관/메뉴얼 업데이트 기능 등 개발
                                <br/>
                                </span>{' '}
                            </ul>
                        </div>
                        <h2 className="text-3xl flex mb-3">
                            <BiChevronsRight size={40} />
                            Build Analytics 서비스 개발
                        </h2>
                        <div className="mb-6 ml-5">
                            <ul className='list-disc text-[1.1rem]'>
                            <span className='font-mono' 
                            style={{fontFamily: 'Verdana, sans-serif', fontSize: '17px'}}>
                                <span className='font-bold'>데이터 치환 위젯 : </span> 성능 개선, DB 저장 및 적용 버튼 활성화 시 오류 수정
                                <br/>
                                <span className='font-bold'>다운로드 위젯 : </span> : 사내 저장소 저장 기능 추가 개발
                                <br/>
                                <span className='font-bold'>데이터 분류 위젯 : </span> : 위젯 초기화 및 카테고리 편집 오류 수정, 필드 복제 기능 개발
                                
                                </span>{' '}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Career
