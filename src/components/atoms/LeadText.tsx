import { FunctionComponent, PropsWithChildren } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export const LeadText: FunctionComponent<PropsWithChildren<TextProps>> = ({
  children,
  ...props
}) => {
  return (
    <Text
      color={'gray.500'}
      fontSize={'md'}
      fontWeight={'medium'}
      lineHeight={'tall'}
      textAlign={'center'}
      {...props}>
      {children}
    </Text>
  );
};
