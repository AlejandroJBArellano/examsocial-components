import { Question } from "@/types";
import { useState } from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { FocusSpan, Heading4, Span } from "../FontFaces";
import { RadioGroup } from "../RadioGroup";
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

const labels = {
  [ReportStep.REASON]:
    "Please, select the reason why you are reporting this exam from the list below:",
  [ReportStep.QUESTION]:
    "Now, please select all the questions to which your reason to report the exam might apply:",
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

  const radioItems = reasons.map((reason) => ({
    value: reason.key,
    label: reason.label,
  }));

  const steps = {
    [ReportStep.REASON]: (
      <article className="space-y-2">
        <RadioGroup
          items={radioItems}
          value={selectedReason || ""}
          onValueChange={setSelectedReason}
          orientation="vertical"
          className="space-y-4"
        />
        {selectedReason === "OTHER" && (
          <div className="ml-8">
            <label
              htmlFor="other"
              className="block text-base font-medium leading-5"
            >
              <FocusSpan>Please, write your reason:</FocusSpan>
            </label>
            <Textarea
              id="other"
              className="h-24 w-full rounded-md border border-black p-2"
              placeholder="Write in detail why you think this exam violates the TOS of ExamSocial"
            />
          </div>
        )}
      </article>
    ),
    [ReportStep.QUESTION]: (
      <article className="space-y-2">
        <ul className="space-y-4">
          {questions.map(({ title, id }) => (
            <li key={id} className="flex items-center gap-2">
              <Checkbox
                id={id}
                checked={selectedQuestions.includes(title)}
                onCheckedChange={() =>
                  setSelectedQuestions((prev) =>
                    prev.includes(title)
                      ? prev.filter((item) => item !== title)
                      : [...prev, title],
                  )
                }
              />
              <label htmlFor={id}>{title}</label>
            </li>
          ))}
        </ul>
      </article>
    ),
  };

  return (
    <section className="w-full max-w-sm space-y-6 rounded-md border border-black p-4 md:max-w-md md:space-y-7 md:p-6 xl:max-w-xl xl:space-y-8 xl:p-7 2xl:max-w-2xl 2xl:space-y-9 2xl:p-8">
      <article className="space-y-2">
        <Heading4>Report Exam</Heading4>
        <Span>{labels[step]}</Span>
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
          disabled={!selectedReason}
        >
          {step === ReportStep.REASON ? "Next" : "Submit"}
        </Button>
      </article>
    </section>
  );
};

export default ReportExam;
