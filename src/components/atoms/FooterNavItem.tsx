import { Stack, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { SpyLink } from './SpyLink';

type FooterNavItemProps = {
  label: string;
  path: string;
};

export const FooterNavItem: FunctionComponent<FooterNavItemProps> = ({
  label,
  path,
}) => {
  return (
    <SpyLink path={path}>
      <Stack
        minW={'20'}
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
          bg: 'white',
          transition: 'width 0.3s',
          mt: 1,
        }}>
        <Text fontSize={'md'} color={'white'}>
          {label}
        </Text>
      </Stack>
    </SpyLink>
  );
};
