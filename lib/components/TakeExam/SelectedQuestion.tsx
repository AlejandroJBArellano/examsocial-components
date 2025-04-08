import { Question } from "../../types";
import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";
import { Heading3, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";

interface SelectedQuestionProps {
  questions: Question[];
  onFinish: (selected: Record<string, string>) => void;
  onSelectOption: (questionId: string, optionId: string) => void;
  selected: number;
  setSelected: (selected: (prev: number) => number) => void;
  selectedOptions: Record<string, string>;
}

const SelectedQuestion = ({
  questions,
  onFinish,
  selected,
  setSelected,
  onSelectOption,
  selectedOptions,
}: SelectedQuestionProps) => {
  const currentQuestion = questions[selected];
  const isFirstQuestion = selected === 0;
  const isLastQuestion = selected === questions.length - 1;
  const hasSelectedOption = Boolean(selectedOptions[currentQuestion.id!]);

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setSelected((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onFinish(selectedOptions);
    } else {
      setSelected((prev) => prev + 1);
    }
  };

  return (
    <section className="h-full space-y-4 px-4 py-6">
      <article className="grid gap-5 xl:grid-cols-2">
        <div className="space-y-1">
          <Heading6>Question {selected + 1}</Heading6>
          <Heading3>{currentQuestion.title}</Heading3>
        </div>
        <div className="flex flex-auto flex-col gap-2">
          {currentQuestion.options.map((option) => (
            <AnswerOption
              key={option.id}
              onClick={() => onSelectOption(currentQuestion.id!, option.id!)}
              checked={selectedOptions[currentQuestion.id!] === option.id}
              type={
                selectedOptions[currentQuestion.id!] === option.id
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
          onClick={handlePrevious}
          disabled={isFirstQuestion}
        >
          Previous
        </Button>
        <Button
          rounded
          theme="accent"
          className="flex items-center justify-center gap-2"
          disabled={!hasSelectedOption}
          onClick={handleNext}
        >
          {isLastQuestion ? (
            <>
              <Icon name="sports_score" />
              Finish
            </>
          ) : (
            <>
              <Icon name="arrow_forward" />
              Next
            </>
          )}
        </Button>
      </article>
    </section>
  );
};

export default SelectedQuestion;
