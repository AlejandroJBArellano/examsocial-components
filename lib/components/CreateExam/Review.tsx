import { examSchema } from "@/schemas";
import { CategoryMetadata, ExamCategory } from "@/types";
import { toTitleCase } from "@/utils";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import { Button } from "../Button";
import { ExamCard } from "../ExamCard";
import { FocusSpan, Heading3, Heading4, Span } from "../FontFaces";
import { Icon } from "../Icon";
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
          <Icon name="visibility" size={20} filled />
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
            {formik.values.description && (
              <ExamCard.Description>
                {formik.values.description}
              </ExamCard.Description>
            )}
            <ExamCard.Footer>
              <ExamCard.Tag className="flex items-end gap-1">
                <Icon
                  name={
                    CategoryMetadata[
                      formik.values.categories[0] as ExamCategory
                    ].icon
                  }
                  size={16}
                  filled
                />
                {toTitleCase(formik.values.categories[0])}
              </ExamCard.Tag>
              <ExamCard.Time>
                {formik.values.advancedSettings.timing.setting === "NONE"
                  ? "No time limit"
                  : `${formik.values.advancedSettings.timing.hours ? `${formik.values.advancedSettings.timing.hours}h ` : ""}${formik.values.advancedSettings.timing.minutes ? `${formik.values.advancedSettings.timing.minutes}m ` : ""}${formik.values.advancedSettings.timing.seconds ? `${formik.values.advancedSettings.timing.seconds}s` : ""}`}
              </ExamCard.Time>
            </ExamCard.Footer>
          </ExamCard.Content>
        </ExamCard>
        <div className="space-y-3 rounded-md bg-gray-50 p-4">
          <div className="border-b border-gray-200 pb-2">
            <Span className="font-medium">Price & Theme</Span>
          </div>
          <div className="flex justify-between">
            <Span>Price</Span>
            <FocusSpan className="flex items-center gap-1">
              <Icon name="payments" size={16} filled />
              {formik.values.marketplaceSettings.price}
            </FocusSpan>
          </div>
          <div className="flex justify-between">
            <Span>Currency</Span>
            <FocusSpan className="flex items-center gap-1">
              <Icon name="currency_exchange" size={16} filled />
              {formik.values.marketplaceSettings.currency || "USD"}
            </FocusSpan>
          </div>
          <div className="flex justify-between">
            <Span>Theme</Span>
            <div className="flex items-center gap-2">
              <div className={"flex gap-1.5 " + formik.values.theme}>
                <div className="size-5 rounded-full border border-black bg-primary"></div>
                <div className="size-5 rounded-full border border-black bg-secondary"></div>
                <div className="size-5 rounded-full border border-black bg-accent"></div>
                <div className="size-5 rounded-full border border-black bg-extra"></div>
              </div>
              <FocusSpan>
                {toTitleCase(formik.values.theme).replaceAll("_", " ")}
              </FocusSpan>
            </div>
          </div>
        </div>
      </article>
      <article className="space-y-1">
        <Heading4>Questions</Heading4>
        <div className="flex flex-nowrap gap-4 overflow-x-auto">
          {formik.values.questions.map((question, index) => {
            // Extract only the properties that QuestionSet expects
            const { image, ...questionProps } = question;
            return (
              <QuestionSet
                {...questionProps}
                image={URL.createObjectURL(image as Blob)}
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
            );
          })}
        </div>
      </article>
      {formik.values.contents.length > 0 && (
        <article className="space-y-1">
          <Heading4>Additional Content</Heading4>
          <div className="flex gap-4 [&>div]:flex [&>div]:gap-1">
            <div>
              <Icon name="view_headline" className="!h-6 !w-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) =>
                      content.type === "TEXT" || content.type === "LINK",
                  ).length
                }
              </Span>
            </div>
            <div>
              <Icon name="photo" className="!h-6 !w-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) => content.type === "IMAGE",
                  ).length
                }
              </Span>
            </div>
            <div>
              <Icon name="smart_display" className="!h-6 !w-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) =>
                      content.type === "VIDEO" || content.type === "YOUTUBE",
                  ).length
                }
              </Span>
            </div>
            <div>
              <Icon name="play_arrow" className="!h-6 !w-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) => content.type === "AUDIO",
                  ).length
                }
              </Span>
            </div>
            <div>
              <Icon name="description" className="!h-6 !w-6" />
              <Span>
                x
                {
                  formik.values.contents.filter(
                    (content) => content.type === "FILE",
                  ).length
                }
              </Span>
            </div>
          </div>
        </article>
      )}
      <article className="space-y-4">
        <Heading4>Advanced Settings</Heading4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Branding */}
          <div className="space-y-3 rounded-md bg-gray-50 p-4">
            <div className="border-b border-gray-200 pb-2">
              <Span className="font-medium">Branding</Span>
            </div>
            <div className="flex justify-between">
              <Span>Show logo in exam</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.showLogo
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.showLogo ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Show brand name</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.showBrandName
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.showBrandName ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Custom thank you screens</Span>
              <FocusSpan className="flex items-center gap-1">
                <Icon name="feedback" size={16} filled />
                {formik.values.advancedSettings.feedback?.length || 0}
              </FocusSpan>
            </div>
          </div>

          {/* Security */}
          <div className="space-y-3 rounded-md bg-gray-50 p-4">
            <div className="border-b border-gray-200 pb-2">
              <Span className="font-medium">Security</Span>
            </div>
            <div className="flex justify-between">
              <Span>Privacy</Span>
              <FocusSpan className="flex items-center gap-1">
                <Icon name="lock" size={16} filled />
                {toTitleCase(
                  formik.values.advancedSettings.privacy.setting
                    .toUpperCase()
                    .replaceAll("_", " "),
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Limit participants</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.limitParticipants
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.limitParticipants ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    {formik.values.advancedSettings.maxParticipants || 0}
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Limit attempts</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.limitAttempts
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.limitAttempts ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    {formik.values.advancedSettings.maxAttempts}
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Allow anonymous answers</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.allowAnonymousAnswers
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.allowAnonymousAnswers ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
          </div>

          {/* Timing */}
          <div className="space-y-3 rounded-md bg-gray-50 p-4">
            <div className="border-b border-gray-200 pb-2">
              <Span className="font-medium">Timing</Span>
            </div>
            <div className="flex justify-between">
              <Span>Time Limit</Span>
              <FocusSpan className="flex items-center gap-1">
                <Icon name="schedule" size={16} filled />
                {formik.values.advancedSettings.timing.setting === "NONE"
                  ? "No time limit"
                  : `${formik.values.advancedSettings.timing.hours ? `${formik.values.advancedSettings.timing.hours}h ` : ""}${formik.values.advancedSettings.timing.minutes ? `${formik.values.advancedSettings.timing.minutes}m ` : ""}${formik.values.advancedSettings.timing.seconds ? `${formik.values.advancedSettings.timing.seconds}s` : ""}`}
              </FocusSpan>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-3 rounded-md bg-gray-50 p-4">
            <div className="border-b border-gray-200 pb-2">
              <Span className="font-medium">Questions</Span>
            </div>
            <div className="flex justify-between">
              <Span>Randomize question order</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.randomizeQuestionOrder
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.randomizeQuestionOrder ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Randomize options order</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.randomizeOptionsOrder
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.randomizeOptionsOrder ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
          </div>

          {/* Feedback and Results */}
          <div className="space-y-3 rounded-md bg-gray-50 p-4">
            <div className="border-b border-gray-200 pb-2">
              <Span className="font-medium">Feedback & Results</Span>
            </div>
            <div className="flex justify-between">
              <Span>Minimum passing score</Span>
              <FocusSpan className="flex items-center gap-1">
                <Icon name="grade" size={16} filled />
                {formik.values.advancedSettings.passingScore || "Not set"}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Send email report</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.sendEmailReport
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.sendEmailReport ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Show correct answers</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.showCorrectAnswers
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.showCorrectAnswers ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span>Leaderboard</Span>
              <FocusSpan
                className={
                  formik.values.advancedSettings.leaderboard
                    ? "flex items-center gap-1 text-feedback-success"
                    : "flex items-center gap-1 text-feedback-error"
                }
              >
                {formik.values.advancedSettings.leaderboard ? (
                  <>
                    <Icon name="check_circle" size={16} filled />
                    Yes
                  </>
                ) : (
                  <>
                    <Icon name="cancel" size={16} filled />
                    No
                  </>
                )}
              </FocusSpan>
            </div>
          </div>

          {/* Price */}
        </div>
      </article>
    </section>
  );
};
