import { cn } from "@/utils";
import { Button } from "../Button";
import { FocusSpan, Heading1, Heading3, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";

export interface ResultTakeExamProps {
  /**
   * Number of correct answers
   */
  score: number;
  /**
   * Number of attempts left
   */
  attemptsLeft: number;
  /**
   * Maximum number of attempts allowed for the exam
   */
  maxAttempts: number;
  /**
   * Array of feedback messages based on score conditions
   */
  messages?: string[];
  /**
   * Minimum score to pass the exam
   */
  minimum?: number;
  /**
   * Number of correct answers out of total questions
   */
  correctAnswers: number;
  /**
   * Total number of questions in the exam
   */
  totalQuestions: number;
  /**
   * Function called when the retry button is clicked
   */
  onRetry?: () => void;
}

const ResultTakeExam = ({
  attemptsLeft,
  maxAttempts,
  onRetry,
  score,
  messages,
  correctAnswers,
  totalQuestions,
}: ResultTakeExamProps) => {
  return (
    <div className="space-y-6 p-6">
      <div className="relative mx-auto h-[171px] w-[171px]">
        <svg
          viewBox="0 0 48 48"
          width={171}
          height={171}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0"
        >
          <circle
            cx="24"
            cy="24"
            r="21.5"
            fill="none"
            className={cn(
              "stroke-current",
              score <= 25
                ? "text-feedback-error-tint"
                : score <= 50
                  ? "text-secondary-tint"
                  : score <= 75
                    ? "text-primary-tint"
                    : "text-feedback-success-tint",
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
              score <= 25
                ? "text-feedback-error"
                : score <= 50
                  ? "text-secondary"
                  : score <= 75
                    ? "text-primary"
                    : "text-feedback-success",
            )}
            strokeWidth="5"
            strokeDasharray="135"
            strokeDashoffset={`${135 - (135 * score) / 100}`}
          />
        </svg>
        <Heading1 className="absolute left-[35.50px] top-[51.50px] w-[100px] text-center">
          {score}%
        </Heading1>
        <Heading6 className="absolute left-[35.50px] top-[99.50px] w-[100px] text-center">
          {correctAnswers}/{totalQuestions}
        </Heading6>
      </div>
      {messages ? (
        <Heading3
          className={cn(
            "text-center",
            score <= 25
              ? "text-feedback-error"
              : score <= 50
                ? "text-secondary-shadow"
                : score <= 75
                  ? "text-primary-shadow"
                  : "text-feedback-success",
          )}
        >
          {messages?.join(", ")}
        </Heading3>
      ) : null}
      <div className="flex items-center justify-between gap-2">
        {maxAttempts > 0 ? (
          <FocusSpan>
            Attempts left: {attemptsLeft} of {maxAttempts}
          </FocusSpan>
        ) : null}
        {((maxAttempts === -1 && attemptsLeft === 0) || attemptsLeft > 0) && (
          <Button
            theme="extra"
            rounded
            className="ml-auto flex items-center justify-center gap-2"
            onClick={onRetry}
          >
            <Icon name="replay" size={20} />
            Retry
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResultTakeExam;
