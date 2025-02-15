import { Delete, Edit } from "@mui/icons-material";
import { Button } from "../Button";

interface IQuestionSet {
  question: string;
  options: {
    text: string;
    correct: boolean;
  }[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const QuestionSet = ({ question }: IQuestionSet) => {
  return (
    <div className="p-4 space-y-4 border rounded-md border-black bg-extra-tint">
      <h4 className="text-xl leading-6 font-medium sentient">{question}</h4>
      <div className="flex justify-between items-center">
        <Button theme="feedback-error" rounded className="p-2">
          <Delete className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
        </Button>
        <Button theme="light" rounded className="p-2">
          <Edit className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
        </Button>
      </div>
    </div>
  );
};

export default QuestionSet;
