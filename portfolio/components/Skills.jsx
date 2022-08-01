import React from 'react'
import Image from 'next/image'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import javascriptImg from '../public/assets/skills/javascript.png'
import vueImg from '../public/assets/skills/vue.png'
import reactImg from '../public/assets/skills/react.png'
import nextImg from '../public/assets/skills/nextjs.png'
import nodeImg from '../public/assets/skills/node.png'
import springImg from '../public/assets/skills/springboot.png'
import mssqlImg from '../public/assets/skills/mssql.png'
import mongoImg from '../public/assets/skills/mongo.png'
import gitImg from '../public/assets/skills/github.png'
import svnImg from '../public/assets/skills/svn.png'
import netlifyImg from '../public/assets/skills/netlify.png'
import vercelImg from '../public/assets/skills/vercel.png'
import awsImg from '../public/assets/skills/aws.png'

const Skills = () => {
    return (
        <div id='skills' className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
                <h1 className="inline-block border-b-4 border-gray-300 py-2 mb-12">
                    Skills
                </h1>
                <h2 className='mb-6 whitespace-nowrap'>What I Can Do or Experienced</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={htmlImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={cssImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={javascriptImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={vueImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Vue</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={reactImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={nextImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={nodeImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={springImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Spring boot</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={mssqlImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MSSQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={mongoImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={gitImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={svnImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>SVN</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto mt-3">
                                <Image
                                    src={vercelImg}
                                    width="50px"
                                    height="50px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Vercel</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={netlifyImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Netlify</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={awsImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>AWS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
