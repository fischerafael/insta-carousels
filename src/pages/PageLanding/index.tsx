import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { TemplateHeaderMain } from "../../components/TemplateHeaderMain";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const PageLanding = () => {
  const handleLogIn = () => {
    handleNavigateTo("/app");
  };

  return (
    <TemplateHeaderMain
      header={<Header />}
      main={
        <Chakra.VStack maxW="container.lg" spacing="8">
          <Chakra.Text fontSize="6xl" fontWeight="bold" textAlign="center">
            The easiest way to create <br />
            <Chakra.Text
              as="span"
              bgGradient="linear(to-l, teal.200, teal.600)"
              bgClip="text"
            >
              Linkedin Carousels
            </Chakra.Text>
          </Chakra.Text>
          <Chakra.Button
            colorScheme="teal"
            borderRadius="0"
            size="lg"
            onClick={handleLogIn}
          >
            Start Creating
          </Chakra.Button>
        </Chakra.VStack>
      }
    />
  );
};
