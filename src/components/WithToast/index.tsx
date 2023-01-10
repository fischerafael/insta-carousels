import React from "react";
import * as Chakra from "@chakra-ui/react";
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
    <>
      {children}
      <Chakra.Button onClick={() => handleCopyToClipboard(value)}>
        Copy
      </Chakra.Button>
    </>
  );
};
