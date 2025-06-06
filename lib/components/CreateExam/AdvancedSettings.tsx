import { useExamCreation } from "@/hooks/exam";
import { Exam } from "@/types";
import { cn } from "@/utils";
import { useFormikContext } from "formik";
import { useRef, useState } from "react";
import { PremiumBadge } from "../Badges";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { FeedbackScreen, NewFeedbackScreen } from "../FeedbackScreen";
import { EditFeedbackScreen } from "../FeedbackScreen/NewAndEdit";
import { Field } from "../Field";
import {
  FocusSpan,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Span,
} from "../FontFaces";
import { Helper } from "../Helper";
import { ComingSoonWrapper, PremiumWrapper, ProWrapper } from "../Wrapper";
import { PrivacySettings } from "./PrivacySettings";
import { TimingSettings } from "./TimingSettings";

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const editFeedbackDialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number>(0);

  const { values, setFieldValue } = useFormikContext<Exam>();

  const { userPlan } = useExamCreation();

  return (
    <section className="divide-y divide-secondary-tint [&>div]:space-y-4 [&>div]:py-4">
      <div>
        <Heading4>Advanced Settings</Heading4>
        <Paragraph>
          Configure advanced settings for your exam including monetization,
          privacy, timing, feedback, and branding options. These settings allow
          you to customize the exam experience for your students.
        </Paragraph>
      </div>
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <Heading5>Branding</Heading5>
            <Helper align="center" side="top">
              Customize the appearance and branding of your exam.
            </Helper>
          </div>
          {userPlan !== "PREMIUM" && <PremiumBadge />}
        </div>
        <div className="space-y-4">
          <PremiumWrapper show={userPlan !== "PREMIUM"} badgeSize="big">
            <Field.Switch
              checked={values.advancedSettings.showLogo}
              onCheckedChange={() =>
                userPlan === "PREMIUM" &&
                setFieldValue(
                  "advancedSettings.showLogo",
                  !values.advancedSettings.showLogo,
                )
              }
              disabled={userPlan !== "PREMIUM"}
              className={cn({
                "cursor-not-allowed opacity-50 blur-sm": userPlan !== "PREMIUM",
              })}
              helperText="Display your logo in the exam metadata and details view."
            >
              <div className="flex items-center gap-2">Show logo in exam</div>
            </Field.Switch>
          </PremiumWrapper>
          <ComingSoonWrapper badgeSize="big">
            <Field.Switch
              checked={values.advancedSettings.showBrandName}
              onCheckedChange={() =>
                userPlan === "PREMIUM" &&
                setFieldValue(
                  "advancedSettings.showBrandName",
                  !values.advancedSettings.showBrandName,
                )
              }
              disabled={userPlan !== "PREMIUM"}
              helperText="Display your brand name in the exam metadata and details view."
            >
              <div className="flex items-center gap-2">Show brand name</div>
            </Field.Switch>
          </ComingSoonWrapper>
          <div className="space-y-2">
            <Heading6>Personalized Thank You Screen</Heading6>
            <Paragraph>
              Create{" "}
              <Span className="font-semibold">custom thank you screens</Span>{" "}
              based on exam results. Perfect for
              <Span className="font-semibold">
                {" "}
                congratulating high performers
              </Span>{" "}
              or providing <Span className="font-semibold">guidance</Span> to
              those who need improvement. You can also use these as{" "}
              <Span className="font-bold text-accent-shadow">
                sales funnels
              </Span>{" "}
              by adding
              <Span className="font-bold text-accent-shadow">
                {" "}
                links to your products
              </Span>{" "}
              or <Span className="font-bold text-accent-shadow">services</Span>.
            </Paragraph>
            {/* {feedbackError && (
              <div className="mt-2 rounded-md bg-feedback-error p-2 text-white">
                <p>{feedbackError}</p>
              </div>
            )} */}
            <div
              className={cn(
                "flex flex-nowrap items-center gap-2 overflow-x-auto",
                {
                  "cursor-not-allowed blur-sm": userPlan !== "PREMIUM",
                },
              )}
            >
              <Button.Icon
                className="flex aspect-square h-fit items-center justify-center"
                rounded
                onClick={() => dialogRef.current?.showModal()}
                type="button"
                size={24}
                disabled={userPlan !== "PREMIUM"}
              >
                add
              </Button.Icon>
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
                    // // Al eliminar, verificar si aún hay solapamientos
                    // const updatedFeedbacks =
                    //   values.advancedSettings.feedback?.filter(
                    //     (_, i) => i !== index,
                    //   );
                    // if (checkFeedbackOverlap(updatedFeedbacks)) {
                    //   setFeedbackError(
                    //     "Error: Thank you screens conditions are overlapping. Please adjust the conditions to avoid overlaps.",
                    //   );
                    // }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <Heading5>Security</Heading5>
            <Paragraph className="text-sm">
              Security is the process of securing the exam from being accessed
              by unauthorized users.
            </Paragraph>
          </div>
        </section>
        <PrivacySettings />
        <section className="space-y-4">
          <ComingSoonWrapper badgeSize="big">
            <Field.Switch
              className="w-20"
              checked={values.advancedSettings.limitParticipants}
              onCheckedChange={() =>
                setFieldValue(
                  "advancedSettings.limitParticipants",
                  !values.advancedSettings.limitParticipants,
                )
              }
            >
              <div>
                <FocusSpan>Limit number of participants</FocusSpan>
                <Paragraph className="text-sm">
                  Set a maximum number of participants who can take this exam.
                </Paragraph>
              </div>
            </Field.Switch>
            {values.advancedSettings.limitParticipants && (
              <Field
                label={
                  <div>
                    <FocusSpan>Max participants</FocusSpan>
                    <Paragraph className="text-sm">
                      Set a maximum number of participants who can take this
                      exam.
                    </Paragraph>
                  </div>
                }
                inputProps={{
                  id: "maxParticipants",
                  type: "number",
                  placeholder: !["PUBLIC", "ONLY_ME"].includes(
                    values.advancedSettings.privacy.setting,
                  )
                    ? userPlan === "PREMIUM"
                      ? "500"
                      : userPlan === "PRO"
                        ? "100"
                        : "0"
                    : "0",
                  max: !["PUBLIC", "ONLY_ME"].includes(
                    values.advancedSettings.privacy.setting,
                  )
                    ? userPlan === "PREMIUM"
                      ? 500
                      : userPlan === "PRO"
                        ? 100
                        : undefined
                    : undefined,
                  className: "block w-1/6",
                  value: values.advancedSettings.maxParticipants || "",
                  onChange: (e) =>
                    setFieldValue(
                      "advancedSettings.maxParticipants",
                      parseInt(e.target.value) || 0,
                    ),
                  min: 1,
                }}
              />
            )}
          </ComingSoonWrapper>
        </section>
        <section className="space-y-4">
          <Field.Switch
            checked={values.advancedSettings.limitAttempts}
            onCheckedChange={() =>
              setFieldValue(
                "advancedSettings.limitAttempts",
                !values.advancedSettings.limitAttempts,
              )
            }
            className="w-20"
          >
            <div>
              <FocusSpan>Limit attempts</FocusSpan>
              <Paragraph className="text-sm">
                Limit the number of times a participant can take this exam.
              </Paragraph>
            </div>
          </Field.Switch>
          {values.advancedSettings.limitAttempts && (
            <Field
              label={
                <div>
                  <FocusSpan>Max attempts</FocusSpan>
                  <Paragraph className="text-sm">
                    Set a maximum number of attempts allowed per participant.
                  </Paragraph>
                </div>
              }
              inputProps={{
                id: "maxAttempts",
                type: "number",
                placeholder: "1",
                className: "block w-1/6",
                value: values.advancedSettings.maxAttempts || "",
                onChange: (e) =>
                  setFieldValue(
                    "advancedSettings.maxAttempts",
                    parseInt(e.target.value) || 1,
                  ),
                min: 1,
              }}
            />
          )}
        </section>
        <section className="space-y-4">
          <ComingSoonWrapper badgeSize="big">
            <Field.Switch
              checked={values.advancedSettings.allowAnonymousAnswers}
              onCheckedChange={() =>
                setFieldValue(
                  "advancedSettings.allowAnonymousAnswers",
                  !values.advancedSettings.allowAnonymousAnswers,
                )
              }
              className="w-20"
            >
              <div>
                <FocusSpan>Allow anonymous answers</FocusSpan>
                <Paragraph className="text-sm">
                  Allows users who are not registered on ExamSocial to take this
                  exam. Their results in the table will be displayed as:
                  "Anonymous user".
                </Paragraph>
              </div>
            </Field.Switch>
          </ComingSoonWrapper>
        </section>
      </div>
      <TimingSettings />
      <div>
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex gap-2">
            <Heading5>Questions</Heading5>
            <Helper align="center" side="top">
              Configuration for the order of questions and their options.
            </Helper>
          </div>
        </div>
        <Field.Switch
          checked={values.advancedSettings.randomizeQuestionOrder}
          onCheckedChange={() =>
            setFieldValue(
              "advancedSettings.randomizeQuestionOrder",
              !values.advancedSettings.randomizeQuestionOrder,
            )
          }
          helperText="Shuffles the order of questions for each student."
        >
          Randomize question order
        </Field.Switch>
        <ComingSoonWrapper badgeSize="big">
          <Field.Switch
            checked={values.advancedSettings.randomizeOptionsOrder}
            onCheckedChange={() =>
              setFieldValue(
                "advancedSettings.randomizeOptionsOrder",
                !values.advancedSettings.randomizeOptionsOrder,
              )
            }
            helperText="Shuffles the order of options order for each question."
          >
            Randomize options order
          </Field.Switch>
        </ComingSoonWrapper>
      </div>
      <ComingSoonWrapper badgeSize="big">
        <div className="space-y-1">
          <Heading5>Feedback and Results</Heading5>
          <Paragraph className="text-sm">
            Configure the feedback and results for the exam.
          </Paragraph>
        </div>
        <div className="mt-4 space-y-4">
          <Field
            label={
              <div className="flex gap-2">
                <FocusSpan>Minimum passing score</FocusSpan>
                <Helper align="center" side="top">
                  Set the minimum score required to pass the exam. Students who
                  score below this threshold will fail the exam, appearing in
                  red.
                </Helper>
              </div>
            }
            inputProps={{
              type: "number",
              placeholder: "70",
              className: "w-1/3",
              value: values.advancedSettings.passingScore,
              onChange: (e) =>
                setFieldValue(
                  "advancedSettings.passingScore",
                  parseInt(e.target.value),
                ),
            }}
          />
          <ProWrapper show={userPlan === "BASIC"} badgeSize="big">
            <Field.Switch
              checked={values.advancedSettings.sendEmailReport}
              onCheckedChange={() =>
                userPlan !== "BASIC" &&
                setFieldValue(
                  "advancedSettings.sendEmailReport",
                  !values.advancedSettings.sendEmailReport,
                )
              }
              disabled={userPlan === "BASIC"}
              helperText="Send an email report to the user when they complete the exam."
            >
              <div className="flex items-center gap-2">Send email report</div>
            </Field.Switch>
          </ProWrapper>
          <Field.Switch
            checked={values.advancedSettings.showCorrectAnswers}
            onCheckedChange={() =>
              setFieldValue(
                "advancedSettings.showCorrectAnswers",
                !values.advancedSettings.showCorrectAnswers,
              )
            }
            className="w-20"
            helperText="Show the correct answers to students after they complete the exam."
          >
            Show correct answers
          </Field.Switch>
        </div>
      </ComingSoonWrapper>
      <Dialog innerRef={dialogRef} id="advanced-settings">
        <NewFeedbackScreen
          onSubmit={(newFeedback) => {
            // Validar superposición antes de añadir
            setFieldValue("advancedSettings.feedback", [
              ...(values.advancedSettings.feedback || []),
              newFeedback,
            ]);
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
              // Validar superposición antes de editar
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
