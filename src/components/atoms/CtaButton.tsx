import { FunctionComponent } from 'react';
import { Box, Button } from '@chakra-ui/react';

import Link from 'next/link';

export const CtaButton: FunctionComponent = () => {
  return (
    <Box>
      <Link href={'/ignite'}>
        <Button
          variant="outline"
          colorScheme="blue"
          fontSize={'sm'}
          size={'sm'}
          _hover={{
            bg: 'blue.500',
            color: 'white',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 0 0 2px #3182ce',
          }}>
          Get Started
        </Button>
      </Link>
    </Box>
  );
};
