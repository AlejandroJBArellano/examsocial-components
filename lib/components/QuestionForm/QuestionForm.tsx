import { Add } from "@mui/icons-material";
import { Field, FieldArray, Form, FormikProps } from "formik";
import { IQuestion } from "../../types";
import { Button } from "../Button";
import { CreateAnswer } from "../CreateAnswer";
import { Input } from "../Input";
import { Separator } from "../Separator";

const QuestionForm = ({
  values,
  setFieldValue,
  errors,
}: FormikProps<IQuestion>) => (
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
                <div className="text-feedback-error">{errors.answers}</div>
              )}
              {values.answers.map((answer, index) => (
                <div key={index}>
                  <CreateAnswer
                    answer={answer}
                    name={`answers.${index}`}
                    onDelete={() => remove(index)}
                    setFieldValue={setFieldValue}
                  />
                  {errors.answers && errors.answers[index] && (
                    <div className="text-feedback-error">
                      {typeof errors.answers[index] === "string"
                        ? errors.answers[index]
                        : errors.answers[index]?.text}
                    </div>
                  )}
                </div>
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
);

export default QuestionForm;
