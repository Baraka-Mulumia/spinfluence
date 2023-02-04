import '@/styles/globals.css';
import 'swiper/swiper-bundle.min.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SpinFluenceHead } from '@/components/molecules/SpinFluenceHead';
import theme from '@/styles/theme';
// import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SpinFluenceHead />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
