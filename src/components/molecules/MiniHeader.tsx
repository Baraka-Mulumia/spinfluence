import { Box, Container, Stack } from '@chakra-ui/react';

import { Branding } from '@/components/atoms/Branding';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { EButton } from '@/components/atoms/EButton';
import { FunctionComponent } from 'react';
import Link from 'next/link';

export const MiniHeader: FunctionComponent = ({
  isSticky = false,
}: {
  isSticky?: boolean;
}) => {
  return (
    <Box
      as={'header'}
      borderBottomWidth={1}
      boxShadow={isSticky ? 'md' : 'none'}
      bg={isSticky ? 'white' : 'transparent'}
      borderColor={isSticky ? 'gray.200' : 'transparent'}>
      <Container maxW={'container.xl'}>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          w={'full'}
          justifyContent="space-between"
          py={4}>
          <Box>
            <Branding asLink />
          </Box>
          <Link href="/">
            <EButton
              variant="outline"
              leftIcon={<ChevronLeftIcon />}
              text="Back to Home"
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};
