import { Box, Button, Stack, Text } from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { SectionHeaderText } from './SectionHeaderText';
import { ServiceType } from '@/types';

// TODO: make link to services/:slug page

export const ServiceCard: FunctionComponent<ServiceType> = ({
  title,
  description,
  body,
  image,
  slug,
}) => {
  return (
    <Stack
      w={{
        base: 'full',
        md: '96',
      }}
      bg={'white'}
      p={4}
      borderRadius={'md'}
      boxShadow={'sm'}
      spacing={6}
      cursor={'pointer'}
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'dark-lg',
        bg: 'bg_000',
      }}
      transition={'all 0.2s ease-in-out'}>
      <Box position={'relative'} w={'max-content'} p={1} borderRadius={'md'}>
        <Image src={image} width={60} height={60} alt={'header image'} />
      </Box>
      <Stack spacing={2}>
        <SectionHeaderText fontSize={'lg'}>{title}</SectionHeaderText>
        <Text fontSize={'md'} color={'blue_100'}>
          {description}
        </Text>
        <Box h={16}>
          <Text fontSize={'sm'} color={'gray.500'} noOfLines={3}>
            {body}
          </Text>
        </Box>
      </Stack>

      <Button
        size={'sm'}
        fontSize={'sm'}
        colorScheme={'blue'}
        variant={'ghost'}
        w={32}
        alignSelf={'flex-end'}
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
        _active={{
          bg: 'blue.500',
          color: 'white',
        }}
        // TODO: ANIMATE show icon  on the right side of the button on hover
        rightIcon={<ChevronRightIcon />}>
        Read More
      </Button>
    </Stack>
  );
};
