import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { LeadText } from '../atoms/LeadText';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeaderText } from '../atoms/SectionHeaderText';
import { ServiceCard } from '../atoms/ServiceCard';
import { map } from 'lodash';
import { randomId } from '@/functions';
import { services } from '@/data/services';

export const ServicesSection: FunctionComponent = () => {
  return (
    <SectionContainer bg={'bg_000'} py={4}>
      <Stack w={'full'} h={'full'} spacing={4}>
        <Stack spacing={2} pb={5}>
          <SectionHeaderText textAlign={'center'}>
            Our Best Services
          </SectionHeaderText>

          <LeadText>Scale your business with our top quality services</LeadText>
        </Stack>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            xxl: 'repeat(3, 1fr)',
          }}
          placeContent={'center'}
          placeItems={'center'}
          gap={4}>
          {map(services, (service) => (
            <GridItem key={randomId()}>
              <ServiceCard {...service} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </SectionContainer>
  );
};
