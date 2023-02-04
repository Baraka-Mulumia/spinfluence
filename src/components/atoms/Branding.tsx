import { Box, Stack, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import Image from 'next/image';

//TODO: Add a link to the home page

type BrandingProps = {
  isOnDarkBackground?: boolean;
  size?: string;
};

export const Branding: FunctionComponent<BrandingProps> = ({
  isOnDarkBackground = false,
  size,
}) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" cursor="pointer">
      <Box>
        <Image
          src="/images/logo.png"
          width={25}
          height={25}
          alt="Spinfluence Solutions Logo"
        />
      </Box>
      <Stack direction="column" spacing={0} justifyContent="center">
        <Text
          fontSize={size == 'lg' ? 'xl' : 'md'}
          color={isOnDarkBackground ? 'white' : 'blue.900'}
          fontWeight={600}>
          Spinfluence
        </Text>
        <Text fontSize={size == 'lg' ? 'sm' : 'xs'} color={'gray.500'}>
          Solutions
        </Text>
      </Stack>
    </Stack>
  );
};
