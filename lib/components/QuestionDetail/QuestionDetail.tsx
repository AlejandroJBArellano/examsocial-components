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
            onSubmit={onEdit}
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
  const option = options.find((opt) => opt.id === id);

  if (!option) return null;

  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <AnswerOption
          checked={option.correct}
          type={option.correct ? "viewOnly" : "default"}
        >
          {option.text}
        </AnswerOption>
      </div>
      <div
        className={"mt-2 flex items-center justify-center gap-2"}
        aria-label={`${option.percentage}% of students selected this answer`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <mask id="path-1-inside-1_780_27731" fill="white">
            <path d="M48 24C48 27.1517 47.3792 30.2726 46.1731 33.1844C44.967 36.0962 43.1992 38.742 40.9706 40.9706C38.742 43.1992 36.0962 44.967 33.1844 46.1731C30.2726 47.3792 27.1517 48 24 48L24 36C25.5759 36 27.1363 35.6896 28.5922 35.0866C30.0481 34.4835 31.371 33.5996 32.4853 32.4853C33.5996 31.371 34.4835 30.0481 35.0866 28.5922C35.6896 27.1363 36 25.5759 36 24H48Z" />
          </mask>
          <path
            className={cn(
              option.correct ? "fill-feedback-success" : "fill-feedback-error",
            )}
            d="M48 24C48 27.1517 47.3792 30.2726 46.1731 33.1844C44.967 36.0962 43.1992 38.742 40.9706 40.9706C38.742 43.1992 36.0962 44.967 33.1844 46.1731C30.2726 47.3792 27.1517 48 24 48L24 36C25.5759 36 27.1363 35.6896 28.5922 35.0866C30.0481 34.4835 31.371 33.5996 32.4853 32.4853C33.5996 31.371 34.4835 30.0481 35.0866 28.5922C35.6896 27.1363 36 25.5759 36 24H48Z"
            fill="#19B244"
            stroke="#19B244"
            strokeWidth="0.280702"
            mask="url(#path-1-inside-1_780_27731)"
          />
          <path
            className={cn(
              option.correct
                ? "fill-feedback-success-tint"
                : "fill-feedback-error-tint",
            )}
            d="M24 48C19.2532 48 14.6131 46.5924 10.6663 43.9553C6.71953 41.3181 3.64339 37.5698 1.82689 33.1844C0.0103876 28.799 -0.464892 23.9734 0.461154 19.3178C1.3872 14.6623 3.67298 10.3859 7.02944 7.02944C10.3859 3.67298 14.6623 1.3872 19.3178 0.461153C23.9734 -0.464892 28.799 0.0103887 33.1844 1.82689C37.5698 3.6434 41.3181 6.71954 43.9553 10.6663C46.5924 14.6131 48 19.2533 48 24L36 24C36 21.6266 35.2962 19.3065 33.9776 17.3332C32.6591 15.3598 30.7849 13.8217 28.5922 12.9134C26.3995 12.0052 23.9867 11.7676 21.6589 12.2306C19.3311 12.6936 17.1929 13.8365 15.5147 15.5147C13.8365 17.1929 12.6936 19.3311 12.2306 21.6589C11.7676 23.9867 12.0052 26.3995 12.9134 28.5922C13.8217 30.7849 15.3598 32.6591 17.3332 33.9776C19.3065 35.2962 21.6266 36 24 36L24 48Z"
            fill="#DBFAE4"
          />
        </svg>
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
