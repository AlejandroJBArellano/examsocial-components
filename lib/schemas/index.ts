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
