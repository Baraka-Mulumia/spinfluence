import { FunctionComponent, PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

export const VisibleOnBreakPoint: FunctionComponent<
  PropsWithChildren<{
    breakpoint: string;
  }>
> = ({ breakpoint, children }) => {
  return (
    <Box display={{ base: 'none', [breakpoint]: 'block' }}>{children}</Box>
  );
};
