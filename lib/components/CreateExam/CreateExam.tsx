import { useState } from "react";
import { Button } from "../Button";
import { Stepper } from "../Stepper";
import { AdditionalContent } from "./AdditionalContent";
import { GeneralDetails } from "./GeneralDetails";
import { Questions } from "./Questions";

const CreateExam = () => {
  const steps = {
    1: <GeneralDetails />,
    2: <Questions />,
    3: <AdditionalContent />,
    4: <p>Review</p>,
  };

  const [step, setStep] = useState<keyof typeof steps>(1);

  return (
    <>
      <header>
        <Stepper
          title="Create Exam"
          steps={4}
          activeStep={step}
          onClickStep={(newStep) => {
            setStep(newStep as keyof typeof steps);
          }}
        />
      </header>
      <main className="py-6 px-4">
        {steps[step]}
        <footer className="flex items-center justify-between mt-4">
          <Button
            rounded
            theme="light"
            onClick={() => {
              if (step === 1) return;
              setStep((prev) => (prev - 1) as keyof typeof steps);
            }}
          >
            {step === 1 ? "Cancel" : "Previous"}
          </Button>
          <Button
            rounded={!(step === 4)}
            theme="accent"
            onClick={() => {
              if (step === 4) return;
              setStep((prev) => (prev + 1) as keyof typeof steps);
            }}
          >
            {step === 4 ? "Finish" : "Next"}
          </Button>
        </footer>
      </main>
    </>
  );
};

export default CreateExam;
