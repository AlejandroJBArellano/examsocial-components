import { Visibility } from "@mui/icons-material";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import { examSchema } from "../../schemas/index";
import { Button } from "../Button";
import ExamCard from "../ExamCard/ExamCard";
import { FocusSpan, Heading3, Heading4, Span } from "../FontFaces";
import { QuestionSet } from "../QuestionSet";

export const Review = () => {
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-4">
      <article className="flex justify-between items-center">
        <Heading3>Review</Heading3>
        <Button
          theme="extra"
          className="flex items-center justify-center gap-2"
        >
          <Visibility className="!w-5 !h-5" />
          <FocusSpan>Preview exam</FocusSpan>
        </Button>
      </article>
      <article className="space-y-10">
        <Heading4>General Details</Heading4>
        <ExamCard
          title={formik.values.title}
          description={formik.values.description}
          tag="XD"
          time="10 min"
          image="https://placecats.com/300/200"
        />
      </article>
      <article className="space-y-1">
        <Heading4>Questions</Heading4>
        {formik.values.questions.map((question, index) => (
          <QuestionSet
            index={index}
            onEdit={(index) => console.log(index)}
            onDelete={(index) =>
              formik.setFieldValue(
                "questions",
                formik.values.questions.filter((_, i) => i !== index),
              )
            }
            key={index}
            question={question.question}
            answers={question.answers}
          />
        ))}
      </article>
      <Heading4>Additional Content</Heading4>
      <article className="space-y-1">
        <Heading4>Advanced Settings</Heading4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Span>Randomize question order</Span>
            <FocusSpan
              className={
                formik.values.advancedSettings.randomizeQuestionOrder
                  ? "text-feedback-success"
                  : "text-feedback-error"
              }
            >
              {formik.values.advancedSettings.randomizeQuestionOrder
                ? "Yes"
                : "No"}
            </FocusSpan>
          </div>
          <div className="flex justify-between items-center">
            <Span>Show results at the end</Span>
            <FocusSpan
              className={
                formik.values.advancedSettings.showCorrectAnswers
                  ? "text-feedback-success"
                  : "text-feedback-error"
              }
            >
              {formik.values.advancedSettings.showCorrectAnswers ? "Yes" : "No"}
            </FocusSpan>
          </div>
          <div className="flex justify-between items-center">
            <Span>Send email report</Span>
            <FocusSpan
              className={
                formik.values.advancedSettings.sendEmailReport
                  ? "text-feedback-success"
                  : "text-feedback-error"
              }
            >
              {formik.values.advancedSettings.sendEmailReport ? "Yes" : "No"}
            </FocusSpan>
          </div>
          <div className="flex justify-between items-center">
            <Span>Leaderboard</Span>
            <FocusSpan
              className={
                formik.values.advancedSettings.leaderboard
                  ? "text-feedback-success"
                  : "text-feedback-error"
              }
            >
              {formik.values.advancedSettings.leaderboard ? "Yes" : "No"}
            </FocusSpan>
          </div>
          <div className="flex justify-between items-center">
            <Span>Number of attempts</Span>
            <FocusSpan>
              {formik.values.advancedSettings.numberOfAttempts}
            </FocusSpan>
          </div>
          <div className="flex justify-between items-center">
            <Span>Price</Span>
            <FocusSpan>{formik.values.advancedSettings.price}</FocusSpan>
          </div>
          <div className="flex justify-between items-center">
            <Span>Privacy</Span>
            <FocusSpan>
              {formik.values.advancedSettings.privacy.setting}
            </FocusSpan>
          </div>
        </div>
      </article>
    </section>
  );
};
