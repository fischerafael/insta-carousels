import * as Chakra from "@chakra-ui/react";

export const useToasts = () => {
  const toast = Chakra.useToast();

  const displayToast = (type: "success" | "error", title: string) => {
    toast({
      title: title,
      status: type,
      duration: 3000,
    });
  };

  return { displayToast };
};
