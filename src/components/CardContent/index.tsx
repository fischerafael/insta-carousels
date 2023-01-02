import React from "react";
import * as Chakra from "@chakra-ui/react";

interface ICard {
  bgImage?: string;
  theme: string;
  title: string;
  content: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
}

export const CardContent = (props: ICard) => {
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
        bgImage={props.bgImage}
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
          <Chakra.Text color="gray.300">{props.theme}</Chakra.Text>
          <Chakra.Text color="cyan.300" fontSize="32" fontWeight="bold">
            {props.title}
          </Chakra.Text>
          <Chakra.Text lineHeight="10" fontSize="20">
            {props.content}
          </Chakra.Text>
        </Chakra.VStack>

        <Chakra.HStack spacing="4" w="full" justify="flex-start">
          <Chakra.Avatar src={props.authorAvatar} />
          <Chakra.VStack spacing="0">
            <Chakra.Text color="white">{props.authorName}</Chakra.Text>{" "}
            <Chakra.Text color="gray.400">@{props.authorHandle}</Chakra.Text>
          </Chakra.VStack>
        </Chakra.HStack>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
