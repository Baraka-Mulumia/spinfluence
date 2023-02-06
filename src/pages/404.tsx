import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { PageNotFound } from '@/components/templates/PageNotFound';

const Custom404Page: NextPage = () => {
  return (
    <Box
      bg={'linear-gradient(93.99deg, #FF1D1D 8.13%, #581DFF 120.87%)'}
      color={'white'}
      minH={'100vh'}
      py={12}
      px={4}>
      <PageNotFound />
    </Box>
  );
};

export default Custom404Page;
