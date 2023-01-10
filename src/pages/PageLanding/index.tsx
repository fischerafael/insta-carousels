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
        <Chakra.Grid maxW="container.lg" padding="8">
          <Chakra.VStack w="full" h="70vh" justify="center">
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
          <Chakra.Grid
            w="full"
            maxW="container.lg"
            gap="16"
            justifyItems="center"
            bg="gray.800"
            py="16"
            borderRadius="32"
          >
            <Chakra.Text
              fontSize="2xl"
              maxW="500px"
              fontWeight="medium"
              textAlign="center"
              px="8"
            >
              Write the content of your carousel as if you were writing Tweets.
              Fill your name and handle so people can find you!
            </Chakra.Text>
            <Chakra.Image
              px="8"
              src="/form.svg"
              maxW="400px"
              shadow="lg"
              border="1px"
              borderColor="gray.700"
              borderRadius="16"
            />
            <Chakra.Text
              px="8"
              fontSize="2xl"
              maxW="500px"
              fontWeight="medium"
              textAlign="center"
            >
              You can add as many cards as you want to your carousel.
            </Chakra.Text>
            <Chakra.Image
              px="8"
              src="/download.svg"
              maxW="400px"
              shadow="lg"
              border="1px"
              borderColor="gray.700"
              borderRadius="16"
            />
            <Chakra.Text
              px="8"
              fontSize="2xl"
              maxW="500px"
              fontWeight="medium"
              textAlign="center"
            >
              Once you are done, just Preview your Carousel and, if everything
              is looking fine, download it in PDF - the format expected by
              Linkedin.
            </Chakra.Text>

            <Chakra.Button
              colorScheme="teal"
              borderRadius="0"
              size="lg"
              onClick={handleLoginWithGoogle}
              isLoading={state.isLoading}
            >
              Start Creating Carousels For Free
            </Chakra.Button>
          </Chakra.Grid>
        </Chakra.Grid>
      }
    />
  );
};
