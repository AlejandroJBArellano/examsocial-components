import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders svg loader correctly", () => {
    const { container } = render(<Loader data-testid="svg-loader" className="animate-spin" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("animate-spin");
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  });
});
