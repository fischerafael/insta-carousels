import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";

export interface WithAccordionProps {
  children: React.ReactNode;
  header: React.ReactNode;
  defaultValue?: boolean;
}

export const WithAccordion = ({
  children,
  header,
  defaultValue = true,
}: WithAccordionProps) => {
  const [isOpen, setOpen] = React.useState(defaultValue);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Chakra.VStack
      w="full"
      borderBottom="1px"
      borderTop="1px"
      borderColor="gray.700"
      py="8"
      gap="6"
    >
      <Chakra.HStack w="full" justify="space-between">
        {header}
        <Chakra.IconButton
          aria-label="close-open"
          variant="ghost"
          as={isOpen ? Icon.HiOutlineMinus : Icon.HiOutlinePlus}
          size="xs"
          colorScheme="teal"
          _hover={{ bg: "transparent", color: "teal.300" }}
          cursor="pointer"
          onClick={handleToggle}
        />
      </Chakra.HStack>
      {isOpen ? <>{children}</> : null}
    </Chakra.VStack>
  );
};
