import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ImageInput from "./ImageInput";

describe("ImageInput component", () => {
  it("renders the input element with hidden class", async () => {
    const mockOnChange = vi.fn();
    render(<ImageInput onChange={mockOnChange} />);
    const inputElement = screen.getByRole("textbox", { hidden: true });
    expect(inputElement.className).toContain("hidden");
  });

  it("renders the file input with correct accept attribute", () => {
    const mockOnChange = vi.fn();
    render(<ImageInput onChange={mockOnChange} />);
    const inputElement = screen.getByRole("textbox", { hidden: true });
    expect(inputElement.getAttribute("accept")).toBe("image/*");
  });

  it("displays the photo icon", () => {
    const mockOnChange = vi.fn();
    render(<ImageInput onChange={mockOnChange} />);
    const iconElement = screen.getByText("photo");
    expect(iconElement).toBeDefined();
  });

  it("calls onChange when a file is selected", async () => {
    const mockOnChange = vi.fn();
    render(<ImageInput onChange={mockOnChange} />);
    const inputElement = screen.getByRole("textbox", { hidden: true });
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

  it("displays 'Select from your files' text on desktop layout", () => {
    const mockOnChange = vi.fn();
    render(<ImageInput onChange={mockOnChange} />);
    const buttonText = screen.getByText("Select from your files");
    expect(buttonText).toBeDefined();
  });

  it("triggers click on input when button is clicked", () => {
    const mockOnChange = vi.fn();
    const clickSpy = vi.spyOn(HTMLElement.prototype, "click");

    render(<ImageInput onChange={mockOnChange} />);
    const button = screen.getByText("Select from your files");

    fireEvent.click(button);

    expect(clickSpy).toHaveBeenCalled();
    clickSpy.mockRestore();
  });
});
