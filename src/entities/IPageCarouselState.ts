import { ICardContent } from "./ICard";

export interface IPageCarouselState {
  isLoading: boolean;
  authorName: string;
  authorHandle: string;
  authorAvatarURL: string;
  subject: string;
  bgImage: string;
  fileName: string;
  cards: ICardContent[];
}
