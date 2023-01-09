import React from "react";
import * as Chakra from "@chakra-ui/react";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { useUserStore } from "../../store/user";

export const Header = () => {
  const userStore = useUserStore();

  const isLogged = !!userStore.state.email;

  const handleLogout = () => {
    userStore.methods.setUser("", "", "", "");
    handleNavigateTo("/");
  };

  React.useEffect(() => {
    if (!!userStore.state.email) return;
    handleLogout();
  }, [userStore.state.email]);

  return (
    <Chakra.HStack
      h="10vh"
      w="full"
      maxW="container.lg"
      justify="space-between"
    >
      <Chakra.Text>
        <Chakra.Text
          as="span"
          fontWeight="bold"
          bgGradient="linear(to-l, teal.200, teal.600)"
          bgClip="text"
          py="4"
        >
          Carousel
        </Chakra.Text>
        Builder
      </Chakra.Text>

      {isLogged && (
        <Chakra.Button
          colorScheme="teal"
          borderRadius="0"
          onClick={handleLogout}
        >
          Log Out
        </Chakra.Button>
      )}
    </Chakra.HStack>
  );
};
