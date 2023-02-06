import { Box, Stack, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SpyLink } from './SpyLink';

type BrandingProps = {
  isOnDarkBackground?: boolean;
  size?: string;
  onClick?: () => void;
};

const BrandingContent: FunctionComponent<BrandingProps> = ({
  isOnDarkBackground = false,
  size,
  onClick,
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      cursor="pointer"
      onClick={onClick}>
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

export const Branding: FunctionComponent<
  BrandingProps & {
    asLink?: boolean;
    asSpyLink?: boolean;
    onClick?: () => void;
  }
> = ({
  isOnDarkBackground = false,
  size,
  asLink = false,
  asSpyLink,
  onClick,
}) => {
  const branding = (
    <BrandingContent
      isOnDarkBackground={isOnDarkBackground}
      size={size}
      onClick={onClick}
    />
  );

  return asLink ? (
    <Link href="/">{branding}</Link>
  ) : asSpyLink ? (
    <SpyLink path={'home'}>{branding}</SpyLink>
  ) : (
    branding
  );
};
