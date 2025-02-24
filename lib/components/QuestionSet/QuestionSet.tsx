import { Delete, Edit } from "@mui/icons-material";
import { IQuestion } from "../../types";
import { Button } from "../Button";
import { Tag } from "../Tag";

type QuestionSetPropsEditable = IQuestion & {
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  index: number;
  viewOnly?: false;
  selected?: false;
};

type QuestionSetPropsViewOnly = {
  viewOnly: true;
  question: string;
  selected?: boolean;
};

type QuestionSetProps = QuestionSetPropsEditable | QuestionSetPropsViewOnly;

const QuestionSet = ({
  viewOnly = false,
  question,
  selected,
  ...props
}: QuestionSetProps) => {
  return (
    <div
      className={
        (selected
          ? "bg-extra shadow-right-sm shadow-black "
          : "bg-extra-tint ") +
        "p-4 space-y-4 xl:p-5 xl:space-y-5 border rounded-md border-black"
      }
    >
      <h4 className="text-xl leading-6 font-medium sentient xl:text-2xl xl:leading-7 tracking-[0.48px]">
        {question}
      </h4>

      {viewOnly ? null : (
        <>
          <div className="space-y-2.5">
            {(props as QuestionSetPropsEditable).answers.map((answer, i) => (
              <div key={i} className="flex justify-between items-center">
                <p className="xl:text-lg xl:leading-6">{answer.text}</p>
                {answer.correct ? (
                  <Tag theme="feedback-success">Correct</Tag>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Button
              onClick={() => {
                (props as QuestionSetPropsEditable).onDelete(
                  (props as QuestionSetPropsEditable).index,
                );
              }}
              theme="feedback-error"
              rounded
              className="p-2"
            >
              <Delete className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
            </Button>
            <Button
              onClick={() => {
                (props as QuestionSetPropsEditable).onEdit(
                  (props as QuestionSetPropsEditable).index,
                );
              }}
              theme="light"
              rounded
              className="p-2"
            >
              <Edit className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionSet;
