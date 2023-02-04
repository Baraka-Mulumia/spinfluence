import { HStack, Text } from '@chakra-ui/react';

import { ECheckIcon } from '@/assets/icons/ECheckIcon';
import { FunctionComponent } from 'react';

export const WhyUsPromiseItem: FunctionComponent<{
  textValue: string;
}> = ({ textValue }) => {
  return (
    <HStack>
      <ECheckIcon />
      <Text fontSize={'sm'} color={'text_primary'}>
        {textValue}
      </Text>
    </HStack>
  );
};
