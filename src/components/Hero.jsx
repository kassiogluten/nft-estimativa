import React, { useState } from "react";
import {
  Flex,
  Text,
  VStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Heading,
  InputRightElement,
  Alert,
  AlertIcon,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { AnimatePresence, motion } from "framer-motion";

export function Hero() {
  const [valor, setValor] = useState(Number);
  const [valorizacao, setValorizacao] = useState(0);
  const juros = (valor * valorizacao) / 100;
  const subtotal = +valor + juros;
  const total = (subtotal / 3) * 2.25;

  function handleValue(e) {
    setValor(e.target.value);
  }

  function handleValorizacao(e) {
    setValorizacao(e.target.value);
  }

  const { colorMode, toggleColorMode } = useColorMode();
  const MotionStack = motion(VStack);
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p="2rem 1rem"
        align="center"
        maxW={1200}
        w="full"
        justify="space-around"
        flexDir="column"
        minH="90vh"
      >
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "☀️"}
        </Button>
        <VStack maxW={300} py={8}>
          <Text>Investimento</Text>
          <InputGroup w={150}>
            <InputLeftAddon>R$</InputLeftAddon>
            <Input
              type="number"
              onChange={handleValue}
              placeholder="Valor"
              value={valor}
            />
          </InputGroup>
        </VStack>
        <VStack textAlign="center" maxW={300} py={8}>
          <Text>Valorização (desde o investimento)</Text>
          <InputGroup w={150}>
            <InputLeftAddon>%</InputLeftAddon>
            <InputRightElement>
              <Emoji valorizacao={valorizacao} />
            </InputRightElement>
            <Input
              color={valorizacao >= 0 ? "green.400" : "red.400"}
              type="number"
              onChange={handleValorizacao}
              placeholder="Digite a valorização (desde o investimento)"
              value={valorizacao}
            />
          </InputGroup>
          <Text textAlign="center" color="gray.500" fontSize={14}>
            Você pode consultar a % em diversos aplicativos, ou perguntar ao
            Admin
          </Text>
        </VStack>
        <AnimatePresence>
          {valor && (
            <MotionStack
              py={8}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Text>Retirada mensal</Text>
              <Heading> R$ {Math.round(total)},00</Heading>
            </MotionStack>
          )}
        </AnimatePresence>
        <Alert fontSize={12} maxW={300} status="warning">
          <AlertIcon />A renda é exclusivamente dependente do Token (nft)
          escolhido
        </Alert>
      </Flex>
    </Flex>
  );
}

function Emoji({ valorizacao }) {
  if (valorizacao > 100) {
    return <div>🤑</div>;
  } else if (valorizacao > 50) {
    return <div>😁</div>;
  } else if (valorizacao >= 0) {
    return <div>🙂</div>;
  } else if (valorizacao > -50) {
    return <div>😢</div>;
  } else if (valorizacao <= -50) {
    return <div>💩</div>;
  } else return null;
}
