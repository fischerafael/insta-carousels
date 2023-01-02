import React from "react";
import * as Chakra from "@chakra-ui/react";

export const CardContent = () => {
  return (
    <Chakra.VStack
      w="480px"
      bg="gray.800"
      h="600px"
      align="flex-start"
      position="relative"
      overflow="hidden"
      spacing="0"
    >
      <Chakra.VStack
        bgImage="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn"
        color="gray.400"
        w="full"
        h="full"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
        zIndex="1"
      />
      <Chakra.VStack
        w="full"
        h="full"
        p="16"
        zIndex="2"
        justify="space-between"
        bg="linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.75) 100%)"
      >
        <Chakra.VStack w="full" h="full" align="flex-start">
          <Chakra.Text color="gray.300">#linkedin</Chakra.Text>
          <Chakra.Text color="cyan.300" fontSize="32" fontWeight="bold">
            Carousel Secrets
          </Chakra.Text>
          <Chakra.Text lineHeight="10" fontSize="20">
            Ok so, you guys like carousels. You really like them. Everyone’s
            making them. It’s a carousel-ebration. But it’s also a
            carou-tastrophe.
          </Chakra.Text>
        </Chakra.VStack>

        <Chakra.HStack spacing="4" w="full" justify="flex-start">
          <Chakra.Avatar src="https://media.licdn.com/dms/image/C4D03AQGXucqlC1iMaA/profile-displayphoto-shrink_800_800/0/1631755595170?e=1677715200&v=beta&t=UDQuYR5w6V7F7to_QBCtan0nnGnKKr9SKsSMwI1KN8U" />
          <Chakra.VStack spacing="0">
            <Chakra.Text color="white">Rafael Fischer</Chakra.Text>{" "}
            <Chakra.Text color="gray.400">@fischerafael</Chakra.Text>
          </Chakra.VStack>
        </Chakra.HStack>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
