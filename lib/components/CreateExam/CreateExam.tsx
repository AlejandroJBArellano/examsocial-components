import { ExamCreationContext } from "@/hooks/exam";
import { examSchema } from "@/schemas";
import { UserPlan } from "@/types";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Button } from "../Button";
import { Field } from "../Field";
import { FocusSpan, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";
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
  isSubmitting: boolean;
}

const CreateExam = ({
  onSubmit,
  onCancel,
  userPlan,
  canSellExams,
  validatePathname,
  initialValues,
  isSubmitting,
}: CreateExamProps) => {
  // Local state for this section
  const [files, setFiles] = useState<File[]>([]);
  const [aiPrompt, setAiPrompt] = useState("");

  // Handle file additions
  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const fileArray = Array.from(newFiles);
    setFiles((prev) => [...prev, ...fileArray]);
  };

  // Remove a file
  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  const steps = {
    1: (
      <div className="space-y-4 xl:space-y-10">
        <section className="space-y-4 rounded-lg border-2 border-black bg-primary-tint p-4 shadow-right md:p-6 lg:p-7 xl:space-y-6 xl:p-8">
          {/* AI Prompt textarea with drag and drop */}
          <div className="space-y-3">
            <Heading3 className="relative mb-2 inline-block after:absolute after:bottom-0 after:left-0 after:h-2 after:w-full after:bg-accent after:opacity-30 after:content-['']">
              AI Exam Generator
            </Heading3>
            <p className="text-sm text-gray-600">
              Provide instructions for AI to generate exam content or upload
              documents as reference material.
            </p>

            <Field.Textarea
              label="Prompt"
              helperText="Drag & drop files or use the upload button"
              textareaProps={{
                className:
                  "min-h-[120px] w-full resize-none border-2 shadow-right-sm focus:shadow-right hover:shadow-right transform transition-all duration-200 ease-in-out",
                placeholder:
                  "Describe what kind of exam you want to create. For example: 'Create a beginner math quiz with 10 multiple choice questions about fractions.'",
                value: aiPrompt,
                onChange: (e) => setAiPrompt(e.target.value),
                onDragOver: (e) => e.preventDefault(),
                onDrop: (e) => {
                  e.preventDefault();
                  handleFiles(e.dataTransfer.files);
                },
              }}
            />

            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={(e) => handleFiles(e.target.files)}
            />

            {/* File upload button */}
            <div className="flex justify-end">
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer items-center gap-2 rounded-full border-2 border-black bg-light px-4 py-2 text-gray-700 shadow-right-sm transition-all duration-200 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-right active:translate-x-[0px] active:translate-y-[0px] active:shadow-right-sm"
              >
                <Icon name="upload" className="h-5 w-5" />
                <span className="font-bold">Upload Files</span>
              </label>
            </div>

            {/* File capsules */}
            {files.length > 0 && (
              <div className="mt-3 space-y-2 rounded-md border-2 border-black p-3">
                <FocusSpan className="text-sm font-bold">
                  Uploaded files
                </FocusSpan>
                <div className="flex flex-wrap gap-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center rounded-md border-2 border-black bg-light px-3 py-1.5 text-sm shadow-right-sm transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-right"
                    >
                      <Icon
                        name="description"
                        className="mr-2 h-4 w-4"
                        filled
                      />
                      <span className="max-w-[200px] truncate font-medium">
                        {file.name}
                      </span>
                      <button
                        onClick={() => removeFile(index)}
                        className="ml-2 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        aria-label="Remove file"
                      >
                        <Icon name="close" className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit button */}
            <div className="mt-6 flex justify-end">
              <Button
                theme="primary"
                rounded
                className="flex items-center gap-2 border-2 border-black font-bold transition-all duration-200 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-right-lg active:translate-x-[0px] active:translate-y-[0px] active:shadow-right-sm"
                disabled={!aiPrompt.trim() && files.length === 0}
                onClick={() => {
                  /* Add your AI generation logic here */
                }}
              >
                <Icon name="smart_toy" className="h-5 w-5" filled />
                Generate with AI
              </Button>
            </div>
          </div>
        </section>
        <div className="grid gap-6 md:grid-cols-2">
          <GeneralDetails />
          <AdvancedSettings />
        </div>
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
      const key = `exam_progress`;
      localStorage.setItem(key, JSON.stringify(values));
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
          marketplaceSettings: {
            currency: initialValues?.marketplaceSettings?.currency || "USD",
            price: initialValues?.marketplaceSettings?.price ?? 0,
          },
          theme: initialValues?.theme || "WHITEBOARD",
          advancedSettings: {
            privacy: {
              setting:
                initialValues?.advancedSettings?.privacy?.setting || "PUBLIC",
              invitees: initialValues?.advancedSettings?.privacy?.invitees,
            },
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
            errors.image &&
            errors.marketplaceSettings?.price &&
            errors.categories
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
            <Form className="flex h-full min-h-screen w-full max-w-screen-2xl flex-col bg-light">
              <header className="sticky top-0 z-10 bg-light">
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
                      activeStep!.status === "error" ||
                      isSubmitting
                    }
                    onClick={() => {
                      if (step === 4) return;
                      setStep((prev) => (prev + 1) as keyof typeof steps);
                    }}
                    type={step === 4 ? "submit" : "button"}
                    className="flex items-center justify-center gap-2"
                  >
                    {step === 4 ? (
                      <>
                        {isSubmitting ? (
                          <>
                            <Icon name="refresh" className="animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Icon name="draw" filled />
                            Publish
                          </>
                        )}
                      </>
                    ) : (
                      "Next"
                    )}
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
