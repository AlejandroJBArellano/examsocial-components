import * as Yup from "yup";
import { FeedbackCondition } from "./constants";

export const questionSchema = Yup.object({
  question: Yup.string().required("Question is required"),
  _id: Yup.string().required(),
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
  randomizeQuestionOrder: Yup.boolean(),
  showCorrectAnswers: Yup.boolean(),
  sendEmailReport: Yup.boolean(),
  leaderboard: Yup.boolean(),
  numberOfAttempts: Yup.number()
    .min(1, "Must be at least 1")
    .required("Required"),
  price: Yup.number().min(0, "Must be at least 0").required("Required"),
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
  timing: timingSchema,
  theme: Yup.string()
    .required("Required")
    .oneOf(["WHITEBOARD", "INDUSTRIAL_EDGE", "EARTHY_TONES", "VIBRANT_ORCHID"]),
});

export const contentSchema = Yup.object({
  contentType: Yup.string()
    .oneOf(["YOUTUBE", "TEXT", "LINK", "IMAGE", "VIDEO", "AUDIO", "FILE"])
    .required("Content type is required"),
  youtubeUrl: Yup.string().when("contentType", {
    is: "YOUTUBE",
    then: (schema) =>
      schema.url("Invalid URL").required("YouTube URL is required"),
  }),
  text: Yup.string().when("contentType", {
    is: "TEXT",
    then: (schema) => schema.required("Text is required"),
  }),
  link: Yup.string().when("contentType", {
    is: "LINK",
    then: (schema) => schema.url("Invalid URL").required("Link is required"),
  }),
  image: Yup.mixed().when("contentType", {
    is: "IMAGE",
    then: (schema) => schema.required("Image is required"),
  }),
  video: Yup.mixed().when("contentType", {
    is: "VIDEO",
    then: (schema) => schema.required("Video is required"),
  }),
  audio: Yup.mixed().when("contentType", {
    is: "AUDIO",
    then: (schema) => schema.required("Audio is required"),
  }),
  file: Yup.mixed().when("contentType", {
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
  tags: Yup.array().of(Yup.string()).required("Tags are required"),
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
          ["image/jpeg", "image/png", "image/gif"].includes(
            value instanceof File ? value.type : "",
          )),
    ),
  advancedSettings: advancedSettingsSchema,
  contents: Yup.array().of(contentSchema).required("Contents are required"),
  questions: Yup.array()
    .of(questionSchema)
    .required("Questions are required")
    .min(1, "At least one question is required"),
});
