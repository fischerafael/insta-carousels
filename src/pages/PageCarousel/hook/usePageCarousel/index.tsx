import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { IPageCarouselState } from "../../../../entities/IPageCarouselState";
import { useSession } from "../../../../hooks/useSession";
import { generateUUID } from "../../../../utils/generate-uuid";
import { getFileName } from "../../../../utils/getFileName";
import { useColorOptions } from "../../../../hooks/useColorOptions";

export const usePageCarousel = () => {
  const { handleLogout, isLogged } = useSession();
  const colors = useColorOptions();

  const [state, setState] = React.useState<IPageCarouselState>({
    isLoading: false,
    authorName: "",
    authorHandle: "",
    authorAvatarURL: "",
    subject: "",
    bgImage: "",
    fileName: "",
    cards: [
      {
        content: "",
        id: generateUUID(),
        bgImage: "",
        title: "",
      },
    ],
  });

  const fileName = getFileName(state.fileName, state.authorName);
  console.log(fileName);

  const handleOnChange = (key: string, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const cardRefs = React.useRef<any[]>([]);
  cardRefs.current = state.cards.map(
    (_, i) => cardRefs.current[i] ?? React.createRef()
  );

  const handleDownload = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
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

      pdf.save(`${fileName}.pdf`);
    } catch (e) {
      console.log(e);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleAddCard = () => {
    setState((prev) => ({
      ...prev,
      cards: [
        ...prev.cards,
        {
          content: "",
          title: "",
          bgImage: "",
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
  const isDownloadEnabled =
    !!lastItemOnCardArray.content && !!lastItemOnCardArray.title;
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

  return {
    state: {
      isLogged: isLogged,
      state: state,
      authorNameHelperText: authorNameHelperText,
      authorHandleHelperText: authorHandleHelperText,
      authorNameFocusBorderColor: authorNameFocusBorderColor,
      subjectHelperText: subjectHelperText,
      isHandlAddCardEnabled: isHandlAddCardEnabled,
      isDownloadEnabled: isDownloadEnabled,
      isRemoveCardDisabled: isRemoveCardDisabled,
      cardRefs: cardRefs,
      fileName: fileName,
    },
    methods: {
      handleLogout: handleLogout,
      handleOnChange: handleOnChange,
      handleAddCard: handleAddCard,
      handleDownload: handleDownload,
      handleEditCard: handleEditCard,
      handleMoveCard: handleMoveCard,
      handleRemoveCard: handleRemoveCard,
      formatHelperText: formatHelperText,
    },
  };
};
