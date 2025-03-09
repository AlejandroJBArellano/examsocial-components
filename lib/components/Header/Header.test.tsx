import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "../Button";
import Menu from "../Menu/Menu";
import Header from "./Header";

// Mock the Logo component
vi.mock("@/Illustrations/logo", () => ({
  default: () => <div data-testid="mock-logo">Logo</div>,
}));

// Mock the Button component
vi.mock("../Button", () => ({
  Button: ({
    children,
    theme,
  }: {
    children: React.ReactNode;
    theme: string;
  }) => (
    <button data-testid="mock-button" data-theme={theme}>
      {children}
    </button>
  ),
}));

describe("Header", () => {
  test("renders correctly with default props", () => {
    render(<Header />);

    // Check if logo is rendered
    const logo = screen.getByTestId("mock-logo");
    expect(logo).toBeInTheDocument();

    // Check if button is rendered with default text and theme
    const button = screen.getByTestId("mock-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Get started");
    expect(button).toHaveAttribute("data-theme", "accent");
  });

  test("renders with custom button text", () => {
    render(
      <Header>
        <Button theme="accent">Sign Up</Button>
      </Header>,
    );

    const button = screen.getByTestId("mock-button");
    expect(button).toHaveTextContent("Sign Up");
  });

  test("renders with custom button theme", () => {
    render(
      <Header>
        <Button theme="primary">Login</Button>
      </Header>,
    );

    const button = screen.getByTestId("mock-button");
    expect(button).toHaveAttribute("data-theme", "primary");
  });

  test("does not render button when showButton is false", () => {
    render(
      <Header>
        <Menu items={[]} />
      </Header>,
    );

    // Logo should still be rendered
    const logo = screen.getByTestId("mock-logo");
    expect(logo).toBeInTheDocument();

    // Button should not be rendered
    const button = screen.queryByTestId("mock-button");
    expect(button).not.toBeInTheDocument();
  });

  test("renders with all custom props", () => {
    render(
      <Header>
        <Menu items={[]} />
      </Header>,
    );

    const button = screen.getByTestId("mock-button");
    expect(button).toHaveTextContent("Login");
    expect(button).toHaveAttribute("data-theme", "light");
  });
});
