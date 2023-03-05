import 'swiper/swiper-bundle.min.css';

import theme, { appFont } from '@/config/theme';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SpinFluenceHead } from '@/components/molecules/SpinFluenceHead';

// import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SpinFluenceHead />
      <main className={appFont.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
