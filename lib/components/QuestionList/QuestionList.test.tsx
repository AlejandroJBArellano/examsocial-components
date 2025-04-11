import { Question, QuestionDetailType } from "@/types";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/vi-dom";
import { describe, expect, it, vi } from "vitest";
import QuestionList from "./QuestionList";

// Mock QuestionDetail and QuestionSet components
vi.mock("../QuestionDetail", () => ({
  QuestionDetail: ({
    detail,
    onEdit,
    onDelete,
  }: {
    detail: Question;
    onEdit?: (values: Question) => void;
    onDelete?: () => void;
  }) => (
    <div data-testid="question-detail">
      <div data-testid="question-title">{detail.title}</div>
      <div data-testid="question-options-count">
        {detail.options?.length || 0}
      </div>
      {onEdit && (
        <button data-testid="edit-button" onClick={() => onEdit(detail)}>
          Edit
        </button>
      )}
      {onDelete && (
        <button data-testid="delete-button" onClick={() => onDelete()}>
          Delete
        </button>
      )}
    </div>
  ),
}));

vi.mock("../QuestionSet", () => ({
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
  const testQuestions: QuestionDetailType[] = [
    {
      id: "1",
      title: "Question 1",
      options: [
        { id: "1", text: "Option 1", correct: true, percentage: 0 },
        { id: "2", text: "Option 2", correct: false, percentage: 0 },
      ],
    },
    {
      id: "2",
      title: "Question 2",
      options: [
        { id: "1", text: "Option A", correct: false, percentage: 0 },
        { id: "2", text: "Option B", correct: true, percentage: 0 },
      ],
    },
  ];

  const renderQuestionList = (
    props: Partial<{
      questions: Question[];
      selectedQuestion: QuestionDetailType;
      onEditQuestion: (question: Question) => void;
      onDeleteQuestion: (id: string) => void;
      onSelectQuestion: (id: string) => void;
      canModify: boolean;
      isLoading: boolean;
      emptyStateMessage: string;
    }> = {},
  ) => {
    const defaultProps = {
      questions: testQuestions,
      selectedQuestion: testQuestions[0],
      onEditQuestion: vi.fn(),
      onDeleteQuestion: vi.fn(),
      onSelectQuestion: vi.fn(),
      canModify: true,
      isLoading: false,
      emptyStateMessage: "No questions found",
    };

    const mergedProps = { ...defaultProps, ...props };

    return render(
      <QuestionList
        questions={mergedProps.questions}
        selectedQuestion={mergedProps.selectedQuestion}
        onEditQuestion={mergedProps.onEditQuestion}
        onDeleteQuestion={mergedProps.onDeleteQuestion}
        onSelectQuestion={mergedProps.onSelectQuestion}
        canModify={mergedProps.canModify}
        isLoading={mergedProps.isLoading}
      />,
    );
  };

  it("renders loading state correctly", () => {
    renderQuestionList({ isLoading: true });

    // Check for loading state elements
    const loadingElements = document.querySelectorAll(".animate-pulse");
    expect(loadingElements.length).toBeGreaterThan(0);

    // Ensure question list and detail are not rendered
    expect(screen.queryByTestId("question-set")).not.toBeInTheDocument();
    expect(screen.queryByTestId("question-detail")).not.toBeInTheDocument();
  });

  it("renders empty state with custom message", () => {
    renderQuestionList({ questions: [] });

    expect(screen.getByText("No questions found")).toBeInTheDocument();
    expect(screen.queryByTestId("question-set")).not.toBeInTheDocument();
    expect(screen.queryByTestId("question-detail")).not.toBeInTheDocument();
  });

  it("renders questions correctly", () => {
    renderQuestionList();

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
    const { getByTestId, getAllByTestId } = renderQuestionList();

    // Initially first question is selected
    const questionSets = getAllByTestId("question-set");
    expect(questionSets[0]).toHaveAttribute("data-selected", "true");
    expect(questionSets[1]).toHaveAttribute("data-selected", "false");

    // Click on the second question
    fireEvent.click(questionSets[1].parentElement as HTMLElement);

    // Now second question should be selected
    expect(questionSets[0]).toHaveAttribute("data-selected", "false");
    expect(questionSets[1]).toHaveAttribute("data-selected", "true");

    // Question detail should update to show second question
    expect(getByTestId("question-title")).toHaveTextContent("Question 2");
  });

  it("calls onEditQuestion with correct questionId", () => {
    const handleEdit = vi.fn();
    renderQuestionList({ onEditQuestion: handleEdit });

    // Click edit button in question detail
    fireEvent.click(screen.getByTestId("edit-button"));

    // Should call onEditQuestion with the ID of the selected question
    expect(handleEdit).toHaveBeenCalledWith(testQuestions[0]);
  });

  it("calls onDeleteQuestion with correct questionId", () => {
    const handleDelete = vi.fn();
    renderQuestionList({ onDeleteQuestion: handleDelete });

    // Click delete button in question detail
    fireEvent.click(screen.getByTestId("delete-button"));

    // Should call onDeleteQuestion with the ID of the selected question
    expect(handleDelete).toHaveBeenCalledWith("1");
  });
});
