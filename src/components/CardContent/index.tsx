import React, { forwardRef } from "react";
import * as Chakra from "@chakra-ui/react";
import { ICard } from "../../entities/ICard";

// eslint-disable-next-line react/display-name
export const CardContent = forwardRef((props: ICard, ref) => {
  return (
    <Chakra.VStack
      w="480px"
      bgGradient="linear(to-l, gray.800, gray.900)"
      h="600px"
      align="flex-start"
      position="relative"
      overflow="hidden"
      shadow="lg"
      spacing="0"
      ref={ref as any}
    >
      <Chakra.VStack
        w="full"
        h="full"
        p="16"
        zIndex="2"
        justify="space-between"
        // bg="linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.75) 100%)"
      >
        <Chakra.VStack w="full" h="full" align="flex-start" spacing="8">
          <Chakra.Text color="gray.400">
            {props.subject || "Subject"}
          </Chakra.Text>
          <Chakra.Text
            color="teal.300"
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="1"
          >
            {props.title || "Card Title"}
          </Chakra.Text>
          <Chakra.Text lineHeight="10" fontSize="lg">
            {props.content ||
              "The Card Content goes in this place. This section is able to hold a full medium-sized paragraph."}
          </Chakra.Text>
        </Chakra.VStack>

        <Chakra.HStack spacing="4" w="full" justify="flex-start">
          {/* <Chakra.Avatar src={props.authorAvatar} size="sm" /> */}
          <Chakra.VStack spacing="0" align="flex-start">
            <Chakra.Text color="white" fontSize="sm">
              {props.authorName}
            </Chakra.Text>{" "}
            <Chakra.Text color="gray.400" fontSize="xs">
              @{props.authorHandle}
            </Chakra.Text>
          </Chakra.VStack>
        </Chakra.HStack>
      </Chakra.VStack>
    </Chakra.VStack>
  );
});
