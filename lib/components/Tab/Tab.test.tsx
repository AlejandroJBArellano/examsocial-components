import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Tab from "./Tab";

describe("Tab component", () => {
  it("renders unselected primary tab", () => {
    const { container } = render(<Tab>Tab 1</Tab>);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("hover:bg-primary-tint");
  });

  it("renders selected primary tab", () => {
    const { container } = render(<Tab selected>Tab 1</Tab>);
    expect(container.firstChild).toHaveClass("bg-primary");
  });

  it("renders unselected secondary tab", () => {
    const { container } = render(<Tab theme="secondary">Tab 2</Tab>);
    expect(container.firstChild).toHaveClass("hover:bg-secondary-tint");
  });

  it("renders selected secondary tab", () => {
    const { container } = render(<Tab selected theme="secondary">Tab 2</Tab>);
    expect(container.firstChild).toHaveClass("bg-secondary");
    expect(container.firstChild).toHaveAttribute("role", "tab");
    expect(container.firstChild).toHaveAttribute("aria-selected", "true");
    expect(container.firstChild).toHaveAttribute("tabindex", "0");
  });

  it("handles keyboard Enter and Space to trigger onClick", () => {
    const handleClick = vi.fn();
    const handleKeyDown = vi.fn();
    const { container } = render(
      <Tab onClick={handleClick} onKeyDown={handleKeyDown}>
        Interactive Tab
      </Tab>,
    );
    const tabElement = container.firstChild as HTMLElement;

    // Test Enter
    fireEvent.keyDown(tabElement, { key: "Enter" });
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleKeyDown).toHaveBeenCalled();

    // Test Space
    fireEvent.keyDown(tabElement, { key: " " });
    expect(handleClick).toHaveBeenCalledTimes(2);

    // Test unrelated key
    fireEvent.keyDown(tabElement, { key: "ArrowDown" });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
