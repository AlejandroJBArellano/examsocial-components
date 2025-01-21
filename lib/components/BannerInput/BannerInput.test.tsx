import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import BannerInput from "./BannerInput";

describe("BannerInput component", () => {
    it("renders the input element with hidden class", () => {
        render(<BannerInput />);
        const inputElement = screen.getByLabelText(/banner/i);
        expect(inputElement.className).toContain("hidden");
    });

    it("displays the PhotoIcon", () => {
        render(<BannerInput />);
        const iconElement = screen.getByTestId("PhotoIcon");
        expect(iconElement).toBeDefined();
    });

    it("calls onChange when a file is selected", () => {
        render(<BannerInput />);
        const inputElement = screen.getByLabelText(/banner/i);
        const file = new File(["dummy content"], "example.png", { type: "image/png" });

        userEvent.upload(inputElement, file);

        expect(console.log).toHaveBeenCalledWith([file]);
    });
});