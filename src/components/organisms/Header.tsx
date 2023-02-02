import { Box, Container, Stack } from '@chakra-ui/react';

import { Branding } from '../atoms/Branding';
import { CtaButton } from '../atoms/CtaButton';
import { FunctionComponent } from 'react';
import { HiddenOnBreakPoint } from '../layout/HiddenOnBreakPoint';
import { NavBar } from '../molecules/NavBar';
import { NavigationDrawer } from '../molecules/NavigationDrawer';
import { VisibleOnBreakPoint } from '../layout/VisibleOnBreakPoint';

// ! TODO: Add sticky header

export const Header: FunctionComponent = () => {
  return (
    <Box as={'header'} bg={'white'} borderBottomWidth={1}>
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

          <VisibleOnBreakPoint breakpoint="xxmd">
            <NavBar />
          </VisibleOnBreakPoint>

          <VisibleOnBreakPoint breakpoint="xxmd">
            <CtaButton />
          </VisibleOnBreakPoint>

          <HiddenOnBreakPoint breakpoint="xxmd">
            <NavigationDrawer />
          </HiddenOnBreakPoint>
        </Stack>
      </Container>
    </Box>
  );
};
