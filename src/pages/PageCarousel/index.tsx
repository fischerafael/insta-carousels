import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { CardContent } from "../../components/CardContent";
import { TemplateNewCarousel } from "../../components/TemplateNewCarousel";
import { Input, TextArea } from "../../components/Input";
import { IconButton } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { WithCopy } from "../../components/WithToast";
import { usePageCarousel } from "./hook/usePageCarousel";
import { WithAccordion } from "../../components/WithAccordion";

export const PageCarousel = () => {
  const { state, methods } = usePageCarousel();

  return (
    <TemplateNewCarousel
      header={
        <Header onLogout={methods.handleLogout} isLogged={state.isLogged} />
      }
      leftSection={
        <Chakra.Grid w="full" gap="4" p="4">
          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
            <WithAccordion
              header={
                <Chakra.Text fontSize="xs" fontWeight="bold">
                  1. Author
                </Chakra.Text>
              }
            >
              <>
                <WithCopy value={state.state.authorName}>
                  <Input
                    label="Author Name"
                    value={state.state.authorName}
                    onChange={(e) =>
                      methods.handleOnChange("authorName", e.target.value)
                    }
                    helperText={state.authorNameHelperText}
                    focusBorderColor={state.authorNameFocusBorderColor}
                  />
                </WithCopy>
                <WithCopy value={state.state.authorHandle}>
                  <Input
                    label="Author Handle"
                    value={state.state.authorHandle}
                    onChange={(e) =>
                      methods.handleOnChange("authorHandle", e.target.value)
                    }
                    helperText={state.authorHandleHelperText}
                  />
                </WithCopy>
              </>
            </WithAccordion>
          </Chakra.Grid>

          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              2. Subject
            </Chakra.Text>
            <WithCopy value={state.state.subject}>
              <Input
                label="Subject"
                value={state.state.subject}
                onChange={(e) =>
                  methods.handleOnChange("subject", e.target.value)
                }
                helperText={state.subjectHelperText}
              />
            </WithCopy>
          </Chakra.Grid>

          <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
            <Chakra.Text fontSize="xs" fontWeight="bold">
              3. Content
            </Chakra.Text>

            <Chakra.Grid w="full" gap="8">
              {state.state.cards.map((card, index, array) => (
                <Chakra.HStack
                  key={index}
                  w="full"
                  align="flex-start"
                  spacing="2"
                  border="1px"
                  borderColor="gray.700"
                  bg="gray.800"
                >
                  <Chakra.VStack w="full" spacing="8" py="8" pl="8">
                    <Chakra.HStack w="full" justify="space-between">
                      <Chakra.Text color="gray.300" fontSize="xs">
                        Card {index + 1}/{state.state.cards.length}
                      </Chakra.Text>
                      <Chakra.IconButton
                        aria-label="Remove"
                        colorScheme="teal"
                        icon={<Icon.HiOutlineTrash />}
                        color="gray.100"
                        size="xs"
                        borderRadius="0"
                        isDisabled={state.isRemoveCardDisabled}
                        onClick={() => methods.handleRemoveCard(card.id)}
                      />
                    </Chakra.HStack>

                    <WithCopy value={card.title}>
                      <Input
                        label="Title"
                        value={card.title}
                        onChange={(e) =>
                          methods.handleEditCard(
                            card.id,
                            "title",
                            e.target.value
                          )
                        }
                        helperText={methods.formatHelperText(card.title!, 30)}
                        _focus={{ bg: "gray.900" }}
                        _hover={{ bg: "gray.900" }}
                        bg="gray.900"
                      />
                    </WithCopy>

                    <WithCopy value={card.content}>
                      <TextArea
                        label="Content"
                        value={card.content}
                        onChange={(e) =>
                          methods.handleEditCard(
                            card.id,
                            "content",
                            e.target.value
                          )
                        }
                        helperText={methods.formatHelperText(
                          card.content!,
                          200
                        )}
                        _focus={{ bg: "gray.900" }}
                        _hover={{ bg: "gray.900" }}
                        bg="gray.900"
                      />
                    </WithCopy>
                  </Chakra.VStack>
                  <Chakra.VStack h="full" justify="space-between">
                    <IconButton
                      size="xs"
                      aria-label="move up"
                      colorScheme="teal"
                      borderRadius="0"
                      variant="ghost"
                      icon={<Icon.HiOutlineChevronUp />}
                      onClick={() => methods.handleMoveCard(index, "previous")}
                      isDisabled={index === 0 ? true : false}
                    />

                    <IconButton
                      size="xs"
                      aria-label="move up"
                      colorScheme="teal"
                      borderRadius="0"
                      variant="ghost"
                      icon={<Icon.HiOutlineChevronDown />}
                      onClick={() => methods.handleMoveCard(index, "next")}
                      isDisabled={index === array.length - 1 ? true : false}
                    />
                  </Chakra.VStack>
                </Chakra.HStack>
              ))}
            </Chakra.Grid>

            <Chakra.HStack w="full" justify="flex-end">
              <Chakra.Button
                colorScheme="teal"
                borderRadius="0"
                isDisabled={!state.isHandlAddCardEnabled}
                onClick={methods.handleAddCard}
              >
                Add Card
              </Chakra.Button>
            </Chakra.HStack>

            <Chakra.Grid w="full" justifyItems="flex-start" gap="4">
              <Chakra.Text fontSize="xs" fontWeight="bold">
                4. File
              </Chakra.Text>

              <Input
                label="File Name"
                value={state.state.fileName}
                onChange={(e) =>
                  methods.handleOnChange("fileName", e.target.value)
                }
                helperText={state.fileName}
              />
            </Chakra.Grid>
          </Chakra.Grid>
        </Chakra.Grid>
      }
      rightSection={
        <Chakra.Grid w="full" gap="8" p="8" justifyItems="center">
          {state.state.cards.length !== 0 &&
            state.state.cards.map((card, cardIndex) => {
              return (
                <CardContent
                  id={card.id}
                  key={card.id}
                  title={card.title}
                  content={card.content}
                  bgImage={card.bgImage}
                  subject={state.state.subject}
                  authorName={state.state.authorName}
                  authorHandle={state.state.authorHandle}
                  authorAvatar={state.state.authorAvatarURL}
                  ref={state.cardRefs.current[cardIndex]}
                />
              );
            })}

          <Chakra.HStack w="full" justify="flex-end">
            <Chakra.Button
              colorScheme="teal"
              borderRadius="0"
              onClick={methods.handleDownload}
              isDisabled={!state.isDownloadEnabled}
              isLoading={state.state.isLoading}
            >
              Download
            </Chakra.Button>
          </Chakra.HStack>
        </Chakra.Grid>
      }
    />
  );
};
