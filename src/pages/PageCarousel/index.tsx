import React from "react";
import * as Chakra from "@chakra-ui/react";
import { CardContent } from "../../components/CardContent";

export const PageCarousel = () => {
  return (
    <Chakra.VStack bg="gray.900" color="white" align="center" spacing="0">
      <Chakra.HStack h="10vh" w="full" maxW="container.lg">
        <Chakra.Text>InstantCarousels</Chakra.Text>
      </Chakra.HStack>

      <Chakra.Grid
        minH="90vh"
        w="full"
        maxW="container.lg"
        templateColumns="1fr 2fr"
      >
        <Chakra.VStack w="full">
          <Chakra.Text>InstantCarousels</Chakra.Text>
        </Chakra.VStack>

        <Chakra.VStack w="full" spacing="0" py="8">
          <CardContent />
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.VStack>
  );
};
