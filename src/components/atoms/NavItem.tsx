import { Stack, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { NavigationItemType } from '@/types';

// !  TODO: Have two variants  - for spy link and for  next link

export const DesktopNavItem: FunctionComponent<NavigationItemType> = ({
  path,
  label,
}) => {
  return (
    <Stack
      minW={'24'}
      placeItems={'center'}
      placeContent={'center'}
      cursor={'pointer'}
      _hover={{
        _after: {
          width: '100%',
        },
        fontWeight: 'bold',
      }}
      _after={{
        content: '""',
        display: 'block',
        width: 0,
        height: '1px',
        bg: 'gray.500',
        transition: 'width 0.3s',
        mt: 1,
      }}>
      <Text fontSize={'sm'}>{label}</Text>
    </Stack>
  );
};

// TODO: convert to spy link
export const MobileNavItem: FunctionComponent<NavigationItemType> = ({
  path,
  label,
}) => {
  return (
    <Stack cursor={'pointer'} py={2}>
      <Text fontSize={'md'}>{label}</Text>
    </Stack>
  );
};

type NavItemProps = NavigationItemType & {
  variant: 'desktop' | 'mobile';
};

export const NavItem: FunctionComponent<NavItemProps> = ({
  variant,
  ...props
}) => {
  if (variant === 'desktop') {
    return <DesktopNavItem {...props} />;
  }

  return <MobileNavItem {...props} />;
};
