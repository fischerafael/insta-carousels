import React from "react";
import * as Chakra from "@chakra-ui/react";
import { useRouter } from "next/router";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const Header = () => {
  const { asPath } = useRouter();

  const isLogged = asPath === "/app";

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
      {isLogged ? (
        <Chakra.Button
          colorScheme="teal"
          borderRadius="0"
          onClick={() => handleNavigateTo("/")}
        >
          Log Out
        </Chakra.Button>
      ) : (
        <Chakra.Button
          colorScheme="teal"
          borderRadius="0"
          onClick={() => handleNavigateTo("/app")}
        >
          Log In
        </Chakra.Button>
      )}
    </Chakra.HStack>
  );
};
