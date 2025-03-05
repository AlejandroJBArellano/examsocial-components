export interface IQuestion {
  question: string;
  options: { text: string; correct?: boolean }[];
}

export type ContentTypes =
  | "YOUTUBE"
  | "TEXT"
  | "LINK"
  | "IMAGE"
  | "VIDEO"
  | "AUDIO"
  | "FILE";
