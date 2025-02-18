import { Formik } from "formik";
import * as Yup from "yup";
import { questionSchema } from "../../schemas";
import { Button } from "../Button";
import { QuestionForm } from "../QuestionForm";

interface IEditQuestion {
  onSubmit: (values: Yup.InferType<typeof questionSchema>) => void;
  onCancel: () => void;
  initialValues: Yup.InferType<typeof questionSchema>;
}

const EditQuestion = ({ initialValues, onSubmit, onCancel }: IEditQuestion) => {
  console.log({ initialValues });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={questionSchema}
      validateOnChange
      // ? enableReinitialize
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
              onClick={() => {
                onSubmit(props.values);
                props.resetForm();
              }}
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
