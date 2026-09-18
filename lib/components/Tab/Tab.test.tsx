import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tab from "./Tab";

describe("Tab component", () => {
  it("renders unselected primary tab", () => {
    const { container } = render(<Tab>Tab 1</Tab>);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("hover:bg-primary-tint");
  });

  it("renders selected primary tab", () => {
    const { container } = render(<Tab selected>Tab 1</Tab>);
    expect(container.firstChild).toHaveClass("bg-primary");
  });

  it("renders unselected secondary tab", () => {
    const { container } = render(<Tab theme="secondary">Tab 2</Tab>);
    expect(container.firstChild).toHaveClass("hover:bg-secondary-tint");
  });

  it("renders selected secondary tab", () => {
    const { container } = render(<Tab selected theme="secondary">Tab 2</Tab>);
    expect(container.firstChild).toHaveClass("bg-secondary");
  });
});
