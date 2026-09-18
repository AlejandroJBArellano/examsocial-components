import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ImageInput from "./ImageInput";

describe("ImageInput component", () => {
  it("renders the input element with hidden class", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(<ImageInput onChange={mockOnChange} />);
    const inputElement = container.querySelector('input[type="file"]');
    expect(inputElement).not.toBeNull();
    expect(inputElement?.className).toContain("hidden");
  });

  it("renders the file input with correct accept attribute", () => {
    const mockOnChange = vi.fn();
    const { container } = render(<ImageInput onChange={mockOnChange} />);
    const inputElement = container.querySelector('input[type="file"]');
    expect(inputElement?.getAttribute("accept")).toBe("image/*");
  });

  it("displays the description icon", () => {
    const mockOnChange = vi.fn();
    render(<ImageInput onChange={mockOnChange} />);
    const iconElements = screen.getAllByText("description");
    expect(iconElements.length).toBeGreaterThan(0);
  });

  it("calls onChange when a file is selected", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(<ImageInput onChange={mockOnChange} />);
    const inputElement = container.querySelector('input[type="file"]')!;
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });

    fireEvent.change(inputElement, {
      target: {
        files: [file],
      },
    });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("displays 'Browse your device' text on desktop layout", () => {
    const mockOnChange = vi.fn();
    render(<ImageInput onChange={mockOnChange} />);
    const buttonText = screen.getByText("Browse your device");
    expect(buttonText).toBeDefined();
  });

  it("triggers click on input when button is clicked", () => {
    const mockOnChange = vi.fn();
    const clickSpy = vi.spyOn(HTMLElement.prototype, "click");

    render(<ImageInput onChange={mockOnChange} />);
    const button = screen.getByText("Browse your device");

    fireEvent.click(button);

    expect(clickSpy).toHaveBeenCalled();
    clickSpy.mockRestore();
  });

  // Drag and drop tests
  it("changes UI when dragging a file over the component", () => {
    const mockOnChange = vi.fn();
    const { container, rerender } = render(
      <ImageInput onChange={mockOnChange} />,
    );

    // Get the label element
    const labelElement = container.querySelector("label");
    expect(labelElement).not.toBeNull();

    if (labelElement) {
      // Simulate drag enter event
      fireEvent.dragEnter(labelElement, {
        dataTransfer: {
          files: [new File(["content"], "test.png", { type: "image/png" })],
        },
      });

      // React state updates are asynchronous so we need to force a rerender
      rerender(<ImageInput onChange={mockOnChange} />);

      // Check if the special UI is now rendered
      const dragUIElement = screen.getByText("Drop it like it's hot");
      expect(dragUIElement).toBeDefined();
    }
  });

  it("processes dropped files correctly", () => {
    const mockOnChange = vi.fn();
    const { container } = render(<ImageInput onChange={mockOnChange} />);

    const labelElement = container.querySelector("label");
    expect(labelElement).not.toBeNull();

    if (labelElement) {
      const file = new File(["content"], "test.png", { type: "image/png" });

      fireEvent.drop(labelElement, {
        preventDefault: () => {},
        stopPropagation: () => {},
        dataTransfer: {
          files: [file],
        },
      });

      expect(mockOnChange).toHaveBeenCalled();
    }
  });

  it("removes drag UI when dragleave event is fired", () => {
    const mockOnChange = vi.fn();
    const { container, rerender } = render(
      <ImageInput onChange={mockOnChange} />,
    );

    // Get the label element
    const labelElement = container.querySelector("label");
    expect(labelElement).not.toBeNull();

    if (labelElement) {
      // First trigger dragenter to show drag UI
      fireEvent.dragEnter(labelElement, {
        dataTransfer: {
          files: [new File(["content"], "test.png", { type: "image/png" })],
        },
      });

      // React state updates are asynchronous so we need to force a rerender
      rerender(<ImageInput onChange={mockOnChange} />);

      // Verify drag UI is shown
      expect(screen.queryByText("Drop it like it's hot")).not.toBeNull();

      // Now trigger dragleave
      fireEvent.dragLeave(labelElement);

      // Force rerender
      rerender(<ImageInput onChange={mockOnChange} />);

      // Verify drag UI is no longer shown
      expect(screen.queryByText("Drop it like it's hot")).toBeNull();
    }
  });
});
