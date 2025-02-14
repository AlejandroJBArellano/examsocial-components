import { useState } from "react";
import { cn } from "../../utils";
import { Button } from "../Button";

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

const ReportExam = () => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
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
      <article>
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
      </article>
      <article className="grid grid-cols-2 gap-4">
        <Button theme="light" rounded>
          Cancel
        </Button>
        <Button theme="accent" rounded>
          Next
        </Button>
      </article>
    </section>
  );
};

export default ReportExam;
