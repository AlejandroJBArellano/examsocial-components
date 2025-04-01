import { Currency } from "@/constants";
import { useExamCreation } from "@/hooks/exam";
import { cn } from "@/utils";
import { useFormikContext } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { examSchema, feedbackSchema } from "../../schemas";
import { PremiumBadge, ProBadge } from "../Badges";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { FeedbackScreen, NewFeedbackScreen } from "../FeedbackScreen";
import { EditFeedbackScreen } from "../FeedbackScreen/NewAndEdit";
import {
  FocusSpan,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Span,
} from "../FontFaces";
import { Helper } from "../Helper";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { Select } from "../Select";
import { Switch } from "../Switch";
import { PrivacySettings } from "./PrivacySettings";
import { ThemeSettings } from "./ThemeSettings";
import { TimingSettings } from "./TimingSettings";

// Función para verificar si hay solapamiento entre condiciones de feedback
const checkFeedbackOverlap = (
  feedbacks: Yup.InferType<
    typeof examSchema
  >["advancedSettings"]["feedback"] = [],
) => {
  if (!feedbacks || feedbacks.length <= 1) return false;

  for (let i = 0; i < feedbacks.length; i++) {
    const a = feedbacks[i];
    if (!a) continue;

    for (let j = i + 1; j < feedbacks.length; j++) {
      const b = feedbacks[j];
      if (!b) continue;

      // Si alguno es ALL, siempre hay solapamiento con cualquier otro
      if (a.condition === "ALL" || b.condition === "ALL") {
        return true;
      }

      // Comprobando condición EQUAL_TO
      if (a.condition === "EQUAL_TO" && b.condition === "EQUAL_TO") {
        if (a.equal === b.equal) return true;
      }

      // Comprobando condición LESS_THAN
      if (a.condition === "LESS_THAN" && b.condition === "LESS_THAN") {
        if (a.lt === b.lt) return true;
      }

      // Comprobando condición GREATER_THAN
      if (a.condition === "GREATER_THAN" && b.condition === "GREATER_THAN") {
        if (a.gt === b.gt) return true;
      }

      // Solapamiento entre EQUAL_TO y BETWEEN
      if (
        (a.condition === "EQUAL_TO" &&
          b.condition === "BETWEEN" &&
          typeof a.equal === "number" &&
          typeof b.min === "number" &&
          typeof b.max === "number" &&
          a.equal >= b.min &&
          a.equal <= b.max) ||
        (b.condition === "EQUAL_TO" &&
          a.condition === "BETWEEN" &&
          typeof b.equal === "number" &&
          typeof a.min === "number" &&
          typeof a.max === "number" &&
          b.equal >= a.min &&
          b.equal <= a.max)
      ) {
        return true;
      }

      // Solapamiento entre EQUAL_TO y LESS_THAN
      if (
        (a.condition === "EQUAL_TO" &&
          b.condition === "LESS_THAN" &&
          typeof a.equal === "number" &&
          typeof b.lt === "number" &&
          a.equal < b.lt) ||
        (b.condition === "EQUAL_TO" &&
          a.condition === "LESS_THAN" &&
          typeof b.equal === "number" &&
          typeof a.lt === "number" &&
          b.equal < a.lt)
      ) {
        return true;
      }

      // Solapamiento entre EQUAL_TO y GREATER_THAN
      if (
        (a.condition === "EQUAL_TO" &&
          b.condition === "GREATER_THAN" &&
          typeof a.equal === "number" &&
          typeof b.gt === "number" &&
          a.equal > b.gt) ||
        (b.condition === "EQUAL_TO" &&
          a.condition === "GREATER_THAN" &&
          typeof b.equal === "number" &&
          typeof a.gt === "number" &&
          b.equal > a.gt)
      ) {
        return true;
      }

      // Solapamiento entre BETWEEN y BETWEEN
      if (
        a.condition === "BETWEEN" &&
        b.condition === "BETWEEN" &&
        typeof a.min === "number" &&
        typeof a.max === "number" &&
        typeof b.min === "number" &&
        typeof b.max === "number"
      ) {
        // Verificar si los rangos se solapan
        if (!(a.max < b.min || a.min > b.max)) {
          return true;
        }
      }

      // Solapamiento entre BETWEEN y LESS_THAN
      if (
        (a.condition === "BETWEEN" &&
          b.condition === "LESS_THAN" &&
          typeof a.min === "number" &&
          typeof b.lt === "number" &&
          a.min < b.lt) ||
        (b.condition === "BETWEEN" &&
          a.condition === "LESS_THAN" &&
          typeof b.min === "number" &&
          typeof a.lt === "number" &&
          b.min < a.lt)
      ) {
        return true;
      }

      // Solapamiento entre BETWEEN y GREATER_THAN
      if (
        (a.condition === "BETWEEN" &&
          b.condition === "GREATER_THAN" &&
          typeof a.max === "number" &&
          typeof b.gt === "number" &&
          a.max > b.gt) ||
        (b.condition === "BETWEEN" &&
          a.condition === "GREATER_THAN" &&
          typeof b.max === "number" &&
          typeof a.gt === "number" &&
          b.max > a.gt)
      ) {
        return true;
      }

      // Solapamiento entre LESS_THAN y GREATER_THAN
      if (
        (a.condition === "LESS_THAN" &&
          b.condition === "GREATER_THAN" &&
          typeof b.gt === "number" &&
          typeof a.lt === "number" &&
          b.gt < a.lt) ||
        (b.condition === "LESS_THAN" &&
          a.condition === "GREATER_THAN" &&
          typeof a.gt === "number" &&
          typeof b.lt === "number" &&
          a.gt < b.lt)
      ) {
        return true;
      }
    }
  }

  return false;
};

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const editFeedbackDialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number>(0);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);

  const { values, setFieldValue, getFieldProps } =
    useFormikContext<Yup.InferType<typeof examSchema>>();

  const { userPlan, canSellExams } = useExamCreation();

  console.log({ userPlan, canSellExams });

  const setCurrency = (currency: string) => {
    setFieldValue("advancedSettings.currency", currency);
  };

  // Comprueba superposiciones cuando cambia el feedback array
  const validateFeedbackOverlap = (
    newFeedback: Yup.InferType<typeof feedbackSchema>,
  ) => {
    const allFeedbacks = [
      ...(values.advancedSettings.feedback || []),
      newFeedback,
    ];
    const hasOverlap = checkFeedbackOverlap(allFeedbacks);

    if (hasOverlap) {
      setFeedbackError(
        "Error: Thank you screens conditions are overlapping. Please adjust the conditions to avoid overlaps.",
      );
      return false;
    } else {
      setFeedbackError(null);
      return true;
    }
  };

  // Versión para edición
  const validateFeedbackOverlapEdit = (
    newFeedback: Yup.InferType<typeof feedbackSchema>,
    editIndex: number,
  ) => {
    const allFeedbacks = [...(values.advancedSettings.feedback || [])];
    allFeedbacks[editIndex] = newFeedback;

    const hasOverlap = checkFeedbackOverlap(allFeedbacks);

    if (hasOverlap) {
      setFeedbackError(
        "Error: Thank you screens conditions are overlapping. Please adjust the conditions to avoid overlaps.",
      );
      return false;
    } else {
      setFeedbackError(null);
      return true;
    }
  };

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
              <FocusSpan>Register into the marketplace section</FocusSpan>
            </div>
          )}
        </section>
        <section
          className={cn("grid grid-cols-1 items-center gap-2 sm:grid-cols-2", {
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <FocusSpan>Currency</FocusSpan>
          <Select
            text={
              Currency[
                values.advancedSettings.currency as keyof typeof Currency
              ]
            }
            disabled={!canSellExams}
          >
            {Object.entries(Currency).map(([key, value]) => (
              <Select.Option
                key={key}
                onClick={() => {
                  setCurrency(key);
                }}
                disabled={!canSellExams}
                checked={values.advancedSettings.currency === key}
              >
                {value}
              </Select.Option>
            ))}
          </Select>
        </section>
        <section
          className={cn("grid grid-cols-1 items-center gap-2 sm:grid-cols-2", {
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <label htmlFor="price" className="flex items-center gap-2">
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
            {...getFieldProps("advancedSettings.price")}
          />
        </section>
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
            <Heading6>Personalized Thank You Screen</Heading6>
            <Paragraph className={userPlan !== "PREMIUM" ? "opacity-50" : ""}>
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
            {feedbackError && (
              <div className="mt-2 rounded-md bg-feedback-error p-2 text-white">
                <p>{feedbackError}</p>
              </div>
            )}
            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto">
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
                    // Al eliminar, verificar si aún hay solapamientos
                    const updatedFeedbacks =
                      values.advancedSettings.feedback?.filter(
                        (_, i) => i !== index,
                      );
                    if (checkFeedbackOverlap(updatedFeedbacks)) {
                      setFeedbackError(
                        "Error: Thank you screens conditions are overlapping. Please adjust the conditions to avoid overlaps.",
                      );
                    } else {
                      setFeedbackError(null);
                    }
                  }}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
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
              <label className="flex items-center gap-2" htmlFor="maxAttempts">
                <FocusSpan>Max attempts</FocusSpan>
                <Helper align="center" side="top">
                  Set a maximum number of attempts allowed per participant.
                </Helper>
              </label>
              <Input
                id="maxAttempts"
                type="number"
                placeholder="1"
                className="w-full"
                value={values.advancedSettings.maxAttempts || ""}
                onChange={(e) =>
                  setFieldValue(
                    "advancedSettings.maxAttempts",
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
            <FocusSpan>Randomize options order</FocusSpan>
            <Helper align="center" side="top">
              Shuffles the order of options order for each question.
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
      <ThemeSettings
        onChange={(theme) => {
          setFieldValue("advancedSettings.theme", theme);
        }}
      />
      <Dialog innerRef={dialogRef} id="advanced-settings">
        <NewFeedbackScreen
          onSubmit={(newFeedback) => {
            // Validar superposición antes de añadir
            if (validateFeedbackOverlap(newFeedback)) {
              setFieldValue("advancedSettings.feedback", [
                ...(values.advancedSettings.feedback || []),
                newFeedback,
              ]);
              console.log({ newFeedback });
            }
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
              if (validateFeedbackOverlapEdit(newFeedback, index)) {
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
              }
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
