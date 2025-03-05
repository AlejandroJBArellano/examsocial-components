import { Flag, Timer } from "@mui/icons-material";
import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import { Button } from "../Button";
import { FocusSpan, Heading2, Heading3, Heading5 } from "../FontFaces";

interface IStepperProps {
  activeStep: number;
  steps: number;
  onClickStep: (step: number) => void;
  title: string;
  time?: string;
  showDivision?: boolean;
  theme?: "primary" | "secondary";
  validation?: Record<number, boolean>;
}

const Time = ({ children }: PropsWithChildren) => (
  <div className="flex gap-2 items-center">
    <Heading3>{children}</Heading3>
    <Timer />
  </div>
);

const Stepper = ({
  steps,
  activeStep,
  onClickStep,
  title,
  time,
  showDivision,
  theme = "primary",
  validation,
}: PropsWithChildren<IStepperProps>) => {
  return (
    <section
      className={
        cn(
          " sentient border-b-gray-500 p-4 pt-3 space-y-3",
          theme === "primary" ? "bg-primary-tint" : "bg-secondary-tint",
        ) + " border-b-sm"
      }
    >
      {theme === "primary" ? (
        <article className="items-center flex justify-between">
          <Heading2 className="text-primary-shadow">{title}</Heading2>
          {time && <Time>20:00</Time>}
        </article>
      ) : (
        <>
          <article className="flex items-center justify-between">
            <Heading2 className="text-secondary-shadow">{title}</Heading2>
            <Button theme="feedback-error" rounded className="p-2">
              <Flag />
            </Button>
          </article>
          <article className="flex items-center justify-between">
            {showDivision && (
              <Heading5>
                {activeStep}/{steps}
              </Heading5>
            )}
            {time && <Time>20:00</Time>}
          </article>
        </>
      )}

      <article className="items-center flex justify-between">
        <div className="flex items-center gap-3">
          {[...Array(steps)].map((_, index) => (
            <Button
              onClick={() => {
                onClickStep(index + 1);
              }}
              rounded
              key={index}
              disabled={validation ? !validation[index + 1] : false}
              theme={activeStep === index + 1 ? "primary" : "light"}
            >
              <FocusSpan>{index + 1}</FocusSpan>
            </Button>
          ))}
        </div>
        {theme === "primary" && showDivision && (
          <Heading5>
            {activeStep}/{steps}
          </Heading5>
        )}
      </article>
    </section>
  );
};

export default Stepper;
