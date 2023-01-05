import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { CardContent } from "../../components/CardContent";
import { ICardContent } from "../../entities/ICard";
import { TemplateNewCarousel } from "../../components/TemplateNewCarousel";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

  const cardRefs = React.useRef<any[]>([]);
  cardRefs.current = state.cards.map(
    (_, i) => cardRefs.current[i] ?? React.createRef()
  );

  const handleDownload = async () => {
    try {
      const pdf = new jsPDF({
        unit: "px",
        compress: true,
        format: [480, 600],
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      for (let card of cardRefs.current) {
        const canvas = await html2canvas(card.current, {
          scale: 2,
        });

        const data = canvas.toDataURL("image/png");

        pdf.addImage(data, "PNG", 0, 0, width, height);
        pdf.addPage();
      }

      console.log("outside loop");

      pdf.save("print.pdf");
    } catch (e) {
      console.log(e);
    }
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

  const handleEditCard = (CardContent: string, key: string, value: string) => {
    setState((prev) => ({
      ...prev,
      cards: prev.cards.map((card) => {
        if (CardContent === card.content) {
          return {
            ...card,
            [key]: value,
          };
        }
        return card;
      }),
    }));
  };

  const isHandlAddCardEnabled = !!state.content && !!state.title;

  return (
    <TemplateNewCarousel
      header={
        <Chakra.Grid h="10vh" w="full" maxW="container.lg" alignItems="center">
          <Chakra.Text>InstantCarousels</Chakra.Text>
        </Chakra.Grid>
      }
      leftSection={
        <Chakra.Grid w="full" gap="16" p="8">
          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
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
          </Chakra.Grid>

          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
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
          </Chakra.Grid>

          <Chakra.Grid w="full" justifyItems="flex-start" gap="8">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              3. Content
            </Chakra.Text>

            <Chakra.Grid w="full" gap="8">
              {state.cards.map((card, index) => (
                <Chakra.VStack
                  key={index}
                  w="full"
                  align="flex-start"
                  spacing="4"
                >
                  <Chakra.Text color="cyan.300" fontSize="xs" fontWeight="bold">
                    Card #{index + 1}
                  </Chakra.Text>
                  <Chakra.Input
                    placeholder="Title"
                    variant="flushed"
                    value={card.title}
                    size="xs"
                    onChange={(e) =>
                      handleEditCard(card.content, "title", e.target.value)
                    }
                  />
                  <Chakra.Textarea
                    placeholder="Content"
                    variant="flushed"
                    size="xs"
                    value={card.content}
                    onChange={(e) =>
                      handleEditCard(card.content, "content", e.target.value)
                    }
                  />
                  <Chakra.Input
                    placeholder="Background Image URL"
                    variant="flushed"
                    size="xs"
                    value={card.bgImage}
                    onChange={(e) =>
                      handleEditCard(card.content, "bgImage", e.target.value)
                    }
                  />
                </Chakra.VStack>
              ))}
            </Chakra.Grid>
            <Chakra.Grid w="full" justifyItems="flex-start">
              <Chakra.Text color="cyan.300" fontSize="xs" fontWeight="bold">
                New Card
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
            </Chakra.Grid>

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
          </Chakra.Grid>
        </Chakra.Grid>
      }
      rightSection={
        <Chakra.Grid w="full" gap="2" p="8" justifyItems="center">
          {state.cards.length !== 0 &&
            state.cards.map((card, cardIndex) => {
              return (
                <CardContent
                  key={card.content}
                  title={card.title}
                  content={card.content}
                  bgImage={card.bgImage}
                  subject={state.subject}
                  authorName={state.authorName}
                  authorHandle={state.authorHandle}
                  authorAvatar={state.authorAvatarURL}
                  ref={cardRefs.current[cardIndex]}
                />
              );
            })}

          {state.cards.length === 0 && (
            <CardContent
              subject={state.subject}
              title={state.title}
              content={state.content}
              bgImage={state.bgImage}
              authorName={state.authorName}
              authorHandle={state.authorHandle}
              authorAvatar={state.authorAvatarURL}
            />
          )}

          <Chakra.Button onClick={handleDownload}>Download</Chakra.Button>
        </Chakra.Grid>
      }
    />
  );
};
