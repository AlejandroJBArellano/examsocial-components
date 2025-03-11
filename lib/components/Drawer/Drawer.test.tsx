import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Drawer } from "./Drawer";

// Mock Vaul since it uses Portal and animations that don't work well in tests
vi.mock("vaul", () => {
  return {
    Drawer: {
      Root: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="drawer-root">{children}</div>
      ),
      Trigger: ({
        children,
        className,
        ...props
      }: {
        children: React.ReactNode;
        className?: string;
        [key: string]: unknown;
      }) => (
        <button data-testid="drawer-trigger" className={className} {...props}>
          {children}
        </button>
      ),
      Content: ({
        children,
        className,
        ...props
      }: {
        children: React.ReactNode;
        className?: string;
        [key: string]: unknown;
      }) => (
        <div data-testid="drawer-content" className={className} {...props}>
          {children}
        </div>
      ),
      Overlay: ({
        className,
        ...props
      }: {
        className?: string;
        [key: string]: unknown;
      }) => (
        <div data-testid="drawer-overlay" className={className} {...props} />
      ),
      Portal: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="drawer-portal">{children}</div>
      ),
      Close: ({
        children,
        ...props
      }: {
        children?: React.ReactNode;
        [key: string]: unknown;
      }) => (
        <button data-testid="drawer-close" {...props}>
          {children || "Close"}
        </button>
      ),
    },
  };
});

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
    expect(trigger.className).toContain("bg-white");
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
    render(<Drawer.Handle />);

    const handle = screen.getByRole("presentation", { hidden: true });
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
  });

  it("applies custom className to components", () => {
    render(
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
    expect(screen.getByRole("presentation", { hidden: true })).toHaveClass(
      "custom-handle",
    );
  });
});
