import { Add } from "@mui/icons-material";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../Button";
import { CreateAnswer } from "../CreateAnswer";
import { Input } from "../Input";
import { Separator } from "../Separator";

const QuestionForm = () => {
  const validationSchema = Yup.object({
    question: Yup.string().required("Question is required"),
    answers: Yup.array()
      .of(
        Yup.object({
          text: Yup.string().required("Answer text is required"),
          correct: Yup.boolean(),
        })
      )
      .min(1, "At least one answer is required"),
  });

  const initialValues = {
    question: "",
    answers: [{ text: "", correct: false }],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, errors }) => (
        <Form className="space-y-4">
          <section className="space-y-4">
            <article className="space-y-1">
              <label className="font-medium">Question</label>
              <Field
                name="question"
                as={Input}
                placeholder="Type your question here..."
                className="w-full"
                error={errors.question}
              />
            </article>
            <Separator />
            <article className="space-y-3">
              <label className="font-medium">Answers</label>
              <FieldArray name="answers">
                {({ push, remove }) => (
                  <>
                    {typeof errors.answers === "string" && (
                      <div className="text-feedback-error">
                        {errors.answers}
                      </div>
                    )}
                    {values.answers.map((answer, index) => (
                      <CreateAnswer
                        key={index}
                        answer={answer}
                        name={`answers.${index}`}
                        onDelete={() => remove(index)}
                        setFieldValue={setFieldValue}
                      />
                    ))}
                    {values.answers.length < 4 && (
                      <Button
                        type="button"
                        theme="light"
                        rounded
                        className="p-2 mx-auto flex items-center justify-center"
                        onClick={() => push({ text: "", correct: false })}
                      >
                        <Add className="!w-5 !h-5" />
                      </Button>
                    )}
                  </>
                )}
              </FieldArray>
            </article>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionForm;
