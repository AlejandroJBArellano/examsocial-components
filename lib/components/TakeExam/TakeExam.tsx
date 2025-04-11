import { Exam } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "../Dialog";
import { ReportExam } from "../ReportExam";
import { Step, Stepper } from "../Stepper";
import SelectedQuestion from "./SelectedQuestion";

type FinishReasons = "OUT_OF_TIME" | "REPORT" | "FINISHED" | "DROPPED";

interface TakeExamProps {
  exam: Exam;
  onFinish: (selections: Record<string, string>, reason: FinishReasons) => void;
  onReportExam: (
    reason: string,
    questions: string[],
    selections: Record<string, string>,
  ) => void;
}

const useExamTimer = (
  timing: Exam["advancedSettings"]["timing"],
  onTimeOut: () => void,
) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const { setting, hours, minutes, seconds } = timing;
    let totalTime = 0;

    if (setting === "TOTAL") {
      totalTime = (hours || 0) * 3600 + (minutes || 0) * 60;
    } else if (setting === "PER_QUESTION") {
      totalTime = (minutes || 0) * 60 + (seconds || 0);
    } else {
      return;
    }

    setTime(totalTime);

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          onTimeOut();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timing]);

  return time;
};

const useBeforeUnload = (onUnload: () => void) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      const confirmationMessage =
        "Are you sure you want to leave this page? Your exam might not be submitted.";
      event.returnValue = confirmationMessage;

      if (window.confirm(confirmationMessage)) {
        onUnload();
      } else {
        return (event.returnValue = "");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [onUnload]);
};

const formatTime = (time: number, timingSetting: string) => {
  if (timingSetting === "NONE") return undefined;

  return ["PER_QUESTION", "CUSTOM"].includes(timingSetting)
    ? new Date(time * 1000).toISOString().slice(14, 19)
    : new Date(time * 1000).toISOString().slice(11, 19);
};

const TakeExam = ({ exam, onFinish, onReportExam }: TakeExamProps) => {
  const reportExamDialogRef = useRef<HTMLDialogElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [selected, setSelected] = useState(0);

  const time = useExamTimer(exam.advancedSettings.timing, () =>
    onFinish(selectedOptions, "OUT_OF_TIME"),
  );

  useBeforeUnload(() => onFinish(selectedOptions, "DROPPED"));

  const steps: Step[] = exam.questions.map((_, index) => ({
    id: index + 1,
    status: selectedOptions[exam.questions[index].id!]
      ? "completed"
      : "pending",
  }));

  const handleSelectOption = (questionId: string, optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  return (
    <main>
      <Stepper
        theme="secondary"
        activeStep={selected + 1}
        steps={steps}
        showDivision
        time={formatTime(time, exam.advancedSettings.timing.setting)}
        onReportExam={() => reportExamDialogRef.current?.showModal()}
      >
        {exam.title}
      </Stepper>

      <SelectedQuestion
        selectedOptions={selectedOptions}
        onSelectOption={handleSelectOption}
        selected={selected}
        setSelected={setSelected}
        questions={exam.questions}
        onFinish={(selected) => onFinish(selected, "FINISHED")}
      />

      <Dialog innerRef={reportExamDialogRef}>
        <ReportExam
          questions={exam.questions}
          onCancel={() => reportExamDialogRef.current?.close()}
          onSubmit={(reason, questions) =>
            onReportExam(reason, questions, selectedOptions)
          }
        />
      </Dialog>
    </main>
  );
};

export default TakeExam;
