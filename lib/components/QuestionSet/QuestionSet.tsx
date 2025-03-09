import { IQuestion } from "../../types";
import { Button } from "../Button";
import { Heading5, Span } from "../FontFaces";
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
        (selected ? "bg-extra shadow-right shadow-black " : "bg-extra-tint ") +
        "w-full min-w-[350px] max-w-sm space-y-4 rounded-md border border-black p-4 xl:space-y-5 xl:p-5"
      }
    >
      <Heading5>{question}</Heading5>
      {viewOnly ? null : (
        <>
          <div className="space-y-2.5">
            {(props as QuestionSetPropsEditable).options.map((option, i) => (
              <div key={i} className="flex items-center justify-between">
                <Span>{option.text}</Span>
                {option.correct ? (
                  <Tag theme="feedback-success">Correct</Tag>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <Button.Icon
              onClick={() => {
                (props as QuestionSetPropsEditable).onDelete(
                  (props as QuestionSetPropsEditable).index,
                );
              }}
              theme="feedback-error"
              rounded
              className="p-2"
              size={32}
              filled
            >
              delete
            </Button.Icon>
            <Button.Icon
              onClick={() => {
                (props as QuestionSetPropsEditable).onEdit(
                  (props as QuestionSetPropsEditable).index,
                );
              }}
              theme="light"
              rounded
              className="p-2"
              size={32}
              filled
            >
              edit
            </Button.Icon>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionSet;
