import { Box, Flex, HStack, Stack } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { BlockContainer } from '../layout/BlockContainer';
import { BlockTitle } from '../molecules/BlockTitle';
import { CoreValue } from '@/types';
import { LeadText } from '../atoms/LeadText';
import { SectionHeaderText } from '../atoms/SectionHeaderText';
import { coreValues } from '@/data/coreValues';
import { map } from 'lodash';

SwiperCore.use([Autoplay]);

const DesignPrincipalItem: FunctionComponent<CoreValue> = ({ title, body }) => {
  return (
    <Stack
      spacing={4}
      w={'full'}
      bg={'white'}
      px={4}
      py={5}
      borderRadius={'md'}
      boxShadow={'md'}
      alignItems={'center'}
      justifyContent={'center'}>
      <SectionHeaderText fontSize={'2xl'}>{title}</SectionHeaderText>
      <Box
        h={{
          base: 'auto',
          mxd: 36,
        }}
        maxW={{
          base: 'full',
          mxd: '2xl',
        }}>
        <LeadText textAlign={'justify'} color="text_primary">
          {body}
        </LeadText>
      </Box>
    </Stack>
  );
};

export const DesignPrincipals: FunctionComponent = () => {
  const swipperSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <BlockContainer
      bg={'bg_000'}
      alignItems={'start'}
      minH={'max-content'}
      py={5}
      px={{
        base: 4,
        md: 8,
      }}>
      <Stack spacing={10}>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <BlockTitle title="Our Design Principles" text="Core Values" />
        </Stack>
        <HStack w={'full'} py={5}>
          <Swiper {...swipperSettings}>
            {map(coreValues, (value, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <DesignPrincipalItem {...value} />
              </SwiperSlide>
            ))}
          </Swiper>
        </HStack>
      </Stack>
    </BlockContainer>
  );
};
