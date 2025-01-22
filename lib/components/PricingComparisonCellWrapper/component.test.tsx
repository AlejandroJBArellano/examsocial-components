import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PricingComparisonCell from "./component";

describe("PricingComparisonCell", () => {
    it("renders CheckCircleIcon when contains is true", () => {
        render(<PricingComparisonCell contains={true} />);
        const container = screen.queryByTestId("CheckCircleIcon");
        expect(container).toBeDefined();
        expect(container?.className).toContain("text-feedback-success");
    });

    it("renders DoNotDisturbOnIcon when contains is false", () => {
        render(<PricingComparisonCell contains={false} />);
        const container = screen.queryByTestId("DoNotDisturbOnIcon");
        expect(container).toBeDefined();
        expect(container?.className).toContain("text-zinc-500");
    });

    it("renders DoNotDisturbOnIcon when contains is undefined", () => {
        render(<PricingComparisonCell />);
        const container = screen.queryByTestId("DoNotDisturbOnIcon");
        expect(container).toBeDefined();
        expect(container?.className).toContain("text-zinc-500");
    });
});