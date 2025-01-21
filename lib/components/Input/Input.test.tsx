import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Input from "./Input";

describe("Input component", () => {
    it("renders without crashing", () => {
        render(<Input />);
        const inputElement = screen.getByTestId("input");
        expect(inputElement).toBeDefined();
    });

    it("renders with LeftIcon", () => {
        render(<Input LeftIcon={<span>Left Icon</span>} />);
        const leftIconElement = screen.getByTestId("left-icon");
        expect(leftIconElement).toBeDefined();
    });

    it("renders with RightIcon", () => {
        render(<Input RightIcon={<span>Right Icon</span>} />);
        const rightIconElement = screen.getByTestId("right-icon");
        expect(rightIconElement).toBeDefined();
    });

    it("applies error styles when error prop is true", () => {
        render(<Input error />);
        const inputElement = screen.getByTestId("input");
        expect(inputElement.className).toContain("border-feedback-error");
    });

    it("does not apply error styles when error prop is false", () => {
        render(<Input error={false} />);
        const inputElement = screen.getByTestId("input");
        expect(inputElement.className).not.toContain("border-feedback-error");
    });

    it("calls onChange handler when input value changes", () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);
        const inputElement = screen.getByTestId("input");
        userEvent.type(inputElement, "test");
        expect(handleChange).toHaveBeenCalled();
    });
});