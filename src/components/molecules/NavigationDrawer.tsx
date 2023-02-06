import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { FunctionComponent, useRef } from 'react';

import { Branding } from '../atoms/Branding';
import { CtaButton } from '../atoms/CtaButton';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { NavItem } from '../atoms/NavItem';
import { navigationItems } from '@/data/navigationList';
import { randomId } from '@/functions';

export const NavigationDrawer: FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        aria-label="Menu"
        icon={<MenuIcon />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        variant="ghost"
        fontSize={{ base: '2xl', md: '3xl' }}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg={'rgba(2, 7, 24, 0.95)'}>
          <DrawerCloseButton mt={'2'} color={'white'} />
          <DrawerHeader>
            <Branding
              onClick={onClose}
              isOnDarkBackground={true}
              size={'lg'}
              asSpyLink
            />
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<Divider borderColor={'blue.300'} />}
              placeItems={'start'}
              pt={2}>
              {navigationItems.map((item) => (
                <NavItem
                  key={randomId()}
                  path={item.path}
                  label={item.label}
                  variant={'mobile'}
                  onClick={onClose}
                />
              ))}
            </VStack>
            <Divider borderColor={'blue.300'} />

            <VStack pt={10}>
              <CtaButton />
            </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent={'center'}>
            <Text fontSize={'xs'} color={'white'}>
              Powered by
              <Text as={'span'} color={'yellow'}>
                {' '}
                spinfluece solutions
              </Text>
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
