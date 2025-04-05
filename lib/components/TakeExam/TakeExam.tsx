import { Exam } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "../Dialog";
import { ReportExam } from "../ReportExam";
import { Stepper } from "../Stepper";
import { Step } from "../Stepper/Stepper";
import SelectedQuestion from "./SelectedQuestion";

interface TakeExamProps {
  exam: Exam;
  onFinish: () => void;
  onReportExam: (reason: string, questions: string[]) => void;
  onSelectOption: (questionId: string, optionId: string) => void;
}

const TakeExam = ({
  exam,
  onFinish,
  onReportExam,
  onSelectOption,
}: TakeExamProps) => {
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
    onSelectOption(
      exam.questions[selectedQuestion].id!,
      recordQuestionSelectedOptions[exam.questions[selectedQuestion].id!],
    );
  }, [recordQuestionSelectedOptions]);

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
        onFinish={onFinish}
        canJumpBetweenSteps
      />
      <Dialog innerRef={reportExamDialogRef}>
        <ReportExam
          questions={exam.questions}
          onCancel={() => {
            reportExamDialogRef.current?.close();
          }}
          onSubmit={onReportExam}
        />
      </Dialog>
    </main>
  );
};

export default TakeExam;
