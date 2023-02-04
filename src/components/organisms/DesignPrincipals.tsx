import { Box, Stack } from '@chakra-ui/react';

import { CoreValue } from '@/types';
import { FunctionComponent } from 'react';
import { LeadText } from '../atoms/LeadText';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeaderText } from '../atoms/SectionHeaderText';
import { coreValues } from '@/data/coreValues';
import { map } from 'lodash';
import { randomId } from '@/functions';

const DesignPrincipalItem: FunctionComponent<CoreValue> = ({ title, body }) => {
  return (
    <Stack spacing={4}>
      <SectionHeaderText fontSize={'2xl'}>{title}</SectionHeaderText>
      <Box h={32}>
        <LeadText fontSize={'sm'} textAlign={'left'} color="text_primary">
          {body}
        </LeadText>
      </Box>
    </Stack>
  );
};

export const DesignPrincipals: FunctionComponent = () => {
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
          <SectionHeaderText>Yes, we can build that</SectionHeaderText>

          <Box
            maxW={{
              base: 'full',
              md: '2xl',
            }}>
            <LeadText>
              We have the expertise, experience, and resources to complete this
              task effectively and efficiently. Our team has a proven track
              record of delivering high-quality solutions, and we are confident
              in our ability to meet your requirements and exceed your
              expectations.
            </LeadText>
          </Box>
        </Stack>

        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={8}>
          {map(coreValues.slice(0, 3), (value) => (
            <DesignPrincipalItem key={randomId()} {...value} />
          ))}
        </Stack>
      </Stack>
    </SectionContainer>
  );
};
