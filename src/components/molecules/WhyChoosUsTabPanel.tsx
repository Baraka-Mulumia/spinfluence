import { Box, Stack, TabPanel } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import { LeadText } from '../atoms/LeadText';
import { SectionHeaderText } from '../atoms/SectionHeaderText';
import { WhyChooseUsType } from '@/types';
import { WhyUsPromiseItem } from '../atoms/WhyUsPromiseItem';
import { map } from 'lodash';
import { randomId } from '@/functions';

// TODO: Animate entrance of the  tab panel

const WhyChoosUsTabPanel: FunctionComponent<WhyChooseUsType> = ({
  title,
  description,
  promises,
  image,
}) => {
  return (
    <TabPanel>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        w={'full'}
        justifyContent={'Space-between'}
        align={'center'}
        minH={{ base: 'auto', md: '500px' }}
        p={4}>
        <Stack
          w={{
            base: 'full',
            md: '50%',
          }}
          spacing={{ base: 4, md: 6 }}>
          <SectionHeaderText fontSize={{ base: '2xl', md: '3xl' }}>
            {title}
          </SectionHeaderText>
          <LeadText textAlign={'left'}>{description}</LeadText>

          <Stack spacing={3} py={3}>
            {map(promises, (promise) => (
              <WhyUsPromiseItem textValue={promise} key={randomId()} />
            ))}
          </Stack>
        </Stack>

        <Box
          pos={'relative'}
          w={{
            base: 'full',
            md: '50%',
          }}>
          <Image
            src={image}
            alt={'Why Choose Us Tab Panel'}
            width={500}
            height={500}
          />
        </Box>
      </Stack>
    </TabPanel>
  );
};

export default WhyChoosUsTabPanel;
