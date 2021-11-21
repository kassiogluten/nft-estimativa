import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { FaThList } from "react-icons/fa";
import React from "react";
import { LogoSvg } from "../icons";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <Flex pos="fixed" justify="center" align="center" w="100%" bg="gray.100" as="header">
        <Flex
          p="1rem"
          w="full"
          align="center"
          maxW={1200}
          bg="gray.50"
          justify="space-between"
        >
          <LogoSvg />
          <HStack display={{ base: "none", sm: "flex" }} spacing={10}>
            <Menu />
          </HStack>
          <IconButton aria-label="Abrir menu de navegação" onClick={onOpen} display={{ base: "flex", sm: "none" }}>
            <FaThList />
          </IconButton>
        </Flex>
        <Drawer autoFocus={false} returnFocusOnClose={false} isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton m={3} />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody onClick={onClose}>
              <VStack spacing={10}>
                <Menu />
              </VStack>
              <Button variant="outline" mr={3} onClick={onClose}>
                Botao1
              </Button>
              <Button colorScheme="blue">Botao2</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
  );
}

const Menu = () => (
  <>
    <Text as="a" href="#">
      Link1
    </Text>
    <Text as="a" href="#">
      Link2
    </Text>
    <Text as="a" href="#">
      Link3
    </Text>
  </>
);
