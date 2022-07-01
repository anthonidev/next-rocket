import Head from "next/head"
import React from 'react'
import Navbar from "../navigation/Navbar"

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
            <Navbar/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout