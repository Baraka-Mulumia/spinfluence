import { NavigationItemType } from '@/types';
import { FunctionComponent } from 'react';
import { Branding } from '../atoms/Branding';

import { Box, Stack, Button } from '@chakra-ui/react';
import { NavBar } from '../molecules/NavBar';
import { CtaButton } from '../atoms/CtaButton';

const navigationItems: NavigationItemType[] = [
  {
    label: 'Home',
    path: 'home',
    isSpy: true,
  },
  {
    label: 'Services',
    path: 'services',
    isSpy: true,
  },
  {
    label: 'Team',
    path: 'team',
    isSpy: true,
  },
  {
    label: 'Stories',
    path: 'stories',
    isSpy: true,
  },
  {
    label: 'Why Us',
    path: 'why-us',
    isSpy: true,
  },
  {
    label: 'Contact Us',
    path: 'contact-us',
    isSpy: true,
  },
];

export const Header: FunctionComponent = () => {
  return (
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
      <NavBar navigationItems={navigationItems} />
      <CtaButton />
    </Stack>
  );
};
