import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Button } from "../Button";
import { Stepper } from "../Stepper";
import { Step } from "../Stepper/Stepper";
import { AdditionalContent } from "./AdditionalContent";
import { AdvancedSettings } from "./AdvancedSettings";
import { GeneralDetails } from "./GeneralDetails";
import { Questions } from "./Questions";
import { Review } from "./Review";

interface CreateExamProps {
  onSubmit: (values: Yup.InferType<typeof examSchema>) => void;
  onCancel: () => void;
}

const CreateExam = ({ onSubmit, onCancel }: CreateExamProps) => {
  const steps = {
    1: (
      <div className="grid gap-6 md:grid-cols-2">
        <GeneralDetails />
        <AdvancedSettings />
      </div>
    ),
    2: <Questions />,
    3: <AdditionalContent />,
    4: <Review />,
  };

  const [step, setStep] = useState<keyof typeof steps>(1);

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        questions: [],
        contents: [],
        tags: [],
        image: "",
        advancedSettings: {
          randomizeQuestionOrder: true,
          showCorrectAnswers: false,
          sendEmailReport: false,
          leaderboard: false,
          numberOfAttempts: 3,
          price: 0,
          feedback: [],
          privacy: {
            setting: "PUBLIC",
            invitees: [],
            password: "",
          },
          timing: {
            setting: "NONE",
            hours: 0,
            minutes: 0,
            seconds: 0,
          },
          theme: "WHITEBOARD",
        },
      }}
      validationSchema={examSchema}
      validateOnMount
      onSubmit={onSubmit}
    >
      {({ isValid, errors, values }) => {
        const isValidGeneralDetails = !(
          errors.title &&
          errors.description &&
          errors.image
        );

        const isValidAdvancedSettings =
          Object.values(errors.advancedSettings ?? {}).length === 0;

        const isValidQuestions = !errors.questions;

        const isValidContents = !errors.contents;

        const stepsForStepper: Step[] = [
          {
            id: 1,
            status:
              isValidGeneralDetails && isValidAdvancedSettings
                ? "completed"
                : "error",
            tooltip: "General details",
          },
          {
            id: 2,
            status: isValidQuestions ? "completed" : "error",
            tooltip: "Questions of the exam",
          },
          {
            id: 3,
            status: isValidContents
              ? values.contents.length > 0
                ? "completed"
                : "pending"
              : "error",
            tooltip: "Additional content",
          },
          {
            id: 4,
            status: isValid ? "pending" : "disabled",
            tooltip: "Review exam",
          },
        ];

        const activeStep = stepsForStepper.find(
          (stepElement) => stepElement.id === step,
        );

        return (
          <Form className="h-full min-h-screen w-full max-w-screen-2xl">
            <header className="sticky top-0 z-10 bg-white">
              <Stepper
                allowManualStepChange
                activeStep={step}
                steps={stepsForStepper}
                onSelectStep={(id) => {
                  setStep(id as keyof typeof steps);
                }}
              >
                Create Exam
              </Stepper>
            </header>
            <main className="px-4 py-6 md:space-y-5 md:px-6 md:py-8 lg:space-y-6 lg:px-7 lg:py-9 xl:px-8 xl:py-10">
              <div className="space-y-6 md:space-y-5">{steps[step]}</div>
              <footer className="mt-4 flex items-center justify-between gap-4 md:justify-end">
                <Button
                  rounded
                  theme="light"
                  onClick={() => {
                    if (step === 1) return onCancel();
                    setStep((prev) => (prev - 1) as keyof typeof steps);
                  }}
                >
                  {step === 1 ? "Cancel" : "Previous"}
                </Button>
                <Button
                  rounded={!(step === 4)}
                  theme="accent"
                  disabled={
                    activeStep!.status === "disabled" ||
                    activeStep!.status === "error"
                  }
                  onClick={() => {
                    if (step === 4) return;
                    setStep((prev) => (prev + 1) as keyof typeof steps);
                  }}
                  type={step === 4 ? "submit" : "button"}
                >
                  {step === 4 ? "Finish" : "Next"}
                </Button>
              </footer>
            </main>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateExam;
