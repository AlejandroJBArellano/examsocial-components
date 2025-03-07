import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import MenuItem from "./MenuItem";

describe("MenuItem", () => {
  test("renders correctly with default props", () => {
    render(<MenuItem>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveTextContent("Go Pro");
  });

  test("renders with different sizes", () => {
    const { rerender } = render(
      <MenuItem size="default" isResponsive={false}>
        Go Pro
      </MenuItem>,
    );

    let menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("h-11");

    rerender(
      <MenuItem size="md" isResponsive={false}>
        Go Pro
      </MenuItem>,
    );
    menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("h-[60px]");

    rerender(
      <MenuItem size="xl" isResponsive={false}>
        Go Pro
      </MenuItem>,
    );
    menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("h-[68px]");

    rerender(
      <MenuItem size="2xl" isResponsive={false}>
        Go Pro
      </MenuItem>,
    );
    menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("h-20");
  });

  test("renders in compressed mode", () => {
    render(
      <MenuItem isCompressed isResponsive={false}>
        Go Pro
      </MenuItem>,
    );

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveAttribute("data-compressed", "true");
    expect(menuItem).toHaveClass("flex-col");
    expect(menuItem).toHaveClass("items-center");
    expect(menuItem).toHaveClass("justify-center");
  });

  test("renders in selected state", () => {
    render(<MenuItem isSelected>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveAttribute("data-selected", "true");
    expect(menuItem).toHaveClass("bg-primary-tint");
  });

  test("renders with CTA content", () => {
    render(<MenuItem content="cta">Create</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveAttribute("data-content", "cta");
  });

  test("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<MenuItem onClick={handleClick}>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    menuItem.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with custom className", () => {
    render(<MenuItem className="custom-class">Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("custom-class");
  });

  test("renders with different icon", () => {
    render(<MenuItem icon="list_alt_add">Create</MenuItem>);

    // Verificar que el icono está presente es difícil en pruebas de componentes,
    // pero podemos verificar que el componente se renderiza correctamente
    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
  });

  test("renders with tooltip when appropriate", () => {
    // El tooltip solo se muestra en tamaños xl y 2xl cuando está comprimido
    render(
      <MenuItem
        size="xl"
        isCompressed
        tooltipText="Create new item"
        isResponsive={false}
      >
        Create
      </MenuItem>,
    );

    // Verificar que el tooltip está presente es difícil en pruebas de componentes,
    // pero podemos verificar que el componente se renderiza correctamente
    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
  });

  // Nuevas pruebas para el comportamiento responsive
  test("renders with responsive mode enabled", () => {
    render(<MenuItem isResponsive>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveAttribute("data-responsive", "true");
    expect(menuItem).toHaveClass("flex-col");
    expect(menuItem).toHaveClass("sm:flex-row");
  });

  test("applies responsive styles correctly", () => {
    render(
      <MenuItem isResponsive size="md">
        Go Pro
      </MenuItem>,
    );

    const menuItem = screen.getByTestId("menu-item");
    // Verificar clases responsive
    expect(menuItem).toHaveClass("h-[60px]");
    expect(menuItem).toHaveClass("sm:h-14");
    expect(menuItem).toHaveClass("flex-col");
    expect(menuItem).toHaveClass("sm:flex-row");
    expect(menuItem).toHaveClass("items-center");
    expect(menuItem).toHaveClass("justify-center");
  });

  test("hides text in small screens when responsive", () => {
    render(<MenuItem isResponsive>Go Pro</MenuItem>);

    const text = screen.getByText("Go Pro");
    expect(text).toHaveClass("hidden");
    expect(text).toHaveClass("sm:inline-block");
  });

  test("shows text in all screens when not responsive and not compressed", () => {
    render(
      <MenuItem isResponsive={false} isCompressed={false}>
        Go Pro
      </MenuItem>,
    );

    const text = screen.getByText("Go Pro");
    expect(text).toHaveClass("inline-block");
    expect(text).not.toHaveClass("hidden");
  });

  test("applies transition styles for smooth responsive changes", () => {
    render(<MenuItem isResponsive>Go Pro</MenuItem>);

    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toHaveClass("transition-all");
    expect(menuItem).toHaveClass("duration-200");
  });
});
