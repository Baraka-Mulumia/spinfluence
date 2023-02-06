import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { EButton } from '../atoms/EButton';
import { EInput } from '../atoms/EInput';
import { ESelect } from '../atoms/ESelect';
import { FunctionComponent } from 'react';
import { map } from 'lodash';
import { services } from '@/data/services';

let companySizeOptions = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501-1000',
  '1000+',
];

export const ContactForm: FunctionComponent = () => {
  return (
    <Stack maxW={'2xl'} p={3}>
      <form>
        <Stack spacing={4}>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
            <EInput
              label={'Full Name'}
              type={'text'}
              placeHolder={'e.g Jack Sparrow'}
              isRequired={true}
            />
            <EInput
              label={'Email address'}
              type={'email'}
              helperText={"We'll never share your email."}
              placeHolder={'e.g iamjack@me.com'}
              isRequired={true}
            />
          </Stack>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
            <EInput
              label={'Mobile Number'}
              type={'tel'}
              placeHolder={'e.g 0123456789'}
              isRequired={true}
            />
            <ESelect label={'Company Size'} options={companySizeOptions} />
          </Stack>

          <Stack spacing={4}>
            <ESelect
              label={'Which Service are you looking for ? '}
              options={map(services, (service) => service.title)}
              isRequired={true}
            />
            <FormControl>
              <FormLabel>How can we help you ?</FormLabel>
              <Textarea placeholder="Tell us more about your project" />
            </FormControl>
          </Stack>

          <Box mt={5}>
            <Text color={'gray.500'} fontSize={'xs'}>
              Spinfluence needs the contact information you provide to us to
              contact you about our products and services. You may unsubscribe
              from these communications at any time. For information on how to
              unsubscribe, as well as our privacy practices and commitment to
              protecting your privacy, please review our Privacy Policy
            </Text>
          </Box>

          <Stack placeItems={'center'} mt={5}>
            <EButton text="Send Message" />
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
