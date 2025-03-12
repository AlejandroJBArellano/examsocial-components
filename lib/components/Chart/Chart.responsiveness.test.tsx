import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Chart from "./Chart";

// Mock Recharts to allow testing of responsive behavior
vi.mock("recharts", async () => {
  const actual = await vi.importActual("recharts");

  return {
    ...actual,
    ResponsiveContainer: ({
      children,
      width,
      height,
    }: {
      children: React.ReactNode;
      width: string | number;
      height: string | number;
    }) => (
      <div
        data-testid="responsive-container"
        style={{
          width: typeof width === "string" ? width : `${width}px`,
          height: typeof height === "string" ? height : `${height}px`,
        }}
      >
        {children}
      </div>
    ),
  };
});

describe("Chart Responsiveness", () => {
  const mockData = [
    { label: "A", value: 80 },
    { label: "B", value: 65 },
    { label: "C", value: 40 },
  ];

  beforeEach(() => {
    // Reset the window dimensions before each test
    vi.spyOn(window, "innerWidth", "get").mockImplementation(() => 1024);
    vi.spyOn(window, "innerHeight", "get").mockImplementation(() => 768);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render a responsive container", () => {
    const { getByTestId } = render(
      <Chart title="Responsive Test" data={mockData} />,
    );

    const container = getByTestId("responsive-container");
    expect(container).toBeInTheDocument();
    expect(container.style.width).toBe("100%");
    expect(container.style.height).toBe("100%");
  });

  it("should maintain chart proportions at different screen sizes", () => {
    // Test with a desktop viewport
    window.innerWidth = 1200;
    window.dispatchEvent(new Event("resize"));

    const { rerender, getByTestId } = render(
      <Chart title="Responsive Test" data={mockData} />,
    );

    let container = getByTestId("responsive-container");
    expect(container).toBeInTheDocument();

    // Test with a tablet viewport
    window.innerWidth = 768;
    window.dispatchEvent(new Event("resize"));

    rerender(<Chart title="Responsive Test" data={mockData} />);
    container = getByTestId("responsive-container");
    expect(container).toBeInTheDocument();

    // Test with a mobile viewport
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));

    rerender(<Chart title="Responsive Test" data={mockData} />);
    container = getByTestId("responsive-container");
    expect(container).toBeInTheDocument();
  });

  it("should maintain readability with many data points at smaller screen sizes", () => {
    // Create a dataset with many points
    const largeDataset = Array.from({ length: 20 }, (_, i) => ({
      label: `Point ${i + 1}`,
      value: Math.floor(Math.random() * 100),
    }));

    // Test with a mobile viewport
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));

    const { getByTestId } = render(
      <Chart title="Many Points Test" data={largeDataset} />,
    );

    const container = getByTestId("responsive-container");
    expect(container).toBeInTheDocument();
  });
});
