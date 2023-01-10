import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { useToasts } from "../../hooks/useToasts";

interface IWithCopy {
  children: React.ReactNode;
  value: string;
}

export const WithCopy = ({ children, value }: IWithCopy) => {
  const { displayToast } = useToasts();

  const handleCopyToClipboard = (value: string): void => {
    navigator.clipboard.writeText(value);
    displayToast("success", "Copied successfully");
  };

  return (
    <Chakra.HStack w="full" spacing="4">
      {children}
      <Chakra.IconButton
        size="xs"
        colorScheme="teal"
        variant="ghost"
        aria-label="Copy"
        cursor="pointer"
        as={Icon.HiOutlineClipboardCopy}
        _hover={{ bg: "transparent", color: "teal.300" }}
        onClick={() => handleCopyToClipboard(value)}
      />
    </Chakra.HStack>
  );
};
