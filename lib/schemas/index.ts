import * as Yup from "yup";

export const questionSchema = Yup.object({
  question: Yup.string().required("Question is required"),
  answers: Yup.array()
    .of(
      Yup.object({
        text: Yup.string().required("Answer text is required"),
        correct: Yup.boolean(),
      }),
    )
    .required()
    .min(1, "At least one answer is required")
    .test(
      "at-least-one-correct",
      "At least one answer must be correct",
      (answers) => answers?.some((answer) => answer.correct),
    ),
});

export const examSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  questions: Yup.array()
    .of(questionSchema)
    .required()
    .min(1, "At least one question is required"),
});

export const advancedSettingsSchema = Yup.object({
  numberOfAttempts: Yup.number()
    .min(1, "Must be at least 1")
    .required("Required"),
  price: Yup.number().min(0, "Must be at least 0").required("Required"),
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
});
