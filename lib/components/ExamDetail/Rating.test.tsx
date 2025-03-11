import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Rating from "./Rating";

describe("Rating component", () => {
  it("renders the rating count correctly", () => {
    render(<Rating count={4.5} />);
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("renders 'out of 5 stars' text", () => {
    render(<Rating count={4.5} />);
    expect(screen.getByText("out of 5 stars")).toBeInTheDocument();
  });

  it("includes the star icon", () => {
    render(<Rating count={4.5} />);
    // Since the Icon component might be mocked or not directly accessible,
    // we can check for the aria-hidden attribute which we added to the icon
    const iconContainer = screen.getByText("grade");
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveAttribute("aria-hidden", "true");
  });

  it("has the correct aria-label for accessibility", () => {
    render(<Rating count={4.5} />);
    const section = screen.getByLabelText("Rating: 4.5 out of 5");
    expect(section).toBeInTheDocument();
  });

  it("applies the correct styling classes", () => {
    const { container } = render(<Rating count={4.5} />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("space-y-5");
    expect(section).toHaveClass("rounded-lg");
    expect(section).toHaveClass("border");
    expect(section).toHaveClass("border-black");
    expect(section).toHaveClass("bg-extra-tint");
    expect(section).toHaveClass("p-8");
  });
});
