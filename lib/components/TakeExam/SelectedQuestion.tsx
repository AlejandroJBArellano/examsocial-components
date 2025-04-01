import { Question } from "../../types";
import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";
import { FocusSpan, Heading3, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";

interface ISelectedQuestion {
  questions: Question[];
  onFinish: () => void;
  onSelectOption: (questionId: string, optionId: string) => void;
  selected: number;
  setSelected: (selected: (prev: number) => number) => void;
  canJumpBetweenSteps?: boolean;
  recordQuestionSelectedOptions: Record<string, string>;
}

const SelectedQuestion = ({
  questions,
  onFinish,
  selected,
  setSelected,
  onSelectOption,
  canJumpBetweenSteps,
  recordQuestionSelectedOptions,
}: ISelectedQuestion) => {
  const question = questions[selected];

  return (
    <section className="h-full space-y-4 px-4 py-6">
      <article className="flex flex-col gap-5">
        <div className="space-y-1">
          <Heading6>Question {selected + 1}</Heading6>
          <Heading3>{question.title}</Heading3>
        </div>
        <div className="flex flex-auto flex-col gap-2">
          {question.options.map((option) => (
            <AnswerOption
              onClick={() => {
                onSelectOption(question.id!, option.id!);
              }}
              key={option.id}
              checked={
                recordQuestionSelectedOptions[question.id!] === option.id
              }
              type={
                recordQuestionSelectedOptions[question.id!] === option.id
                  ? "selectable"
                  : undefined
              }
            >
              {option.text}
            </AnswerOption>
          ))}
        </div>
      </article>
      <article className="flex justify-between">
        <Button
          theme="light"
          rounded
          onClick={() => {
            if (selected === 0) return;
            if (canJumpBetweenSteps) {
              setSelected((prev: number) => prev - 1);
              return;
            }
          }}
          disabled={selected === 0 || !canJumpBetweenSteps}
        >
          <FocusSpan>Previous</FocusSpan>
        </Button>
        <Button
          rounded
          theme="accent"
          className="flex items-center justify-center gap-2"
          disabled={!recordQuestionSelectedOptions[question.id!]}
          onClick={() => {
            if (selected === questions.length - 1) {
              onFinish();
              return;
            }
            setSelected((prev: number) => prev + 1);
          }}
        >
          {selected === questions.length - 1 ? (
            <Icon name="sports_score" />
          ) : (
            <Icon name="arrow_forward" />
          )}
          <FocusSpan>
            {selected === questions.length - 1 ? "Finish" : "Next"}
          </FocusSpan>
        </Button>
      </article>
    </section>
  );
};

export default SelectedQuestion;
