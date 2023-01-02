import React from "react";
import * as Chakra from "@chakra-ui/react";
import { CardContent } from "../../components/CardContent";

export const PageCarousel = () => {
  const [state, setState] = React.useState({
    authorName: "",
    authorHandle: "",
    authorAvatarURL: "",
    subject: "",
    title: "",
    content: "",
    bgImage: "",
  });

  return (
    <Chakra.VStack bg="gray.900" color="white" align="center" spacing="0">
      <Chakra.HStack h="10vh" w="full" maxW="container.lg">
        <Chakra.Text>InstantCarousels</Chakra.Text>
      </Chakra.HStack>

      <Chakra.Grid
        minH="90vh"
        w="full"
        maxW="container.lg"
        templateColumns="1fr 2fr"
      >
        <Chakra.VStack w="full" align="flex-start" spacing="8">
          <Chakra.VStack w="full" align="flex-start">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              1. Author
            </Chakra.Text>
            <Chakra.Input placeholder="Author Name" variant="flushed" />
            <Chakra.Input placeholder="Author Handle" variant="flushed" />
            <Chakra.Input placeholder="Author Avatar URL" variant="flushed" />
          </Chakra.VStack>

          <Chakra.VStack w="full" align="flex-start">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              2. Theme
            </Chakra.Text>

            <Chakra.Input placeholder="Theme" variant="flushed" />
            <Chakra.Input placeholder="Background Image" variant="flushed" />
          </Chakra.VStack>

          <Chakra.VStack w="full" align="flex-start">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              3. Content
            </Chakra.Text>
            <Chakra.Input placeholder="Title" variant="flushed" />
            <Chakra.Input placeholder="Content" variant="flushed" />
          </Chakra.VStack>
        </Chakra.VStack>

        <Chakra.VStack w="full" spacing="0">
          <CardContent
            subject="#linkedin"
            title="Carousel Secrets"
            content="Ok so, you guys like carousels. You really like them. Everyone’s
            making them. It’s a carousel-ebration. But it’s also a
            carou-tastrophe."
            bgImage="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn"
            authorName="Rafael Fischer"
            authorHandle="fischerafael"
            authorAvatar="https://media.licdn.com/dms/image/C4D03AQGXucqlC1iMaA/profile-displayphoto-shrink_800_800/0/1631755595170?e=1677715200&v=beta&t=UDQuYR5w6V7F7to_QBCtan0nnGnKKr9SKsSMwI1KN8U"
          />
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.VStack>
  );
};
