import React from "react";
import * as Chakra from "@chakra-ui/react";

export const Header = () => {
  return (
    <Chakra.HStack
      h="10vh"
      w="full"
      maxW="container.lg"
      justify="space-between"
    >
      <Chakra.Text>
        Instant
        <Chakra.Text
          as="span"
          fontWeight="bold"
          bgGradient="linear(to-l, teal.200, teal.600)"
          bgClip="text"
          py="4"
        >
          Carousels
        </Chakra.Text>
      </Chakra.Text>
      <Chakra.Button colorScheme="teal" borderRadius="0">
        Log Out
      </Chakra.Button>
    </Chakra.HStack>
  );
};
