import { FunctionComponent, PropsWithChildren } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export const SectionHeaderText: FunctionComponent<
  PropsWithChildren<TextProps>
> = ({ children, ...props }) => {
  return (
    <Text
      fontSize={'4xl'}
      fontWeight={'bold'}
      color={'blue.800'}
      lineHeight={'shorter'}
      fontFamily={'heading'}
      {...props}>
      {children}
    </Text>
  );
};
