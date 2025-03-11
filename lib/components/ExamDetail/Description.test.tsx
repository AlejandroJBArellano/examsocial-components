import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ExamDescription from "./Description";

describe("ExamDescription component", () => {
  const mockDescription =
    "Welcome to the Svelte 5 Quiz! This quiz is designed to test your knowledge and understanding of Svelte";
  const mockOnStartExam = vi.fn();
  const mockOnFavorite = vi.fn();
  const mockOnBookmark = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the description text correctly", () => {
    render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });

  it("renders start exam button", () => {
    render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );
    expect(screen.getByText("Start exam")).toBeInTheDocument();
  });

  it("calls onStartExam when start button is clicked", () => {
    render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );
    fireEvent.click(screen.getByText("Start exam"));
    expect(mockOnStartExam).toHaveBeenCalledTimes(1);
  });

  it("calls onFavorite when favorite button is clicked", () => {
    render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );
    fireEvent.click(screen.getByLabelText("Add to favorites"));
    expect(mockOnFavorite).toHaveBeenCalledTimes(1);
  });

  it("calls onBookmark when bookmark button is clicked", () => {
    render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );
    fireEvent.click(screen.getByLabelText("Bookmark exam"));
    expect(mockOnBookmark).toHaveBeenCalledTimes(1);
  });

  it("renders with semantic HTML", () => {
    const { container } = render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
