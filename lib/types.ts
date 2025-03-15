import * as Yup from "yup";
import { collectionSchema, questionSchema } from "./schemas";

export type Question = Yup.InferType<typeof questionSchema>;
export type Collection = Yup.InferType<typeof collectionSchema>;

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
