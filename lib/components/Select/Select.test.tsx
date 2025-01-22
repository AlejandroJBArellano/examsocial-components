import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from "vitest";
import Select from "./Select";

describe("Select Component", () => {
    it("renders the Select component with the provided text", async () => {
        render(<Select text="Select an option" />);
        const button = await screen.findByText("Select an option");
        expect(button).toBeDefined();
    });

    it("toggles the dropdown menu when the button is clicked", async () => {
        const user = userEvent.setup()
        render(
            <Select text="Select an option">
                <Select.Option>Option 1</Select.Option>
                <Select.Option>Option 2</Select.Option>
            </Select>
        );

        const button = await screen.findByTestId("trigger");
        await user.click(button);

        const options = screen.getAllByRole('menuitemcheckbox');

        expect(options.length).toBe(2);
    });
});