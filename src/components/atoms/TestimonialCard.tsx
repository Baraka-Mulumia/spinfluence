import { Avatar, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

import { Testimonial } from '@/types';

export const TestimonialCard: FunctionComponent<Testimonial> = ({
  image,
  name,
  text,
  username,
}) => {
  return (
    <Stack
      spacing={2}
      mb={10}
      w={{
        base: '100%',
        md: '80',
      }}>
      <Text fontSize={'16px'} lineHeight={1.87} color={'#343D48'}>
        {text}
      </Text>

      <HStack>
        <Avatar size="sm" mr={'5'} name={name} src={image} />
        <Stack>
          <Heading
            as={'h3'}
            m={0}
            fontSize={'17px'}
            lineHeight={1}
            fontWeight={'bold'}>
            {name}
          </Heading>
          <Text fontSize={'sm'} color={'blue.500'} lineHeight={1}>
            {username}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
};
