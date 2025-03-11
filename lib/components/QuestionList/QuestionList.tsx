import { Question } from "@/types";
import { useEffect, useState } from "react";
import { Heading3 } from "../FontFaces";
import { QuestionDetail } from "../QuestionDetail";
import { QuestionSet } from "../QuestionSet";

// Types for the component props
export interface QuestionListProps {
  /**
   * Array of questions to display
   * @default []
   */
  questions?: Question[];
  /**
   * Function to handle question editing
   */
  onEditQuestion?: (questionId: string) => void;
  /**
   * Function to handle question deletion
   */
  onDeleteQuestion?: (questionId: string) => void;
  /**
   * Whether the component is in a loading state
   * @default false
   */
  isLoading?: boolean;
  /**
   * Custom empty state message
   * @default "No questions available"
   */
  emptyStateMessage?: string;
}

const QuestionList = ({
  questions = [],
  onEditQuestion,
  onDeleteQuestion,
  isLoading = false,
  emptyStateMessage = "No questions available",
}: QuestionListProps) => {
  const [selected, setSelected] = useState<string | null>(
    questions.length > 0 ? questions[0]._id : null,
  );

  // Update selected question when questions list changes
  useEffect(() => {
    if (questions.length > 0 && !questions.some((q) => q._id === selected)) {
      setSelected(questions[0]._id);
    } else if (questions.length === 0) {
      setSelected(null);
    }
  }, [questions, selected]);

  // Get the selected question object
  const selectedQuestion = selected
    ? questions.find((q) => q._id === selected)
    : null;

  // Render loading state
  if (isLoading) {
    return (
      <section className="grid grid-cols-12 gap-8 p-8">
        <article className="col-span-7 space-y-8">
          <div className="h-24 w-full animate-pulse rounded-md bg-gray-200"></div>
          <div className="h-24 w-full animate-pulse rounded-md bg-gray-200"></div>
        </article>
        <article className="col-span-5">
          <div className="h-72 w-full animate-pulse rounded-md bg-gray-200"></div>
        </article>
      </section>
    );
  }

  // Render empty state
  if (questions.length === 0) {
    return <Heading3 className="p-8">{emptyStateMessage}</Heading3>;
  }

  return (
    <section className="grid grid-cols-12 gap-8 p-8">
      <article className="col-span-7 space-y-8">
        {questions.map((currentQuestion) => (
          <div
            key={currentQuestion._id}
            onClick={() => setSelected(currentQuestion._id)}
            className="w-full cursor-pointer"
          >
            <QuestionSet
              title={currentQuestion.title}
              viewOnly
              selected={selected === currentQuestion._id}
            />
          </div>
        ))}
      </article>
      <article className="col-span-5">
        {selectedQuestion && (
          <QuestionDetail
            options={selectedQuestion.options.map((option) => ({
              id: option._id,
              text: option.text,
              correct: option.correct || false,
              percentage: 0, // Default value for percentage
            }))}
            onEdit={
              onEditQuestion
                ? () => onEditQuestion(selectedQuestion._id)
                : undefined
            }
            onDelete={
              onDeleteQuestion
                ? () => onDeleteQuestion(selectedQuestion._id)
                : undefined
            }
          >
            {selectedQuestion.title}
          </QuestionDetail>
        )}
      </article>
    </section>
  );
};

export default QuestionList;
