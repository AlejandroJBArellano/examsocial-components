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
        options: [] as IQuestion["options"],
      }}
      validationSchema={questionSchema}
      validateOnChange
      onSubmit={onSubmit}
      validateOnBlur
    >
      {(props) => (
        <section className="space-y-6 rounded-lg border border-black p-4 shadow-right shadow-black md:space-y-7 md:p-6 lg:space-y-8 lg:p-7 xl:space-y-9 xl:p-8">
          <h2 className="sentient text-2xl font-medium leading-7">
            New Question
          </h2>
          <QuestionForm {...props} />
          <article className="flex items-center justify-between">
            <Button type="button" theme="light" rounded onClick={onCancel}>
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
              Save
            </Button>
          </article>
        </section>
      )}
    </Formik>
  );
};

export default NewQuestion;
