import Head from "next/head"
import React from 'react'
import Footer from "../navigation/Footer"
import Navbar from "../navigation/Navbar"
import NavContact from "../navigation/NavContact"

type Props = {
    title: string,
    content: string,
    children: (JSX.Element | null),
}

const Layout: React.FC<Props> = ({ title, content, children }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Head>
            <NavContact />
            <Navbar/>
            <main >
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout