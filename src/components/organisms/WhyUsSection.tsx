import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { BlockContainer } from '../layout/BlockContainer';
import { BlockTitle } from '../molecules/BlockTitle';
import { FunctionComponent } from 'react';
import { LeadText } from '../atoms/LeadText';
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
    <BlockContainer>
      <Stack alignItems={'center'} spacing={{ base: 8, md: 10 }}>
        <Stack>
          <BlockTitle
            title={'Why Choose Us'}
            text={
              'We design, build, deploy and maintains bespoke software solutions that allows start-ups and corporates to start, run and grow world-class businesses.'
            }
          />
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
    </BlockContainer>
  );
};
