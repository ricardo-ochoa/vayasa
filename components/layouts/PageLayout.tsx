import { FC } from "react";
import Head from "next/head"
import { Navbar, SideMenu, Footer } from "../ui";




interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: any;
    robots?: string;
}

export const PageLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl, robots }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ pageDescription }></meta>

            <meta name="og:title" content={ title }></meta>
            <meta name="og:description" content={ pageDescription }></meta>
            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl }></meta>
                )
            }

            <meta name="author" content="Ricardo Ochoa"></meta>
            <meta name="copyright" content="Ricardo @ochoagram"></meta>
            <meta name="robots" content={ robots }></meta>

            <meta name="twitter:account_id" content="18ce55hprg3"/>
            <meta property="twitter:domain" content={ title }></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content="@ochoagram"></meta>
            <meta name="twitter:creator" content="@ochoagram"></meta>
            <meta property="twitter:image:src" content={ imageFullUrl }></meta>
            
        </Head>

        <nav>
            <Navbar />
        </nav>

        <SideMenu />

        <main className='main' style={{
            margin:'0 auto',
            marginTop: '70px',
            maxWidth: '1920px',
            padding: '0',
        }}>
            { children }
        </main>


      
        {/* <PartnersSection /> */}


        <footer>
            <Footer />
        </footer>

    </>
  )
}
