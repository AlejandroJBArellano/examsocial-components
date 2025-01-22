import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Switch from "./Switch";

describe("Switch component", () => {
    it("renders correctly", () => {
        render(<Switch />);
        const switchElement = screen.getByRole("switch");
        expect(switchElement).toBeDefined();
    });

    it("toggles state on click", () => {
        render(<Switch />);
        const switchElement = screen.getByRole("switch");

        // Initial state
        expect(switchElement.getAttribute("data-state")).not.toBe("checked");

        // Click to toggle on
        fireEvent.click(switchElement);
        expect(switchElement.getAttribute("data-state")).toBe("checked");

        // Click to toggle off
        fireEvent.click(switchElement);
        expect(switchElement.getAttribute("data-state")).not.toBe("checked");
    });

    it("applies custom class names", () => {
        const customClass = "custom-class";
        render(<Switch className={customClass} />);
        const switchElement = screen.getByRole("switch");
        expect(switchElement.className).toContain(customClass);
    });
});