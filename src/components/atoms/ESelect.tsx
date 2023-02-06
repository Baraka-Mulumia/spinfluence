import { FormControl, FormLabel, Select, Text } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { map } from 'lodash';

type ESelectProps = {
  label: string;
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isRequired?: boolean;
};

export const ESelect: FunctionComponent<ESelectProps> = ({
  label,
  options,
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
    <Select placeholder="Select option" onChange={onChange}>
      {map(options, (option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </FormControl>
);
