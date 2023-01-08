import React from "react";
import * as Chakra from "@chakra-ui/react";

interface InputProps extends Chakra.InputProps {
  label: string;
  helperText?: string;
}

export const Input = ({ label, helperText, ...props }: InputProps) => {
  return (
    <Chakra.FormControl w="full">
      <Chakra.FormLabel fontSize="xs" color="gray.300">
        {label}
      </Chakra.FormLabel>
      <Chakra.Input
        bg="gray.800"
        _hover={{ bg: "gray.800" }}
        borderRadius="0"
        fontSize="sm"
        p="6"
        focusBorderColor="teal.500"
        variant="filled"
        border="1px"
        borderColor="gray.700"
        {...props}
      />
      <Chakra.FormHelperText fontSize="xs" color="gray.300">
        {helperText}
      </Chakra.FormHelperText>
    </Chakra.FormControl>
  );
};

interface TextAreaProps extends Chakra.TextareaProps {
  label: string;
  helperText?: string;
}

export const TextArea = ({ label, helperText, ...props }: TextAreaProps) => {
  return (
    <Chakra.FormControl w="full">
      <Chakra.FormLabel fontSize="xs" color="gray.300">
        {label}
      </Chakra.FormLabel>
      <Chakra.Textarea
        bg="gray.800"
        _hover={{ bg: "gray.800" }}
        borderRadius="0"
        fontSize="sm"
        focusBorderColor="teal.500"
        variant="filled"
        border="1px"
        borderColor="gray.700"
        p="6"
        {...props}
      />
      <Chakra.FormHelperText fontSize="xs" color="gray.300">
        {helperText}
      </Chakra.FormHelperText>
    </Chakra.FormControl>
  );
};
