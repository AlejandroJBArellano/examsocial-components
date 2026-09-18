import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Dialog from "./Dialog";
import { useDialogPortalContainer } from "./dialogPortalContext";

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

  it("supports innerRef as a callback and provides portal container context", () => {
    const callbackRef = vi.fn();

    const Child = () => {
      const container = useDialogPortalContainer();
      return <div data-testid="has-container">{container ? "yes" : "no"}</div>;
    };

    render(
      <Dialog innerRef={callbackRef}>
        <Child />
      </Dialog>,
    );

    expect(callbackRef).toHaveBeenCalled();
    expect(screen.getByTestId("has-container")).toHaveTextContent("yes");
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

  it("closes dialog when clicking directly on backdrop overlay", () => {
    const mockClose = vi.fn();
    const callbackRef = (node: HTMLDialogElement | null) => {
      if (node) {
        node.close = mockClose;
      }
    };
    const handleClick = vi.fn();

    render(
      <Dialog innerRef={callbackRef} onClick={handleClick} data-testid="test-dialog">
        <div data-testid="dialog-inner">Inside Dialog</div>
      </Dialog>,
    );

    const dialog = screen.getByTestId("test-dialog");
    expect(dialog).toHaveAttribute("role", "dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");

    // Click backdrop (e.target === e.currentTarget)
    fireEvent.click(dialog);
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Click child inside dialog (e.target !== e.currentTarget)
    const child = screen.getByTestId("dialog-inner");
    fireEvent.click(child);
    expect(mockClose).toHaveBeenCalledTimes(1); // not called again
  });
});
