import { Question } from "@/types";
import { Field, FieldArray, FormikProps } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../Button";
import { CreateAnswer } from "../CreateAnswer";
import { ImageInput } from "../ImageInput";
import { ImageUploader } from "../ImageUploader";
import { Input } from "../Input";
import { Separator } from "../Separator";
import { ComingSoonWrapper } from "../Wrapper";

const QuestionForm = ({
  values,
  setFieldValue,
  errors,
}: FormikProps<Question>) => (
  <div className="space-y-4">
    <section className="space-y-4">
      <article className="space-y-1">
        <label className="font-medium">Question</label>
        <Field
          name="title"
          as={Input}
          placeholder="Type your question here..."
          className="w-full"
          error={errors.title}
        />
      </article>
      <article className="space-y-1">
        <ComingSoonWrapper>
          <label className="font-medium">Image</label>
          {values.image ? (
            <ImageUploader
              image={values.image as File}
              onDelete={() => setFieldValue("image", null)}
            />
          ) : (
            <ImageInput
              onChange={(e) => {
                if (e.target.files) {
                  setFieldValue("image", e.target.files[0]);
                }
              }}
            />
          )}
          {errors.image && (
            <p className="text-sm text-red-500">{errors.image.toString()}</p>
          )}
        </ComingSoonWrapper>
      </article>
      <Separator />
      <article className="space-y-3">
        <label className="font-medium">Options</label>
        <FieldArray name="options">
          {({ push, remove }) => (
            <>
              {values.options.map((option, index) => (
                <div key={index}>
                  <CreateAnswer
                    answer={option}
                    name={`options.${index}`}
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
                <Button.Icon
                  type="button"
                  theme="light"
                  rounded
                  className="mx-auto flex items-center justify-center p-2"
                  onClick={() =>
                    push({ text: "", correct: false, id: uuidv4() })
                  }
                  size={20}
                  filled
                >
                  add
                </Button.Icon>
              )}
            </>
          )}
        </FieldArray>
      </article>
      <Separator />
      <article className="space-y-1">
        <label htmlFor="helperText" className="font-medium">
          Incorrect Answer Feedback (Optional)
        </label>
        <Field
          id="helperText"
          name="helperText"
          as={Input}
          placeholder="Explain why the chosen option is incorrect or guide towards the correct one..."
          className="w-full"
          error={errors.helperText}
        />
        <p className="text-sm text-gray-500">
          This feedback is shown to the user if they select an incorrect answer.
          Leave blank if no feedback is needed.
        </p>
      </article>
    </section>
  </div>
);

export default QuestionForm;
