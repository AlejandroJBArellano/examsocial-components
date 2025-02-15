import * as Yup from "yup";
export const questionSchema = Yup.object({
  question: Yup.string().required("Question is required"),
  answers: Yup.array()
    .of(
      Yup.object({
        text: Yup.string().required("Answer text is required"),
        correct: Yup.boolean(),
      })
    )
    .min(1, "At least one answer is required"),
});
