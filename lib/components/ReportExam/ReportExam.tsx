import { useState } from "react";
import { cn } from "../../utils";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Textarea } from "../Textarea";

const reasons = [
  {
    key: "NON_EDUCATIONAL",
    label: "Non-educational exam (e.g. survey)",
  },
  {
    key: "FALSE_INFORMATION",
    label: "False information",
  },
  {
    key: "EXPLICIT_CONTENT",
    label: "Explicit content",
  },
  {
    key: "HATE_SPEECH",
    label: "Hateful or offensive content",
  },
  {
    key: "SPAM",
    label: "Spam",
  },
  {
    key: "COPYRIGHT",
    label: "Copyright infringement",
  },
  {
    key: "OTHER",
    label: "Other",
  },
];

enum ReportStep {
  REASON = "REASON",
  QUESTION = "QUESTION",
}

type Question = {
  question: string;
  id: string;
};

const ReportExam = ({
  questions,
  onCancel,
  onSubmit,
}: {
  questions: Question[];

  onCancel: () => void;
  onSubmit: (reason: string, questions: string[]) => void;
}) => {
  const [step, setStep] = useState<ReportStep>(ReportStep.REASON);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const steps = {
    [ReportStep.REASON]: (
      <article className="space-y-2">
        <ul className="space-y-4">
          {reasons.map((reason) => (
            <li key={reason.key} className="flex items-center gap-2">
              <input
                type="radio"
                className="hidden"
                name="reason"
                value={reason.key}
                id={reason.key}
                checked={selectedReason === reason.key}
                onChange={() => setSelectedReason(reason.key)}
              />
              <label
                htmlFor={reason.key}
                className={cn(
                  "cursor-pointer rounded-full h-6 w-6 box-border border border-accent",
                  selectedReason === reason.key ? "bg-accent" : "bg-white"
                )}
              />
              <label htmlFor={reason.key}>{reason.label}</label>
            </li>
          ))}
        </ul>
        {selectedReason === "OTHER" && (
          <div className="ml-8">
            <label
              htmlFor="other"
              className="block text-base font-medium leading-5"
            >
              Please, write your reason:
            </label>
            <Textarea
              id="other"
              className="w-full h-24 p-2 border border-black rounded-md"
              placeholder="Write in detail why you think this exam violates the TOS of ExamSocial"
            />
          </div>
        )}
      </article>
    ),
    [ReportStep.QUESTION]: (
      <article className="space-y-2">
        <ul className="space-y-4">
          {questions.map(({ question, id }) => (
            <li key={id} className="flex items-center gap-2">
              <Checkbox
                id={id}
                checked={selectedQuestions.includes(question)}
                onCheckedChange={() =>
                  setSelectedQuestions((prev) =>
                    prev.includes(question)
                      ? prev.filter((item) => item !== question)
                      : [...prev, question]
                  )
                }
              />
              <label htmlFor={id}>{question}</label>
            </li>
          ))}
        </ul>
      </article>
    ),
  };

  return (
    <section className="p-4 border border-black rounded-md space-y-6">
      <article className="space-y-2">
        <h2 className="sentient text-2xl leading-7 font-medium tracking-[0.48px]">
          Report Exam
        </h2>
        <p className="text-base leading-5">
          Please, select the reason why you are reporting this exam from the
          list below:
        </p>
      </article>
      {steps[step]}
      <article className="grid grid-cols-2 gap-4">
        <Button
          theme="light"
          rounded
          onClick={() => {
            if (step === ReportStep.REASON) {
              onCancel();
            } else {
              setStep(ReportStep.REASON);
            }
          }}
        >
          {step === ReportStep.REASON ? "Cancel" : "Back"}
        </Button>
        <Button
          theme="accent"
          rounded
          onClick={() => {
            if (step === ReportStep.REASON) {
              setStep(ReportStep.QUESTION);
            } else {
              onSubmit(selectedReason!, selectedQuestions);
            }
          }}
        >
          {step === ReportStep.REASON ? "Next" : "Submit"}
        </Button>
      </article>
    </section>
  );
};

export default ReportExam;
