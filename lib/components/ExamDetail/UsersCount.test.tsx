import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UsersCount from "./UsersCount";

describe("UsersCount component", () => {
  it("renders the count correctly", () => {
    render(<UsersCount count={289} />);
    expect(screen.getByText("289")).toBeInTheDocument();
  });

  it("renders 'exams taken' text", () => {
    render(<UsersCount count={289} />);
    expect(screen.getByText("exams taken")).toBeInTheDocument();
  });

  it("includes the person_check icon", () => {
    render(<UsersCount count={289} />);
    // Since the Icon component might be mocked or not directly accessible,
    // we can check for the aria-hidden attribute which we added to the icon
    const iconContainer = screen.getByText("person_check");
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveAttribute("aria-hidden", "true");
  });

  it("has the correct aria-label for accessibility", () => {
    render(<UsersCount count={289} />);
    const section = screen.getByLabelText("289 exams taken");
    expect(section).toBeInTheDocument();
  });

  it("applies the correct styling classes", () => {
    const { container } = render(<UsersCount count={289} />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("space-y-5");
    expect(section).toHaveClass("rounded-lg");
    expect(section).toHaveClass("border");
    expect(section).toHaveClass("border-primary-shadow");
    expect(section).toHaveClass("bg-primary-tint");
    expect(section).toHaveClass("p-8");
  });
});
