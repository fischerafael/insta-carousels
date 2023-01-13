import React from "react";
import * as Chakra from "@chakra-ui/react";

export const Header = ({
  onLogout,
  isLogged,
  onLogin,
}: {
  onLogout?: () => void;
  onLogin?: () => void;
  isLogged?: boolean;
}) => {
  return (
    <Chakra.HStack
      h="10vh"
      w="full"
      maxW="container.lg"
      justify="space-between"
    >
      <Chakra.Text>
        <Chakra.Text
          as="span"
          fontWeight="bold"
          bgGradient="linear(to-l, teal.200, teal.600)"
          bgClip="text"
          py="4"
        >
          Carousel
        </Chakra.Text>
        Builder
      </Chakra.Text>

      {isLogged && (
        <Chakra.Button colorScheme="teal" borderRadius="0" onClick={onLogout}>
          Log Out
        </Chakra.Button>
      )}
    </Chakra.HStack>
  );
};
