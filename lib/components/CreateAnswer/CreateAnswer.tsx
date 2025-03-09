import { Field } from "formik";
import { AnswerToggle, Button, Input } from "../";

const CreateAnswer = ({
  name,
  answer,
  setFieldValue,
  onDelete,
}: {
  name: string;
  answer: { text: string; correct?: boolean };
  onDelete: () => void;
  setFieldValue: (
    field: string,
    value: string | (boolean | "indeterminate"),
  ) => void;
}) => {
  return (
    <article className="flex w-full items-center gap-2">
      <Button.Icon
        theme="feedback-error"
        className="h-10 p-2"
        type="button"
        onClick={onDelete}
        size={20}
        filled
      >
        delete
      </Button.Icon>
      <Field
        as={Input}
        placeholder="e.g., Paris"
        className="h-10 w-full"
        name={`${name}.text`}
        value={answer.text}
        // onChange={(e) => {
        //   setFieldValue(`${name}.text`, e.target.value);
        // }}
      />
      <AnswerToggle
        name={`${name}.correct`}
        onCheckedChange={(value) => {
          setFieldValue(`${name}.correct`, value);
        }}
        checked={answer.correct}
      />
    </article>
  );
};

export default CreateAnswer;
