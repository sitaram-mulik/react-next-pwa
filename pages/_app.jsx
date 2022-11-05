import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/index.scss';
import Navbar from './layout/nav';
import SideNav from './layout/nav/sidenav';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component?.getLayout;
  const { pathname } = useRouter();
  const [isEditView, setIsEditView] = useState(false);
  useEffect(() => {
    console.log('pathname ', pathname)
    if(pathname.includes('edit')) {
      setIsEditView(true)
    };
  }, [pathname]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>C2</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      {!!getLayout ? getLayout(<Component {...pageProps} />) : 
        <>
          {/* {!isEditView ? <Navbar /> : <SideNav />} */}
          <Component {...pageProps} />
        </>
      }
    </>
  )
};