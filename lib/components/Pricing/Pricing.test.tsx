import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Pricing from "./Pricing";

describe("Pricing Component", () => {
  it("renders correctly with default mode", () => {
    render(<Pricing>Test Content</Pricing>);
    const container = screen.getByText("Test Content");
    expect(container.className).toContain("rounded-t-xl border-x border-t");
  });

  it("renders correctly with monthly mode", () => {
    render(<Pricing mode="monthly">Test Content</Pricing>);
    const container = screen.getByText("Test Content");
    expect(container.className).toContain("bg-secondary-tint text-secondary");
  });

  it("renders correctly with yearly mode", () => {
    render(<Pricing mode="yearly">Test Content</Pricing>);
    const container = screen.getByText("Test Content");
    expect(container.className).toContain("bg-accent-tint text-accent");
  });

  it("renders correctly with lifetime mode", () => {
    render(<Pricing mode="lifetime">Test Content</Pricing>);
    const container = screen.getByText("Test Content");
    expect(container.className).toContain("rounded-b-xl border-x border-b");
  });

  it("renders Pricing.Header correctly", () => {
    render(<Pricing.Header>Header Content</Pricing.Header>);
    const header = screen.getByText("Header Content");
    expect(header).toBeDefined();
  });

  it("renders Pricing.Period correctly", () => {
    render(<Pricing.Period>Period Content</Pricing.Period>);
    const period = screen.getByText("Period Content");
    expect(period).toBeDefined();
  });

  it("renders Pricing.Title correctly", () => {
    render(<Pricing.Title>Title Content</Pricing.Title>);
    const title = screen.getByText("Title Content");
    expect(title).toBeDefined();
  });

  it("renders Pricing.Price correctly", () => {
    render(<Pricing.Price>Price Content</Pricing.Price>);
    const price = screen.getByText("Price Content");
    expect(price).toBeDefined();
  });

  it("renders Pricing.Comparison correctly", () => {
    render(<Pricing.Comparison>Comparison Content</Pricing.Comparison>);
    const comparison = screen.getByText("Comparison Content");
    expect(comparison).toBeDefined();
  });

  it("renders Pricing.Feature correctly with default icon", () => {
    render(<Pricing.Feature>Feature Content</Pricing.Feature>);
    const container = screen.getByText("Feature Content");
    expect(container.querySelector("span")?.innerHTML).toBe("check_circle");
  });

  it("renders Pricing.Feature correctly with special icon", () => {
    render(<Pricing.Feature special>Feature Content</Pricing.Feature>);
    const container = screen.getByText("Feature Content");
    expect(container.querySelector("span")?.innerHTML).toBe("new_releases");
  });

  it("renders Pricing.Explanation correctly", () => {
    render(
      <Pricing.Explanation>Save 20% with annual billing</Pricing.Explanation>,
    );
    const explanation = screen.getByText("Save 20% with annual billing");
    expect(explanation).toBeDefined();
    expect(explanation.className).toContain("text-sm");
  });

  it("renders Pricing.Container correctly", () => {
    render(<Pricing.Container>Price content with period</Pricing.Container>);
    const container = screen.getByText("Price content with period");
    expect(container).toBeDefined();
    expect(container.className).toContain("flex items-baseline");
  });

  it("renders Pricing.ComparisonCellWrapper when includes is true", () => {
    render(<Pricing.ComparisonCellWrapper includes={true} />);
    const element = document.querySelector(".bg-feedback-success");
    expect(element).toBeDefined();
  });

  it("renders Pricing.ComparisonCellWrapper when includes is false", () => {
    render(<Pricing.ComparisonCellWrapper includes={false} />);
    const element = document.querySelector(".bg-gray-500");
    expect(element).toBeDefined();
  });

  it("renders Pricing.FeatureRow correctly", () => {
    render(
      <Pricing.FeatureRow feature="Test Feature" includes={[true, false, true]}>
        Feature description
      </Pricing.FeatureRow>,
    );

    const featureText = screen.getByText("Test Feature");
    expect(featureText).toBeDefined();

    const description = screen.getByText("Feature description");
    expect(description).toBeDefined();

    // Should have correct number of ComparisonCellWrapper elements
    const cellWrappers = document.querySelectorAll(
      "article > div:last-child > *",
    );
    expect(cellWrappers.length).toBe(3);

    // Check if first and third are success (green) and middle is gray
    const successCells = document.querySelectorAll(".bg-feedback-success");
    const grayCells = document.querySelectorAll(".bg-gray-500");
    expect(successCells.length).toBe(2);
    expect(grayCells.length).toBe(1);
  });

  it("renders Pricing.FeatureRow without children", () => {
    render(
      <Pricing.FeatureRow feature="Simple Feature" includes={[true, true]} />,
    );

    const featureText = screen.getByText("Simple Feature");
    expect(featureText).toBeDefined();

    // Should have correct number of ComparisonCellWrapper elements
    const cellWrappers = document.querySelectorAll(
      "article > div:last-child > *",
    );
    expect(cellWrappers.length).toBe(2);
  });
});
