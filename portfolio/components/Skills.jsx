import React from 'react'
import Image from 'next/image'
import jenkinsImg from '../public/assets/skills/jenkins.svg'
import jaegerImg from '../public/assets/skills/jaeger.jpeg'
import kustomizeImg from '../public/assets/skills/kustomize.png'
import helmImg from '../public/assets/skills/helm.svg'
import kubeImg from '../public/assets/skills/kubernetes.svg'
import vueImg from '../public/assets/skills/vue.svg'
import postImg from '../public/assets/skills/postgresql.svg'
import reactImg from '../public/assets/skills/react.png'
import nextImg from '../public/assets/skills/nextjs.png'
import nodeImg from '../public/assets/skills/node.png'
import springImg from '../public/assets/skills/springboot.png'
import mongoImg from '../public/assets/skills/mongo.png'
import dockerImg from '../public/assets/skills/docker.svg'
import awsImg from '../public/assets/skills/aws.png'
import mariaImg from '../public/assets/skills/maria.svg'
import argoImg from '../public/assets/skills/argocd.png'
import efkImg from '../public/assets/skills/efk.png'
import graphImg from '../public/assets/skills/graphql.png'
import fireImg from '../public/assets/skills/firebase.png'

const Skills = () => {
    return (
        <div id='skills' className="w-full p-20">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
                <h1 className="inline-block border-b-4 border-gray-300 py-2 mb-12">
                    Skills
                </h1>
                <h2 className='mb-6 whitespace-nowrap'>What I Can Do or Experienced</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-2">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto items-center">
                                <Image
                                    src={kubeImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>kubernetes</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={dockerImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Docker</h3>
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
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={argoImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>ArgoCD</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={jenkinsImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Jenkins</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={efkImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>EFK stack</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={jaegerImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Jaeger</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={helmImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Helm</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={kustomizeImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Kustomize</h3>
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
                                    src={graphImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GraphQL</h3>
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
                                    src={nodeImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>nodeJS</h3>
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
                                    src={fireImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={mariaImg}
                                    width="64px"
                                    height="64px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MariaDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto mt-3">
                                <Image
                                    src={postImg}
                                    width="50px"
                                    height="50px"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Skills
