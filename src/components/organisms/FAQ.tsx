import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';

import { BlockContainer } from '../layout/BlockContainer';
import { BlockTitle } from '../molecules/BlockTitle';
import { FAQ_Questions } from '../molecules/FAQ_Questions';
import { FunctionComponent } from 'react';

export const FAQ: FunctionComponent = () => {
  return (
    <BlockContainer>
      <BlockTitle
        title="Frequently Asked Questions"
        text={'Ask your question and meet'}
      />

      <Stack
        spacing={4}
        w={'full'}
        direction={{
          base: 'column',
          mxd: 'row-reverse',
        }}>
        <Stack>
          <FAQ_Questions />
        </Stack>

        <Stack
          w={{
            base: 'full',
            mxd: 'sm',
          }}
          minW={{
            base: 'full',
            mxd: 'sm',
          }}>
          <Text as="h3" fontSize="xl" fontWeight="bold" color="text_primary">
            Do you have any quesiton? Please ask here we ready to support
          </Text>
          <Text fontSize="md" color="gray.500">
            If your question is not list here, please feel free to make a manual
            support.
          </Text>
          <Box pt={5}>
            <Button
              variant="outline"
              fontSize={'sm'}
              bg={'blue.900'}
              color={'white'}
              size={'md'}
              fontWeight={'bold'}
              borderRadius={'4px'}
              _hover={{
                bg: 'blue.900',
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 0 0 0.5px #3182ce',
              }}>
              Ask your question
            </Button>
          </Box>
        </Stack>
      </Stack>
    </BlockContainer>
  );
};
