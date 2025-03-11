import { Question } from "@/types";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import QuestionList from "./QuestionList";

// Mock QuestionDetail and QuestionSet components
jest.mock("../QuestionDetail", () => ({
  QuestionDetail: ({
    children,
    options,
    onEdit,
    onDelete,
  }: {
    children: React.ReactNode;
    options?: Array<{
      id: string;
      text: React.ReactNode;
      correct: boolean;
      percentage: number;
    }>;
    onEdit?: () => void;
    onDelete?: () => void;
  }) => (
    <div data-testid="question-detail">
      <div data-testid="question-title">{children}</div>
      <div data-testid="question-options-count">{options?.length || 0}</div>
      {onEdit && (
        <button data-testid="edit-button" onClick={onEdit}>
          Edit
        </button>
      )}
      {onDelete && (
        <button data-testid="delete-button" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  ),
}));

jest.mock("../QuestionSet", () => ({
  QuestionSet: ({
    title,
    viewOnly,
    selected,
  }: {
    title: string;
    viewOnly?: boolean;
    selected?: boolean;
  }) => (
    <div
      data-testid="question-set"
      data-selected={selected}
      data-view-only={viewOnly}
    >
      {title}
    </div>
  ),
}));

describe("QuestionList Component", () => {
  // Sample questions for testing
  const testQuestions: Question[] = [
    {
      _id: "1",
      title: "Question 1",
      options: [
        { _id: "1", text: "Option 1", correct: true },
        { _id: "2", text: "Option 2", correct: false },
      ],
    },
    {
      _id: "2",
      title: "Question 2",
      options: [
        { _id: "1", text: "Option A", correct: false },
        { _id: "2", text: "Option B", correct: true },
      ],
    },
  ];

  it("renders loading state correctly", () => {
    render(<QuestionList isLoading={true} />);

    // Check for loading state elements
    const loadingElements = document.querySelectorAll(".animate-pulse");
    expect(loadingElements.length).toBeGreaterThan(0);

    // Ensure question list and detail are not rendered
    expect(screen.queryByTestId("question-set")).not.toBeInTheDocument();
    expect(screen.queryByTestId("question-detail")).not.toBeInTheDocument();
  });

  it("renders empty state with custom message", () => {
    const emptyMessage = "No questions found";
    render(<QuestionList emptyStateMessage={emptyMessage} />);

    expect(screen.getByText(emptyMessage)).toBeInTheDocument();
    expect(screen.queryByTestId("question-set")).not.toBeInTheDocument();
    expect(screen.queryByTestId("question-detail")).not.toBeInTheDocument();
  });

  it("renders questions correctly", () => {
    render(<QuestionList questions={testQuestions} />);

    // Should render all questions
    const questionSets = screen.getAllByTestId("question-set");
    expect(questionSets).toHaveLength(2);

    // First question should be selected by default
    expect(questionSets[0]).toHaveAttribute("data-selected", "true");
    expect(questionSets[1]).toHaveAttribute("data-selected", "false");

    // Should render question detail for the selected question
    const questionDetail = screen.getByTestId("question-detail");
    expect(questionDetail).toBeInTheDocument();
    expect(screen.getByTestId("question-title")).toHaveTextContent(
      "Question 1",
    );
    expect(screen.getByTestId("question-options-count")).toHaveTextContent("2");
  });

  it("changes selected question when clicking on a question", () => {
    render(<QuestionList questions={testQuestions} />);

    // Initially first question is selected
    const questionSets = screen.getAllByTestId("question-set");
    expect(questionSets[0]).toHaveAttribute("data-selected", "true");
    expect(questionSets[1]).toHaveAttribute("data-selected", "false");

    // Click on the second question
    fireEvent.click(questionSets[1].parentElement as HTMLElement);

    // Now second question should be selected
    expect(questionSets[0]).toHaveAttribute("data-selected", "false");
    expect(questionSets[1]).toHaveAttribute("data-selected", "true");

    // Question detail should update to show second question
    expect(screen.getByTestId("question-title")).toHaveTextContent(
      "Question 2",
    );
  });

  it("calls onEditQuestion with correct questionId", () => {
    const handleEdit = jest.fn();
    render(
      <QuestionList questions={testQuestions} onEditQuestion={handleEdit} />,
    );

    // Click edit button in question detail
    fireEvent.click(screen.getByTestId("edit-button"));

    // Should call onEditQuestion with the ID of the selected question
    expect(handleEdit).toHaveBeenCalledWith("1");
  });

  it("calls onDeleteQuestion with correct questionId", () => {
    const handleDelete = jest.fn();
    render(
      <QuestionList
        questions={testQuestions}
        onDeleteQuestion={handleDelete}
      />,
    );

    // Click delete button in question detail
    fireEvent.click(screen.getByTestId("delete-button"));

    // Should call onDeleteQuestion with the ID of the selected question
    expect(handleDelete).toHaveBeenCalledWith("1");
  });

  it("updates selected question when questions prop changes", () => {
    const { rerender } = render(<QuestionList questions={testQuestions} />);

    // Initially first question is selected
    expect(screen.getByTestId("question-title")).toHaveTextContent(
      "Question 1",
    );

    // Update with new questions where the first one has a different ID
    const newQuestions = [
      {
        _id: "3",
        title: "New Question",
        options: [
          { _id: "1", text: "Option X", correct: true },
          { _id: "2", text: "Option Y", correct: false },
        ],
      },
      ...testQuestions.slice(1),
    ];

    rerender(<QuestionList questions={newQuestions} />);

    // Selected question should update to the first one in the new list
    expect(screen.getByTestId("question-title")).toHaveTextContent(
      "New Question",
    );
  });
});
