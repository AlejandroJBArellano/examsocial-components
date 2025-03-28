import * as Yup from "yup";
import { collectionSchema, examSchema, questionSchema } from "./schemas";

export type Exam = Yup.InferType<typeof examSchema>;
export type Question = Yup.InferType<typeof questionSchema>;
export type CollectionType = Yup.InferType<typeof collectionSchema>;

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
