import { Add } from "@mui/icons-material";
import { useFormikContext } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { FeedbackScreen, NewFeedbackScreen } from "../FeedbackScreen";
import { EditFeedbackScreen } from "../FeedbackScreen/NewAndEdit";
import { FocusSpan, Heading4 } from "../FontFaces";
import { Helper } from "../Helper";
import { Input } from "../Input";
import { PremiumBadge } from "../PremiumBadge";
import { PrivacySettings } from "../PrivacySettings";
import { Switch } from "../Switch";
import { ThemeSettings } from "../ThemeSettings";
import { TimingSettings } from "../TimingSettings";

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const editFeedbackDialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number>(0);

  const { values, setFieldValue, getFieldProps } =
    useFormikContext<Yup.InferType<typeof examSchema>>();

  return (
    <section className="space-y-4 [&>article>div]:flex [&>article>div]:items-center [&>article>div]:gap-2 [&>article]:flex [&>article]:items-center [&>article]:justify-between [&>article]:gap-2 [&>article]:space-y-1">
      <article className="flex items-center justify-between">
        <Heading4>Advanced Settings</Heading4>
        <PremiumBadge />
      </article>
      <article className="flex-col !items-start">
        <FocusSpan>Personalized Thank You Screen</FocusSpan>
        <div className="flex flex-nowrap gap-2 overflow-x-auto">
          <Button
            className="p-2"
            rounded
            onClick={() => dialogRef.current?.showModal()}
            type="button"
          >
            <Add className="!h-8 !w-8" />
          </Button>
          {values.advancedSettings.feedback?.map((feedback, index) => (
            <FeedbackScreen
              key={feedback.condition}
              {...feedback}
              onEdit={() => {
                setIndex(index);
                editFeedbackDialogRef.current?.showModal();
              }}
              onDelete={() => {
                setFieldValue(
                  "advancedSettings.feedback",
                  values.advancedSettings.feedback?.filter(
                    (_, i) => i !== index,
                  ),
                );
              }}
              index={index}
            />
          ))}
        </div>
      </article>
      <article>
        <div>
          <FocusSpan>Randomize question order</FocusSpan>
          <Helper align="center" side="top">
            Randomizing question order will shuffle the order of questions for
            each student.
          </Helper>
        </div>
        <Switch
          className="w-20"
          checked={values.advancedSettings.randomizeQuestionOrder}
          onCheckedChange={() =>
            setFieldValue(
              "advancedSettings.randomizeQuestionOrder",
              !values.advancedSettings.randomizeQuestionOrder,
            )
          }
        />
      </article>
      <article>
        <div>
          <FocusSpan>Show correct answers at the end</FocusSpan>
          <Helper align="center" side="top">
            Showing correct answers at the end will display the correct answers
            to the questions after the student has submitted the exam.
          </Helper>
        </div>
        <Switch
          className="w-20"
          checked={values.advancedSettings.showCorrectAnswers}
          onCheckedChange={() =>
            setFieldValue(
              "advancedSettings.showCorrectAnswers",
              !values.advancedSettings.showCorrectAnswers,
            )
          }
        />
      </article>
      <article>
        <div>
          <FocusSpan>Send email report</FocusSpan>
          <Helper align="center" side="top">
            Sending email report will send the student's exam report to their
            email.
          </Helper>
        </div>
        <Switch
          className="w-20"
          checked={values.advancedSettings.sendEmailReport}
          onCheckedChange={() =>
            setFieldValue(
              "advancedSettings.sendEmailReport",
              !values.advancedSettings.sendEmailReport,
            )
          }
        />
      </article>
      <article>
        <div>
          <FocusSpan>Leaderboard</FocusSpan>
          <Helper align="center" side="top">
            Leaderboard will display the top 10 students with the highest score
            after the exam.
          </Helper>
        </div>
        <Switch
          className="w-20"
          checked={values.advancedSettings.leaderboard}
          onCheckedChange={() =>
            setFieldValue(
              "advancedSettings.leaderboard",
              !values.advancedSettings.leaderboard,
            )
          }
        />
      </article>
      <article className="w-full">
        <div>
          <FocusSpan>Number of attempts</FocusSpan>
          <Helper align="center" side="top">
            Number of attempts is the number of times a student can attempt the
            exam.
          </Helper>
        </div>
        <Input
          type="number"
          placeholder="3"
          containerClassName="flex-initial"
          className="w-20"
          {...getFieldProps("numberOfAttempts")}
        />
      </article>
      <article className="w-full">
        <div>
          <FocusSpan>Price (USD)</FocusSpan>
          <Helper align="center" side="top">
            Price is the amount a student has to pay to attempt the exam.
          </Helper>
        </div>
        <Input
          type="number"
          placeholder="0"
          containerClassName="flex-initial"
          className="w-20"
          {...getFieldProps("price")}
        />
      </article>
      <TimingSettings />
      <PrivacySettings />
      <ThemeSettings
        onChange={(theme) => {
          setFieldValue("advancedSettings.theme", theme);
        }}
      />
      <Dialog innerRef={dialogRef} id="advanced-settings">
        <NewFeedbackScreen
          onSubmit={(newFeedback) => {
            setFieldValue("advancedSettings.feedback", [
              ...(values.advancedSettings.feedback || []),
              newFeedback,
            ]);
            console.log({ newFeedback });
            dialogRef.current?.close();
          }}
          onCancel={() => {
            dialogRef.current?.close();
          }}
        />
      </Dialog>
      <Dialog innerRef={editFeedbackDialogRef} id="advanced-settings">
        {values.advancedSettings.feedback![index] ? (
          <EditFeedbackScreen
            feedback={values.advancedSettings.feedback![index]}
            onSubmit={(newFeedback) => {
              setFieldValue("advancedSettings.feedback", [
                ...(values.advancedSettings.feedback || []).map(
                  (feedback, i) => {
                    if (i === index) {
                      return newFeedback;
                    }
                    return feedback;
                  },
                ),
              ]);
              console.log({ newFeedback });
              editFeedbackDialogRef.current?.close();
            }}
            onCancel={() => {
              editFeedbackDialogRef.current?.close();
            }}
          />
        ) : null}
      </Dialog>
    </section>
  );
};
