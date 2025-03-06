import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Stepper } from "../Stepper";
import SelectedQuestion from "./SelectedQuestion";

const TakeExam = ({ exam }: { exam: Yup.InferType<typeof examSchema> }) => {
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
      <SelectedQuestion questions={exam.questions} onFinish={() => {}} />
    </main>
  );
};

export default TakeExam;
