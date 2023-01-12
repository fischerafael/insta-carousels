import { ICardContent } from "./ICard";
import { IColors } from "./IColors";

export interface IPageCarouselState {
  isLoading: boolean;
  authorName: string;
  authorHandle: string;
  authorAvatarURL: string;
  subject: string;
  bgImage: string;
  fileName: string;
  cards: ICardContent[];
  accentColor: IColors;
}
