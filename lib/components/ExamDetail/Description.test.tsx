import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ExamDescription from "./Description";

describe("ExamDescription component", () => {
  const mockDescription =
    "Welcome to the Svelte 5 Quiz! This quiz is designed to test your knowledge and understanding of Svelte";
  const longDescription =
    "This is a very long text that should be truncated. ".repeat(10);
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
    const favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.click(favoriteButton);
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
    const bookmarkButton = screen.getByTestId("save-button");
    fireEvent.click(bookmarkButton);
    expect(mockOnBookmark).toHaveBeenCalledTimes(1);
  });

  it("truncates long text and shows 'Read more' button", () => {
    render(
      <ExamDescription
        description={longDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );

    expect(screen.getByText(/This is a very long text/)).toBeInTheDocument();
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });

  it("expands text when 'Read more' is clicked", () => {
    render(
      <ExamDescription
        description={longDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );

    const readMoreButton = screen.getByText("Read more");
    fireEvent.click(readMoreButton);

    expect(screen.getByText("Read less")).toBeInTheDocument();
    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });

  it("collapses text when 'Read less' is clicked", () => {
    render(
      <ExamDescription
        description={longDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );

    // First expand
    const readMoreButton = screen.getByText("Read more");
    fireEvent.click(readMoreButton);

    // Then collapse
    const readLessButton = screen.getByText("Read less");
    fireEvent.click(readLessButton);

    expect(screen.getByText("Read more")).toBeInTheDocument();
    expect(screen.queryByText(longDescription)).not.toBeInTheDocument();
  });

  it("renders with proper layout", () => {
    render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );

    expect(screen.getByText(mockDescription)).toBeInTheDocument();
    expect(screen.getByText("Start exam")).toBeInTheDocument();
  });

  it("should render long description correctly", () => {
    render(
      <ExamDescription
        description={mockDescription}
        onStartExam={mockOnStartExam}
        onFavorite={mockOnFavorite}
        onBookmark={mockOnBookmark}
      />,
    );

    expect(screen.getByText(mockDescription)).toBeInTheDocument();
    expect(screen.getByText("Start exam")).toBeInTheDocument();
  });
});
