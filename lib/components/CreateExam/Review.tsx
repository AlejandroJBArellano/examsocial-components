import { examSchema } from "@/schemas";
import { CategoryMetadata, ExamCategory } from "@/types";
import { toTitleCase } from "@/utils";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import { ExamCard } from "../ExamCard";
import { FocusSpan, Heading3, Heading4, Span } from "../FontFaces";
import { Icon } from "../Icon";
import { QuestionSet } from "../QuestionSet";

export const Review = () => {
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-4 lg:space-y-6 xl:space-y-8">
      <article className="flex items-center justify-between">
        <Heading3>Review</Heading3>
        {/*
        //TODO: <Button
          theme="extra"
          className="flex items-center justify-center gap-2"
        >
          <Icon name="visibility" size={20} filled />
          <FocusSpan>Preview exam</FocusSpan>
        </Button> */}
      </article>
      <article className="space-y-5">
        <Heading4>General Details</Heading4>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
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
                <ExamCard.Tag className="flex items-center gap-1">
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
          <div className="space-y-3 rounded-md border-2 border-black bg-light p-4 shadow-right lg:h-fit">
            <div className="border-b-2 border-black pb-2">
              <Span className="font-bold">Price & Theme</Span>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Price</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
                <Icon name="payments" size={16} filled />
                {formik.values.marketplaceSettings.price}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Currency</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
                <Icon name="currency_exchange" size={16} filled />
                {formik.values.marketplaceSettings.currency || "USD"}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Theme</Span>
              <div className="flex items-center gap-2">
                <div
                  className={
                    "flex gap-1.5 rounded-md border-2 border-black bg-light p-1 shadow-right-sm " +
                    formik.values.theme
                  }
                >
                  <div className="size-5 rounded-full border-2 border-black bg-primary"></div>
                  <div className="size-5 rounded-full border-2 border-black bg-secondary"></div>
                  <div className="size-5 rounded-full border-2 border-black bg-accent"></div>
                  <div className="size-5 rounded-full border-2 border-black bg-extra"></div>
                </div>
                <FocusSpan className="rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
                  {toTitleCase(formik.values.theme).replaceAll("_", " ")}
                </FocusSpan>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="space-y-5">
        <Heading4>Questions</Heading4>
        <div className="flex flex-nowrap gap-4 overflow-x-auto lg:grid lg:grid-cols-3 lg:overflow-x-visible">
          {formik.values.questions.map((question, index) => {
            // Extract only the properties that QuestionSet expects
            const { image, ...questionProps } = question;
            return (
              <QuestionSet
                {...questionProps}
                image={image ? URL.createObjectURL(image as Blob) : undefined}
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
        <article className="space-y-5">
          <Heading4>Additional Content</Heading4>
          <div className="flex flex-wrap gap-4 lg:flex-nowrap [&>div]:flex [&>div]:gap-1">
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
      <article className="space-y-5">
        <Heading4>Advanced Settings</Heading4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Branding */}
          <div className="h-full space-y-3 rounded-md border-2 border-black bg-light p-4 shadow-right">
            <div className="border-b-2 border-black pb-2">
              <Span className="font-bold">Branding</Span>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Show logo in exam</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
              <Span className="font-medium">Show brand name</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
              <Span className="font-medium">Custom thank you screens</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
                <Icon name="feedback" size={16} filled />
                {formik.values.advancedSettings.feedback?.length || 0}
              </FocusSpan>
            </div>
          </div>

          {/* Security */}
          <div className="h-full space-y-3 rounded-md border-2 border-black bg-light p-4 shadow-right">
            <div className="border-b-2 border-black pb-2">
              <Span className="font-bold">Security</Span>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Privacy</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
                <Icon name="lock" size={16} filled />
                {toTitleCase(
                  formik.values.advancedSettings.privacy.setting
                    .toUpperCase()
                    .replaceAll("_", " "),
                )}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Limit participants</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
              <Span className="font-medium">Limit attempts</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
              <Span className="font-medium">Allow anonymous answers</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
          <div className="h-full space-y-3 rounded-md border-2 border-black bg-light p-4 shadow-right">
            <div className="border-b-2 border-black pb-2">
              <Span className="font-bold">Timing</Span>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Time Limit</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
                <Icon name="schedule" size={16} filled />
                {formik.values.advancedSettings.timing.setting === "NONE"
                  ? "No time limit"
                  : `${formik.values.advancedSettings.timing.hours ? `${formik.values.advancedSettings.timing.hours}h ` : ""}${formik.values.advancedSettings.timing.minutes ? `${formik.values.advancedSettings.timing.minutes}m ` : ""}${formik.values.advancedSettings.timing.seconds ? `${formik.values.advancedSettings.timing.seconds}s` : ""}`}
              </FocusSpan>
            </div>
          </div>

          {/* Questions */}
          <div className="h-full space-y-3 rounded-md border-2 border-black bg-light p-4 shadow-right">
            <div className="border-b-2 border-black pb-2">
              <Span className="font-bold">Questions</Span>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Randomize question order</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
              <Span className="font-medium">Randomize options order</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
          <div className="h-full space-y-3 rounded-md border-2 border-black bg-light p-4 shadow-right">
            <div className="border-b-2 border-black pb-2">
              <Span className="font-bold">Feedback & Results</Span>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Minimum passing score</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
                <Icon name="grade" size={16} filled />
                {formik.values.advancedSettings.passingScore || "Not set"}
              </FocusSpan>
            </div>
            <div className="flex justify-between">
              <Span className="font-medium">Send email report</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
              <Span className="font-medium">Show correct answers</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
              <Span className="font-medium">Leaderboard</Span>
              <FocusSpan className="flex items-center gap-1 rounded-md border-2 border-black bg-secondary px-2 py-1 shadow-right-sm">
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
        </div>
      </article>
    </section>
  );
};
