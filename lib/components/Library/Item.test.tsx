import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LibraryItem from "./Item";

describe("LibraryItem component", () => {
  it("should render with the provided title", async () => {
    render(<LibraryItem title="Test Title" />);
    const heading = await screen.findByText("Test Title");
    expect(heading).toBeInTheDocument();
  });

  it("should render with the provided children content", async () => {
    render(<LibraryItem title="Test Title">Child Content</LibraryItem>);
    const content = await screen.findByText("Child Content");
    expect(content).toBeInTheDocument();
  });

  it("should render the forward arrow icon", async () => {
    render(<LibraryItem title="Test Title" />);
    const icon = await screen.findByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("data-icon-name")).toBe("shape: arrow_forward");
  });

  it("should have the correct spacing classes", () => {
    render(<LibraryItem title="Test Title">Child Content</LibraryItem>);
    const container = screen
      .getByText("Test Title")
      .closest("div")?.parentElement;
    expect(container).toHaveClass("mb-2");
    expect(container).toHaveClass("space-y-1");
  });

  it("should have a flex layout for the title and icon", () => {
    render(<LibraryItem title="Test Title" />);
    const titleRow = screen.getByText("Test Title").closest("div");
    expect(titleRow).toHaveClass("flex");
    expect(titleRow).toHaveClass("justify-between");
  });
});
