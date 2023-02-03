import { Box, HStack, Stack, Text, useMediaQuery } from '@chakra-ui/react';

import { CtaButton } from '../atoms/CtaButton';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { SectionContainer } from '../layout/SectionContainer';
import { VisibleOnBreakPoint } from '../layout/VisibleOnBreakPoint';

export const Banner: FunctionComponent = () => {
  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  return (
    <SectionContainer
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
            color={'blue.800'}
            lineHeight={'shorter'}>
            Scaling your business with world-class software development
          </Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            Award winning creative agency that helps you to build your brand and
            grow your business accross the world
          </Text>
          <HStack spacing={4} mt={8}>
            <CtaButton size={'lg'} fontSize={'lg'} />
            <Box>
              <Text fontSize={'lg'} color={'gray.500'}></Text>
            </Box>
          </HStack>
        </Stack>

        <VisibleOnBreakPoint breakpoint={'mxd'}>
          <Box position={'relative'}>
            <Image
              src={'/images/header-shape-2.png'}
              width={isLarge ? 600 : 400}
              height={isLarge ? 600 : 400}
              alt={'header image'}
            />
          </Box>
        </VisibleOnBreakPoint>
      </Stack>
    </SectionContainer>
  );
};
