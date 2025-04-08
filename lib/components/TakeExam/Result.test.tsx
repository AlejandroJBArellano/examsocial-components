import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Result, { Feedback } from "./Result";

describe("ResultTakeExam component", () => {
  const defaultProps = {
    correctAnswers: 15,
    totalQuestions: 20,
    attemptsLeft: 2,
    maxAttempts: 3,
    showRetryButton: true,
    onRetry: vi.fn(),
  };

  it("renders the score percentage correctly", () => {
    render(<Result {...defaultProps} />);
    const percentageText = screen.getByText("75%");
    expect(percentageText).toBeInTheDocument();
  });

  it("displays the correct fraction of answers", () => {
    render(<Result {...defaultProps} />);
    const fractionText = screen.getByText("15/20");
    expect(fractionText).toBeInTheDocument();
  });

  it("shows attempts left", () => {
    render(<Result {...defaultProps} />);
    const attemptsText = screen.getByText("Attempts left: 2 of 3");
    expect(attemptsText).toBeInTheDocument();
  });

  it("calls onRetry when retry button is clicked", () => {
    render(<Result {...defaultProps} />);
    const retryButton = screen.getByText("Retry").closest("button");
    fireEvent.click(retryButton!);
    expect(defaultProps.onRetry).toHaveBeenCalledTimes(1);
  });

  it("shows default pass message when score is above passing percentage", () => {
    render(<Result {...defaultProps} minimum={60} />);
    const message = screen.getByText("Congrats! You have passed this exam.");
    expect(message).toBeInTheDocument();
  });

  it("shows default fail message when score is below passing percentage", () => {
    render(
      <Result
        {...defaultProps}
        correctAnswers={10}
        totalQuestions={20}
        minimum={60}
      />,
    );
    const message = screen.getByText("Sorry, you did not pass this exam.");
    expect(message).toBeInTheDocument();
  });

  it("hides retry button when no attempts left", () => {
    render(<Result {...defaultProps} attemptsLeft={0} />);
    const retryButton = screen.queryByText("Retry");
    expect(retryButton).not.toBeInTheDocument();
  });

  it("hides retry button when showRetryButton is false", () => {
    render(<Result {...defaultProps} showRetryButton={false} />);
    const retryButton = screen.queryByText("Retry");
    expect(retryButton).not.toBeInTheDocument();
  });

  it("uses custom feedback message for perfect score", () => {
    const customFeedback: Feedback[] = [
      {
        message: "Perfect score! You're a genius!",
        condition: "EQUAL_TO",
        equal: 100,
      },
    ];

    render(
      <Result
        {...defaultProps}
        correctAnswers={20}
        totalQuestions={20}
        feedback={customFeedback}
      />,
    );

    const message = screen.getByText("Perfect score! You're a genius!");
    expect(message).toBeInTheDocument();
  });

  it("uses custom feedback message for range of scores", () => {
    const customFeedback: Feedback[] = [
      {
        message: "Good job! You've passed with a solid score.",
        condition: "BETWEEN",
        min: 70,
        max: 79,
      },
    ];

    render(
      <Result
        {...defaultProps}
        correctAnswers={15}
        totalQuestions={20}
        feedback={customFeedback}
      />,
    );

    const message = screen.getByText(
      "Good job! You've passed with a solid score.",
    );
    expect(message).toBeInTheDocument();
  });

  it("uses custom feedback message for scores below threshold", () => {
    const customFeedback: Feedback[] = [
      {
        message: "You need to study more to pass this exam.",
        condition: "LESS_THAN",
        lt: 50,
      },
    ];

    render(
      <Result
        {...defaultProps}
        correctAnswers={9}
        totalQuestions={20}
        feedback={customFeedback}
      />,
    );

    const message = screen.getByText(
      "You need to study more to pass this exam.",
    );
    expect(message).toBeInTheDocument();
  });

  it("uses custom feedback message for scores above threshold", () => {
    const customFeedback: Feedback[] = [
      {
        message: "You did great!",
        condition: "GREATER_THAN",
        gt: 80,
      },
    ];

    render(
      <Result
        {...defaultProps}
        correctAnswers={18}
        totalQuestions={20}
        feedback={customFeedback}
      />,
    );

    const message = screen.getByText("You did great!");
    expect(message).toBeInTheDocument();
  });

  it("uses default message when no feedback condition matches", () => {
    const customFeedback: Feedback[] = [
      {
        message: "This doesn't match any score",
        condition: "EQUAL_TO",
        equal: 42,
      },
    ];

    render(<Result {...defaultProps} feedback={customFeedback} />);

    const message = screen.getByText("Congrats! You have passed this exam.");
    expect(message).toBeInTheDocument();
  });
});
