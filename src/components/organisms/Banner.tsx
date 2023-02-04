import { Box, Stack, Text, useMediaQuery } from '@chakra-ui/react';

import { BlockContainer } from '../layout/BlockContainer';
import { CtaButton } from '../atoms/CtaButton';
import { FunctionComponent } from 'react';
import Image from 'next/image';

export const Banner: FunctionComponent = () => {
  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  return (
    <BlockContainer
      bgImg={'url(/images/header-bg-2.png)'}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'right top'}>
      <Stack
        w={'full'}
        h={'full'}
        spacing={8}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={{ base: 'column', lg: 'row' }}>
        <Stack maxW={'md'} spacing={4}>
          <Text
            fontSize={'4xl'}
            fontWeight={'bold'}
            textTransform={'capitalize'}
            color={'blue.800'}
            lineHeight={'shorter'}>
            Scaling your business with world-class software.
          </Text>
          <Text fontSize={'md'} color={'gray.500'}>
            Award winning creative agency that helps you to build your brand and
            grow your business accross the world.
          </Text>
          <CtaButton
            size={'lg'}
            fontSize={'lg'}
            mt={4}
            text={'Start your project'}
          />
        </Stack>

        <Box position={'relative'}>
          <Image
            src={'/images/header-shape-2.png'}
            width={isLarge ? 600 : 400}
            height={isLarge ? 600 : 400}
            alt={'header image'}
          />
        </Box>
      </Stack>
    </BlockContainer>
  );
};
