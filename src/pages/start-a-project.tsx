import { Box, Stack, Text } from '@chakra-ui/react';

import { BlockContainer } from '@/components/layout/BlockContainer';
import { ContactForm } from '@/components/molecules/ContactForm';
import { ECheckIcon } from '@/assets/icons/ECheckIcon';
import { Footer } from '@/components/organisms/Footer';
import { FunctionComponent } from 'react';
import { MiniHeader } from '../components/molecules/MiniHeader';
import { NextPage } from 'next';
import { map } from 'lodash';
import { randomId } from '@/functions';

type TakeAwayItemProps = {
  title: string;
  text: string;
};

const TakeAwayItem: FunctionComponent<TakeAwayItemProps> = ({
  title,
  text,
}) => {
  return (
    <Stack direction="row" spacing={2} py={1}>
      <ECheckIcon />
      <Text fontWeight={700} fontSize="lg">
        {title}
        {': '}
        <Text fontWeight={400} fontSize="md" as={'span'}>
          {text}
        </Text>
      </Text>
    </Stack>
  );
};

const TakeAwayItems = [
  {
    title: 'Your business',
    text: ' We want to hear all about you, your business, and your brilliant ideas.',
  },

  {
    title: 'Spinfluence',
    text: 'We will explain how Spinfluence can help you achieve your goals, How we work, our processes, custom solutions and subscriptions.',
  },
  {
    title: 'Next steps',
    text: "Let's chat about custom solutions and how we will solve your business problems",
  },
];

const StartProjectPage: NextPage = () => {
  return (
    <Box>
      <MiniHeader />

      <BlockContainer>
        <Stack
          direction={{
            base: 'column',
            xl: 'row',
          }}
          justifyContent="space-between"
          alignItems={'center'}>
          <Stack maxW={'md'} spacing={4} p={2}>
            <Text
              fontSize="2xl"
              textTransform={'uppercase'}
              fontWeight={700}
              letterSpacing={'wide'}
              fontFamily={'mono'}
              color={'blue'}>
              Start a project
            </Text>
            <Text
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
              fontWeight={700}
              lineHeight={'1'}>
              Book your free consultation now
            </Text>
            <Text color={'gray.500'}>
              Schedule a 30-min SovTech Explained and let&apos;s discuss:
            </Text>

            <Stack p={2}>
              {map(TakeAwayItems, (item, index) => (
                <TakeAwayItem key={randomId()} {...item} />
              ))}
            </Stack>
          </Stack>
          <ContactForm size={'xl'} />
        </Stack>
      </BlockContainer>
      <Footer variant="mini" />
    </Box>
  );
};

export default StartProjectPage;
