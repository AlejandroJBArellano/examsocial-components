import * as Yup from "yup";
import { FeedbackCondition } from "../constants";

export const questionSchema = Yup.object({
  question: Yup.string().required("Question is required"),
  options: Yup.array()
    .of(
      Yup.object({
        text: Yup.string().required("Option text is required"),
        correct: Yup.boolean(),
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
  message: Yup.string().required("Message is required"),
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
  timing: Yup.object({
    setting: Yup.string().required("Required"),
    hours: Yup.number().when("setting", {
      is: (val: string) => val === "TOTAL",
      then: (schema) =>
        schema.min(0, "Must be at least 0").required("Required"),
    }),
    minutes: Yup.number().when("setting", {
      is: (val: string) => val === "TOTAL" || val === "PER_QUESTION",
      then: (schema) =>
        schema.min(0, "Must be at least 0").required("Required"),
    }),
    seconds: Yup.number().when("setting", {
      is: (val: string) => val === "PER_QUESTION",
      then: (schema) =>
        schema.min(0, "Must be at least 0").required("Required"),
    }),
  }),
});

export const examSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.mixed().required("Image is required"),
  advancedSettings: advancedSettingsSchema,
  questions: Yup.array()
    .of(questionSchema)
    .required()
    .min(1, "At least one question is required"),
});
