import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FavoriteButton } from ".";

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

  it("shows tooltip on hover for large size", () => {
    render(<FavoriteButton size="large" tooltipText="Test tooltip" />);

    const button = screen.getByTestId("favorite-button");
    fireEvent.mouseEnter(button);

    expect(screen.getByText("Test tooltip")).toBeInTheDocument();
  });

  it("does not show tooltip for default size", () => {
    render(<FavoriteButton tooltipText="Test tooltip" />);

    const button = screen.getByTestId("favorite-button");
    fireEvent.mouseEnter(button);

    expect(screen.queryByText("Test tooltip")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<FavoriteButton className="custom-class" />);
    const button = screen.getByTestId("favorite-button");
    expect(button).toHaveClass("custom-class");
  });
});
