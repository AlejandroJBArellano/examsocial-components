import { Question, QuestionDetailType } from "@/types";
import { QuestionDetail } from "../QuestionDetail";
import { QuestionSet } from "../QuestionSet";

export interface QuestionListProps {
  /**
   * Array of questions to display
   * @default []
   */
  questions: { id: string; title: string }[];
  /**
   * Whether questions can be modified (edited/deleted)
   * @default true
   */
  canModify?: boolean;
  /**
   * Callback when a question is edited
   * @param values - Updated question values
   */
  onEditQuestion: (values: Question) => void;
  /**
   * Callback when a question is deleted
   * @param id - ID of the question to delete
   */
  onDeleteQuestion: (id: string) => void;
  /**
   * Currently selected question to display details for
   */
  selectedQuestion: QuestionDetailType;
  /**
   * Callback when a question is selected
   * @param id - ID of the selected question
   */
  onSelectQuestion: (id: string) => void;
  /**
   * Whether the questions are currently loading
   * @default false
   */
  isLoading?: boolean;
}

const QuestionList = ({
  questions,
  selectedQuestion,
  onDeleteQuestion,
  onEditQuestion,
  onSelectQuestion,
  canModify,
  isLoading,
}: QuestionListProps) => {
  return (
    <section className="grid grid-cols-12 gap-8 p-8">
      <article className="col-span-7 space-y-8">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => onSelectQuestion(question.id)}
            className="w-full cursor-pointer"
          >
            <QuestionSet
              title={question.title}
              viewOnly
              selected={selectedQuestion.id === question.id}
            />
          </div>
        ))}
      </article>
      <article className="col-span-5">
        {isLoading ? (
          <div className="h-72 w-full animate-pulse rounded-md bg-gray-200" />
        ) : (
          <QuestionDetail
            detail={selectedQuestion}
            onEdit={canModify ? (values) => onEditQuestion(values) : undefined}
            onDelete={
              canModify
                ? () => onDeleteQuestion(selectedQuestion.id)
                : undefined
            }
          />
        )}
      </article>
    </section>
  );
};

export default QuestionList;
