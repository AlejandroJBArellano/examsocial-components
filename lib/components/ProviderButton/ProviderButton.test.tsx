import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProviderButton } from ".";

// Mock del componente FocusSpan
vi.mock("../FontFaces/Spans", () => ({
  FocusSpan: ({ children }: { children: React.ReactNode }) => (
    <span data-testid="focus-span">{children}</span>
  ),
}));

describe("ProviderButton", () => {
  it("renders correctly with default props", () => {
    render(<ProviderButton provider="facebook" />);
    expect(screen.getByText("Sign In with Facebook")).toBeInTheDocument();
  });

  it("renders with custom text", () => {
    render(<ProviderButton provider="google" text="Continue with Google" />);
    expect(screen.getByText("Continue with Google")).toBeInTheDocument();
  });

  it("applies provider-specific styles", () => {
    render(<ProviderButton provider="facebook" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-[#1877F2]");
    expect(button).toHaveClass("text-white");
  });

  it("applies rounded corners of 10px", () => {
    render(<ProviderButton provider="facebook" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("rounded-[10px]");
  });

  it("does not have a border", () => {
    render(<ProviderButton provider="facebook" />);
    const button = screen.getByRole("button");
    expect(button).not.toHaveClass("border-2");
    expect(button).not.toHaveClass("border-black");
  });

  it("applies size-specific styles", () => {
    render(<ProviderButton provider="facebook" size="large" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-14");
    expect(button).toHaveClass("px-4");
    expect(button).toHaveClass("py-4");
    expect(button).toHaveClass("text-lg");
  });

  it("applies responsive styles for xl breakpoint", () => {
    render(<ProviderButton provider="facebook" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("xl:p-4");
    expect(button).toHaveClass("xl:h-14");
    expect(button).toHaveClass("xl:gap-3");
  });

  it("uses FocusSpan for button text", () => {
    render(<ProviderButton provider="facebook" />);
    const focusSpan = screen.getByTestId("focus-span");
    expect(focusSpan).toBeInTheDocument();
    expect(focusSpan).toHaveTextContent("Sign In with Facebook");
  });

  it("applies custom className", () => {
    render(<ProviderButton provider="facebook" className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("passes through HTML button attributes", () => {
    render(
      <ProviderButton
        provider="facebook"
        aria-label="Sign in with Facebook"
        data-testid="facebook-button"
      />,
    );
    const button = screen.getByTestId("facebook-button");
    expect(button).toHaveAttribute("aria-label", "Sign in with Facebook");
  });

  it("renders all provider types correctly", () => {
    const { unmount } = render(<ProviderButton provider="facebook" />);
    expect(screen.getByText("Sign In with Facebook")).toBeInTheDocument();
    unmount();

    render(<ProviderButton provider="google" />);
    expect(screen.getByText("Sign In with Google")).toBeInTheDocument();
    unmount();

    render(<ProviderButton provider="apple" />);
    expect(screen.getByText("Sign In with Apple")).toBeInTheDocument();
    unmount();

    render(<ProviderButton provider="x" />);
    expect(screen.getByText("Sign In with X")).toBeInTheDocument();
    unmount();

    render(<ProviderButton provider="reddit" />);
    expect(screen.getByText("Sign In with Reddit")).toBeInTheDocument();
  });
});
