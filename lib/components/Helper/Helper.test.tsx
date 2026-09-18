import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Helper from "./Helper";

describe("Helper component", () => {
  it("renders help trigger button", () => {
    render(<Helper>Helpful information</Helper>);
    expect(screen.getByRole("button", { name: "Ayuda" })).toBeInTheDocument();
    expect(screen.getByText("help")).toBeInTheDocument();
  });

  it("shows tooltip content on hover", async () => {
    render(<Helper>Helpful information</Helper>);
    const trigger = screen.getByRole("button", { name: "Ayuda" });
    fireEvent.mouseEnter(trigger);
    expect(screen.getByText("Helpful information")).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Helper disabled>Helpful information</Helper>);
    const trigger = screen.getByRole("button", { name: "Ayuda" });
    expect(trigger).toBeDisabled();
    expect(trigger.className).toContain("pointer-events-none");
  });
});
