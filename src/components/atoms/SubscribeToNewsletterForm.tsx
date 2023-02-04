import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';

export const SubscribeToNewsletterForm: FunctionComponent = () => {
  return (
    <Stack
      placeItems={'center'}
      spacing={8}
      placeContent={'center'}
      direction={'column'}
      bg={'#020718'}
      py={32}>
      <Box textAlign={'center'}>
        <Text fontSize={'3xl'} color={'white'}>
          Subscribe to our newsletter
        </Text>
        <Text fontSize={'md'} color={'gray.500'}>
          Get the latest news and updates
        </Text>
      </Box>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={4}>
        <Input
          placeholder={'Your email Address'}
          color={'white'}
          _placeholder={{
            color: 'gray.500',
            fontStyle: 'italic',
          }}
        />
        <Button fontSize={'sm'} bg={'white'} color={'blue.900'} px={8}>
          Subscribe
        </Button>
      </Stack>
    </Stack>
  );
};
