import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Drawer, useDrawer } from "./Drawer";

describe("Drawer Component", () => {
  it("renders Root component correctly", () => {
    render(
      <Drawer.Root>
        <div>Drawer Content</div>
      </Drawer.Root>,
    );

    expect(screen.getByTestId("drawer-root")).toBeInTheDocument();
  });

  it("renders Trigger component with correct styles", () => {
    render(<Drawer.Trigger>Open Drawer</Drawer.Trigger>);

    const trigger = screen.getByTestId("drawer-trigger");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent("Open Drawer");
    expect(trigger.className).toContain("rounded-full");
    expect(trigger.className).toContain("bg-light");
  });

  it("renders Overlay component with correct styles", () => {
    render(<Drawer.Overlay />);

    const overlay = screen.getByTestId("drawer-overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay.className).toContain("fixed");
    expect(overlay.className).toContain("bg-black/40");
  });

  it("renders Content component with correct styles", () => {
    render(<Drawer.Content />);

    const content = screen.getByTestId("drawer-content");
    expect(content).toBeInTheDocument();
    expect(content.className).toContain("fixed");
    expect(content.className).toContain("bottom-0");
    expect(content.className).toContain("bg-gray-100");
  });

  it("renders Title component with Heading4", () => {
    render(<Drawer.Title>Drawer Title</Drawer.Title>);

    expect(screen.getByText("Drawer Title")).toBeInTheDocument();
    const titleContainer = screen.getByText("Drawer Title").closest("div");
    expect(titleContainer).toHaveClass("text-center");
  });

  it("renders Handle component with correct styles", () => {
    const { container } = render(<Drawer.Handle />);

    const handle = container.firstChild as HTMLElement;
    expect(handle).toBeInTheDocument();
    expect(handle.className).toContain("rounded-full");
    expect(handle.className).toContain("bg-black");
  });

  it("renders a full drawer with all components", () => {
    render(
      <Drawer.Root>
        <Drawer.Trigger>Open Full Drawer</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Handle />
            <div className="p-4">
              <Drawer.Title>Full Drawer Example</Drawer.Title>
              <p>This is drawer content</p>
            </div>
            <Drawer.Close>Close Drawer</Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>,
    );

    expect(screen.getByTestId("drawer-root")).toBeInTheDocument();
    expect(screen.getByText("Open Full Drawer")).toBeInTheDocument();
    expect(screen.getByTestId("drawer-portal")).toBeInTheDocument();
    expect(screen.getByTestId("drawer-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("drawer-content")).toBeInTheDocument();
    expect(screen.getByText("Full Drawer Example")).toBeInTheDocument();
    expect(screen.getByText("This is drawer content")).toBeInTheDocument();
    expect(screen.getByTestId("drawer-close")).toBeInTheDocument();
  });

  it("opens on trigger click and closes on overlay click, close click, and Escape", () => {
    const onOpenChange = vi.fn();
    render(
      <Drawer.Root onOpenChange={onOpenChange}>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Close>Close Drawer</Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>,
    );

    fireEvent.click(screen.getByTestId("drawer-trigger"));
    expect(onOpenChange).toHaveBeenCalledWith(true);

    fireEvent.click(screen.getByTestId("drawer-overlay"));
    expect(onOpenChange).toHaveBeenCalledWith(false);

    fireEvent.click(screen.getByTestId("drawer-trigger"));
    fireEvent.click(screen.getByTestId("drawer-close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);

    fireEvent.click(screen.getByTestId("drawer-trigger"));
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });


  it("applies custom className to components", () => {
    const { container } = render(
      <>
        <Drawer.Trigger className="custom-trigger">Trigger</Drawer.Trigger>
        <Drawer.Overlay className="custom-overlay" />
        <Drawer.Content className="custom-content" />
        <Drawer.Title className="custom-title">Title</Drawer.Title>
        <Drawer.Handle className="custom-handle" />
      </>,
    );

    expect(screen.getByTestId("drawer-trigger")).toHaveClass("custom-trigger");
    expect(screen.getByTestId("drawer-overlay")).toHaveClass("custom-overlay");
    expect(screen.getByTestId("drawer-content")).toHaveClass("custom-content");
    expect(screen.getByText("Title").closest("h4")).toHaveClass("custom-title");

    const handleElements = Array.from(container.querySelectorAll("div")).filter(
      (el) => el.className.includes("custom-handle"),
    );
    expect(handleElements[0]).toHaveClass("custom-handle");
  });

  it("calls custom onClick handlers and supports default Close children and controlled mode", () => {
    const handleTriggerClick = vi.fn();
    const handleOverlayClick = vi.fn();
    const handleCloseClick = vi.fn();
    const handleOpenChange = vi.fn();

    const { rerender } = render(
      <Drawer.Root open={false} onOpenChange={handleOpenChange}>
        <Drawer.Trigger onClick={handleTriggerClick}>Open</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay onClick={handleOverlayClick} />
          <Drawer.Content>
            <Drawer.Close onClick={handleCloseClick} />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>,
    );

    expect(screen.getByText("Close")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("drawer-trigger"));
    expect(handleTriggerClick).toHaveBeenCalled();
    expect(handleOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <Drawer.Root open={true} onOpenChange={handleOpenChange}>
        <Drawer.Trigger onClick={handleTriggerClick}>Open</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay onClick={handleOverlayClick} />
          <Drawer.Content>
            <Drawer.Close onClick={handleCloseClick} />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>,
    );

    fireEvent.click(screen.getByTestId("drawer-overlay"));
    expect(handleOverlayClick).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId("drawer-close"));
    expect(handleCloseClick).toHaveBeenCalled();
  });

  it("useDrawer default context function can be called safely", () => {
    let contextValue:
      | {
          open: boolean;
          setOpen: (open: boolean) => void;
          dragY: number;
          isDragging: boolean;
          onHandlePointerDown: (e: React.PointerEvent) => void;
        }
      | undefined;
    const TestComp = () => {
      contextValue = useDrawer();
      return null;
    };
    render(<TestComp />);
    expect(contextValue?.open).toBe(true);
    expect(contextValue?.dragY).toBe(0);
    expect(contextValue?.isDragging).toBe(false);
    expect(() => contextValue?.setOpen(false)).not.toThrow();
    expect(() =>
      contextValue?.onHandlePointerDown({} as React.PointerEvent),
    ).not.toThrow();
  });

  it("supports dragging handle to dismiss drawer", () => {
    const handleOpenChange = vi.fn();
    const handlePointerDown = vi.fn();

    render(
      <Drawer.Root open={true} onOpenChange={handleOpenChange}>
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Handle onPointerDown={handlePointerDown} />
            <p>Content</p>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>,
    );

    const handle = screen.getByTestId("drawer-handle");

    // Drag down slightly (< 100px) and release: should snap back without closing
    fireEvent.pointerDown(handle, { clientY: 100 });
    expect(handlePointerDown).toHaveBeenCalled();

    fireEvent(document, new Event("pointermove", { bubbles: true }));
    // Move with deltaY > 0
    const moveDownEvent = new Event("pointermove", { bubbles: true }) as any;
    moveDownEvent.clientY = 150;
    document.dispatchEvent(moveDownEvent);

    // Move with deltaY < 0 (rubber band damping)
    const moveUpEvent = new Event("pointermove", { bubbles: true }) as any;
    moveUpEvent.clientY = 80;
    document.dispatchEvent(moveUpEvent);

    // Release: does not close
    const upEvent = new Event("pointerup", { bubbles: true });
    document.dispatchEvent(upEvent);
    expect(handleOpenChange).not.toHaveBeenCalled();

    // Drag down significantly (> 100px) and release: should close
    fireEvent.pointerDown(handle, { clientY: 100 });
    const moveCloseEvent = new Event("pointermove", { bubbles: true }) as any;
    moveCloseEvent.clientY = 250;
    document.dispatchEvent(moveCloseEvent);

    document.dispatchEvent(new Event("pointerup", { bubbles: true }));
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it("does not start dragging if drawer is closed", () => {
    render(
      <Drawer.Root open={false}>
        <Drawer.Portal>
          <Drawer.Content>
            <Drawer.Handle />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>,
    );

    const handle = screen.getByTestId("drawer-handle");
    expect(() => {
      fireEvent.pointerDown(handle, { clientY: 100 });
    }).not.toThrow();
  });
});
