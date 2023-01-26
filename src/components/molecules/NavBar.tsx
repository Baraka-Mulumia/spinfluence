import { FunctionComponent } from 'react';
import { DesktopNavItem } from '../atoms/NavItem.desktop';
import { map } from 'lodash';

import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { NavigationItemType } from '@/types';
import { randomId } from '@/functions';

export const NavBar: FunctionComponent<{
  navigationItems: NavigationItemType[];
}> = ({ navigationItems }) => {
  return (
    <HStack>
      {map(navigationItems, (i) => (
        <DesktopNavItem key={randomId()} {...i} />
      ))}
    </HStack>
  );
};
