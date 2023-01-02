import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { CardContent } from "../../components/CardContent";
import { ICardContent } from "../../entities/ICard";
import { TemplateNewCarousel } from "../../components/TemplateNewCarousel";

interface IState {
  authorName: string;
  authorHandle: string;
  authorAvatarURL: string;
  subject: string;
  title: string;
  content: string;
  bgImage: string;
  cards: ICardContent[];
}

export const PageCarousel = () => {
  const [state, setState] = React.useState<IState>({
    authorName: "Rafael Fischer",
    authorHandle: "fischerafael",
    authorAvatarURL: "",
    subject: "",
    title: "",
    content: "",
    bgImage: "",
    cards: [],
  });

  const handleOnChange = (key: string, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddCard = () => {
    setState((prev) => ({
      ...prev,
      cards: [
        ...prev.cards,
        { content: prev.content, title: prev.title, bgImage: prev.bgImage },
      ],
      content: "",
      title: "",
      bgImage: "",
    }));
  };

  const isHandlAddCardEnabled = !!state.content && !!state.title;

  console.log(state);

  return (
    <TemplateNewCarousel
      header={
        <Chakra.Grid h="10vh" w="full" maxW="container.lg" alignItems="center">
          <Chakra.Text>InstantCarousels</Chakra.Text>
        </Chakra.Grid>
      }
      leftSection={
        <Chakra.Grid w="full" gap="16" p="8">
          <Chakra.VStack w="full" align="flex-start">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              1. Author
            </Chakra.Text>
            <Chakra.Input
              placeholder="Author Name"
              variant="flushed"
              size="xs"
              value={state.authorName}
              onChange={(e) => handleOnChange("authorName", e.target.value)}
            />
            <Chakra.Input
              placeholder="Author Handle"
              variant="flushed"
              size="xs"
              value={state.authorHandle}
              onChange={(e) => handleOnChange("authorHandle", e.target.value)}
            />
            <Chakra.Input
              placeholder="Author Avatar URL"
              variant="flushed"
              size="xs"
              value={state.authorAvatarURL}
              onChange={(e) =>
                handleOnChange("authorAvatarURL", e.target.value)
              }
            />
          </Chakra.VStack>

          <Chakra.VStack w="full" align="flex-start">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              2. Theme
            </Chakra.Text>

            <Chakra.Input
              placeholder="Subject"
              variant="flushed"
              size="xs"
              value={state.subject}
              onChange={(e) => handleOnChange("subject", e.target.value)}
            />
          </Chakra.VStack>

          <Chakra.VStack w="full" align="flex-start" spacing="8">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              3. Content
            </Chakra.Text>

            <Chakra.VStack w="full" align="flex-start">
              {state.cards.map((card, index) => (
                <>
                  <Chakra.Text fontSize="xs" fontWeight="bold">
                    Card #{index + 1}
                  </Chakra.Text>
                  <Chakra.Input
                    placeholder="Title"
                    variant="flushed"
                    value={card.title}
                    size="xs"
                    onChange={(e) => handleOnChange("title", e.target.value)}
                  />
                  <Chakra.Textarea
                    placeholder="Content"
                    variant="flushed"
                    size="xs"
                    value={card.content}
                    onChange={(e) => handleOnChange("content", e.target.value)}
                  />
                  <Chakra.Input
                    placeholder="Background Image URL"
                    variant="flushed"
                    size="xs"
                    value={card.bgImage}
                    onChange={(e) => handleOnChange("bgImage", e.target.value)}
                  />
                </>
              ))}
            </Chakra.VStack>
            <Chakra.VStack w="full" align="flex-start">
              <>
                <Chakra.Text fontSize="xs" fontWeight="bold">
                  Card #1
                </Chakra.Text>
                <Chakra.Input
                  placeholder="Title"
                  variant="flushed"
                  value={state.title}
                  size="xs"
                  onChange={(e) => handleOnChange("title", e.target.value)}
                />
                <Chakra.Textarea
                  placeholder="Content"
                  variant="flushed"
                  size="xs"
                  value={state.content}
                  onChange={(e) => handleOnChange("content", e.target.value)}
                />
                <Chakra.Input
                  placeholder="Background Image URL"
                  variant="flushed"
                  size="xs"
                  value={state.bgImage}
                  onChange={(e) => handleOnChange("bgImage", e.target.value)}
                />
              </>
            </Chakra.VStack>

            <Chakra.IconButton
              aria-label="Add Card"
              colorScheme="cyan"
              as={Icon.HiOutlinePlus}
              cursor="pointer"
              w="full"
              size="xs"
              isDisabled={!isHandlAddCardEnabled}
              onClick={handleAddCard}
            />
          </Chakra.VStack>
        </Chakra.Grid>
      }
      rightSection={
        <Chakra.Grid w="full" gap="2" p="8" justifyItems="center">
          <CardContent
            subject={state.subject}
            title={state.title}
            content={state.content}
            bgImage={state.bgImage}
            authorName={state.authorName}
            authorHandle={state.authorHandle}
            authorAvatar={state.authorAvatarURL}
          />

          <CardContent
            subject={state.subject}
            title={state.title}
            content={state.content}
            bgImage={state.bgImage}
            authorName={state.authorName}
            authorHandle={state.authorHandle}
            authorAvatar={state.authorAvatarURL}
          />
        </Chakra.Grid>
      }
    />
  );
};
