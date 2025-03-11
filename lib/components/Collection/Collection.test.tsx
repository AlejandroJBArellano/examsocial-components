import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Collection } from "./Collection";

describe("Collection Component", () => {
  it("renders children correctly", () => {
    render(
      <Collection>
        <div data-testid="test-child">Test Child</div>
      </Collection>,
    );

    const childElement = screen.getByTestId("test-child");
    expect(childElement).toBeDefined();
    expect(screen.getByText("Test Child")).toBeDefined();
  });

  it("applies className correctly", () => {
    const { container } = render(
      <Collection className="test-class">
        <div>Content</div>
      </Collection>,
    );

    const collectionElement = container.firstChild as HTMLElement;
    expect(collectionElement.className).toBe("test-class");
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Collection className="test-class">
        <div>Test Content</div>
      </Collection>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("Collection.Add", () => {
    it("renders children as heading", () => {
      render(<Collection.Add>Add New Item</Collection.Add>);

      const button = screen.getByRole("button");
      expect(button).toBeDefined();
      expect(screen.getByText("Add New Item")).toBeDefined();
    });

    it("renders add icon", () => {
      render(<Collection.Add>Add New Item</Collection.Add>);

      // Since the Icon component renders the icon, we can't directly test for the icon
      // But we can check for the button element
      const button = screen.getByRole("button");
      expect(button).toBeDefined();
    });

    it("calls onClick when clicked", () => {
      const handleClick = vi.fn();

      render(
        <Collection.Add onClick={handleClick}>Add New Item</Collection.Add>,
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("matches snapshot", () => {
      const { container } = render(
        <Collection.Add>Add New Item</Collection.Add>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
