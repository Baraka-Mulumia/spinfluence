import { FunctionComponent, PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

export const HiddenOnBreakPoint: FunctionComponent<
  PropsWithChildren<{
    breakpoint: string;
  }>
> = ({ breakpoint, children }) => {
  return (
    <Box display={{ base: 'block', [breakpoint]: 'none' }}>{children}</Box>
  );
};
