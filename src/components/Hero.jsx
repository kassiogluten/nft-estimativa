import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex as="section" justify="center" align="center" w="100%" bg="blue.900">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        w="full"
        bg="blue.500"
        justify="space-between"
        h={700}
        flexDir={{ base: "column", sm: "row" }}
        //flexDir="column"
      >
        <Heading>Texto</Heading>
        <Heading>Texto</Heading>
      </Flex>
    </Flex>
  );
}
