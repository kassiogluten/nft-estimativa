import React, { useEffect, useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";

import { AnimatePresence, motion } from "framer-motion";

export function Consulta() {
  /*     "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0x00e1656e45f18ec6747f5a8496fd39b50b38396d&address=0x89dfd3754C5DfEDb6Cc83C0E3cfa9f82349f3B19&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=TR6WIYE4AWWI8422RUK6RBJYQQ1N1IS8JV" */

  const [carteira, setCarteira] = useState();
  const [bnb, setBnb] = useState();

  function handleValue(e) {
    setCarteira(e.target.value);
  }

  function handleBnb(e) {
    setBnb("conversao wei para bnb");
  }

  const [address, setAddress] = useState(
    "0x89dfd3754C5DfEDb6Cc83C0E3cfa9f82349f3B19"
  );
  const [contract, setContract] = useState(
    "0x00e1656e45f18ec6747f5a8496fd39b50b38396d"
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {}, []);

  function handleUpdate() {
    setLoading(true);
    fetch(
      `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=${contract}&address=${address}&page=1&offset=50&startblock=0&endblock=999999999&sort=asc&apikey=TR6WIYE4AWWI8422RUK6RBJYQQ1N1IS8JV`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.result);
        if (res.status === "0") {
          alert("Nada encontrado");
        } 
        console.log(res.result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  const MotionStack = motion(VStack);

  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p="2rem 1rem"
        align="center"
        maxW={1200}
        w="full"
        flexDir="column"
        minH="90vh"
      >
        <VStack w="full" maxW={600} py={8}>
          <InputGroup>
            <InputLeftAddon w={100}>Carteira:</InputLeftAddon>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Ex: 0x89dfd3..."
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w={100}>Contrato:</InputLeftAddon>
            <Input
              onChange={(e) => setContract(e.target.value)}
              value={contract}
              placeholder="Ex: 0x00e165..."
            />
          </InputGroup>
          <Button isLoading={loading} onClick={(e) => handleUpdate(e)}>
            Atualizar
          </Button>
        </VStack>

        {/* {data &&
          data.map((item, i) => (
            // <h1 key={i}>value: {item.value} </h1>
            <h1 key={i}>{} resultados encontrados, leia no console</h1>
            // <h1 key={i}>{(item.value / Math.pow(10, 19))} bnb</h1>
          ))} */}

        {data.length > 0 && (
          <h1>{data.length} resultados, verifique console</h1>
        )}

        {/*  <AnimatePresence>
          {carteira && (
            <MotionStack
              py={8}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Text>BNB</Text>
              <Heading> R$ {true ? <Spinner /> : bnb}</Heading>
              <Heading>
                {" "}
                BNB {(9999996590787535 / Math.pow(10, 18)).toFixed(5)}
              </Heading>
            </MotionStack>
          )}
        </AnimatePresence> */}
      </Flex>
    </Flex>
  );
}
