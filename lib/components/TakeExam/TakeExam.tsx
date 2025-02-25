import { useState } from "react";
import { Stepper } from "../Stepper";
import SelectedQuestion from "./SelectedQuestion";

const TakeExam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
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
      <SelectedQuestion />
    </main>
  );
};

export default TakeExam;
