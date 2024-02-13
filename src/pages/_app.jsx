import '@/styles/globals.css'
import Head from 'next/head'
import Logo1 from '../../public/assets/header/logo1.webp'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>{`HistHorizons - Votre histoire, source d'Inspiration`}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content={Logo1.src} />
        <meta property="og:image:type" content="webp" />
        <meta property="og:image:width" content="495" />
        <meta property="og:image:height" content="444" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
  
  
}
