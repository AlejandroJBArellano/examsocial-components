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
}

const Time = ({ children }: PropsWithChildren) => (
  <div className="flex items-center gap-2">
    <Heading3>{children}</Heading3>
    <Icon name="timer" />
  </div>
);

const Stepper = ({
  steps,
  activeStep,
  onSelectStep,
  allowManualStepChange = false,
  time,
  showDivision,
  theme = "primary",
  children,
}: PropsWithChildren<IStepperProps>) => {
  const themeStep = {
    warning: "extra",
    error: "feedback-error",
    pending: theme,
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
            <Button theme="feedback-error" rounded className="p-2">
              <Icon name="flag" />
            </Button>
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
          {steps.map((step, index) => {
            const Child =
              step.status === "completed" ? (
                <Button.Icon size={20} theme="extra" rounded>
                  check
                </Button.Icon>
              ) : (
                <Button
                  onClick={() => {
                    if (allowManualStepChange) {
                      onSelectStep?.(step.id);
                    }
                  }}
                  rounded
                  key={index}
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
              <Tooltip trigger={Child} side="bottom">
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
