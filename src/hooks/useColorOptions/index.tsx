import { IColors } from "../../entities/IColors";

export const useColorOptions = () => {
  const colorOptions: IColors[] = [
    "black",
    "blue",
    "cyan",
    "gray",
    "green",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "white",
    "yellow",
  ];
  return colorOptions;
};
