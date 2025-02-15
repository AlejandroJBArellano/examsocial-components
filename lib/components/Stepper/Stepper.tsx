import { Timer } from "@mui/icons-material";
import { PropsWithChildren } from "react";
import { Button } from "../Button";

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
        <p className="text-[32px] sentient font-medium tracking-[0.64px] leading-10 text-primary-shadow">
          {title}
        </p>
        {time ? (
          <div className="flex gap-2 items-center">
            <p className="text-[28px] sentient font-[inherit] font-bold leading-8 tracking-[0.56px]">
              20:00
            </p>
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
              {index + 1}
            </Button>
          ))}
        </div>
        {showDivision ? (
          <span className="text-xl leading-[24px] sentient font-medium tracking-[0.4px]">
            {activeStep}/{steps}
          </span>
        ) : null}
      </article>
    </section>
  );
};

export default Stepper;
