import React from "react";
import * as Chakra from "@chakra-ui/react";

interface InputProps extends Chakra.InputProps {
  label: string;
  helperText?: string;
}

export const Input = ({ label, helperText, ...props }: InputProps) => {
  return (
    <Chakra.FormControl w="full">
      <Chakra.FormLabel>{label}</Chakra.FormLabel>
      <Chakra.Input {...props} />
      <Chakra.FormHelperText>{helperText}</Chakra.FormHelperText>
    </Chakra.FormControl>
  );
};
