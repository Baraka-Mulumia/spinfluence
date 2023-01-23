import { Box, Text, VStack } from '@chakra-ui/react';

import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SpinFluence</title>
      </Head>
      <main>
        <Box>
          <VStack
            spacing={4}
            w={'100vw'}
            h={'100vh'}
            alignItems="center"
            justifyContent="center">
            <Text fontSize="6xl" fontWeight="bold" className={inter.className}>
              SpinFluence
            </Text>
          </VStack>
        </Box>
      </main>
    </>
  );
}
