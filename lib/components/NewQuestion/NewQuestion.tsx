import { Formik } from "formik";
import { questionSchema } from "../../schemas";
import { IQuestion } from "../../types";
import { Button } from "../Button";
import { QuestionForm } from "../QuestionForm";

interface INewQuestion {
  onSubmit: (values: IQuestion) => void;
  onCancel: () => void;
}

const NewQuestion = ({ onSubmit, onCancel }: INewQuestion) => {
  return (
    <Formik
      initialValues={{
        question: "",
        answers: [{ text: "", correct: false }],
      }}
      validationSchema={questionSchema}
      validateOnChange
      onSubmit={onSubmit}
      validateOnBlur
    >
      {(props) => (
        <div className="p-4 shadow-right shadow-black border border-black rounded-lg space-y-6">
          <h2 className="text-2xl leading-7 sentient font-medium">
            New Question
          </h2>
          <QuestionForm {...props} />
          <div className="flex justify-between items-center">
            <Button type="button" theme="light" rounded onClick={onCancel}>
              Cancel
            </Button>
            <Button
              rounded
              theme="accent"
              disabled={!props.isValid}
              type="submit"
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default NewQuestion;
