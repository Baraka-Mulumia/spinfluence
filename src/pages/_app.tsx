import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import SPHead from '@/components/SPHead';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SPHead />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
