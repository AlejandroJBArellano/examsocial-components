import { useEffect, useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Stepper } from "../Stepper";
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

  return (
    <main>
      <Stepper
        theme="secondary"
        activeStep={selectedQuestion + 1}
        onClickStep={(step) => {
          setSelectedQuestion(step - 1);
        }}
        steps={exam.questions.length}
        title="Take Exam"
        showDivision
        time={new Date(time * 1000).toISOString().substr(11, 8)}
      />
      <SelectedQuestion
        selected={selectedQuestion}
        setSelected={setSelectedQuestion}
        questions={exam.questions}
        onFinish={() => {}}
      />
    </main>
  );
};

export default TakeExam;
