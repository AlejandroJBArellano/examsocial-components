import { useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Stepper } from "../Stepper";
import SelectedQuestion from "./SelectedQuestion";

const TakeExam = ({ exam }: { exam: Yup.InferType<typeof examSchema> }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  return (
    <main>
      <Stepper
        theme="secondary"
        activeStep={1}
        onClickStep={() => {}}
        steps={4}
        title="Take Exam"
        showDivision
        time={"60"}
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
