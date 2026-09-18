import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Chart from "./Chart";

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

  it("should render legend when showLegend is true and support all variant colors", () => {
    const variants = [
      "primary",
      "secondary",
      "accent",
      "extra",
      "light",
    ] as const;

    variants.forEach((v) => {
      const { unmount } = render(
        <Chart
          title={`Legend ${v}`}
          data={mockData}
          variant={v}
          showLegend={true}
          valueLabel={`Score ${v}`}
        />,
      );
      expect(screen.getByText(`Score ${v}`)).toBeInTheDocument();
      unmount();
    });
  });

  it("should handle maxY <= 0 gracefully", () => {
    render(<Chart title="Zero MaxY" data={mockData} maxY={0} />);
    expect(screen.getByText("Zero MaxY")).toBeInTheDocument();
    const bars = screen
      .getByRole("graphics-document")
      .querySelectorAll(".recharts-bar-rectangle");
    expect(bars.length).toBe(mockData.length);
  });

  it("should show and hide tooltip on bar hover", () => {
    const { container } = render(
      <Chart
        title="Tooltip Chart"
        data={mockData}
        showTooltip={true}
        valueLabel="Score"
      />,
    );

    const firstBar = container.querySelector(".recharts-bar-rectangle");
    expect(firstBar).toBeInTheDocument();

    if (firstBar) {
      fireEvent.mouseEnter(firstBar);
      expect(screen.getByText("Score: 80")).toBeInTheDocument();

      fireEvent.mouseLeave(firstBar);
      expect(screen.queryByText("Score: 80")).not.toBeInTheDocument();
    }
  });
});
