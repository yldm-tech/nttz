import '@/styles/globals.css';
import Head from 'next/head'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '@/store'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description"/>
                <meta name="keywords" content="Keywords"/>
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json"/>
                <link
                    href="/images/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/images/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB"/>
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
