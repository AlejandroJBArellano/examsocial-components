import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
    it("renders without crashing", () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeDefined();
    });

    it("applies the correct classes when checked", () => {
        render(<Checkbox checked />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox.className).toContain("data-[state=checked]:bg-primary");
    });

    it("applies the correct classes when disabled", () => {
        render(<Checkbox disabled />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox.className).toContain("disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-200 disabled:text-zinc-800 disabled:hover:shadow-none");
    });

    it("toggles check state on click", async () => {
        const user = userEvent.setup()
        render(<Checkbox />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox.getAttribute("aria-checked")).not.toBe("true");
        await user.click(checkbox);
        expect(checkbox.getAttribute("aria-checked")).toBe("true");
    });

    it("does not toggle check state when disabled", async () => {
        const user = userEvent.setup()
        render(<Checkbox disabled />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox.getAttribute("data-disabled")).toBeDefined();
        await user.click(checkbox);
        expect(checkbox.getAttribute("data-checked")).not.toBe("true");
    });
});