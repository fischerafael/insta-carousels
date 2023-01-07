import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { CardContent } from "../../components/CardContent";
import { ICardContent } from "../../entities/ICard";
import { TemplateNewCarousel } from "../../components/TemplateNewCarousel";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { generateUUID } from "../../utils/generate-uuid";
import { Input, TextArea } from "../../components/Input";
import { IconButton } from "@chakra-ui/react";

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
    cards: [
      {
        content: "",
        id: generateUUID(),
        bgImage: "",
        title: "",
      },
    ],
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

      let currentIndex = 0;

      for (let card of cardRefs.current) {
        const canvas = await html2canvas(card.current, {
          scale: 2,
        });

        const data = canvas.toDataURL("image/png");

        pdf.addImage(data, "PNG", 0, 0, width, height);

        currentIndex++;
        if (currentIndex === cardRefs.current.length) break;

        pdf.addPage();
      }

      console.log("outside loop");

      pdf.save(`instant-carousel-${state.authorName}.pdf`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddCard = () => {
    setState((prev) => ({
      ...prev,
      cards: [
        ...prev.cards,
        {
          content: prev.content,
          title: prev.title,
          bgImage: prev.bgImage,
          id: generateUUID(),
        },
      ],
      content: "",
      title: "",
      bgImage: "",
    }));
  };

  const handleRemoveCard = (cardId: string) => {
    if (state.cards.length <= 1) return;
    setState((prev) => ({
      ...prev,
      cards: prev.cards.filter((card) => card.id !== cardId),
    }));
  };

  const handleEditCard = (cardId: string, key: string, value: string) => {
    setState((prev) => ({
      ...prev,
      cards: prev.cards.map((card) => {
        if (cardId === card.id) {
          return {
            ...card,
            [key]: value,
          };
        }
        return card;
      }),
    }));
  };

  const handleMoveCard = (
    currentIndex: number,
    prevOrNext: "previous" | "next"
  ) => {
    const previousItemIndex = currentIndex - 1;
    const nextItemIndex = currentIndex + 1;

    const updatedArr =
      prevOrNext === "previous"
        ? state.cards.map((card, index) => {
            if (previousItemIndex < 0) return card;
            if (previousItemIndex === index) {
              return state.cards[currentIndex];
            }
            if (currentIndex === index) {
              return state.cards[previousItemIndex];
            }
            return card;
          })
        : state.cards.map((card, index) => {
            if (nextItemIndex === state.cards.length) return card;
            if (currentIndex === index) {
              return state.cards[nextItemIndex];
            }
            if (nextItemIndex === index) {
              return state.cards[currentIndex];
            }
            return card;
          });

    setState((prev) => ({ ...prev, cards: updatedArr }));
  };

  const lastItemOnCardArray = state.cards[state.cards.length - 1];
  const isHandlAddCardEnabled =
    !!lastItemOnCardArray.content && !!lastItemOnCardArray.title;
  const isDownloadEnabled = state.cards.length !== 0;
  const isRemoveCardDisabled = state.cards.length <= 1;

  const calculateWords = (string: string): number => {
    return string.length || 0;
  };
  const formatHelperText = (stateAtt: string, maxValue: number): string =>
    `${String(calculateWords(stateAtt))}/${maxValue}`;

  const authorNameHelperText = formatHelperText(state.authorName, 30);
  const authorHandleHelperText = formatHelperText(state.authorHandle, 30);
  const subjectHelperText = formatHelperText(state.subject, 30);

  const authorNameFocusBorderColor =
    state.authorName.length > 30 ? "red.800" : "teal.500";

  return (
    <TemplateNewCarousel
      header={
        <Chakra.Grid h="10vh" w="full" maxW="container.lg" alignItems="center">
          <Chakra.Text>InstantCarousels</Chakra.Text>
        </Chakra.Grid>
      }
      leftSection={
        <Chakra.Grid w="full" gap="4" p="8">
          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              1. Author
            </Chakra.Text>
            <Input
              label="Author Name"
              value={state.authorName}
              onChange={(e) => handleOnChange("authorName", e.target.value)}
              helperText={authorNameHelperText}
              focusBorderColor={authorNameFocusBorderColor}
            />
            <Input
              label="Author Handle"
              value={state.authorHandle}
              onChange={(e) => handleOnChange("authorHandle", e.target.value)}
              helperText={authorHandleHelperText}
            />
          </Chakra.Grid>

          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              2. Subject
            </Chakra.Text>
            <Input
              label="Subject"
              value={state.subject}
              onChange={(e) => handleOnChange("subject", e.target.value)}
              helperText={subjectHelperText}
            />
          </Chakra.Grid>

          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              3. Content
            </Chakra.Text>

            <Chakra.Grid w="full" gap="8">
              {state.cards.map((card, index, array) => (
                <Chakra.HStack
                  key={index}
                  w="full"
                  align="flex-start"
                  spacing="2"
                  bg="gray.800"
                >
                  <Chakra.VStack w="full" spacing="0" py="8" pl="8">
                    <Chakra.HStack w="full" justify="space-between">
                      <Chakra.Text color="gray.500" fontSize="xs">
                        Card {index + 1}/{state.cards.length}
                      </Chakra.Text>
                      <Chakra.IconButton
                        aria-label="Remove"
                        colorScheme="teal"
                        icon={<Icon.HiOutlineTrash />}
                        color="gray.100"
                        size="xs"
                        borderRadius="0"
                        isDisabled={isRemoveCardDisabled}
                        onClick={() => handleRemoveCard(card.id)}
                      />
                    </Chakra.HStack>

                    <Input
                      label="Title"
                      value={card.title}
                      onChange={(e) =>
                        handleEditCard(card.id, "title", e.target.value)
                      }
                      helperText={formatHelperText(card.title!, 30)}
                      _focus={{ bg: "gray.900" }}
                      _hover={{ bg: "gray.900" }}
                      bg="gray.900"
                    />

                    <TextArea
                      label="Content"
                      value={card.content}
                      onChange={(e) =>
                        handleEditCard(card.id, "content", e.target.value)
                      }
                      helperText={formatHelperText(card.content!, 200)}
                      _focus={{ bg: "gray.900" }}
                      _hover={{ bg: "gray.900" }}
                      bg="gray.900"
                    />
                  </Chakra.VStack>
                  <Chakra.VStack h="full" justify="space-between">
                    <IconButton
                      size="xs"
                      aria-label="move up"
                      colorScheme="teal"
                      borderRadius="0"
                      variant="ghost"
                      icon={<Icon.HiOutlineChevronUp />}
                      onClick={() => handleMoveCard(index, "previous")}
                      isDisabled={index === 0 ? true : false}
                    />

                    <IconButton
                      size="xs"
                      aria-label="move up"
                      colorScheme="teal"
                      borderRadius="0"
                      variant="ghost"
                      icon={<Icon.HiOutlineChevronDown />}
                      onClick={() => handleMoveCard(index, "next")}
                      isDisabled={index === array.length - 1 ? true : false}
                    />
                  </Chakra.VStack>
                </Chakra.HStack>
              ))}
            </Chakra.Grid>

            <Chakra.IconButton
              aria-label="Add Card"
              colorScheme="teal"
              as={Icon.HiOutlinePlus}
              cursor="pointer"
              w="full"
              size="xs"
              borderRadius="0"
              isDisabled={!isHandlAddCardEnabled}
              onClick={handleAddCard}
            />
          </Chakra.Grid>
        </Chakra.Grid>
      }
      rightSection={
        <Chakra.Grid w="full" gap="8" p="8" justifyItems="center">
          {state.cards.length !== 0 &&
            state.cards.map((card, cardIndex) => {
              return (
                <CardContent
                  id={card.id}
                  key={card.id}
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
              id={""}
              subject={state.subject}
              title={state.title}
              content={state.content}
              bgImage={state.bgImage}
              authorName={state.authorName}
              authorHandle={state.authorHandle}
              authorAvatar={state.authorAvatarURL}
            />
          )}

          <Chakra.HStack w="full" justify="flex-end">
            <Chakra.Button
              colorScheme="teal"
              borderRadius="0"
              onClick={handleDownload}
              isDisabled={!isDownloadEnabled}
            >
              Download
            </Chakra.Button>
          </Chakra.HStack>
        </Chakra.Grid>
      }
    />
  );
};
