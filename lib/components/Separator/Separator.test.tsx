import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Separator from "./Separator";

describe("Separator component", () => {
  it("renders without children", () => {
    const { container } = render(<Separator />);
    expect(container.querySelector(".bg-black")).toBeInTheDocument();
  });

  it("renders with children label", () => {
    render(<Separator>OR</Separator>);
    expect(screen.getByText("OR")).toBeInTheDocument();
  });
});
