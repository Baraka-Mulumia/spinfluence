import { Banner } from '@/components/organisms/Banner';
import { Box } from '@chakra-ui/react';
import { Header } from '@/components/organisms/Header';
import { ServicesSection } from '@/components/organisms/ServicesSection';

export default function Home() {
  return (
    <Box as={'main'}>
      <Header />
      <Banner />
      <ServicesSection />
    </Box>
  );
}
