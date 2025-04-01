import { Field, FieldArray, FormikProps } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { questionSchema } from "../../schemas";
import { Button } from "../Button";
import { CreateAnswer } from "../CreateAnswer";
import { ImageInput } from "../ImageInput";
import { ImageUploader } from "../ImageUploader";
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
          name="title"
          as={Input}
          placeholder="Type your question here..."
          className="w-full"
          error={errors.title}
        />
      </article>
      <article className="space-y-1">
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
    </section>
  </div>
);

export default QuestionForm;
