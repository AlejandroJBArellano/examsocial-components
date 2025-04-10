import { questionSchema } from "@/schemas";
import { cn } from "@/utils";
import { useState } from "react";
import * as Yup from "yup";
import { Heading5, Smoll } from "../FontFaces";
import { Icon } from "../Icon";

/**
 * Interface for the ReviewQuestionSet component props
 */
interface IReviewQuestionSet {
  /**
   * The question object containing the title and options
   */
  question: Yup.InferType<typeof questionSchema>;

  /**
   * The index of the selected answer from the options array
   */
  selected: number;

  /**
   * Whether the selected answer is correct
   */
  correct?: boolean;
}

/**
 * A helper component to display answer text with consistent styling
 */
const Answer = ({ children }: { children: React.ReactNode }) => {
  return <p className="leading-5 xl:text-lg">{children}</p>;
};

/**
 * ReviewQuestionSet component
 *
 * Displays a question with the selected answer and indicates whether the answer was correct or incorrect.
 * Includes a toggle to show all available options.
 *
 * @param props - Component props
 * @param props.question - The question object with title and options
 * @param props.selected - Index of the selected answer
 * @param props.correct - Whether the selected answer is correct
 */
const ReviewQuestionSet = ({
  question,
  correct,
  selected,
}: IReviewQuestionSet) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <article className="space-y-4 rounded-md border border-black bg-gray-50 p-4 hover:shadow-right-sm hover:shadow-black xl:space-y-5 xl:p-5">
      <header
        className={cn(
          "flex items-center gap-2",
          correct ? "text-feedback-success" : "text-feedback-error",
        )}
      >
        <Icon
          name={correct ? "check" : "close"}
          size={24}
          aria-label={correct ? "Correct answer" : "Incorrect answer"}
        />
        <Heading5>{question.title}</Heading5>
      </header>
      <section className="space-y-2">
        <div>
          <Answer>{question.options[selected].text}</Answer>
          {question.options[selected].correct && (
            <span className="sr-only">(This is the correct answer)</span>
          )}
        </div>
        <button
          className="flex w-full items-center justify-end gap-1"
          onClick={() => {
            setShowOptions((prev) => !prev);
          }}
          aria-expanded={showOptions}
          aria-controls="options-list"
        >
          <Smoll>{showOptions ? "Hide all options" : "Show all options"}</Smoll>
          {showOptions ? (
            <Icon name="keyboard_arrow_up" size={12} aria-hidden="true" />
          ) : (
            <Icon name="keyboard_arrow_down" size={12} aria-hidden="true" />
          )}
        </button>
        {showOptions && (
          <ul id="options-list" className="space-y-2">
            {question.options.map((option, index) => (
              <li
                key={option.id || index}
                className={cn(
                  index === selected && "underline",
                  option.correct && "font-medium",
                )}
              >
                <Answer>
                  {option.text}
                  {option.correct && (
                    <span className="sr-only">(Correct answer)</span>
                  )}
                </Answer>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default ReviewQuestionSet;
