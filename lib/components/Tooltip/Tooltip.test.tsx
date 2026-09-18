import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from ".";

describe("Tooltip", () => {
  it("renders correctly with default props", () => {
    render(
      <Tooltip trigger={<button>Test Trigger</button>}>
        Tooltip Content
      </Tooltip>,
    );

    expect(screen.getByText("Test Trigger")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip-content")).toBeInTheDocument();
    expect(screen.getByText("Tooltip Content")).toBeInTheDocument();
  });

  it("applies custom className to content", () => {
    render(
      <Tooltip
        trigger={<button>Test Trigger</button>}
        contentClassName="custom-class"
      >
        Tooltip Content
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip-content")).toHaveClass("custom-class");
  });

  it("renders the trigger element", () => {
    const triggerElement = (
      <button data-testid="custom-trigger">Custom Trigger</button>
    );

    render(<Tooltip trigger={triggerElement}>Tooltip Content</Tooltip>);

    expect(screen.getByTestId("custom-trigger")).toBeInTheDocument();
  });

  it("renders arrow element", () => {
    render(
      <Tooltip trigger={<button>Test Trigger</button>}>
        Tooltip Content
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip-arrow")).toBeInTheDocument();
  });
});
