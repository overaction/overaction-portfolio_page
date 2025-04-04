import React from 'react'
import Image from 'next/image'
import kubeImg from '../public/assets/skills/cka.jpg'


const Certified = () => {
    return (
        <div id='certified' className="w-full p-20">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
                <h1 className="inline-block border-b-4 border-gray-300 py-2 mb-12">
                    Certifications
                </h1>
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-2">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto items-center">
                                <h2 className='flex items-center justify-center mb-4'>CKA</h2>
                                <Image
                                    src={kubeImg}
                                    width="500px"
                                    height="400px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certified
