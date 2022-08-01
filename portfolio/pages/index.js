import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Carrer from '../components/Carrer'
import Projects from '../components/Projects'
export default function Home() {
    return (
        <div>
            <Head>
                <title>kmc's portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Carrer />
            <Projects />
        </div>
    )
}
