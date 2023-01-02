import React, { ReactElement } from "react";
import * as Chakra from "@chakra-ui/react";

interface ITemplateNewCarousel {
  header: ReactElement;
  leftSection: ReactElement;
  rightSection: ReactElement;
}

export const TemplateNewCarousel = ({
  header,
  leftSection,
  rightSection,
}: ITemplateNewCarousel) => {
  return (
    <Chakra.Grid
      w="full"
      h="100vh"
      bg="gray.900"
      color="white"
      justifyItems="center"
    >
      <Chakra.Grid h="10vh">{header}</Chakra.Grid>

      <Chakra.Grid bg="gray.800" w="full" justifyItems="center">
        <Chakra.Grid
          h="full"
          maxW="container.lg"
          w="full"
          gridTemplateColumns="1fr 2fr"
        >
          <Chakra.Grid
            w="full"
            overflowY="auto"
            h="90vh"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#76E4F7",
                borderRadius: "24px",
              },
            }}
          >
            {leftSection}
          </Chakra.Grid>

          <Chakra.Grid
            w="full"
            overflowY="auto"
            h="90vh"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#76E4F7",
                borderRadius: "24px",
              },
            }}
          >
            {rightSection}
          </Chakra.Grid>
        </Chakra.Grid>
      </Chakra.Grid>
    </Chakra.Grid>
  );
};
