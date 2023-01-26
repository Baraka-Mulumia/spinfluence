import { FunctionComponent } from 'react';
import { Stack, Text } from '@chakra-ui/react';
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
