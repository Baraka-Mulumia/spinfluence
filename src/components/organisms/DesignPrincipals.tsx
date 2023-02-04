import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { CoreValue } from '@/types';
import { LeadText } from '../atoms/LeadText';
import { SectionContainer } from '../layout/SectionContainer';
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
      delay: 6000,
    },
  };

  return (
    <SectionContainer
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
          <SectionHeaderText textTransform={'capitalize'}>
            Yes, we can build that
          </SectionHeaderText>
        </Stack>
        <Swiper {...swipperSettings}>
          {map(coreValues, (value, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <DesignPrincipalItem {...value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </SectionContainer>
  );
};
