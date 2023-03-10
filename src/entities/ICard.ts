import { IColors } from "./IColors";

export interface ICard extends ICardContent {
  subject: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  accentColor: IColors;
  bgColor: IColors;
  textColor: IColors;
}

export interface ICardContent {
  content: string;
  id: string;
  title?: string;
  bgImage?: string;
}
