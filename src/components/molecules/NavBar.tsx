import { FunctionComponent } from 'react';
import { HStack } from '@chakra-ui/react';
import { NavItem } from '../atoms/NavItem';
import { map } from 'lodash';
import { navigationItems } from '@/data/navigationList';
import { randomId } from '@/functions';

export const NavBar: FunctionComponent = () => {
  return (
    <HStack>
      {map(navigationItems, (i) => (
        <NavItem key={randomId()} {...i} variant={'desktop'} />
      ))}
    </HStack>
  );
};
