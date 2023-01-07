import React from "react";
import * as Chakra from "@chakra-ui/react";

interface InputProps extends Chakra.InputProps {
  label: string;
  helperText?: string;
}

export const Input = ({ label, helperText, ...props }: InputProps) => {
  return (
    <Chakra.FormControl w="full">
      <Chakra.FormLabel fontSize="xs" color="gray.500">
        {label}
      </Chakra.FormLabel>
      <Chakra.Input
        bg="gray.800"
        _hover={{ bg: "gray.800" }}
        borderRadius="0"
        fontSize="xs"
        focusBorderColor="teal.500"
        variant="filled"
        {...props}
      />
      <Chakra.FormHelperText fontSize="xs" color="gray.500">
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
      <Chakra.FormLabel fontSize="xs" color="gray.500">
        {label}
      </Chakra.FormLabel>
      <Chakra.Textarea
        bg="gray.800"
        _hover={{ bg: "gray.800" }}
        borderRadius="0"
        fontSize="xs"
        focusBorderColor="teal.500"
        variant="filled"
        {...props}
      />
      <Chakra.FormHelperText fontSize="xs" color="gray.500">
        {helperText}
      </Chakra.FormHelperText>
    </Chakra.FormControl>
  );
};
