import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import MenuItem from "./MenuItem";

describe("MenuItem", () => {
  test("renders correctly with default props", () => {
    render(<MenuItem>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveTextContent("Go Pro");
  });

  test("renders in compressed mode", () => {
    render(<MenuItem isCompressed>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveAttribute("data-compressed", "true");
    expect(menuItem).toHaveClass("flex-col");
    expect(menuItem).toHaveClass("place-items-center");
  });

  test("renders in selected state", () => {
    render(<MenuItem isSelected>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveAttribute("data-selected", "true");
    expect(menuItem.className).toContain("data-[selected]:bg-primary-tint");
  });

  test("renders with CTA styling", () => {
    render(<MenuItem isCTA>Create</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("bg-accent");
    expect(menuItem).toHaveClass("border-black");
  });

  test("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<MenuItem onClick={handleClick}>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    menuItem.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with custom className", () => {
    render(<MenuItem className="custom-class">Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("custom-class");
  });

  test("renders with different icon", () => {
    render(<MenuItem icon="list_alt_add">Create</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
    expect(screen.getByText("list_alt_add")).toBeInTheDocument();
  });

  test("renders with tooltip when tooltipText is provided", () => {
    render(
      <MenuItem isCompressed tooltipText="Create new item">
        Create
      </MenuItem>,
    );

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
    expect(screen.getByText("Create new item")).toBeInTheDocument();
  });
});
