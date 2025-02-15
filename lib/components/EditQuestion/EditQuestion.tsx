import { useState } from "react";
import { Button } from "../Button";
import { QuestionForm } from "../QuestionForm";

interface IValues {
  question: string;
  answers: { text: string; correct: boolean }[];
}

interface IEditQuestion {
  onSubmit: (values: IValues) => void;
  onCancel: () => void;
  initialValues: IValues;
}

const EditQuestion = ({ initialValues, onSubmit, onCancel }: IEditQuestion) => {
  const [values, setValues] = useState<IValues | null>(null);
  return (
    <div className="p-4 shadow-right shadow-black border border-black rounded-lg space-y-6">
      <h2 className="text-2xl leading-7 sentient">Edit Question</h2>
      <QuestionForm
        onChange={(newValues) => {
          setValues(newValues);
        }}
        initialValues={initialValues}
      />
      <div className="flex justify-between items-center">
        <Button theme="light" rounded onClick={onCancel}>
          Cancel
        </Button>
        <Button
          rounded
          theme="accent"
          disabled={!values}
          onClick={() => values && onSubmit(values)}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditQuestion;
