import { Header } from '@/components/organisms/Header';
import { Box, Container, Text, VStack } from '@chakra-ui/react';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box as={'main'} bg={'gray.100'}>
      <Container maxW={'container.xl'}>
        <Header />
      </Container>
    </Box>
  );
}
