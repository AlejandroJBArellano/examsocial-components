import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RetentionRate from "./RetentionRate";

describe("RetentionRate component", () => {
  it("should render the heading correctly", () => {
    render(<RetentionRate completed={60} outOfTime={30} quit={10} />);
    expect(screen.getByText("Retention Rate")).toBeInTheDocument();
  });

  it("should render all three percentage bars with correct values", () => {
    render(<RetentionRate completed={60} outOfTime={30} quit={10} />);
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(screen.getByText("30%")).toBeInTheDocument();
    expect(screen.getByText("10%")).toBeInTheDocument();
  });

  it("should render appropriate labels for each category", () => {
    render(<RetentionRate completed={60} outOfTime={30} quit={10} />);
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Out of Time")).toBeInTheDocument();
    expect(screen.getByText("Quit")).toBeInTheDocument();
  });

  it("should apply correct width styles based on percentages", () => {
    render(<RetentionRate completed={60} outOfTime={30} quit={10} />);

    const completedBar = screen.getByText("60%").closest("div");
    const outOfTimeBar = screen.getByText("30%").closest("div");
    const quitBar = screen.getByText("10%").closest("div");

    expect(completedBar).toHaveStyle("width: 60%");
    expect(outOfTimeBar).toHaveStyle("width: 30%");
    expect(quitBar).toHaveStyle("width: 10%");
  });

  it("should handle edge case with 100% in one category", () => {
    render(<RetentionRate completed={100} outOfTime={0} quit={0} />);

    const completedBar = screen.getByText("100%").closest("div");
    expect(completedBar).toHaveStyle("width: 100%");

    expect(
      screen.getByText("0%", { selector: ".bg-feedback-warning + h6" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("0%", { selector: ".bg-feedback-error + h6" }),
    ).toBeInTheDocument();
  });

  it("should apply correct background colors to each section", () => {
    render(<RetentionRate completed={60} outOfTime={30} quit={10} />);

    const completedBar = screen.getByText("60%").closest("div");
    const outOfTimeBar = screen.getByText("30%").closest("div");
    const quitBar = screen.getByText("10%").closest("div");

    expect(completedBar).toHaveClass("bg-feedback-success");
    expect(outOfTimeBar).toHaveClass("bg-feedback-warning");
    expect(quitBar).toHaveClass("bg-feedback-error");
  });

  it("should apply the correct styling to the container", () => {
    render(<RetentionRate completed={60} outOfTime={30} quit={10} />);

    const container = screen.getByText("Retention Rate").closest("div");
    expect(container).toHaveClass("space-y-4");
    expect(container).toHaveClass("rounded-lg");
    expect(container).toHaveClass("border");
    expect(container).toHaveClass("border-secondary-shadow");
    expect(container).toHaveClass("bg-secondary");
  });
});
