import { IColors } from "../../entities/IColors";
import { IOption } from "../../entities/IOption";

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
  return colorOptions.map((opt) => ({ name: opt, value: opt } as IOption));
};
