import { useExamCreation } from "@/hooks/exam";
import { cn } from "@/utils";
import { useFormikContext } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { PremiumBadge, ProBadge } from "../Badges";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { FeedbackScreen, NewFeedbackScreen } from "../FeedbackScreen";
import { EditFeedbackScreen } from "../FeedbackScreen/NewAndEdit";
import { FocusSpan, Heading4, Heading5 } from "../FontFaces";
import { Helper } from "../Helper";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { Select } from "../Select";
import { Switch } from "../Switch";
import { PrivacySettings } from "./PrivacySettings";
import { ThemeSettings } from "./ThemeSettings";
import { TimingSettings } from "./TimingSettings";

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const editFeedbackDialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number>(0);

  const { values, setFieldValue } =
    useFormikContext<Yup.InferType<typeof examSchema>>();

  const { userPlan, canSellExams } = useExamCreation();

  console.log({ userPlan, canSellExams });

  return (
    <section className="divide-y divide-secondary-tint [&>div]:space-y-4 [&>div]:py-4">
      <div className="flex items-center justify-between gap-2">
        <Heading4>Advanced Settings</Heading4>
        <ProBadge />
      </div>
      <div>
        <section className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex gap-2">
            <Heading5>Monetization</Heading5>
            <Helper align="center" side="top">
              Monetization is the process of charging students for taking exams.
            </Helper>
          </div>
          {!canSellExams && (
            <div className="flex items-center gap-2 rounded-md bg-feedback-warning px-3 py-2 text-feedback-warning-tint">
              <Icon className="text-feedback-warning-tint" name="info" filled />
              <span className="text-sm font-medium">
                Register into the marketplace section
              </span>
            </div>
          )}
        </section>
        <section
          className={cn("grid grid-cols-1 items-center gap-2 sm:grid-cols-2", {
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <FocusSpan>Currency</FocusSpan>
          <Select text="USD" disabled={!canSellExams}>
            <Select.Option>USD</Select.Option>
            <Select.Option>EUR</Select.Option>
            <Select.Option>MXN</Select.Option>
            <Select.Option>CAD</Select.Option>
            <Select.Option>AUD</Select.Option>
            <Select.Option>NZD</Select.Option>
          </Select>
        </section>
        <section
          className={cn("grid grid-cols-1 items-center gap-2 sm:grid-cols-2", {
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <label htmlFor="price">
            <FocusSpan>Price</FocusSpan>
            <Helper align="center" side="top">
              Price is the amount a student has to pay to attempt the exam.
            </Helper>
          </label>
          <Input
            id="price"
            type="number"
            placeholder="0"
            className="w-full"
            disabled={!canSellExams}
          />
        </section>
      </div>
      <div>
        <section className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex gap-2">
            <Heading5>Security</Heading5>
            <Helper align="center" side="top">
              Security is the process of securing the exam from being accessed
              by unauthorized users.
            </Helper>
          </div>
        </section>
        <PrivacySettings />
        <section className="space-y-4">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex gap-2">
              <FocusSpan>Limit number of participants</FocusSpan>
              <Helper align="center" side="top">
                Set a maximum number of participants who can take this exam.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.advancedSettings.limitParticipants}
              onCheckedChange={() =>
                setFieldValue(
                  "advancedSettings.limitParticipants",
                  !values.advancedSettings.limitParticipants,
                )
              }
            />
          </div>
          {values.advancedSettings.limitParticipants && (
            <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2">
              <label
                className="flex items-center gap-2"
                htmlFor="maxParticipants"
              >
                <FocusSpan>Max participants</FocusSpan>
                <Helper align="center" side="top">
                  Set a maximum number of participants who can take this exam.
                </Helper>
              </label>
              <Input
                id="maxParticipants"
                type="number"
                placeholder={
                  !["PUBLIC", "ONLY_ME"].includes(
                    values.advancedSettings.privacy.setting,
                  )
                    ? userPlan === "PREMIUM"
                      ? "500"
                      : userPlan === "PRO"
                        ? "100"
                        : "0"
                    : "0"
                }
                max={
                  !["PUBLIC", "ONLY_ME"].includes(
                    values.advancedSettings.privacy.setting,
                  )
                    ? userPlan === "PREMIUM"
                      ? 500
                      : userPlan === "PRO"
                        ? 100
                        : undefined
                    : undefined
                }
                className="w-full"
                value={values.advancedSettings.maxParticipants || ""}
                onChange={(e) =>
                  setFieldValue(
                    "advancedSettings.maxParticipants",
                    parseInt(e.target.value) || 0,
                  )
                }
                min={1}
              />
            </div>
          )}
        </section>
        <section className="space-y-4">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <FocusSpan>Limit attempts</FocusSpan>
              <Helper align="center" side="top">
                Limit the number of times a participant can take this exam.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.advancedSettings.limitAttempts}
              onCheckedChange={() =>
                setFieldValue(
                  "advancedSettings.limitAttempts",
                  !values.advancedSettings.limitAttempts,
                )
              }
            />
          </div>
          {values.advancedSettings.limitAttempts && (
            <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2">
              <label
                className="flex items-center gap-2"
                htmlFor="maxAttemptsPerParticipant"
              >
                <FocusSpan>Max attempts</FocusSpan>
                <Helper align="center" side="top">
                  Set a maximum number of attempts allowed per participant.
                </Helper>
              </label>
              <Input
                id="maxAttemptsPerParticipant"
                type="number"
                placeholder="1"
                className="w-full"
                value={values.advancedSettings.maxAttemptsPerParticipant || ""}
                onChange={(e) =>
                  setFieldValue(
                    "advancedSettings.maxAttemptsPerParticipant",
                    parseInt(e.target.value) || 1,
                  )
                }
                min={1}
              />
            </div>
          )}
        </section>
        <section className="space-y-4">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <FocusSpan>Allow anonymous answers</FocusSpan>
              <Helper align="center" side="top">
                Allows users who are not registered on ExamSocial to take this
                exam. Their results in the table will be displayed as:
                "Anonymous user".
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.advancedSettings.allowAnonymousAnswers}
              onCheckedChange={() =>
                setFieldValue(
                  "advancedSettings.allowAnonymousAnswers",
                  !values.advancedSettings.allowAnonymousAnswers,
                )
              }
            />
          </div>
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
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <FocusSpan>Randomize question order</FocusSpan>
            <Helper align="center" side="top">
              Shuffles the order of questions for each student.
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
        </div>
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <FocusSpan>Randomize answer options</FocusSpan>
            <Helper align="center" side="top">
              Shuffles the order of answer options for each question.
            </Helper>
          </div>
          <Switch
            className="w-20"
            checked={values.advancedSettings.randomizeOptionsOrder}
            onCheckedChange={() =>
              setFieldValue(
                "advancedSettings.randomizeOptionsOrder",
                !values.advancedSettings.randomizeOptionsOrder,
              )
            }
          />
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <Heading5>Feedback and Results</Heading5>
          <Helper align="center" side="top">
            Configure the feedback and results for the exam.
          </Helper>
        </div>
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <FocusSpan>Minimum passing score</FocusSpan>
              <Helper align="center" side="top">
                Set the minimum score required to pass the exam. Students who
                score below this threshold will fail the exam, appearing in red.
              </Helper>
            </div>
            <Input
              type="number"
              placeholder="70"
              className="w-full"
              value={values.advancedSettings.passingScore}
              onChange={(e) =>
                setFieldValue(
                  "advancedSettings.passingScore",
                  parseInt(e.target.value),
                )
              }
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <FocusSpan>Send email report</FocusSpan>
                <Helper align="center" side="top">
                  Send an email report to the user when they complete the exam.
                </Helper>
              </div>
              {userPlan === "BASIC" && <ProBadge />}
            </div>
            <Switch
              className={cn("w-20", {
                "cursor-not-allowed opacity-50 blur-sm": userPlan === "BASIC",
              })}
              checked={values.advancedSettings.sendEmailReport}
              onCheckedChange={() =>
                userPlan !== "BASIC" &&
                setFieldValue(
                  "advancedSettings.sendEmailReport",
                  !values.advancedSettings.sendEmailReport,
                )
              }
              disabled={userPlan === "BASIC"}
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <FocusSpan>Show correct answers</FocusSpan>
              <Helper align="center" side="top">
                Show the correct answers to students after they complete the
                exam.
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
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <Heading5>Branding</Heading5>
            <Helper align="center" side="top">
              Customize the appearance and branding of your exam.
            </Helper>
          </div>
          <PremiumBadge />
        </div>
        <div
          className={cn("space-y-4", {
            "cursor-not-allowed select-none blur-sm": userPlan !== "PREMIUM",
          })}
        >
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <FocusSpan>Show logo in exam</FocusSpan>
              <Helper
                align="center"
                side="top"
                disabled={userPlan !== "PREMIUM"}
              >
                Display your logo in the exam metadata and details view.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.advancedSettings.showLogo}
              onCheckedChange={() =>
                setFieldValue(
                  "advancedSettings.showLogo",
                  !values.advancedSettings.showLogo,
                )
              }
              disabled={userPlan !== "PREMIUM"}
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <FocusSpan>Show brand name</FocusSpan>
              <Helper
                align="center"
                side="top"
                disabled={userPlan !== "PREMIUM"}
              >
                Display your brand name in the exam metadata and details view.
              </Helper>
            </div>
            <Switch
              className="w-20"
              checked={values.advancedSettings.showBrandName}
              onCheckedChange={() =>
                setFieldValue(
                  "advancedSettings.showBrandName",
                  !values.advancedSettings.showBrandName,
                )
              }
              disabled={userPlan !== "PREMIUM"}
            />
          </div>
          <div className="space-y-2">
            <FocusSpan>Personalized Thank You Screen</FocusSpan>
            <div className="flex flex-nowrap gap-2 overflow-x-auto">
              <Button.Icon
                className="mb-1 mr-1"
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
                  }}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
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
