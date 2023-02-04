import { Box, HStack, Stack } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { chunk, map } from 'lodash';

import { BlockTitle } from '../molecules/BlockTitle';
import { LeadText } from '../atoms/LeadText';
import { SectionHeaderText } from '../atoms/SectionHeaderText';
import { TestimonialCard } from '../atoms/TestimonialCard';
import { randomId } from '@/functions';
import { testimonials } from '@/data/testimonials';

SwiperCore.use([Autoplay]);

export const Testimonials: FunctionComponent = () => {
  const testimonialChunks = chunk(testimonials, 2);
  const testimonialCarousel = {
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
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Stack
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 16 }}
      spacing={8}
      placeContent={'center'}
      placeItems={'center'}
      w={'full'}>
      <BlockTitle
        title={'What clients say about us'}
        text={'Customer Testimonaial'}
      />
      <HStack w={'full'} py={5}>
        <Swiper {...testimonialCarousel}>
          {map(testimonialChunks, (item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              {map(item, (testimonial) => (
                <TestimonialCard key={randomId()} {...testimonial} />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
    </Stack>
  );
};
