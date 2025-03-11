import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import QuestionDetail from "./QuestionDetail";

describe("QuestionDetail component", () => {
  it("renders with default props", () => {
    render(<QuestionDetail />);

    // Check if the question text is rendered
    expect(
      screen.getByText(
        "Which of the following is a correct way to create a writable store in Svelte?",
      ),
    ).toBeInTheDocument();

    // Check if the correct percentage is displayed
    expect(screen.getByText("25%")).toBeInTheDocument();

    // Check if edit and delete buttons are present
    expect(screen.getByLabelText("Edit question")).toBeInTheDocument();
    expect(screen.getByLabelText("Delete question")).toBeInTheDocument();
  });

  it("renders with custom question text", () => {
    const customQuestion = "What is the capital of France?";
    render(<QuestionDetail questionText={customQuestion} />);

    expect(screen.getByText(customQuestion)).toBeInTheDocument();
  });

  it("renders with custom correct percentage", () => {
    const correctPercentage = 75;
    render(<QuestionDetail correctPercentage={correctPercentage} />);

    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("calls onEdit callback when edit button is clicked", () => {
    const handleEdit = vi.fn();
    render(<QuestionDetail onEdit={handleEdit} />);

    const editButton = screen.getByLabelText("Edit question");
    fireEvent.click(editButton);

    expect(handleEdit).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete callback when delete button is clicked", () => {
    const handleDelete = vi.fn();
    render(<QuestionDetail onDelete={handleDelete} />);

    const deleteButton = screen.getByLabelText("Delete question");
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("has proper semantic HTML structure", () => {
    render(<QuestionDetail />);

    // Check for semantic elements
    expect(screen.getByRole("banner")).toBeInTheDocument(); // header
    expect(screen.getByRole("main")).toBeInTheDocument(); // main

    // Check for aria attributes
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("aria-labelledby", "question-title");

    // Check for the question actions div
    expect(screen.getByLabelText("Question actions")).toBeInTheDocument();
  });

  it("has correct aria labels for accessibility", () => {
    render(<QuestionDetail correctPercentage={42} />);

    // Check the percentage indicator has appropriate aria-label
    expect(
      screen.getByLabelText("42% of students got this answer correct"),
    ).toBeInTheDocument();

    // Check the buttons have proper aria-labels
    expect(screen.getByLabelText("Edit question")).toBeInTheDocument();
    expect(screen.getByLabelText("Delete question")).toBeInTheDocument();
  });

  it("does not show percentage indicator when showCorrectAnswer is false", () => {
    render(<QuestionDetail showCorrectAnswer={false} />);

    // The percentage text should not be in the document
    expect(screen.queryByText("25%")).not.toBeInTheDocument();

    // The percentage indicator div should not be present
    expect(
      screen.queryByLabelText("25% of students got this answer correct"),
    ).not.toBeInTheDocument();
  });

  it("shows percentage indicator when showCorrectAnswer is true", () => {
    render(<QuestionDetail showCorrectAnswer={true} />);

    // The percentage text should be in the document
    expect(screen.getByText("25%")).toBeInTheDocument();

    // The percentage indicator div should be present
    expect(
      screen.getByLabelText("25% of students got this answer correct"),
    ).toBeInTheDocument();
  });
});
