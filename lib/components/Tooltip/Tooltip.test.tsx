import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Tooltip } from ".";

describe("Tooltip", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

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

  it("renders arrow element", () => {
    render(
      <Tooltip trigger={<button>Test Trigger</button>}>
        Tooltip Content
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip-arrow")).toBeInTheDocument();
  });

  it("handles mouse enter, leave, focus, and blur events", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <Tooltip
        trigger={<button>Hover Me</button>}
        onOpenChange={onOpenChange}
      >
        Tooltip info
      </Tooltip>,
    );

    const wrapper = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    expect(onOpenChange).toHaveBeenCalledWith(true);

    fireEvent.mouseLeave(wrapper);
    expect(onOpenChange).toHaveBeenCalledWith(false);

    fireEvent.focus(wrapper);
    expect(onOpenChange).toHaveBeenCalledWith(true);

    fireEvent.blur(wrapper);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("handles delayDuration", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <Tooltip
        trigger={<button>Hover Me</button>}
        delayDuration={200}
        onOpenChange={onOpenChange}
      >
        Tooltip info
      </Tooltip>,
    );

    const wrapper = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    expect(onOpenChange).not.toHaveBeenCalledWith(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("does not open when disabled", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <Tooltip
        trigger={<button>Hover Me</button>}
        disabled
        onOpenChange={onOpenChange}
      >
        Tooltip info
      </Tooltip>,
    );

    const wrapper = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("supports sides and alignments", () => {
    const { rerender } = render(
      <Tooltip side="bottom" align="start" trigger={<button>B</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("top-full");

    rerender(
      <Tooltip side="bottom" align="end" trigger={<button>B</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("right-0");

    rerender(
      <Tooltip side="left" align="center" trigger={<button>L</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("right-full");

    rerender(
      <Tooltip side="left" align="start" trigger={<button>L</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("top-0");

    rerender(
      <Tooltip side="left" align="end" trigger={<button>L</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("bottom-0");

    rerender(
      <Tooltip side="right" align="center" trigger={<button>R</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("left-full");

    rerender(
      <Tooltip side="right" align="start" trigger={<button>R</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("top-0");

    rerender(
      <Tooltip side="right" align="end" trigger={<button>R</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("bottom-0");

    rerender(
      <Tooltip side="top" align="start" trigger={<button>T</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("left-0");

    rerender(
      <Tooltip side="top" align="end" trigger={<button>T</button>}>
        Content
      </Tooltip>,
    );
    expect(screen.getByTestId("tooltip-content").className).toContain("right-0");
  });

  it("clears pending timer on early mouse leave when delayDuration > 0", () => {
    const onOpenChange = vi.fn();
    const { container } = render(
      <Tooltip
        trigger={<button>Hover</button>}
        delayDuration={500}
        onOpenChange={onOpenChange}
      >
        Delayed Content
      </Tooltip>,
    );

    const wrapper = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    // mouse leave before timer expires
    fireEvent.mouseLeave(wrapper);
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
