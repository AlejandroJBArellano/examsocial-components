import { Form, Formik } from "formik";
import { useState } from "react";
import { examSchema } from "../../schemas";
import { Button } from "../Button";
import { Stepper } from "../Stepper";
import { AdditionalContent } from "./AdditionalContent";
import { AdvancedSettings } from "./AdvancedSettings";
import { GeneralDetails } from "./GeneralDetails";
import { Questions } from "./Questions";
import { Review } from "./Review";

const CreateExam = () => {
  const steps = {
    1: (
      <div className="md:grid md:grid-cols-2 md:gap-6">
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
      onSubmit={(values) => {
        console.log({ values });
      }}
    >
      {({ isValid, errors }) => {
        console.log({ errors });
        return (
          <Form>
            <header>
              <Stepper
                title="Create Exam"
                steps={4}
                activeStep={step}
                onClickStep={(newStep) => {
                  setStep(newStep as keyof typeof steps);
                }}
                validation={{
                  1: true,
                  2: true,
                  3: true,
                  4: isValid,
                }}
              />
            </header>
            <main className="px-4 py-6 md:space-y-5 md:px-6 md:py-8 lg:space-y-6 lg:px-7 lg:py-9 xl:px-8 xl:py-10">
              <div className="space-y-6 md:space-y-5">{steps[step]}</div>
              <footer className="mt-4 flex items-center justify-between gap-4 md:justify-end">
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
                  disabled={step === 3 && !isValid}
                  onClick={() => {
                    if (step === 4) return;
                    setStep((prev) => (prev + 1) as keyof typeof steps);
                  }}
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
