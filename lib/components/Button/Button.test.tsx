import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("Button component", () => {
    it("should render with default theme", async () => {
        render(<Button />);
        const button = await screen.findByTestId("button");
        expect(button.className).toContain("bg-light");
    });

    it("should render with extra theme", () => {
        render(<Button theme="extra" />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("bg-extra");
    });

    it("should render with accent theme", () => {
        render(<Button theme="accent" />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("bg-accent");
    });

    it("should render with primary theme", () => {
        render(<Button theme="primary" />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("bg-primary");
    });

    it("should render with feedback-error theme", () => {
        render(<Button theme="feedback-error" />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("bg-feedback-error-tint");
    });

    it("should render with rounded class when rounded prop is true", () => {
        render(<Button rounded />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("rounded-full");
    });

    it("should render with default rounded class when rounded prop is false", () => {
        render(<Button rounded={false} />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("rounded-md");
    });

    it("should apply additional class names passed via props", () => {
        render(<Button className="extra-class" />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("extra-class");
    });
});