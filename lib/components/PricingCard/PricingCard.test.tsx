import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Pricing from "./PricingCard";

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

    it("renders Pricing.ComparisonCell correctly with default icon", () => {
        render(<Pricing.ComparisonCell>Cell Content</Pricing.ComparisonCell>);
        const container = screen.getByText("Cell Content");
        console.log(container.innerHTML);
        expect(container.querySelector("span")?.innerHTML).toBe( "check_circle");
    });

    it("renders Pricing.ComparisonCell correctly with special icon", () => {
        render(<Pricing.ComparisonCell special>Cell Content</Pricing.ComparisonCell>);
        const container = screen.getByText("Cell Content");
        expect(container.querySelector("span")?.innerHTML).toBe("new_releases");
    });
});