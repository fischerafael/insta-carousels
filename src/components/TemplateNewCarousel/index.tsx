import React, { ReactElement, useEffect, useState } from "react";
import * as Chakra from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { TemplateHeaderMain } from "../TemplateHeaderMain";

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
  const [isCardVisible, setCardVisible] = useState(false);

  const handleToggleCardVisible = (boolean: boolean) => {
    setCardVisible(() => boolean);
  };

  return (
    <TemplateHeaderMain
      header={header}
      main={
        <>
          {!isCardVisible && (
            <Button
              colorScheme="teal"
              position="fixed"
              left="8"
              bottom="8"
              zIndex="100"
              shadow="xl"
              borderRadius="0"
              onClick={() => handleToggleCardVisible(true)}
            >
              Preview Carousel
            </Button>
          )}
          {isCardVisible && (
            <Button
              colorScheme="teal"
              position="fixed"
              left="8"
              bottom="8"
              zIndex="100"
              shadow="xl"
              borderRadius="0"
              onClick={() => handleToggleCardVisible(false)}
            >
              Edit Carousel
            </Button>
          )}
          <Chakra.Grid
            h="full"
            maxW="container.md"
            w="full"
            gridTemplateColumns="1fr"
            justifyItems="center"
          >
            <Chakra.Grid
              h="full"
              maxW="container.md"
              w="full"
              gridTemplateColumns={["1fr"]}
            >
              {!isCardVisible && (
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

              {isCardVisible && (
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
        </>
      }
    />
  );

  return (
    <Chakra.Grid
      w="full"
      h="100vh"
      bg="gray.900"
      color="white"
      position="relative"
    >
      <Chakra.Grid h="10vh" w="full" justifyItems="center">
        {header}
      </Chakra.Grid>

      <Chakra.Grid bg="gray.900" w="full" justifyItems="center">
        {!isCardVisible && (
          <Button
            colorScheme="teal"
            position="fixed"
            left="8"
            bottom="8"
            zIndex="100"
            shadow="xl"
            borderRadius="0"
            onClick={() => handleToggleCardVisible(true)}
          >
            Preview Carousel
          </Button>
        )}
        {isCardVisible && (
          <Button
            colorScheme="teal"
            position="fixed"
            left="8"
            bottom="8"
            zIndex="100"
            shadow="xl"
            borderRadius="0"
            onClick={() => handleToggleCardVisible(false)}
          >
            Edit Carousel
          </Button>
        )}
        <Chakra.Grid
          h="full"
          maxW="container.lg"
          w="full"
          gridTemplateColumns="1fr"
          justifyItems="center"
        >
          <Chakra.Grid
            h="full"
            maxW="container.md"
            w="full"
            gridTemplateColumns={["1fr"]}
          >
            {!isCardVisible && (
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

            {isCardVisible && (
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
    </Chakra.Grid>
  );

  return (
    <Chakra.Grid
      w="full"
      h="100vh"
      bg="gray.900"
      color="white"
      position="relative"
    >
      <Chakra.Grid h="10vh" w="full" justifyItems="center">
        {header}
      </Chakra.Grid>

      {!isCardVisible && (
        <Button
          colorScheme="teal"
          position="fixed"
          left="8"
          bottom="8"
          zIndex="100"
          shadow="xl"
          borderRadius="0"
          onClick={() => handleToggleCardVisible(true)}
        >
          Preview Carousel
        </Button>
      )}
      {isCardVisible && (
        <Button
          colorScheme="teal"
          position="fixed"
          left="8"
          bottom="8"
          zIndex="100"
          shadow="xl"
          borderRadius="0"
          onClick={() => handleToggleCardVisible(false)}
        >
          Edit Carousel
        </Button>
      )}

      <Chakra.Grid bg="gray.900" w="full" justifyItems="center">
        <Chakra.Grid
          h="full"
          maxW="container.lg"
          w="full"
          gridTemplateColumns="1fr"
          justifyItems="center"
        >
          <Chakra.Grid
            h="full"
            maxW="container.md"
            w="full"
            gridTemplateColumns={["1fr"]}
          >
            {!isCardVisible && (
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

            {isCardVisible && (
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
    </Chakra.Grid>
  );
};
