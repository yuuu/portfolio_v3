import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Amplify } from 'aws-amplify'
import awsconfig from '../src/aws-exports'
Amplify.configure(awsconfig)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>yuuu&lsquo;s portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="yuuu's portfolio" />
      <meta property="og:description" content="yuuu's portfolio" />
      <meta name="keywords" content="yuuu portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio.y-uuu.net" />
      <meta
        property="og:image"
        content="https://portfolio.y-uuu.net/images/og_image.png"
      />
      <meta property="og:site_name" content="yuuu's portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Y_uuu" />
      <meta name="twitter:player" content="@Y_uuu" />
    </Head>
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="container mx-auto">
        <div className="flex-grow max-w-7xl mx-auto sm:px-6 lg:px-8 pb-4">
          <div className="px-4 sm:px-0">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default MyApp
