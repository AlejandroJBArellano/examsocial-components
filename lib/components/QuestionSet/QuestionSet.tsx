import { Question } from "../../types";
import { Button } from "../Button";
import { Heading5, Span } from "../FontFaces";
import { Tag } from "../Tag";

type QuestionSetPropsEditable = Question & {
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  index: number;
  viewOnly?: false;
  selected?: false;
  image?: string;
};

type QuestionSetPropsViewOnly = {
  viewOnly: true;
  title: string;
  image?: string;
  selected?: boolean;
};

type QuestionSetProps = QuestionSetPropsEditable | QuestionSetPropsViewOnly;

const QuestionSet = ({
  viewOnly = false,
  title,
  selected,
  ...props
}: QuestionSetProps) => {
  return (
    <div
      className={
        (selected ? "bg-extra shadow-right shadow-black " : "bg-extra-tint ") +
        " w-full min-w-[350px] space-y-4 rounded-md border border-black p-4 xl:space-y-5 xl:p-5"
      }
    >
      <Heading5>{title}</Heading5>
      {viewOnly ? (
        props.image && (
          <img
            src={props.image}
            alt={title}
            className="h-40 w-full rounded-md object-contain"
          />
        )
      ) : (
        <>
          {(props as QuestionSetPropsEditable).image && (
            <img
              src={(props as QuestionSetPropsEditable).image as string}
              alt={title}
              className="h-40 w-full rounded-md object-contain"
            />
          )}
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
