import { Banner } from '@/components/organisms/Banner';
import { Box } from '@chakra-ui/react';
import { Header } from '@/components/organisms/Header';

export default function Home() {
  return (
    <Box as={'main'}>
      <Header />
      <Banner />
    </Box>
  );
}
