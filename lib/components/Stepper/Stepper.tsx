import { Timer } from "@mui/icons-material";
import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { FocusSpan, Heading2, Heading3, Heading5 } from "../FontFaces";

interface IStepperProps {
  activeStep: number;
  steps: number;
  onClickStep: (step: number) => void;
  title: string;
  time?: string;
  showDivision?: boolean;
}

const Stepper = ({
  steps,
  activeStep,
  onClickStep,
  title,
  time,
  showDivision,
}: PropsWithChildren<IStepperProps>) => {
  return (
    <section className="bg-primary-tint border-b-sm sentient border-b-gray-500 p-4 pt-3 space-y-3">
      <article className="items-center flex justify-between">
        <Heading2 className="text-primary-shadow">{title}</Heading2>
        {time ? (
          <div className="flex gap-2 items-center">
            <Heading3>20:00</Heading3>
            <Timer />
          </div>
        ) : null}
      </article>
      <article className="items-center flex justify-between">
        <div className="flex items-center gap-3">
          {[...Array(steps)].map((_, index) => (
            <Button
              onClick={() => {
                onClickStep(index + 1);
              }}
              rounded
              key={index}
              theme={activeStep === index + 1 ? "primary" : "light"}
            >
              <FocusSpan>{index + 1}</FocusSpan>
            </Button>
          ))}
        </div>
        {showDivision ? (
          <Heading5>
            {activeStep}/{steps}
          </Heading5>
        ) : null}
      </article>
    </section>
  );
};

export default Stepper;
