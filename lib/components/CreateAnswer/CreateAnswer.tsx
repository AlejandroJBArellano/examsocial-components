import { Field } from "formik";
import { MaterialSymbol } from "react-material-symbols";
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
      <Button
        theme="feedback-error"
        className="h-10 p-2"
        type="button"
        onClick={onDelete}
      >
        <MaterialSymbol icon="delete" fill size={20} className="h-5 w-5" />
      </Button>
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
