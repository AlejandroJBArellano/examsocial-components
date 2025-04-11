import {
  AnswerOptionType,
  QuestionDetailType,
  Question as QuestionType,
} from "@/types";
import { cn } from "@/utils";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from "react";
import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { EditQuestion } from "../EditQuestion";
import { Heading3 } from "../FontFaces";

/**
 * Context type for sharing state between QuestionDetail components
 * @internal
 */
interface QuestionDetailContextType {
  /** Available answer options */
  options: AnswerOptionType[];
}

// Create context with a default value
const QuestionDetailContext = createContext<
  QuestionDetailContextType | undefined
>(undefined);

/**
 * Custom hook to access the QuestionDetail context
 * @returns The QuestionDetail context
 * @throws Error if used outside of a QuestionDetail component
 * @internal
 */
const useQuestionDetail = () => {
  const context = useContext(QuestionDetailContext);
  if (!context) {
    throw new Error(
      "useQuestionDetail must be used within a QuestionDetail component",
    );
  }
  return context;
};

/**
 * Props for the QuestionDetail component
 */
interface QuestionDetailProps {
  onDelete?: () => void;

  onEdit?: (values: QuestionType) => void;

  detail: QuestionDetailType;
}

/**
 * QuestionDetail component displays a question with answer options and management controls.
 * Implements the compound component pattern for flexible usage.
 *
 * @example
 * // Basic usage with props
 * <QuestionDetail
 *   options={options}
 *   showCorrectAnswer={true}
 * >
 *   What is the capital of France?
 * </QuestionDetail>
 *
 * @example
 * // Using compound component pattern
 * <QuestionDetail>
 *   <QuestionDetail.Header>
 *     What is the capital of France?
 *   </QuestionDetail.Header>
 *   <QuestionDetail.Options>
 *     {options.map(option => (
 *       <QuestionDetail.Option key={option.id} id={option.id} />
 *     ))}
 *   </QuestionDetail.Options>
 * </QuestionDetail>
 */
const QuestionDetail: FC<QuestionDetailProps> & {
  Options: typeof Options;
  Option: typeof Option;
  Question: typeof Question;
  Actions: typeof Actions;
  Header: typeof Header;
} = ({ onDelete, detail, onEdit }) => {
  const editQuestionDialogRef = useRef<HTMLDialogElement>(null);

  return (
    <QuestionDetailContext.Provider
      value={{
        options: detail.options,
      }}
    >
      <section
        className="w-full max-w-2xl space-y-8 rounded-md border border-black bg-light p-8 shadow-right"
        aria-labelledby="question-title"
      >
        <header className="flex gap-6">
          <Question>{detail.title}</Question>
          <Actions
            onEdit={() => {
              editQuestionDialogRef.current?.showModal();
            }}
            onDelete={onDelete}
          />
        </header>
        <main>
          <Options>
            {detail.options.map((option) => (
              <Option key={option.id} id={option.id} />
            ))}
          </Options>
        </main>
      </section>
      {onEdit ? (
        <Dialog innerRef={editQuestionDialogRef}>
          <EditQuestion
            onSubmit={(values) => {
              onEdit(values);
              editQuestionDialogRef.current?.close();
            }}
            initialValues={detail}
            onCancel={() => {
              editQuestionDialogRef.current?.close();
            }}
          />
        </Dialog>
      ) : null}
    </QuestionDetailContext.Provider>
  );
};

/**
 * Question subcomponent displays the question text
 */
const Question: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Heading3 id="question-title" className="flex-1">
      {children}
    </Heading3>
  );
};

/**
 * Actions subcomponent displays edit and delete buttons
 */
const Actions: FC<{ onEdit?: () => void; onDelete?: () => void }> = ({
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-4" aria-label="Question actions">
      {onEdit && (
        <Button.Icon
          rounded
          size={24}
          filled
          onClick={onEdit}
          aria-label="Edit question"
        >
          edit
        </Button.Icon>
      )}
      {onDelete && (
        <Button.Icon
          theme="feedback-error"
          rounded
          size={24}
          filled
          onClick={onDelete}
          aria-label="Delete question"
        >
          delete
        </Button.Icon>
      )}
    </div>
  );
};

/**
 * Header component combines Question and Actions
 */
const Header: FC<
  { onEdit?: () => void; onDelete?: () => void } & PropsWithChildren
> = ({ children, onEdit, onDelete }) => {
  return (
    <header className="flex gap-6">
      <Question>{children}</Question>
      <Actions onEdit={onEdit} onDelete={onDelete} />
    </header>
  );
};

/**
 * Options container component for answer options
 */
const Options: FC<PropsWithChildren> = ({ children }) => {
  return <div className="space-y-8">{children}</div>;
};

/**
 * Option component for rendering a single answer option
 */
const Option: FC<{ id: string }> = ({ id }) => {
  const { options } = useQuestionDetail();
  const option = options.find((opt) => opt.id === id)!;

  if (!option) return null;

  return (
    <div className="grid grid-cols-7 items-center gap-8">
      <div className="col-span-5">
        <AnswerOption
          checked={option.correct}
          type={option.correct ? "viewOnly" : "default"}
        >
          {option.text}
        </AnswerOption>
      </div>
      <div
        className={"col-span-2 grid grid-cols-2 items-center gap-2"}
        aria-label={`${option.percentage}% of students selected this answer`}
        //TODO: animate when question.id changes
      >
        <div className="relative size-12 -rotate-90">
          <svg
            viewBox="0 0 48 48"
            width={48}
            height={48}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="21.5"
              fill="none"
              className={cn(
                "stroke-current",
                option.correct
                  ? "text-feedback-success-tint"
                  : "text-feedback-error-tint",
              )}
              strokeWidth="5"
            />
            <circle
              cx="24"
              cy="24"
              r="21.5"
              fill="none"
              className={cn(
                "animate-[circle-grow_1s_ease-out] stroke-current",
                option.correct
                  ? "text-feedback-success"
                  : "text-feedback-error",
              )}
              strokeWidth="5"
              strokeDasharray="135"
              strokeDashoffset={`${135 - (135 * option.percentage) / 100}`}
            />
          </svg>
        </div>

        <Heading3>{option.percentage}%</Heading3>
      </div>
    </div>
  );
};

// Assign subcomponents to the main component
QuestionDetail.Question = Question;
QuestionDetail.Options = Options;
QuestionDetail.Option = Option;
QuestionDetail.Actions = Actions;
QuestionDetail.Header = Header;

export default QuestionDetail;
