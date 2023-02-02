import { FunctionComponent } from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';

export const Branding: FunctionComponent = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box>
        <Image
          src="/images/logo.png"
          width={25}
          height={25}
          alt="Spinfluence Solutions Logo"
        />
      </Box>
      <Stack direction="column" spacing={0} justifyContent="center">
        <Text fontSize="md" color={'blue.500'} fontWeight={600}>
          Spinfluence
        </Text>
        {/* <Text fontSize="xs" fontWeight={300}>
          Solutions
        </Text> */}
      </Stack>
    </Stack>
  );
};
