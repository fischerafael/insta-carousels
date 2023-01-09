import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { TemplateHeaderMain } from "../../components/TemplateHeaderMain";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { handleLogIn } from "../../infra/firebase";
import { useUserStore } from "../../store/user";

export const PageLanding = () => {
  const userStore = useUserStore();
  const [state, setState] = React.useState({ isLoading: false });

  const handleLoading = (boolean: boolean): void => {
    setState((prev) => ({ ...prev, isLoading: boolean }));
  };

  const handleLoginWithGoogle = async () => {
    try {
      handleLoading(true);

      const user = await handleLogIn();

      userStore.methods.setUser(
        user?.email!,
        user?.uid!,
        user?.displayName!,
        user?.photoURL!
      );

      handleNavigateTo("/app");
    } catch (e: any) {
      console.log(e);
    } finally {
      handleLoading(false);
    }
  };

  return (
    <TemplateHeaderMain
      header={<Header />}
      main={
        <Chakra.VStack maxW="container.lg" spacing="8">
          <Chakra.Text fontSize="6xl" fontWeight="bold" textAlign="center">
            The easiest way to create <br />
            <Chakra.Text
              as="span"
              bgGradient="linear(to-l, teal.200, teal.600)"
              bgClip="text"
            >
              Linkedin Carousels
            </Chakra.Text>
          </Chakra.Text>
          <Chakra.Button
            colorScheme="teal"
            borderRadius="0"
            size="lg"
            onClick={handleLoginWithGoogle}
            isLoading={state.isLoading}
          >
            Start Creating
          </Chakra.Button>
        </Chakra.VStack>
      }
    />
  );
};
