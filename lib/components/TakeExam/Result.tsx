import { FeedbackCondition } from "../../constants";
import { Button } from "../Button";
import { FocusSpan, Heading1, Heading3, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";

export interface Feedback {
  message: string;
  condition: keyof typeof FeedbackCondition;
  min?: number;
  max?: number;
  equal?: number;
  gt?: number;
  lt?: number;
}

export interface ResultTakeExamProps {
  /**
   * Number of correct answers
   */
  correctAnswers: number;
  /**
   * Total number of questions
   */
  totalQuestions: number;
  /**
   * Number of attempts left
   */
  attemptsLeft: number;
  /**
   * Maximum number of attempts allowed
   */
  maxAttempts: number;
  /**
   * Array of feedback messages based on score conditions
   */
  feedback?: Feedback[];
  /**
   * Minimum percentage to pass the exam
   */
  passingPercentage?: number;
  /**
   * Function called when the retry button is clicked
   */
  onRetry?: () => void;
  /**
   * Whether to show the retry button
   */
  showRetryButton?: boolean;
}

const ResultTakeExam = ({
  correctAnswers,
  totalQuestions,
  attemptsLeft,
  maxAttempts,
  feedback = [],
  passingPercentage = 60,
  onRetry,
  showRetryButton = true,
}: ResultTakeExamProps) => {
  const percentage =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;
  const passed = percentage >= passingPercentage;

  const getFeedbackMessage = () => {
    // Default messages based on pass/fail
    const defaultMessage = passed
      ? "Congrats! You have passed this exam."
      : "Sorry, you did not pass this exam.";

    // If no custom feedback is provided, return default message
    if (!feedback || feedback.length === 0) {
      return defaultMessage;
    }

    // Check each feedback condition to find matching message
    for (const item of feedback) {
      switch (item.condition) {
        case "EQUAL_TO":
          if (item.equal !== undefined && percentage === item.equal) {
            return item.message;
          }
          break;
        case "GREATER_THAN":
          if (item.gt !== undefined && percentage > item.gt) {
            return item.message;
          }
          break;
        case "LESS_THAN":
          if (item.lt !== undefined && percentage < item.lt) {
            return item.message;
          }
          break;
        case "BETWEEN":
          if (
            item.min !== undefined &&
            item.max !== undefined &&
            percentage >= item.min &&
            percentage <= item.max
          ) {
            return item.message;
          }
          break;
      }
    }

    return defaultMessage;
  };

  return (
    <div className="space-y-6 p-6">
      <div className="relative mx-auto h-[171px] w-[171px]">
        <div
          className={`absolute left-0 top-0 h-[171px] w-[171px] rounded-full border ${
            passed
              ? "border-[#037c95] bg-[#65e4ff]"
              : "border-[#c41c1c] bg-[#ff6565]"
          }`}
        />
        <div className="absolute left-0 top-[-0px] h-[171px] w-[171px] rounded-full bg-[#edfafd]" />
        <Heading1 className="absolute left-[35.50px] top-[51.50px] w-[100px] text-center">
          {percentage}%
        </Heading1>
        <Heading6 className="absolute left-[35.50px] top-[99.50px] w-[100px] text-center">
          {correctAnswers}/{totalQuestions}
        </Heading6>
      </div>
      <Heading3
        className={`text-center ${passed ? "text-primary-shadow" : "text-red-600"}`}
      >
        {getFeedbackMessage()}
      </Heading3>
      <div className="flex items-center justify-between">
        <FocusSpan>
          Attempts left: {attemptsLeft} of {maxAttempts}
        </FocusSpan>
        {showRetryButton && attemptsLeft > 0 && (
          <Button
            theme="extra"
            rounded
            className="flex items-center justify-center gap-2"
            onClick={onRetry}
          >
            <Icon name="replay" size={20} />
            <FocusSpan>Retry</FocusSpan>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResultTakeExam;
