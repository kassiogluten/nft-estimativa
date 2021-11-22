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
} from "@chakra-ui/react";

export function Hero() {
  const [valor, setValor] = useState(1);
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

  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        w="full"
        justify="space-around"
        flexDir="column"
        minH="100vh"
      >
        <VStack maxW={300}>
          <Text>Investimento</Text>
          <InputGroup>
            <InputLeftAddon>R$</InputLeftAddon>
            <Input
              onChange={handleValue}
              placeholder="Digite o valor investido"
              value={valor}
            />
          </InputGroup>
        </VStack>
        <VStack maxW={300}>
          <Text>Valorização (desde o investimento)</Text>
          <InputGroup maxW={300}>
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
        {valor && (
          <VStack>
            <Text>Retirada mensal</Text>
            <Heading> R$ {Math.round(total)},00</Heading>
          </VStack>
        )}
      </Flex>
    </Flex>
  );
}

function Emoji({ valorizacao }) {
  if (valorizacao > 100) {
    return <div>🤑</div>;
  } else if (valorizacao > 50) {
    return <div>😁</div>;
  } else if (valorizacao > 0) {
    return <div>🙂</div>;
  } else if (valorizacao > -50) {
    return <div>😢</div>;
  } else if (valorizacao <= -50) {
    return <div>💩</div>;
  } else return null;
}
