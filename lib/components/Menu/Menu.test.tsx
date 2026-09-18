import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Menu from "./Menu";

describe("Menu component", () => {
  const items = [
    { href: "/home", children: "Home", icon: "home" },
    { href: "/settings", children: "Settings", icon: "settings" },
  ];

  it("renders closed by default", () => {
    render(<Menu items={items} />);
    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens menu when button is clicked", () => {
    render(<Menu items={items} />);
    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("closes when an item is clicked", () => {
    render(<Menu items={items} />);
    fireEvent.click(screen.getByRole("button"));

    const homeItem = screen.getByText("Home");
    fireEvent.click(homeItem);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes on Escape key press", () => {
    render(<Menu items={items} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes on outside click", () => {
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <Menu items={items} />
      </div>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
