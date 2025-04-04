import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiFillGithub,
    AiOutlineBold,
    AiOutlineMail,
} from 'react-icons/ai'
import logoImg from '../public/assets/logoImg.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) setShadow(true)
            else setShadow(false)
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100]'
                    : 'fixed w-full h-20 z-[100]'
            }
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image src={logoImg} alt="/" width="125" height="70" />
                </Link>
                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className="hidden md:flex"
                    >
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                home
                            </li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                About
                            </li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Skills
                            </li>
                        </Link>
                        <Link href="/#certified">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                            Certifications
                            </li>
                        </Link>
                        <Link href="/#career">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Career
                            </li>
                        </Link>
                        <Link href="/#awards">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Awards
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 ease-in duration-500'
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src={logoImg}
                                width="80"
                                height="50"
                                alt="/"
                            />
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4"></p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul>
                            <Link href="/">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#certified">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Certifications
                                </li>
                            </Link>
                            <Link href="/#career">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Career
                                </li>
                            </Link>
                            <Link href="/#awards">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Awards
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let's Connect
                            </p>
                            <div className="flex items-center my-4 w-full sm:w-[80%]">
                                
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300">
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
        </div>
    )
}

export default Navbar
