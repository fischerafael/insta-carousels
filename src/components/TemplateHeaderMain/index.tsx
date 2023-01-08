import React from "react";
import * as Chakra from "@chakra-ui/react";

interface TemplateHeaderMainProps {
  header: React.ReactElement;
  main: React.ReactElement;
}

export const TemplateHeaderMain = ({
  header,
  main,
}: TemplateHeaderMainProps) => {
  return (
    <Chakra.Grid
      w="full"
      h="100vh"
      bg="gray.900"
      color="white"
      position="relative"
    >
      <Chakra.Grid h="10vh" w="full" justifyItems="center" px="4">
        {header}
      </Chakra.Grid>

      <Chakra.Grid bg="gray.900" w="full" justifyItems="center" px="4">
        {main}
      </Chakra.Grid>
    </Chakra.Grid>
  );
};
