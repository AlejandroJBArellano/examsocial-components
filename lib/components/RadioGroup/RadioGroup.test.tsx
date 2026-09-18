import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup component", () => {
  const items = [
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" },
    { value: "opt3", label: "Option 3", disabled: true },
  ];

  it("renders with default items", () => {
    render(<RadioGroup items={items} defaultValue="opt1" />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();

    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("aria-checked", "true");
    expect(radios[1]).toHaveAttribute("aria-checked", "false");
    expect(radios[2]).toBeDisabled();
  });

  it("changes selection when radio button is clicked", () => {
    const onValueChange = vi.fn();
    render(<RadioGroup items={items} defaultValue="opt1" onValueChange={onValueChange} />);

    const radios = screen.getAllByRole("radio");
    fireEvent.click(radios[1]);

    expect(radios[1]).toHaveAttribute("aria-checked", "true");
    expect(onValueChange).toHaveBeenCalledWith("opt2");
  });

  it("changes selection when label is clicked", () => {
    const onValueChange = vi.fn();
    render(<RadioGroup items={items} defaultValue="opt1" onValueChange={onValueChange} />);

    fireEvent.click(screen.getByText("Option 2"));
    expect(onValueChange).toHaveBeenCalledWith("opt2");
  });

  it("does not select disabled item", () => {
    const onValueChange = vi.fn();
    render(<RadioGroup items={items} defaultValue="opt1" onValueChange={onValueChange} />);

    fireEvent.click(screen.getByText("Option 3"));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("renders with horizontal orientation", () => {
    const { container } = render(<RadioGroup items={items} orientation="horizontal" />);
    const group = container.querySelector('[role="radiogroup"]');
    expect(group?.className).toContain("flex-row");
  });

  it("disables all items when disabled prop is true", () => {
    render(<RadioGroup items={items} disabled />);
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toBeDisabled();
    expect(radios[1]).toBeDisabled();
  });
});
