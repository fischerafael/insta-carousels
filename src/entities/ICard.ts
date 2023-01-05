export interface ICard extends ICardContent {
  subject: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
}

export interface ICardContent {
  content: string;
  id: string;
  title?: string;
  bgImage?: string;
}
