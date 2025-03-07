import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MenuItemIcon } from "../MenuItem";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders correctly with default props", () => {
    const items = [
      {
        label: "Home",
        icon: "home" as MenuItemIcon,
        isSelected: true,
      },
      {
        label: "Library",
        icon: "bookmark" as MenuItemIcon,
      },
    ];

    render(<Navbar items={items} />);

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();

    // Verificar que se renderizan los elementos de navegación
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems).toHaveLength(2);

    // Verificar que el primer elemento está seleccionado
    expect(menuItems[0]).toHaveAttribute("data-selected", "true");
  });

  test("renders with profile component", () => {
    const items = [
      {
        label: "Home",
        icon: "home" as MenuItemIcon,
      },
    ];

    const ProfileComponent = () => <div data-testid="profile">Profile</div>;

    render(<Navbar items={items} profileComponent={<ProfileComponent />} />);

    const profileElement = screen.getByTestId("profile");
    expect(profileElement).toBeInTheDocument();
  });

  test("renders CTA items correctly", () => {
    const items = [
      {
        label: "Home",
        icon: "home" as MenuItemIcon,
      },
      {
        label: "Create",
        icon: "list_alt_add" as MenuItemIcon,
        isCTA: true,
      },
    ];

    render(<Navbar items={items} />);

    const menuItems = screen.getAllByTestId("menu-item");

    // Verificar que el segundo elemento es un CTA
    expect(menuItems[1]).toHaveAttribute("data-content", "cta");
  });

  test("calls onClick handler when menu item is clicked", () => {
    const handleClick = vi.fn();
    const items = [
      {
        label: "Home",
        icon: "home" as MenuItemIcon,
        onClick: handleClick,
      },
    ];

    render(<Navbar items={items} />);

    const menuItem = screen.getByTestId("menu-item");
    menuItem.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom className", () => {
    const items = [
      {
        label: "Home",
        icon: "home" as MenuItemIcon,
      },
    ];

    render(<Navbar items={items} className="custom-class" />);

    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("custom-class");
  });
});
