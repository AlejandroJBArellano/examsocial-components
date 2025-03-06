import {
  Description,
  Photo,
  PlayArrow,
  SmartDisplay,
  ViewHeadline,
  Visibility,
} from "@mui/icons-material";
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
          image={URL.createObjectURL(formik.values.image as Blob)}
        />
      </article>
      <article className="space-y-1">
        <Heading4>Questions</Heading4>
        <div className="gap-4 flex flex-nowrap overflow-x-auto">
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
              options={question.options}
            />
          ))}
        </div>
      </article>
      {formik.values.contents.length > 0 && (
        <article className="space-y-1">
          <Heading4>Additional Content</Heading4>
          <div className="flex gap-4 [&>div]:flex [&>div]:gap-1">
            <div>
              <ViewHeadline className="!w-6 !h-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) =>
                      content.contentType === "TEXT" ||
                      content.contentType === "LINK",
                  ).length
                }
              </Span>
            </div>
            <div>
              <Photo className="!w-6 !h-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) => content.contentType === "IMAGE",
                  ).length
                }
              </Span>
            </div>
            <div>
              <SmartDisplay className="!w-6 !h-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) =>
                      content.contentType === "VIDEO" ||
                      content.contentType === "YOUTUBE",
                  ).length
                }
              </Span>
            </div>
            <div>
              <PlayArrow className="!w-6 !h-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) => content.contentType === "AUDIO",
                  ).length
                }
              </Span>
            </div>
            <div>
              <Description className="!w-6 !h-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) => content.contentType === "FILE",
                  ).length
                }
              </Span>
            </div>
          </div>
        </article>
      )}
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
