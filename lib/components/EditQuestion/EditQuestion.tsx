import { Formik } from "formik";
import { questionSchema } from "../../schemas";
import { IQuestion } from "../../types";
import { Button } from "../Button";
import { QuestionForm } from "../QuestionForm";

interface IEditQuestion {
  onSubmit: (values: IQuestion) => void;
  onCancel: () => void;
  initialValues: IQuestion;
}

const EditQuestion = ({ initialValues, onSubmit, onCancel }: IEditQuestion) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={questionSchema}
      validateOnChange
      onSubmit={onSubmit}
      validateOnBlur
    >
      {(props) => (
        <div className="p-4 shadow-right shadow-black border border-black rounded-lg space-y-6">
          <h2 className="text-2xl leading-7 sentient font-medium">
            Edit Question
          </h2>
          <QuestionForm {...props} />
          <div className="flex justify-between items-center">
            <Button theme="light" rounded onClick={onCancel}>
              Cancel
            </Button>
            <Button
              rounded
              theme="accent"
              disabled={!props.isValid}
              type="submit"
            >
              Update
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EditQuestion;
