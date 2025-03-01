import { Add } from "@mui/icons-material";
import { Field, Form, Formik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { NewFeedbackScreen } from "../FeedbackScreen";
import { FocusSpan, Heading4 } from "../FontFaces";
import { Helper } from "../Helper";
import { Input } from "../Input";
import { PremiumBadge } from "../PremiumBadge";
import { PrivacySettings } from "../PrivacySettings";
import { Switch } from "../Switch";
import { ThemeSettings } from "../ThemeSettings";
import { TimingSettings } from "../TimingSettings";

const validationSchema = Yup.object({
  numberOfAttempts: Yup.number()
    .min(1, "Must be at least 1")
    .required("Required"),
  price: Yup.number().min(0, "Must be at least 0").required("Required"),
});

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Formik
      initialValues={{
        randomizeQuestionOrder: false,
        showCorrectAnswers: false,
        sendEmailReport: false,
        leaderboard: false,
        numberOfAttempts: 3,
        price: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="space-y-4 [&>article]:space-y-1 [&>article]:flex [&>article]:items-center [&>article]:justify-between [&>article>div]:flex [&>article>div]:items-center [&>article>div]:gap-2">
          <div className="flex items-center justify-between">
            <Heading4>Advanced Settings</Heading4>
            <PremiumBadge />
          </div>
          <article className="flex-col !items-start">
            <FocusSpan>Personalized Thank You Screen</FocusSpan>
            <Button
              className="p-2"
              rounded
              onClick={() => dialogRef.current?.showModal()}
            >
              <Add className="!w-8 !h-8" />
            </Button>
          </article>
          <article>
            <div>
              <FocusSpan>Randomize question order</FocusSpan>
              <Helper align="center" side="top">
                Randomizing question order will shuffle the order of questions
                for each student.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.randomizeQuestionOrder}
              onCheckedChange={() =>
                setFieldValue(
                  "randomizeQuestionOrder",
                  !values.randomizeQuestionOrder,
                )
              }
            />
          </article>
          <article>
            <div>
              <FocusSpan>Show correct answers at the end</FocusSpan>
              <Helper align="center" side="top">
                Showing correct answers at the end will display the correct
                answers to the questions after the student has submitted the
                exam.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.showCorrectAnswers}
              onCheckedChange={() =>
                setFieldValue("showCorrectAnswers", !values.showCorrectAnswers)
              }
            />
          </article>
          <article>
            <div>
              <FocusSpan>Send email report</FocusSpan>
              <Helper align="center" side="top">
                Sending email report will send the student's exam report to
                their email.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.sendEmailReport}
              onCheckedChange={() =>
                setFieldValue("sendEmailReport", !values.sendEmailReport)
              }
            />
          </article>
          <article>
            <div>
              <FocusSpan>Leaderboard</FocusSpan>
              <Helper align="center" side="top">
                Leaderboard will display the top 10 students with the highest
                score after the exam.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.leaderboard}
              onCheckedChange={() =>
                setFieldValue("leaderboard", !values.leaderboard)
              }
            />
          </article>
          <article className="w-full">
            <div>
              <FocusSpan>Number of attempts</FocusSpan>
              <Helper align="center" side="top">
                Number of attempts is the number of times a student can attempt
                the exam.
              </Helper>
            </div>
            <Field
              as={Input}
              type="number"
              name="numberOfAttempts"
              placeholder="3"
              containerClassName="flex-initial"
              className="w-20"
            />
          </article>
          <article className="w-full">
            <div>
              <FocusSpan>Price</FocusSpan>
              <Helper align="center" side="top">
                Price is the amount a student has to pay to attempt the exam.
              </Helper>
            </div>
            <Field
              as={Input}
              type="number"
              name="price"
              placeholder="0"
              containerClassName="flex-initial"
              className="w-20"
            />
          </article>
          <TimingSettings />
          <PrivacySettings onChange={() => {}} />
          <ThemeSettings onChange={() => {}} />
          <Dialog innerRef={dialogRef} id="advanced-settings">
            <NewFeedbackScreen
              onSubmit={() => {}}
              onCancel={() => {
                dialogRef.current?.close();
              }}
            />
          </Dialog>
        </Form>
      )}
    </Formik>
  );
};
