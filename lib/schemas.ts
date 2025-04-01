import * as Yup from "yup";
import { Currency, FeedbackCondition } from "./constants";
import { ExamCategory } from "./types";

export const questionSchema = Yup.object({
  title: Yup.string().required("Question is required"),
  _id: Yup.string().required(),
  image: Yup.mixed()
    .nullable()
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) =>
        !value || (value instanceof File && value.type.startsWith("image/")),
    )
    .test(
      "fileSize",
      "File size must be less than 5MB",
      (value) =>
        !value || (value instanceof File && value.size <= 5 * 1024 * 1024),
    ),
  options: Yup.array()
    .of(
      Yup.object({
        text: Yup.string().required("Option text is required"),
        correct: Yup.boolean(),
        _id: Yup.string().required(),
      }),
    )
    .required()
    .min(2, "At least two options are required")
    .test(
      "at-least-one-correct",
      "At least one option must be correct",
      (options) => options?.some((option) => option.correct),
    )
    .test(
      "at-least-one-incorrect",
      "At least one option must be incorrect",
      (options) => options?.some((option) => !option.correct),
    ),
});

export const feedbackSchema = Yup.object({
  message: Yup.string()
    .required("Message is required")
    .min(20, "Message must be at least 20 characters long"),
  condition: Yup.string()
    .oneOf(Object.keys(FeedbackCondition))
    .required("Condition is required"),
  min: Yup.number().when("condition", (condition, schema) =>
    condition[0] === "BETWEEN"
      ? schema.required("Minimum value is required")
      : schema,
  ),
  max: Yup.number().when("condition", (condition, schema) =>
    condition[0] === "BETWEEN"
      ? schema.required("Maximum value is required")
      : schema,
  ),
  equal: Yup.number().when("condition", (condition, schema) =>
    condition[0] === "EQUAL_TO"
      ? schema.required("Equal value is required")
      : schema,
  ),
  gt: Yup.number().when("condition", (condition, schema) =>
    condition[0] === "GREATER_THAN"
      ? schema.required("Greater than value is required")
      : schema,
  ),
  lt: Yup.number().when("condition", (condition, schema) =>
    condition[0] === "LESS_THAN"
      ? schema.required("Less than value is required")
      : schema,
  ),
});

export const timingSchema = Yup.object({
  setting: Yup.string().required("Required"),
  hours: Yup.number().when("setting", {
    is: (val: string) => val === "TOTAL",
    then: (schema) => schema.min(0, "Must be at least 0").required("Required"),
  }),
  minutes: Yup.number().when("setting", {
    is: (val: string) => val === "TOTAL" || val === "PER_QUESTION",
    then: (schema) => schema.min(0, "Must be at least 0").required("Required"),
  }),
  seconds: Yup.number().when("setting", {
    is: (val: string) => val === "PER_QUESTION",
    then: (schema) => schema.min(0, "Must be at least 0").required("Required"),
  }),
});

export const advancedSettingsSchema = Yup.object({
  currency: Yup.string().required("Required").oneOf(Object.keys(Currency)),
  price: Yup.number().min(0, "Must be at least 0").required("Required"),
  showCorrectAnswers: Yup.boolean(),
  sendEmailReport: Yup.boolean(),
  leaderboard: Yup.boolean(),
  feedback: Yup.array().of(feedbackSchema),
  privacy: Yup.object({
    setting: Yup.string().required("Required"),
    invitees: Yup.array().when("setting", {
      is: (val: string) => val === "INVITE_ONLY",
      then: (schema) => schema.of(Yup.string().email("Invalid email")),
    }),
    password: Yup.string().when("setting", {
      is: (val: string) => val === "PASSWORD",
      then: (schema) => schema.required("Required"),
    }),
  }),
  limitParticipants: Yup.boolean(),
  maxParticipants: Yup.number().when("limitParticipants", {
    is: (val: boolean) => val,
    then: (schema) => schema.required("Required"),
  }),
  limitAttempts: Yup.boolean(),
  maxAttempts: Yup.number().when("limitAttempts", {
    is: (val: boolean) => val,
    then: (schema) => schema.min(1, "Must be at least 1").required("Required"),
  }),
  allowAnonymousAnswers: Yup.boolean(),
  randomizeQuestionOrder: Yup.boolean(),
  randomizeOptionsOrder: Yup.boolean(),
  passingScore: Yup.number().min(0, "Must be at least 0").required("Required"),
  timing: timingSchema,
  theme: Yup.string()
    .required("Required")
    .oneOf(["WHITEBOARD", "INDUSTRIAL_EDGE", "EARTHY_TONES", "VIBRANT_ORCHID"]),
  showLogo: Yup.boolean(),
  showBrandName: Yup.boolean(),
});

export const contentSchema = Yup.object({
  type: Yup.string()
    .oneOf(["YOUTUBE", "TEXT", "LINK", "IMAGE", "VIDEO", "AUDIO", "FILE"])
    .required("Content type is required"),
  youtubeUrl: Yup.string().when("type", {
    is: "YOUTUBE",
    then: (schema) =>
      schema.url("Invalid URL").required("YouTube URL is required"),
  }),
  text: Yup.string().when("type", {
    is: "TEXT",
    then: (schema) => schema.required("Text is required"),
  }),
  link: Yup.string().when("type", {
    is: "LINK",
    then: (schema) => schema.url("Invalid URL").required("Link is required"),
  }),
  image: Yup.mixed().when("type", {
    is: "IMAGE",
    then: (schema) => schema.required("Image is required"),
  }),
  video: Yup.mixed().when("type", {
    is: "VIDEO",
    then: (schema) => schema.required("Video is required"),
  }),
  audio: Yup.mixed().when("type", {
    is: "AUDIO",
    then: (schema) => schema.required("Audio is required"),
  }),
  file: Yup.mixed().when("type", {
    is: "FILE",
    then: (schema) => schema.required("File is required"),
  }),
});

export const examSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters long"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long"),
  image: Yup.mixed()
    .required("Image is required")
    .test(
      "fileSize",
      "File too large",
      (value) => !value || (value instanceof File && value.size <= 1024 * 1024),
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        !value ||
        (value &&
          [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
            "image/svg+xml",
            "image/avif",
            "image/heic",
            "image/heif",
            "image/hevc",
          ].includes(value instanceof File ? value.type : "")),
    ),
  category: Yup.string()
    .required("Category is required")
    .oneOf(Object.keys(ExamCategory)),
  advancedSettings: advancedSettingsSchema,
  contents: Yup.array().of(contentSchema).required("Contents are required"),
  questions: Yup.array()
    .of(questionSchema)
    .required("Questions are required")
    .min(1, "At least one question is required"),
});

export const collectionSchema = Yup.object({
  name: Yup.string().required("Collection name is required"),
  _id: Yup.string().required(),
  description: Yup.string().optional(),
  private: Yup.boolean().default(false),
});
