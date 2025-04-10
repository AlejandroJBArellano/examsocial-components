import { Question, QuestionDetailType } from "@/types";
import { QuestionDetail } from "../QuestionDetail";
import { QuestionSet } from "../QuestionSet";

export interface QuestionListProps {
  /**
   * Array of questions to display
   * @default []
   */
  questions: Question[];
  /**
   * Function to handle question editing
   */
  onEditQuestion?: (questionId: string) => void;
  /**
   * Function to handle question deletion
   */
  onDeleteQuestion?: (questionId: string) => void;
  /**
   * Currently selected question to display details for
   */
  selectedQuestion: QuestionDetailType;
  /**
   * Callback when a question is selected
   * @param id - ID of the selected question
   */
  onSelectQuestion: (id: string) => void;
}

const QuestionList = ({
  questions,
  onEditQuestion,
  onDeleteQuestion,
  selectedQuestion,
  onSelectQuestion,
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
        <QuestionDetail
          options={selectedQuestion.options.map((option) => ({
            id: option.id,
            text: option.text,
            correct: option.correct || false,
            percentage: 0, // Default value for percentage
          }))}
          onEdit={
            onEditQuestion
              ? () => onEditQuestion(selectedQuestion.id)
              : undefined
          }
          onDelete={
            onDeleteQuestion
              ? () => onDeleteQuestion(selectedQuestion.id)
              : undefined
          }
        >
          {selectedQuestion.title}
        </QuestionDetail>
      </article>
    </section>
  );
};

export default QuestionList;
