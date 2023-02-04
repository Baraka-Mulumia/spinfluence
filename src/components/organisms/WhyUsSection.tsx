import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { LeadText } from '../atoms/LeadText';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeaderText } from '../atoms/SectionHeaderText';
import WhyChoosUsTabPanel from '../molecules/WhyChoosUsTabPanel';
import { map } from 'lodash';
import { randomId } from '@/functions';
import { whyChooseUsReasons } from '@/data/reasons4choice';

const TabListItem: FunctionComponent<{
  tabName: string;
}> = ({ tabName }) => {
  return (
    <Tab>
      <Text
        fontSize={{
          base: 'sm',
          md: 'md',
          lg: 'lg',
        }}
        fontWeight={'bold'}
        color={'gray.500'}
        _selected={{
          color: 'blue.800',
          borderBottom: '2px',
          borderBottomColor: 'blue.800',
        }}>
        {tabName}
      </Text>
    </Tab>
  );
};

export const WhyUsSection: FunctionComponent = () => {
  return (
    <SectionContainer>
      <Stack alignItems={'center'} spacing={{ base: 8, md: 10 }}>
        <Stack>
          <SectionHeaderText textAlign={'center'}>
            Why Choose Us
          </SectionHeaderText>
          <Box
            maxW={{
              base: 'full',
              md: 'lg',
            }}>
            <LeadText>
              We design, build, deploy and maintains bespoke software solutions
              that allows start-ups and corporates to start, run and grow
              world-class businesses.
            </LeadText>
          </Box>
        </Stack>

        <Tabs>
          <TabList w={'full'} display={'flex'} justifyContent={'space-evenly'}>
            {map(whyChooseUsReasons, (reason) => (
              <TabListItem key={randomId()} tabName={reason.tabName} />
            ))}
          </TabList>

          <TabPanels>
            {map(whyChooseUsReasons, (reason) => (
              <WhyChoosUsTabPanel key={randomId()} {...reason} />
            ))}
          </TabPanels>
        </Tabs>
      </Stack>
    </SectionContainer>
  );
};
