import { Box, Container, Stack } from '@chakra-ui/react';

import { Branding } from '../atoms/Branding';
import { CtaButton } from '../atoms/CtaButton';
import { FunctionComponent } from 'react';
import { HiddenOnBreakPoint } from '../layout/HiddenOnBreakPoint';
import { NavBar } from '../molecules/NavBar';
import { NavigationDrawer } from '../molecules/NavigationDrawer';
import { VisibleOnBreakPoint } from '../layout/VisibleOnBreakPoint';

// ! TODO: Add sticky header

export const Header: FunctionComponent<{
  isSticky?: boolean;
}> = ({ isSticky = false }) => {
  return (
    <Box
      as={'header'}
      borderBottomWidth={1}
      boxShadow={isSticky ? 'md' : 'none'}
      bg={isSticky ? 'white' : 'transparent'}
      borderColor={isSticky ? 'gray.200' : 'transparent'}>
      <Container maxW={'container.xl'}>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          w={'full'}
          justifyContent="space-between"
          py={4}>
          <Box>
            <Branding />
          </Box>

          <VisibleOnBreakPoint breakpoint="lg">
            <NavBar />
          </VisibleOnBreakPoint>

          <VisibleOnBreakPoint breakpoint="lg">
            <CtaButton />
          </VisibleOnBreakPoint>

          <HiddenOnBreakPoint breakpoint="lg">
            <NavigationDrawer />
          </HiddenOnBreakPoint>
        </Stack>
      </Container>
    </Box>
  );
};
