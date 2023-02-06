import { Box, Stack } from '@chakra-ui/react';

import { BlockContainer } from '../layout/BlockContainer';
import { BlockTitle } from '../molecules/BlockTitle';
import { ContactForm } from '../molecules/ContactForm';
import { FunctionComponent } from 'react';

export const ContactUs: FunctionComponent = () => {
  return (
    <BlockContainer>
      <Stack spacing={10} justifyContent={'center'} alignItems={'center'}>
        <BlockTitle
          title={'Contact Us'}
          text={
            'We’d love to hear from you. Leave your details below and a dedicated Account Executive will be in touch shortly.'
          }
        />
        <ContactForm />
      </Stack>
    </BlockContainer>
  );
};
