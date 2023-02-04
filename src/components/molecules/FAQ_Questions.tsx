import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { faqs } from '@/data/faq';
import { map } from 'lodash';
import { randomId } from '@/functions';

export const FAQ_Questions: FunctionComponent = () => {
  return (
    <Stack>
      <Accordion defaultIndex={[0]}>
        {map(faqs, (faq) => (
          <AccordionItem key={randomId()} py={4}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  fontWeight={'bold'}
                  textAlign="left"
                  color={'text_primary'}>
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text fontSize="md" color="gray.700">
                {faq.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
};
