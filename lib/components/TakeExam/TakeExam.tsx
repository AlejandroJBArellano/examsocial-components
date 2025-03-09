import { useEffect, useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Stepper } from "../Stepper";
import { Step } from "../Stepper/Stepper";
import SelectedQuestion from "./SelectedQuestion";

const TakeExam = ({ exam }: { exam: Yup.InferType<typeof examSchema> }) => {
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
    status: "pending",
  }));

  return (
    <main>
      <Stepper
        theme="secondary"
        activeStep={selectedQuestion + 1}
        steps={steps}
        showDivision
        time={new Date(time * 1000).toISOString().substr(11, 8)}
      >
        {exam.title}
      </Stepper>
      <SelectedQuestion
        selected={selectedQuestion}
        setSelected={setSelectedQuestion}
        questions={exam.questions}
        onFinish={() => {}}
        canJumpBetweenSteps
      />
    </main>
  );
};

export default TakeExam;
