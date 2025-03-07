import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { FavoriteButton } from ".";

// Mock del componente Tooltip ya que usa Portal que no funciona bien en pruebas
vi.mock("../Tooltip", () => ({
  Tooltip: ({
    children,
    trigger,
  }: {
    children: ReactNode;
    trigger: ReactNode;
  }) => (
    <div data-testid="tooltip-mock">
      {trigger}
      <div data-testid="tooltip-content">{children}</div>
    </div>
  ),
}));

describe("FavoriteButton", () => {
  it("renders correctly with default props", () => {
    render(<FavoriteButton />);
    const button = screen.getByTestId("favorite-button");
    expect(button).toBeInTheDocument();
  });

  it("renders with favorite state", () => {
    render(<FavoriteButton isFavorite={true} />);
    const button = screen.getByTestId("favorite-button");
    expect(button).toHaveClass("bg-accent-tint");
  });

  it("toggles favorite state on click", () => {
    const handleFavoriteChange = vi.fn();
    render(<FavoriteButton onFavoriteChange={handleFavoriteChange} />);

    const button = screen.getByTestId("favorite-button");
    fireEvent.click(button);

    expect(handleFavoriteChange).toHaveBeenCalledWith(true);
  });

  it("uses Tooltip component for large size", () => {
    render(<FavoriteButton size="large" tooltipText="Test tooltip" />);

    expect(screen.getByTestId("tooltip-mock")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip-content")).toHaveTextContent(
      "Test tooltip",
    );
  });

  it("does not use Tooltip for default size", () => {
    render(<FavoriteButton tooltipText="Test tooltip" />);

    expect(screen.queryByTestId("tooltip-mock")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<FavoriteButton className="custom-class" />);
    const button = screen.getByTestId("favorite-button");
    expect(button).toHaveClass("custom-class");
  });
});
