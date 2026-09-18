import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Select from "./Select";

describe("Select Component", () => {
  it("renders the Select component with the provided text", async () => {
    render(<Select text="Select an option" />);
    const button = await screen.findByText("Select an option");
    expect(button).toBeDefined();
  });

  it("toggles the dropdown menu when the button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Select text="Select an option">
        <Select.Option>Option 1</Select.Option>
        <Select.Option>Option 2</Select.Option>
      </Select>,
    );

    const button = await screen.findByTestId("trigger");
    await user.click(button);

    const options = screen.getAllByRole("menuitemcheckbox");
    expect(options.length).toBe(2);
  });

  it("selects an option and closes dropdown", async () => {
    const onSelect = vi.fn();
    const onCheckedChange = vi.fn();
    render(
      <Select text="Select an option">
        <Select.Option onSelect={onSelect} onCheckedChange={onCheckedChange}>
          Option 1
        </Select.Option>
      </Select>,
    );

    fireEvent.click(screen.getByTestId("trigger"));
    const option = screen.getByRole("menuitemcheckbox");
    fireEvent.click(option);

    expect(onSelect).toHaveBeenCalled();
    expect(onCheckedChange).toHaveBeenCalledWith(true);
    expect(screen.queryByRole("menuitemcheckbox")).not.toBeInTheDocument();
  });

  it("does not select a disabled option", () => {
    const onSelect = vi.fn();
    render(
      <Select defaultOpen text="Select an option">
        <Select.Option disabled onSelect={onSelect}>
          Disabled Option
        </Select.Option>
      </Select>,
    );

    const option = screen.getByRole("menuitemcheckbox");
    fireEvent.click(option);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("closes dropdown on Escape key", () => {
    render(
      <Select defaultOpen text="Select an option">
        <Select.Option>Option 1</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("menuitemcheckbox")).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menuitemcheckbox")).not.toBeInTheDocument();
  });

  it("closes dropdown on outside click", () => {
    render(
      <div>
        <div data-testid="outside">Outside Area</div>
        <Select defaultOpen text="Select an option">
          <Select.Option>Option 1</Select.Option>
        </Select>
      </div>,
    );

    expect(screen.getByRole("menuitemcheckbox")).toBeInTheDocument();
    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByRole("menuitemcheckbox")).not.toBeInTheDocument();
  });

  it("triggers custom onClick on Option and calls default context close safely", () => {
    const handleClick = vi.fn();
    render(
      <Select defaultOpen text="Choose">
        <Select.Option onClick={handleClick} checked>
          Option With Click
        </Select.Option>
      </Select>,
    );

    fireEvent.click(screen.getByRole("menuitemcheckbox"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("opens closed dropdown when ArrowDown or ArrowUp key is pressed", () => {
    render(
      <Select text="Choose">
        <Select.Option>Option 1</Select.Option>
      </Select>,
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("menuitemcheckbox")).not.toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menuitemcheckbox")).toBeInTheDocument();
  });
});