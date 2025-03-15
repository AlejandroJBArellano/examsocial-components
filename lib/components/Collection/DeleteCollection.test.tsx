import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { DeleteCollection } from "./DeleteCollection";

describe("DeleteCollection", () => {
  const mockOnCancel = vi.fn();
  const mockOnAccept = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the delete button", () => {
    render(
      <DeleteCollection
        examCount={5}
        onCancel={mockOnCancel}
        onAccept={mockOnAccept}
      />,
    );

    const deleteButton = screen.getByLabelText("Delete collection");
    expect(deleteButton).toBeInTheDocument();
  });

  it("shows the dialog when delete button is clicked", () => {
    render(
      <DeleteCollection
        examCount={5}
        onCancel={mockOnCancel}
        onAccept={mockOnAccept}
      />,
    );

    const deleteButton = screen.getByLabelText("Delete collection");
    fireEvent.click(deleteButton);

    expect(
      screen.getByText("Are you sure you want to delete this collection?"),
    ).toBeInTheDocument();
    expect(screen.getByText("This collection includes")).toBeInTheDocument();
    expect(screen.getByText("5 exams")).toBeInTheDocument();
  });

  it("shows singular 'exam' text when examCount is 1", () => {
    render(
      <DeleteCollection
        examCount={1}
        onCancel={mockOnCancel}
        onAccept={mockOnAccept}
      />,
    );

    const deleteButton = screen.getByLabelText("Delete collection");
    fireEvent.click(deleteButton);

    expect(screen.getByText("1 exam")).toBeInTheDocument();
  });

  it("calls onCancel when cancel button is clicked", () => {
    render(
      <DeleteCollection
        examCount={5}
        onCancel={mockOnCancel}
        onAccept={mockOnAccept}
      />,
    );

    const deleteButton = screen.getByLabelText("Delete collection");
    fireEvent.click(deleteButton);

    const cancelButton = screen.getByText("No, cancel");
    fireEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
    expect(mockOnAccept).not.toHaveBeenCalled();
  });

  it("calls onAccept when delete button is clicked", () => {
    render(
      <DeleteCollection
        examCount={5}
        onCancel={mockOnCancel}
        onAccept={mockOnAccept}
      />,
    );

    const deleteButton = screen.getByLabelText("Delete collection");
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByText("Yes, delete");
    fireEvent.click(confirmButton);

    expect(mockOnAccept).toHaveBeenCalledTimes(1);
    expect(mockOnCancel).not.toHaveBeenCalled();
  });
});
