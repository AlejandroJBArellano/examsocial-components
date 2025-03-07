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
import { toTitleCase } from "../../utils";
import { Button } from "../Button";
import ExamCard from "../ExamCard/ExamCard";
import { FocusSpan, Heading3, Heading4, Span } from "../FontFaces";
import { QuestionSet } from "../QuestionSet";

export const Review = () => {
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-4">
      <article className="flex items-center justify-between">
        <Heading3>Review</Heading3>
        <Button
          theme="extra"
          className="flex items-center justify-center gap-2"
        >
          <Visibility className="!h-5 !w-5" />
          <FocusSpan>Preview exam</FocusSpan>
        </Button>
      </article>
      <article className="space-y-10">
        <Heading4>General Details</Heading4>
        <ExamCard>
          <ExamCard.Image
            src={URL.createObjectURL(formik.values.image as Blob)}
            alt={formik.values.title}
          />
          <ExamCard.Content>
            <ExamCard.Title>{formik.values.title}</ExamCard.Title>
            <ExamCard.Description>
              {formik.values.description}
            </ExamCard.Description>
            <ExamCard.Footer>
              <ExamCard.Tag>XD</ExamCard.Tag>
              <ExamCard.Time>10 min</ExamCard.Time>
            </ExamCard.Footer>
          </ExamCard.Content>
        </ExamCard>
      </article>
      <article className="space-y-1">
        <Heading4>Questions</Heading4>
        <div className="flex flex-nowrap gap-4 overflow-x-auto">
          {formik.values.questions.map((question, index) => (
            <QuestionSet
              {...question}
              index={index}
              key={index}
              onEdit={(index) => console.log(index)}
              onDelete={(index) =>
                formik.setFieldValue(
                  "questions",
                  formik.values.questions.filter((_, i) => i !== index),
                )
              }
            />
          ))}
        </div>
      </article>
      {formik.values.contents.length > 0 && (
        <article className="space-y-1">
          <Heading4>Additional Content</Heading4>
          <div className="flex gap-4 [&>div]:flex [&>div]:gap-1">
            <div>
              <ViewHeadline className="!h-6 !w-6" />
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
              <Photo className="!h-6 !w-6" />
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
              <SmartDisplay className="!h-6 !w-6" />
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
              <PlayArrow className="!h-6 !w-6" />
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
              <Description className="!h-6 !w-6" />
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
        <div className="space-y-3 [&>div]:flex [&>div]:justify-between">
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <Span>Number of attempts</Span>
            <FocusSpan>
              {formik.values.advancedSettings.numberOfAttempts}
            </FocusSpan>
          </div>
          <div>
            <Span>Price</Span>
            <FocusSpan>{formik.values.advancedSettings.price}</FocusSpan>
          </div>
          <div>
            <Span>Privacy</Span>
            <FocusSpan>
              {toTitleCase(formik.values.advancedSettings.privacy.setting)}
            </FocusSpan>
          </div>
          <div>
            <Span>Theme</Span>
            <div className="flex gap-2">
              <div
                className={
                  "flex gap-1.5 " + formik.values.advancedSettings.theme
                }
              >
                <div className="size-5 rounded-full border border-black bg-primary"></div>
                <div className="size-5 rounded-full border border-black bg-secondary"></div>
                <div className="size-5 rounded-full border border-black bg-accent"></div>
                <div className="size-5 rounded-full border border-black bg-extra"></div>
              </div>
              <FocusSpan>
                {toTitleCase(formik.values.advancedSettings.theme).replaceAll(
                  "_",
                  " ",
                )}
              </FocusSpan>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
