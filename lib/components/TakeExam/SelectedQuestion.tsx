import { Question } from "../../types";
import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";
import { Heading3, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";

interface ISelectedQuestion {
  questions: Question[];
  onFinish: (selected: Record<string, string>) => void;
  onSelectOption: (questionId: string, optionId: string) => void;
  selected: number;
  setSelected: (selected: (prev: number) => number) => void;
  canJumpBetweenSteps?: boolean;
  selectedOptions: Record<string, string>;
}

const SelectedQuestion = ({
  questions,
  onFinish,
  selected,
  setSelected,
  onSelectOption,
  canJumpBetweenSteps,
  selectedOptions: recordQuestionSelectedOptions,
}: ISelectedQuestion) => {
  const question = questions[selected];

  return (
    <section className="h-full space-y-4 px-4 py-6">
      <article className="grid gap-5 xl:grid-cols-2">
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
      <article className="flex justify-between gap-1.5 xl:justify-end">
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
          Previous
        </Button>
        <Button
          rounded
          theme="accent"
          className="flex items-center justify-center gap-2"
          disabled={!recordQuestionSelectedOptions[question.id!]}
          onClick={() => {
            if (selected === questions.length - 1) {
              onFinish(recordQuestionSelectedOptions);
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
          {selected === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </article>
    </section>
  );
};

export default SelectedQuestion;
