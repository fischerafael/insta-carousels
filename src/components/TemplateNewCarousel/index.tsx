import React, { ReactElement, useEffect, useState } from "react";
import * as Chakra from "@chakra-ui/react";
import { Button, useBreakpointValue } from "@chakra-ui/react";

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
  const breakpoint = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const [isCardVisible, setCardVisible] = useState(false);

  return (
    <Chakra.Grid
      w="full"
      h="100vh"
      bg="gray.900"
      color="white"
      justifyItems="center"
      position="relative"
    >
      <Chakra.Grid h="10vh">{header}</Chakra.Grid>

      <Button position="fixed" left="8" bottom="8" zIndex="100" shadow="xl">
        Preview Carousel
      </Button>

      <Chakra.Grid bg="gray.900" w="full" justifyItems="center">
        <Chakra.Grid
          h="full"
          maxW="container.lg"
          w="full"
          gridTemplateColumns="1fr"
        >
          {breakpoint !== "sm" && (
            <Chakra.Grid
              h="full"
              maxW="container.lg"
              w="full"
              gridTemplateColumns={["1fr", "1fr", "2fr 3fr", "1fr 2fr"]}
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
                    background: "#1A202C",
                    borderRadius: "24px",
                  },
                }}
                pb="16"
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
                    background: "#1A202C",
                    borderRadius: "24px",
                  },
                }}
              >
                {rightSection}
              </Chakra.Grid>
            </Chakra.Grid>
          )}
          {breakpoint === "sm" && !isCardVisible && (
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
                  background: "#1A202C",
                  borderRadius: "24px",
                },
              }}
              pb="16"
            >
              {leftSection}
            </Chakra.Grid>
          )}
          {breakpoint === "sm" && isCardVisible && (
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
                  background: "#1A202C",
                  borderRadius: "24px",
                },
              }}
            >
              {rightSection}
            </Chakra.Grid>
          )}
        </Chakra.Grid>
      </Chakra.Grid>
    </Chakra.Grid>
  );

  return (
    <Chakra.Grid
      w="full"
      h="100vh"
      bg="gray.900"
      color="white"
      justifyItems="center"
    >
      <Chakra.Grid h="10vh">{header}</Chakra.Grid>

      <Chakra.Grid bg="gray.900" w="full" justifyItems="center">
        <Chakra.Grid
          h="full"
          maxW="container.lg"
          w="full"
          gridTemplateColumns={["1fr", "1fr", "2fr 3fr", "1fr 2fr"]}
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
                background: "#1A202C",
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
                background: "#1A202C",
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
