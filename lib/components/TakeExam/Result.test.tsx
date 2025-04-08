import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Result from "./Result";

describe("ResultTakeExam component", () => {
  const defaultProps = {
    correctAnswers: 15,
    totalQuestions: 20,
    attemptsLeft: 2,
    maxAttempts: 3,
    score: 75,
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
        score={50}
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

  it("uses custom messages when provided", () => {
    const messages = ["Great job!", "You passed with flying colors!"];
    render(<Result {...defaultProps} messages={messages} />);
    const message = screen.getByText(
      "Great job!, You passed with flying colors!",
    );
    expect(message).toBeInTheDocument();
  });
});
