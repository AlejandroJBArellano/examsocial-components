import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Tooltip } from ".";

// Mock de RadixTooltip ya que usa Portal que no funciona bien en pruebas
vi.mock("@radix-ui/react-tooltip", () => {
  return {
    Root: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Trigger: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="tooltip-trigger">{children}</div>
    ),
    Content: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className: string;
    }) => (
      <div data-testid="tooltip-content" className={className}>
        {children}
      </div>
    ),
    Provider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Portal: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Arrow: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="tooltip-arrow">{children}</div>
    ),
  };
});

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
