import React from 'react'
import { CgProfile } from 'react-icons/cg'
import {BsFillCalendarFill} from 'react-icons/bs'
import {IoMdCall} from 'react-icons/io'
import {
    AiOutlineMail,
} from 'react-icons/ai'
const About = () => {
    return (
        <div id='about' className="w-full  p-2 flex items-center text-center">
                <div className="w-full flex justify-center items-center flex-col">
                    <h1 className="inline-block border-b-4 border-gray-300 py-2 mb-12">
                        About Me
                    </h1>
                    <ul className="flex flex-wrap justify-center items-center flex-col sm:flex-row  gap-8">
                        <li className='flex w-[100%] sm:w-8 flex-[40%] mt-3 pl-14 pb-8'>
                            <div>
                                <CgProfile size={25}/>
                            </div>
                            <div className='ml-4'>
                                <h1 className='text-lg font-bold'>이름</h1>
                                <div className='text-lg font-semibold text-gray-700'>김만철</div>
                            </div>
                        </li>
                        <li className='flex w-[100%] sm:w-8 flex-[40%] mt-3 pl-14 pb-8'>
                            <div>
                                <BsFillCalendarFill size={25} />
                            </div>
                            <div className='ml-4'>
                                <h1 className='text-lg font-bold'>생년월일</h1>
                                <div className='text-lg font-semibold text-gray-700'>98.05.20</div>
                            </div>
                        </li>
                        <li className='flex w-[100%] flex-[40%] mt-3 pl-14 pb-8'>
                            <div>
                                <IoMdCall size={25} />
                            </div>
                            <div className='ml-4'>
                                <h1 className='text-left text-lg font-bold'>연락처</h1>
                                <div className='text-lg font-semibold text-gray-700'>010-3263-3921</div>
                            </div>
                        </li>
                        <li className='flex w-[100%] flex-[40%] mt-3 pl-14 pb-8'>
                            <div>
                                <AiOutlineMail size={25} />
                            </div>
                            <div className='ml-4'>
                                <h1 className='text-left text-lg font-bold'>이메일</h1>
                                <div className='text-lg font-semibold text-gray-700'>kmc0520kmc@gmail.com</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default About
