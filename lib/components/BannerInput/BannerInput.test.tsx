import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BannerInput from "./BannerInput";

describe("BannerInput component", () => {
  it("renders the input element with hidden class", async () => {
    const mockOnChange = vi.fn();
    render(<BannerInput onChange={mockOnChange} />);
    const inputElement = await screen.findByTestId("banner");
    expect(inputElement.className).toContain("hidden");
  });

  it("displays the PhotoIcon", () => {
    const mockOnChange = vi.fn();
    render(<BannerInput onChange={mockOnChange} />);
    const iconElement = screen.getByTestId("PhotoIcon");
    expect(iconElement).toBeDefined();
  });

  it("calls onChange when a file is selected", async () => {
    const mockOnChange = vi.fn();
    render(<BannerInput onChange={mockOnChange} />);
    const inputElement = await screen.findByTestId(/banner/i);
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
});
