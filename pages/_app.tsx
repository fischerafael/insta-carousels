import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Carousel Builder</title>
        <meta property="og:title" content="Linkedin Carousels" key="title" />
        <link rel="shortcut icon" href="/carouselbuilder.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
