import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dialog } from ".";

describe("Dialog", () => {
  it("renders with basic props", () => {
    const ref = { current: null };
    render(
      <Dialog innerRef={ref} className="test-class" data-testid="test-dialog">
        Test Content
      </Dialog>,
    );

    const dialog = screen.getByTestId("test-dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveClass("test-class");
    expect(dialog).toHaveClass("rounded-lg");
    expect(dialog).toHaveClass("shadow-right-sm");
    expect(dialog).toHaveClass("shadow-black");
    expect(dialog).toHaveTextContent("Test Content");
  });

  it("passes HTML dialog attributes correctly", () => {
    const ref = { current: null };
    render(
      <Dialog
        innerRef={ref}
        open
        id="test-id"
        aria-label="Test Dialog"
        data-testid="test-dialog"
      >
        Test Content
      </Dialog>,
    );

    const dialog = screen.getByTestId("test-dialog");
    expect(dialog).toHaveAttribute("open");
    expect(dialog).toHaveAttribute("id", "test-id");
    expect(dialog).toHaveAttribute("aria-label", "Test Dialog");
  });

  it("merges custom className with default classes", () => {
    const ref = { current: null };
    render(
      <Dialog innerRef={ref} className="custom-class" data-testid="test-dialog">
        Test Content
      </Dialog>,
    );

    const dialog = screen.getByTestId("test-dialog");
    expect(dialog).toHaveClass("custom-class");
    expect(dialog).toHaveClass("rounded-lg");
    expect(dialog).toHaveClass("shadow-right-sm");
    expect(dialog).toHaveClass("shadow-black");
    expect(dialog).toHaveClass("backdrop:bg-black/50");
    expect(dialog).toHaveClass("backdrop:backdrop-blur-md");
  });
});
