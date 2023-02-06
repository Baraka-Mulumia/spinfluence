import { Box, Button, ButtonProps } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import Link from 'next/link';

export const CtaButton: FunctionComponent<
  ButtonProps & {
    text?: string;
  }
> = ({ text = 'Get Started', ...props }) => {
  return (
    <Box>
      <Link href={'/start-a-project'}>
        <Button
          variant="outline"
          fontSize={'sm'}
          bg={'blue.900'}
          color={'white'}
          size={'md'}
          borderRadius={'4px'}
          _hover={{
            bg: 'blue.500',
            color: 'white',
            transition: 'all 0.3s ease-in-out',
          }}
          {...props}>
          {text}
        </Button>
      </Link>
    </Box>
  );
};
