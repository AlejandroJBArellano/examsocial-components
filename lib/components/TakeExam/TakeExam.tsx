import { Exam } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "../Dialog";
import { ReportExam } from "../ReportExam";
import { Stepper } from "../Stepper";
import { Step } from "../Stepper/Stepper";
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

const TakeExam = ({ exam, onFinish, onReportExam }: TakeExamProps) => {
  const reportExamDialogRef = useRef<HTMLDialogElement>(null);

  const [recordQuestionSelectedOptions, setRecordQuestionSelectedOptions] =
    useState<Record<string, string>>({});
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const { setting, hours, minutes, seconds } = exam.advancedSettings.timing;
    let totalTime = 0;

    if (setting === "TOTAL") {
      totalTime = (hours || 0) * 3600 + (minutes || 0) * 60;
    } else if (setting === "PER_QUESTION") {
      totalTime = (minutes || 0) * 60 + (seconds || 0);
    }

    setTime(totalTime);

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          onFinish(recordQuestionSelectedOptions, "OUT_OF_TIME");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [exam.advancedSettings.timing]);

  const steps: Step[] = exam.questions.map((_, index) => ({
    id: index + 1,
    status: recordQuestionSelectedOptions[exam.questions[index].id!]
      ? "completed"
      : "pending",
  }));

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      const confirmationMessage =
        "Are you sure you want to leave this page? Your exam might not be submitted.";
      event.returnValue = confirmationMessage; // Required by some browsers

      if (window.confirm(confirmationMessage)) {
        onFinish(recordQuestionSelectedOptions, "DROPPED");
      } else {
        return (event.returnValue = "");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [onFinish]);

  return (
    <main>
      <Stepper
        theme="secondary"
        activeStep={selectedQuestion + 1}
        steps={steps}
        showDivision
        time={
          exam.advancedSettings.timing.setting !== "NONE"
            ? ["PER_QUESTION", "CUSTOM"].includes(
                exam.advancedSettings.timing.setting,
              )
              ? new Date(time * 1000).toISOString().substr(14, 5)
              : new Date(time * 1000).toISOString().substr(11, 8)
            : undefined
        }
        onReportExam={() => {
          reportExamDialogRef.current?.showModal();
        }}
      >
        {exam.title}
      </Stepper>
      <SelectedQuestion
        recordQuestionSelectedOptions={recordQuestionSelectedOptions}
        onSelectOption={(questionId, optionId) => {
          setRecordQuestionSelectedOptions((prev) => ({
            ...prev,
            [questionId]: optionId,
          }));
        }}
        selected={selectedQuestion}
        setSelected={setSelectedQuestion}
        questions={exam.questions}
        onFinish={(selected) => onFinish(selected, "FINISHED")}
        canJumpBetweenSteps
      />
      <Dialog innerRef={reportExamDialogRef}>
        <ReportExam
          questions={exam.questions}
          onCancel={() => {
            reportExamDialogRef.current?.close();
          }}
          onSubmit={(reason, questions) =>
            onReportExam(reason, questions, recordQuestionSelectedOptions)
          }
        />
      </Dialog>
    </main>
  );
};

export default TakeExam;
