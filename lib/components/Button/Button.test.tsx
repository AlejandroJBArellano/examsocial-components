import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("Button component", () => {
  it("should render with default theme", async () => {
    render(<Button />);
    const button = await screen.findByTestId("button");
    expect(button.className).toContain("bg-light");
  });

  it("should render with extra theme", () => {
    render(<Button theme="extra" />);
    const button = screen.getByTestId("button");
    expect(button.className).toContain("bg-extra");
  });

  it("should render with accent theme", () => {
    render(<Button theme="accent" />);
    const button = screen.getByTestId("button");
    expect(button.className).toContain("bg-accent");
  });

  it("should render with primary theme", () => {
    render(<Button theme="primary" />);
    const button = screen.getByTestId("button");
    expect(button.className).toContain("bg-primary");
  });

  it("should render with feedback-error theme", () => {
    render(<Button theme="feedback-error" />);
    const button = screen.getByTestId("button");
    expect(button.className).toContain("bg-feedback-error-tint");
  });

  it("should render with rounded class when rounded prop is true", () => {
    render(<Button rounded />);
    const button = screen.getByTestId("button");
    expect(button.className).toContain("rounded-full");
  });

  it("should render with default rounded class when rounded prop is false", () => {
    render(<Button rounded={false} />);
    const button = screen.getByTestId("button");
    expect(button.className).toContain("rounded-md");
  });

  it("should apply additional class names passed via props", () => {
    render(<Button className="extra-class" />);
    const button = screen.getByTestId("button");
    expect(button.className).toContain("extra-class");
  });

  describe("Button.Icon", () => {
    it("renders with specified icon and size", () => {
      render(<Button.Icon size={24} filled>favorite</Button.Icon>);
      expect(screen.getByText("favorite")).toBeInTheDocument();
    });
  });

  describe("Button.Action", () => {
    it("renders unselected action button with tooltip", () => {
      render(<Button.Action name="bookmark">Save Item</Button.Action>);
      const btn = screen.getByTestId("favorite-button");
      expect(btn).toBeInTheDocument();
      expect(screen.getByText("bookmark")).toBeInTheDocument();
      expect(screen.getByText("Save Item")).toBeInTheDocument();
    });

    it("renders selected action button with selected styling", () => {
      render(<Button.Action selected name="bookmark">Saved</Button.Action>);
      const btn = screen.getByTestId("favorite-button");
      expect(btn.className).toContain("border-accent-shadow");
    });
  });

  describe("Button.Index", () => {
    it("renders with status done", () => {
      render(<Button.Index index={1} status="done" />);
      const btn = screen.getByTestId("index-button");
      expect(btn.className).toContain("bg-extra");
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("renders with status current", () => {
      render(<Button.Index index={2} status="current" />);
      const btn = screen.getByTestId("index-button");
      expect(btn.className).toContain("bg-primary");
      expect(screen.getByText("2")).toBeInTheDocument();
    });

    it("renders with status pending", () => {
      render(<Button.Index index={3} status="pending" />);
      const btn = screen.getByTestId("index-button");
      expect(btn.className).toContain("bg-light");
      expect(screen.getByText("3")).toBeInTheDocument();
    });
  });
});