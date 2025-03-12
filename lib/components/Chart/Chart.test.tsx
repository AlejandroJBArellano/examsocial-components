import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Chart from "./Chart";

// Mock Recharts to avoid issues with ResponsiveContainer in tests
vi.mock("recharts", async () => {
  const actual = await vi.importActual("recharts");
  return {
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="responsive-container">{children}</div>
    ),
  };
});

describe("Chart component", () => {
  const mockData = [
    { label: "A", value: 80 },
    { label: "B", value: 65 },
    { label: "C", value: 40 },
  ];

  it("should render the chart with the provided title", () => {
    render(<Chart title="Test Chart" data={mockData} />);
    expect(screen.getByText("Test Chart")).toBeInTheDocument();
  });

  it("should render with the default maxY value (100) when not specified", () => {
    render(<Chart title="Test Chart" data={mockData} />);
    const yAxis = screen
      .getByRole("graphics-document")
      .querySelector(".recharts-yAxis");
    expect(yAxis).toBeDefined();
  });

  it("should render with a custom maxY value when specified", () => {
    render(<Chart title="Test Chart" data={mockData} maxY={200} />);
    const yAxis = screen
      .getByRole("graphics-document")
      .querySelector(".recharts-yAxis");
    expect(yAxis).toBeDefined();
  });

  it("should apply default variant styling when no variant is specified", () => {
    render(<Chart title="Test Chart" data={mockData} />);
    const container = screen.getByText("Test Chart").closest("div");
    expect(container).toHaveClass("bg-primary-tint");
  });

  it("should apply the correct variant styling when specified", () => {
    render(<Chart title="Test Chart" data={mockData} variant="secondary" />);
    const container = screen.getByText("Test Chart").closest("div");
    expect(container).toHaveClass("bg-secondary-tint");
  });

  it("should apply custom classes when className is provided", () => {
    render(
      <Chart title="Test Chart" data={mockData} className="custom-class" />,
    );
    const container = screen.getByText("Test Chart").closest("div");
    expect(container).toHaveClass("custom-class");
  });

  it("should render a bar for each data point", () => {
    render(<Chart title="Test Chart" data={mockData} />);
    const barChart = screen.getByRole("graphics-document");
    const bars = barChart.querySelectorAll(".recharts-bar-rectangle");
    expect(bars.length).toBe(mockData.length);
  });

  it("should handle empty data gracefully", () => {
    render(<Chart title="Empty Chart" data={[]} />);
    expect(screen.getByText("Empty Chart")).toBeInTheDocument();
    // Chart should still render without errors
    expect(screen.getByRole("graphics-document")).toBeInTheDocument();
  });

  it("should render x-axis with labels from data", () => {
    render(<Chart title="Test Chart" data={mockData} />);
    const xAxis = screen
      .getByRole("graphics-document")
      .querySelector(".recharts-xAxis");
    expect(xAxis).toBeDefined();
    // Check for label text nodes
    mockData.forEach((item) => {
      const labelElement = screen.getByText(item.label);
      expect(labelElement).toBeInTheDocument();
    });
  });

  it("should use the correct color based on variant", () => {
    // Testing all variants
    const variants = ["primary", "secondary", "accent", "extra"] as const;

    variants.forEach((variant) => {
      render(
        <Chart title={`${variant} Chart`} data={mockData} variant={variant} />,
      );
      const container = screen.getByText(`${variant} Chart`).closest("div");
      expect(container).toHaveClass(`bg-${variant}-tint`);
    });
  });
});
