import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Back from "./Back";

describe("Back component", () => {
  it("should render with an arrow icon", () => {
    render(<Back>Go Back</Back>);
    const icon = screen.getByText("arrow_back");
    expect(icon).toBeInTheDocument();
  });

  it("should render with the provided children text", () => {
    render(<Back>Go Back</Back>);
    const text = screen.getByText("Go Back");
    expect(text).toBeInTheDocument();
  });

  it("should have the correct styling classes", () => {
    render(<Back>Go Back</Back>);
    const link = screen.getByRole("link");
    expect(link.className).toContain("inline-flex");
    expect(link.className).toContain("items-center");
    expect(link.className).toContain("justify-start");
    expect(link.className).toContain("gap-1");
    expect(link.className).toContain("self-stretch");
  });

  it("should render the icon with the correct size", () => {
    render(<Back>Go Back</Back>);
    const icon = screen.getByText("arrow_back");
    expect(icon.style.fontSize).toBe("24px");
  });
});
