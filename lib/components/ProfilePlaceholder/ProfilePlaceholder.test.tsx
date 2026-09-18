import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProfilePlaceholder from "./ProfilePlaceholder";

describe("ProfilePlaceholder component", () => {
  it("renders male unfilled", () => {
    const { container } = render(<ProfilePlaceholder gender="male" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders male filled", () => {
    const { container } = render(<ProfilePlaceholder gender="male" filled />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders female unfilled", () => {
    const { container } = render(<ProfilePlaceholder gender="female" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders female filled", () => {
    const { container } = render(<ProfilePlaceholder gender="female" filled />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
