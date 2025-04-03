import { ExamCreationContext } from "@/hooks/exam";
import { UserPlan } from "@/types";
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
  userPlan: UserPlan;
  canSellExams: boolean;
  validatePathname: (pathname: string) => Promise<boolean>;
  initialValues?: Partial<Yup.InferType<typeof examSchema>>;
}

const CreateExam = ({
  onSubmit,
  onCancel,
  userPlan,
  canSellExams,
  validatePathname,
  initialValues,
}: CreateExamProps) => {
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

  // Save exam progress to localStorage whenever step changes
  const saveToLocalStorage = (values: Yup.InferType<typeof examSchema>) => {
    try {
      const key = `exam_progress_${values.title.replace(/\s+/g, "_")}`;
      localStorage.setItem(key, JSON.stringify(values));

      // Keep only the 5 most recent saved exams
      const keys = Object.keys(localStorage)
        .filter((k) => k.startsWith("exam_progress_"))
        .sort()
        .reverse();

      if (keys.length > 5) {
        keys.slice(5).forEach((k) => localStorage.removeItem(k));
      }
    } catch (error) {
      console.error("Failed to save exam progress to localStorage:", error);
    }
  };

  return (
    <ExamCreationContext.Provider
      value={{ userPlan, canSellExams, validatePathname }}
    >
      <Formik
        initialValues={{
          title: initialValues?.title || "",
          description: initialValues?.description || "",
          image: initialValues?.image || "",
          categories: initialValues?.categories || [],
          questions: initialValues?.questions || [],
          contents: initialValues?.contents || [],
          currency: initialValues?.currency || "USD",
          price: initialValues?.price ?? 0,
          theme: initialValues?.theme || "WHITEBOARD",
          advancedSettings: {
            randomizeQuestionOrder:
              initialValues?.advancedSettings?.randomizeQuestionOrder ?? true,
            showCorrectAnswers:
              initialValues?.advancedSettings?.showCorrectAnswers ?? false,
            sendEmailReport:
              initialValues?.advancedSettings?.sendEmailReport ?? false,
            leaderboard: initialValues?.advancedSettings?.leaderboard ?? false,
            maxAttempts: initialValues?.advancedSettings?.maxAttempts ?? 3,
            feedback: initialValues?.advancedSettings?.feedback || [],
            passingScore: initialValues?.advancedSettings?.passingScore ?? 70,
            privacy: {
              setting:
                initialValues?.advancedSettings?.privacy?.setting || "PUBLIC",
              invitees:
                initialValues?.advancedSettings?.privacy?.invitees || [],
            },
            timing: {
              setting:
                initialValues?.advancedSettings?.timing?.setting || "NONE",
              hours: initialValues?.advancedSettings?.timing?.hours ?? 0,
              minutes: initialValues?.advancedSettings?.timing?.minutes ?? 0,
              seconds: initialValues?.advancedSettings?.timing?.seconds ?? 0,
            },
          },
        }}
        validationSchema={examSchema}
        validateOnMount
        onSubmit={onSubmit}
      >
        {({ isValid, errors, values }) => {
          console.log(errors);
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
              tooltip: "Details and Settings",
            },
            {
              id: 2,
              status: isValidQuestions ? "completed" : "error",
              tooltip: "Questions",
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
            <Form className="flex h-full min-h-screen w-full max-w-screen-2xl flex-col">
              <header className="sticky top-0 z-10 bg-white">
                <Stepper
                  allowManualStepChange
                  activeStep={step}
                  steps={stepsForStepper}
                  onSelectStep={(id) => {
                    setStep(id as keyof typeof steps);
                    saveToLocalStorage(values);
                  }}
                >
                  Create Exam
                </Stepper>
              </header>
              <main className="flex flex-1 flex-col px-4 py-6 md:gap-5 md:px-6 md:py-8 lg:gap-6 lg:px-7 lg:py-9 xl:px-8 xl:py-10">
                <div className="flex-1 space-y-6 md:space-y-5">
                  {steps[step]}
                </div>
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
    </ExamCreationContext.Provider>
  );
};

export default CreateExam;
