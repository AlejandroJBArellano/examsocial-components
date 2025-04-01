import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Dialog } from "../Dialog";
import { ReportExam } from "../ReportExam";
import { Stepper } from "../Stepper";
import { Step } from "../Stepper/Stepper";
import SelectedQuestion from "./SelectedQuestion";

const TakeExam = ({ exam }: { exam: Yup.InferType<typeof examSchema> }) => {
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

  return (
    <main>
      <Stepper
        theme="secondary"
        activeStep={selectedQuestion + 1}
        steps={steps}
        showDivision
        time={
          ["PER_QUESTION", "CUSTOM"].includes(
            exam.advancedSettings.timing.setting,
          )
            ? new Date(time * 1000).toISOString().substr(14, 5)
            : new Date(time * 1000).toISOString().substr(11, 8)
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
        onFinish={() => {
          console.log(recordQuestionSelectedOptions);
        }}
        canJumpBetweenSteps
      />
      <Dialog innerRef={reportExamDialogRef}>
        <ReportExam
          questions={exam.questions}
          onCancel={() => {
            reportExamDialogRef.current?.close();
          }}
          onSubmit={() => {}}
        />
      </Dialog>
    </main>
  );
};

export default TakeExam;
