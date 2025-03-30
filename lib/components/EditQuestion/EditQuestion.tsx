import { Formik } from "formik";
import * as Yup from "yup";
import { questionSchema } from "../../schemas";
import { Button } from "../Button";
import { Heading4 } from "../FontFaces";
import { QuestionForm } from "../QuestionForm";

interface IEditQuestion {
  onSubmit: (values: Yup.InferType<typeof questionSchema>) => void;
  onCancel: () => void;
  initialValues: Yup.InferType<typeof questionSchema>;
}

const EditQuestion = ({ initialValues, onSubmit, onCancel }: IEditQuestion) => {
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
        <section className="space-y-6 rounded-lg border border-black p-4 shadow-right shadow-black md:space-y-7 md:p-6 lg:space-y-8 lg:p-7 xl:space-y-9 xl:p-8">
          <Heading4>Edit Question</Heading4>
          <QuestionForm {...props} />
          <div className="flex items-center justify-between">
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
        </section>
      )}
    </Formik>
  );
};

export default EditQuestion;
