import { Delete, Edit } from "@mui/icons-material";
import { IQuestion } from "../../types";
import { Button } from "../Button";
import { Tag } from "../Tag";

interface IQuestionSet extends IQuestion {
  onDelete?: (index: number) => void;
  onEdit?: (index: number) => void;
  index: number;
}

const QuestionSet = ({
  question,
  answers,
  onDelete,
  onEdit,
  index,
}: IQuestionSet) => {
  return (
    <div className="p-4 space-y-4 xl:p-5 xl:space-y-5 border rounded-md border-black bg-extra-tint">
      <h4 className="text-xl leading-6 font-medium sentient xl:text-2xl xl:leading-7 tracking-[0.48px]">
        {question}
      </h4>
      <div className="space-y-2.5">
        {answers.map((answer, i) => (
          <div key={i} className="flex justify-between items-center">
            <p className="xl:text-lg xl:leading-6">{answer.text}</p>
            {answer.correct ? (
              <Tag theme="feedback-success">Correct</Tag>
            ) : null}
          </div>
        ))}
      </div>
      {onDelete && onEdit && (
        <div className="flex justify-between items-center">
          <Button
            onClick={() => {
              onDelete(index);
            }}
            theme="feedback-error"
            rounded
            className="p-2"
          >
            <Delete className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
          </Button>
          <Button
            onClick={() => {
              onEdit(index);
            }}
            theme="light"
            rounded
            className="p-2"
          >
            <Edit className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestionSet;
