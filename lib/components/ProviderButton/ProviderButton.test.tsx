import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProviderButton } from ".";

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

  it("applies size-specific styles", () => {
    render(<ProviderButton provider="facebook" size="large" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-14");
    expect(button).toHaveClass("px-4");
    expect(button).toHaveClass("py-4");
    expect(button).toHaveClass("text-lg");
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
