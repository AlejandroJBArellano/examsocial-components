import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  const items = [
    { href: "/dashboard", children: "Dashboard", icon: "dashboard", isSelected: true },
    { href: "/exams", children: "Exams", icon: "quiz" },
  ];

  it("renders navigation items and custom button children", () => {
    render(
      <Navbar items={items}>
        <span>Custom Action</span>
      </Navbar>,
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Exams")).toBeInTheDocument();
    expect(screen.getByText("Custom Action")).toBeInTheDocument();
  });

  it("renders with profileInfo when provided", () => {
    const { container } = render(
      <Navbar
        items={items}
        profileInfo={{
          gender: "female",
          name: "Jane Doe",
          href: "/profile",
        }}
      />,
    );

    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.queryByText("Custom Action")).not.toBeInTheDocument();
  });
});
