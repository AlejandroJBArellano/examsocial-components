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
  attemptsLeft?: number;
  /**
   * Maximum number of attempts allowed for the exam
   */
  maxAttempts?: number;
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
  minimum = 60,
  onRetry,
  score,
  messages,
  correctAnswers,
  totalQuestions,
}: ResultTakeExamProps) => {
  const passed = score >= minimum;

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
              passed ? "text-primary-shadow" : "text-feedback-error-tint",
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
              passed ? "text-primary" : "text-feedback-error",
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
          className={`text-center ${passed ? "text-primary-shadow" : "text-feedback-error"}`}
        >
          {messages?.join(", ")}
        </Heading3>
      ) : null}
      {attemptsLeft && maxAttempts ? (
        <div className="flex items-center justify-between">
          <FocusSpan>
            Attempts left: {attemptsLeft} of {maxAttempts}
          </FocusSpan>
          {attemptsLeft > 0 && (
            <Button
              theme="extra"
              rounded
              className="flex items-center justify-center gap-2"
              onClick={onRetry}
            >
              <Icon name="replay" size={20} />
              Retry
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ResultTakeExam;
