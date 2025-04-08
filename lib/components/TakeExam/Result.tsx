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
        <div
          className={`absolute left-0 top-0 h-[171px] w-[171px] rounded-full border ${
            passed
              ? "border-primary-shadow bg-primary"
              : "border-feedback-error bg-feedback-error-tint"
          }`}
        />
        <div className="absolute left-0 top-[-0px] h-[171px] w-[171px] rounded-full bg-[#edfafd]" />
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
