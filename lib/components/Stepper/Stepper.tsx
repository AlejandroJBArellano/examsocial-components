import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import { Button } from "../Button";
import { ButtonTheme } from "../Button/Button";
import { FocusSpan, Heading2, Heading3, Heading5 } from "../FontFaces";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

export type StepStatus =
  | "pending"
  | "completed"
  | "error"
  | "warning"
  | "disabled";

export interface Step {
  id: number;
  icon?: React.ReactNode;
  status?: StepStatus;
  tooltip?: string;
}

interface IStepperProps {
  activeStep: number;
  onSelectStep?: (id: number) => void;
  allowManualStepChange?: boolean;
  time?: string;
  showDivision?: boolean;
  theme?: "primary" | "secondary";
  steps: Step[];
  onReportExam?: () => void;
}

const Time = ({ children }: PropsWithChildren) => (
  <div className="flex items-center gap-2">
    <Heading3>{children}</Heading3>
    <Icon name="timer" filled />
  </div>
);

const Stepper = ({
  steps,
  activeStep,
  onSelectStep,
  allowManualStepChange,
  time,
  showDivision,
  theme = "primary",
  children,
  onReportExam,
}: PropsWithChildren<IStepperProps>) => {
  const themeStep = {
    warning: "extra",
    error: "feedback-error",
    pending: "primary",
    completed: "extra",
    disabled: "light",
  };

  return (
    <section
      className={
        cn(
          "sentient space-y-3 border-b-gray-500 p-4 pt-3",
          theme === "primary" ? "bg-primary-tint" : "bg-secondary-tint",
        ) + " border-b-sm"
      }
    >
      {theme === "primary" ? (
        <article className="flex items-center justify-between">
          <Heading2 className="text-primary-shadow">{children}</Heading2>
          {time && <Time>20:00</Time>}
        </article>
      ) : (
        <>
          <article className="flex items-center justify-between">
            <Heading2 className="text-secondary-shadow">{children}</Heading2>
            <Tooltip
              trigger={
                <Button.Icon
                  onClick={onReportExam}
                  filled
                  theme="feedback-error"
                  rounded
                  size={20}
                >
                  Flag
                </Button.Icon>
              }
            >
              Report Exam
            </Tooltip>
          </article>
          <article className="flex items-center justify-between">
            {showDivision && (
              <Heading5>
                {activeStep}/{steps.length}
              </Heading5>
            )}
            {time && <Time>{time}</Time>}
          </article>
        </>
      )}

      <article className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {steps.map((step) => {
            const Child =
              step.status === "completed" ? (
                <Button.Icon
                  onClick={() => {
                    if (step.status === "disabled") return;
                    if (allowManualStepChange) {
                      onSelectStep?.(step.id);
                    }
                  }}
                  size={20}
                  theme="extra"
                  rounded
                  key={step.id}
                >
                  check
                </Button.Icon>
              ) : (
                <Button
                  onClick={() => {
                    if (step.status === "disabled") return;
                    if (allowManualStepChange) {
                      onSelectStep?.(step.id);
                    }
                  }}
                  key={step.id}
                  rounded
                  theme={
                    (step.status
                      ? themeStep[step.status]
                      : "light") as ButtonTheme
                  }
                  disabled={step.status === "disabled"}
                >
                  <FocusSpan>{step.id}</FocusSpan>
                </Button>
              );

            return step.tooltip ? (
              <Tooltip key={step.id} trigger={Child} side="bottom">
                {step.tooltip}
              </Tooltip>
            ) : (
              Child
            );
          })}
        </div>
        {theme === "primary" && showDivision && (
          <Heading5>
            {activeStep}/{steps.length}
          </Heading5>
        )}
      </article>
    </section>
  );
};

export default Stepper;
