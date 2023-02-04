import { Box, Button, ButtonProps } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import Link from 'next/link';

export const CtaButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <Box>
      <Link href={'/'}>
        <Button
          variant="outline"
          fontSize={'sm'}
          bg={'blue.500'}
          color={'white'}
          size={'md'}
          borderRadius={'4px'}
          _hover={{
            bg: 'blue.500',
            color: 'white',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 0 0 1px #3182ce',
          }}
          {...props}>
          Get Started
        </Button>
      </Link>
    </Box>
  );
};
