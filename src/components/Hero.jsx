import React, { useState } from "react";
import {
  Flex,
  Text,
  VStack,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export function Hero() {
  const [valor, setValor] = useState(1);
  const [valorizacao, setValorizacao] = useState(0);
  const juros = (valor * valorizacao) / 100;
  const subtotal = +valor + juros;
  const total = (subtotal / 3) * 2;

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
        <VStack>
          <Text>Investimento</Text>
          <InputGroup maxW={300}>
            <InputLeftAddon>R$</InputLeftAddon>
            <Input
              onChange={handleValue}
              placeholder="Digite o valor investido"
              value={valor}
            />
          </InputGroup>
        </VStack>
        <VStack>
          <Text>Valorização nos ultimos 30 dias</Text>
          <InputGroup maxW={300}>
            <InputLeftAddon>%</InputLeftAddon>
            <Input
              type="number"
              onChange={handleValorizacao}
              placeholder="Digite a variaçao da moeda dos ultimos 30 dias"
              value={valorizacao}
            />
          </InputGroup>
        </VStack>
        {valor && (
          <VStack>
            <Text>Retirada mensal</Text>
            <InputGroup maxW={300}>
              <InputLeftAddon>R$</InputLeftAddon>
              <Input disabled value={Math.round(total)} />
            </InputGroup>
          </VStack>
        )}
      </Flex>
    </Flex>
  );
}
