import { Button, Heading, Stack, Text } from '@chakra-ui/react';

import { BlockContainer } from '../layout/BlockContainer';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import Link from 'next/link';

export const PageNotFound: FunctionComponent = () => {
  return (
    <BlockContainer>
      <Stack spacing={8}>
        <Heading
          fontWeight={700}
          fontSize={{ base: '6xl', md: '8xl', xl: '9xl' }}>
          404
        </Heading>

        <Stack spacing={0.5}>
          <Heading
            fontWeight={700}
            fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}>
            Page not found
          </Heading>

          <Text
            fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}
            fontWeight={400}
            color="gray.100">
            Sorry, we couldn&apos;t find the page you were looking for.
          </Text>
        </Stack>

        <Link href="/">
          <Button
            variant={'solid'}
            rightIcon={<ChevronRightIcon />}
            colorScheme="yellow">
            Back to home
          </Button>
        </Link>
      </Stack>
    </BlockContainer>
  );
};
