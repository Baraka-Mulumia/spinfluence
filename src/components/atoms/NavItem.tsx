import { Stack, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import { NavigationItemType } from '@/types';
import { SpyLink } from './SpyLink';

export const DesktopNavItem: FunctionComponent<NavigationItemType> = ({
  path,
  label,
}) => {
  return (
    <Link
      to={path}
      spy={true}
      smooth={true}
      duration={500}
      activeClass="active"
      offset={-50}>
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
        <Text fontSize={'md'}>{label}</Text>
      </Stack>
    </Link>
  );
};

export const MobileNavItem: FunctionComponent<NavigationItemType> = ({
  path,
  label,
  onClick,
}) => {
  return (
    <SpyLink path={path}>
      <Stack cursor={'pointer'} py={2} onClick={onClick}>
        <Text fontSize={'md'} color={'white'}>
          {label}
        </Text>
      </Stack>
    </SpyLink>
  );
};

type NavItemProps = NavigationItemType & {
  variant: 'desktop' | 'mobile';
  onClick?: () => void;
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
