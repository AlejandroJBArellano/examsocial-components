import { Question } from "@/types";
import { useState } from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
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
              Please, write your reason:
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
          {questions.map(({ title, _id }) => (
            <li key={_id} className="flex items-center gap-2">
              <Checkbox
                id={_id}
                checked={selectedQuestions.includes(title)}
                onCheckedChange={() =>
                  setSelectedQuestions((prev) =>
                    prev.includes(title)
                      ? prev.filter((item) => item !== title)
                      : [...prev, title],
                  )
                }
              />
              <label htmlFor={_id}>{title}</label>
            </li>
          ))}
        </ul>
      </article>
    ),
  };

  return (
    <section className="space-y-6 rounded-md border border-black p-4">
      <article className="space-y-2">
        <h2 className="sentient text-2xl font-medium leading-7 tracking-[0.48px]">
          Report Exam
        </h2>
        <p className="text-base leading-5">{labels[step]}</p>
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
