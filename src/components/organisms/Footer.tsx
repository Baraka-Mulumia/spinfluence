import { Box, Link, Stack, Text } from '@chakra-ui/react';

import { Branding } from '../atoms/Branding';
import { FavoriteIcon } from '@/assets/icons/FavoriteIcon';
import { SubscribeToNewsletterForm } from '../atoms/SubscribeToNewsletterForm';
import { map } from 'lodash';
import { navigationItems } from '@/data/navigationList';
import { randomId } from '@/functions';

export const Footer = () => {
  return (
    <Box>
      <SubscribeToNewsletterForm />
      <Stack
        as={'footer'}
        py={10}
        placeItems={'center'}
        placeContent={'center'}
        direction={'column'}
        bg={'rgba(2, 7, 24, 0.95)'}
        spacing={8}>
        <Stack
          spacing={{
            base: 8,
            md: 4,
          }}
          w={'full'}
          direction={{
            base: 'row',
            md: 'column',
          }}
          justifyContent={{
            base: 'space-evenly',
            md: 'center',
          }}
          alignItems={'center'}>
          <Branding isOnDarkBackground={true} size={'lg'} />

          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={4}>
            {map(navigationItems, (item) => (
              <Text key={randomId()} fontSize={'sm'} color={'white'}>
                {item.label}
              </Text>
            ))}
          </Stack>
        </Stack>

        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: 4,
            md: 8,
          }}
          alignItems={'center'}>
          <Text fontSize={'sm'} color={'white'}>
            © 2022-{new Date().getFullYear()} Spinfluence Solutions. All rights
            reserved.
          </Text>
          <Text fontSize={'sm'} color={'white'}>
            Built with <FavoriteIcon /> by{' '}
            <Link isExternal href="https://iambaraka.dev" color={'yellow'}>
              iambaraka.dev
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
