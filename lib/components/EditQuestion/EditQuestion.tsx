import { Button } from "../Button";
import { QuestionForm } from "../QuestionForm";

const EditQuestion = () => {
  return (
    <div className="p-4 shadow-right shadow-black border border-black rounded-lg space-y-6">
      <h2 className="text-2xl leading-7 sentient">Edit Question</h2>
      <QuestionForm />
      <div className="flex justify-between items-center">
        <Button theme="light" rounded>
          Cancel
        </Button>
        <Button rounded theme="accent">
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditQuestion;
