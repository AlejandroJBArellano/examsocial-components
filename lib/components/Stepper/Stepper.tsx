import { Timer } from "@mui/icons-material";
import { PropsWithChildren } from "react";
import { Button } from "../Button";

interface IStepperProps {
  activeStep: number;
  steps: number;
  onClickStep: (step: number) => void;
}

const Stepper = ({
  steps,
  activeStep,
  onClickStep,
}: PropsWithChildren<IStepperProps>) => {
  return (
    <section className="bg-primary-tint border-b-sm sentient border-b-gray-500 p-4 pt-3 space-y-3">
      <article className="items-center flex justify-between">
        <p className="text-[32px] sentient font-medium tracking-[0.64px] leading-10 text-primary-shadow">
          Stepper
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-[28px] sentient font-[inherit] font-bold leading-8 tracking-[0.56px]">
            20:00
          </p>
          <Timer />
        </div>
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
        <span className="text-xl leading-[24px] sentient font-medium tracking-[0.4px]">
          {activeStep}/{steps}
        </span>
      </article>
    </section>
  );
};

export default Stepper;
