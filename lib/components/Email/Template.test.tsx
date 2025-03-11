import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import EmailTemplate from "./Template";

// Mock the react-email components to avoid issues with testing
vi.mock("@react-email/components", () => {
  return {
    Text: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => (
      <div data-testid="text-component" className={className}>
        {children}
      </div>
    ),
    Html: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="html-component">{children}</div>
    ),
    Head: () => <div data-testid="head-component" />,
    Body: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => (
      <div data-testid="body-component" className={className}>
        {children}
      </div>
    ),
    Section: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => (
      <div data-testid="section-component" className={className}>
        {children}
      </div>
    ),
    Tailwind: ({
      children,
      config,
    }: {
      children: React.ReactNode;
      config: Record<string, unknown>;
    }) => (
      <div
        data-testid="tailwind-component"
        data-config={JSON.stringify(config)}
      >
        {children}
      </div>
    ),
  };
});

describe("EmailTemplate component", () => {
  it("should render the email template", () => {
    render(<EmailTemplate />);
    expect(screen.getByTestId("html-component")).toBeInTheDocument();
    expect(screen.getByTestId("head-component")).toBeInTheDocument();
    expect(screen.getByTestId("tailwind-component")).toBeInTheDocument();
    expect(screen.getByTestId("body-component")).toBeInTheDocument();
  });

  it("should contain ExamSocial branding text", () => {
    render(<EmailTemplate />);
    const textComponents = screen.getAllByTestId("text-component");
    const brandingText = textComponents.find(
      (component) => component.textContent === "ExamSocial",
    );
    expect(brandingText).toBeDefined();
  });

  it("should render the email sections", () => {
    render(<EmailTemplate />);
    const sections = screen.getAllByTestId("section-component");
    expect(sections.length).toBeGreaterThanOrEqual(2); // Header and footer sections
  });

  it("should have tailwind configuration with custom theme", () => {
    render(<EmailTemplate />);
    const tailwindComponent = screen.getByTestId("tailwind-component");
    expect(tailwindComponent).toBeInTheDocument();
  });

  it("should have a body with spacing classes", () => {
    render(<EmailTemplate />);
    const bodyComponent = screen.getByTestId("body-component");
    expect(bodyComponent.className).toContain("space-y-6");
  });

  it("should render the header section with branding", () => {
    render(<EmailTemplate />);
    const sections = screen.getAllByTestId("section-component");
    const headerSection = sections[0];

    expect(headerSection.className).toContain("bg-primary-tint");
    expect(headerSection.className).toContain("text-primary-shadow");
  });

  it("should render the footer section with disclaimer text", () => {
    render(<EmailTemplate />);
    const sections = screen.getAllByTestId("section-component");
    const footerSection = sections[1];

    expect(footerSection.className).toContain("bg-extra-tint");
    expect(footerSection.textContent).toContain("Recibiste este correo");
  });
});
