import { Button, ButtonProps } from '@chakra-ui/react';

import { FunctionComponent } from 'react';

type EButtonProps = ButtonProps & {
  text?: string;
};

export const EButton: FunctionComponent<EButtonProps> = ({
  text = 'Get Started',
  ...props
}) => {
  return (
    <Button
      variant="outline"
      fontSize={'sm'}
      bg={'blue.900'}
      color={'white'}
      size={'md'}
      fontWeight={'bold'}
      borderRadius={'4px'}
      _hover={{
        bg: 'blue.900',
        color: 'white',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 0 0 0.5px #3182ce',
      }}
      {...props}>
      {text}
    </Button>
  );
};
