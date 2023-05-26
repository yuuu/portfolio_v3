import "../styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { useRouter } from "next/router";

import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
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
        <div className="container mx-auto flex flex-grow">
          <div
            className={`px-4 mx-auto flex flex-grow ${
              router.pathname == "/" ? "justify-center" : ""
            }`}
          >
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
      <Toast />
    </>
  );
};

export default MyApp;
