import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

import { FunctionComponent } from 'react';

type EInputProps = {
  label: string;
  type: string;
  placeHolder?: string;
  helperText?: string;
  isRequired?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EInput: FunctionComponent<EInputProps> = ({
  label,
  type,
  helperText,
  placeHolder,
  isRequired = false,
  onChange,
}) => (
  <FormControl>
    <FormLabel>
      {label}
      <Text as={'span'} color={'red.500'}>
        {isRequired ? '*' : ''}
      </Text>
    </FormLabel>
    <Input type={type} placeholder={placeHolder} />
    {helperText && (
      <FormHelperText fontSize={'xs'}>{helperText}</FormHelperText>
    )}
  </FormControl>
);
