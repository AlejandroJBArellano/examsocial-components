import { Add } from "@mui/icons-material";
import { Field, FieldArray, FormikProps } from "formik";
import * as Yup from "yup";
import { questionSchema } from "../../schemas";
import { Button } from "../Button";
import { CreateAnswer } from "../CreateAnswer";
import { Input } from "../Input";
import { Separator } from "../Separator";

const QuestionForm = ({
  values,
  setFieldValue,
  errors,
}: FormikProps<Yup.InferType<typeof questionSchema>>) => (
  <div className="space-y-4">
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
        <label className="font-medium">Options</label>
        <FieldArray name="answers">
          {({ push, remove }) => (
            <>
              {values.options.map((option, index) => (
                <div key={index}>
                  <CreateAnswer
                    answer={option}
                    name={`answers.${index}`}
                    onDelete={() => remove(index)}
                    setFieldValue={setFieldValue}
                  />
                  {errors.options && errors.options[index] && (
                    <div className="text-feedback-error">
                      {!(typeof errors.options === "string")
                        ? typeof errors.options[index] === "string"
                          ? errors.options[index]
                          : typeof errors.options[index] === "object" &&
                              "text" in errors.options[index]
                            ? errors.options[index].text
                            : null
                        : null}
                    </div>
                  )}
                </div>
              ))}
              {typeof errors.options === "string" && (
                <div className="text-feedback-error">{errors.options}</div>
              )}
              {values.options.length < 4 && (
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
  </div>
);

export default QuestionForm;
