import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import AnswerToggle from "./AnswerToggle";

describe("AnswerToggle", () => {
    it("renders without crashing", () => {
        render(<AnswerToggle />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeDefined();
    });

    it("applies the correct classes based on state", () => {
        render(<AnswerToggle />);
        const checkbox = screen.getByRole("checkbox");

        // Initial unchecked state
        expect(checkbox.className).toContain("data-[state=unchecked]:shadow-black");

        // Check the checkbox
        userEvent.click(checkbox);
        expect(checkbox.className).toContain("data-[state=checked]:border-feedback-success");
        expect(checkbox.className).toContain("data-[state=checked]:bg-feedback-success-tint");
        expect(checkbox.className).toContain("data-[state=checked]:text-feedback-success");
        expect(checkbox.className).toContain("data-[state=checked]:shadow-feedback-success");
    });

    it("renders the CheckIcon when checked", async() => {
        render(<AnswerToggle />);
        const checkbox = screen.getByRole("checkbox");

        // Check the checkbox
        userEvent.click(checkbox);
        const checkIcon = await screen.findByTestId("CheckIcon");
        expect(checkIcon).toBeDefined();
    });
});