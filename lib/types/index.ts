export interface IQuestion {
  question: string;
  options: { text: string; correct?: boolean; _id?: string }[];
  _id?: string;
}

export type ContentTypes =
  | "YOUTUBE"
  | "TEXT"
  | "LINK"
  | "IMAGE"
  | "VIDEO"
  | "AUDIO"
  | "FILE";

export type ThemeSetting =
  | "WHITEBOARD"
  | "INDUSTRIAL_EDGE"
  | "EARTHY_TONES"
  | "VIBRANT_ORCHID";
