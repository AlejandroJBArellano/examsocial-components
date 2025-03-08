import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Icon } from "./Icon";

describe("Icon Component", () => {
  it("renders with default props", () => {
    render(<Icon name="home" />);
    const iconElement = screen.getByText("home");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("material-symbols");
    expect(iconElement).toHaveClass("material-symbols-outlined");
  });

  it("renders with different variants", () => {
    const { rerender } = render(<Icon name="home" variant="rounded" />);
    expect(screen.getByText("home")).toHaveClass("material-symbols-rounded");

    rerender(<Icon name="home" variant="sharp" />);
    expect(screen.getByText("home")).toHaveClass("material-symbols-sharp");

    rerender(<Icon name="home" variant="outlined" />);
    expect(screen.getByText("home")).toHaveClass("material-symbols-outlined");
  });

  it("applies custom className", () => {
    render(<Icon name="home" className="custom-class" />);
    expect(screen.getByText("home")).toHaveClass("custom-class");
  });

  it("applies filled style when filled prop is true", () => {
    render(<Icon name="home" filled />);
    const iconElement = screen.getByText("home");

    // Check that the fontVariationSettings includes FILL 1
    expect(iconElement).toHaveStyle({
      fontVariationSettings: expect.stringContaining("'FILL' 1"),
    });
  });

  it("applies correct font size based on size prop", () => {
    render(<Icon name="home" size={32} />);
    expect(screen.getByText("home")).toHaveStyle({
      fontSize: "32px",
    });
  });

  it("applies correct weight and grade", () => {
    render(<Icon name="home" weight={700} grade={200} />);
    const iconElement = screen.getByText("home");

    expect(iconElement).toHaveStyle({
      fontVariationSettings: expect.stringContaining("'wght' 700"),
    });

    expect(iconElement).toHaveStyle({
      fontVariationSettings: expect.stringContaining("'GRAD' 200"),
    });
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Icon name="home" onClick={handleClick} />);

    fireEvent.click(screen.getByText("home"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
