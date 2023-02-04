import { Stack, TextProps } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { LeadText } from '../atoms/LeadText';
import { SectionHeaderText } from '../atoms/SectionHeaderText';

type BlockTitleProps = TextProps & {
  title: string;
  text: string;
};

export const BlockTitle: FunctionComponent<BlockTitleProps> = ({
  title,
  text,
}) => {
  return (
    <Stack
      spacing={0.5}
      justifyContent={'center'}
      alignItems={'center'}
      w={'full'}>
      <SectionHeaderText textTransform={'capitalize'}>
        {title}
      </SectionHeaderText>
      <LeadText>{text}</LeadText>
    </Stack>
  );
};
