import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Profile from "./Profile";

// Mock the ProfilePlaceholder component
vi.mock("../ProfilePlaceholder", () => ({
  ProfilePlaceholder: ({
    gender,
    filled,
  }: {
    gender: string;
    filled?: boolean;
  }) => (
    <div
      data-testid="profile-placeholder"
      data-gender={gender}
      data-filled={filled ? "true" : "false"}
    >
      ProfilePlaceholder Mock
    </div>
  ),
}));

describe("Profile Component", () => {
  it("renders with male gender", () => {
    render(<Profile gender="male" />);
    const profilePlaceholder = screen.getByTestId("profile-placeholder");
    expect(profilePlaceholder).toBeInTheDocument();
    expect(profilePlaceholder).toHaveAttribute("data-gender", "male");
    expect(profilePlaceholder).toHaveAttribute("data-filled", "false");
  });

  it("renders with female gender", () => {
    render(<Profile gender="female" />);
    const profilePlaceholder = screen.getByTestId("profile-placeholder");
    expect(profilePlaceholder).toBeInTheDocument();
    expect(profilePlaceholder).toHaveAttribute("data-gender", "female");
    expect(profilePlaceholder).toHaveAttribute("data-filled", "false");
  });

  it("renders with filled prop", () => {
    render(<Profile gender="male" filled={true} />);
    const profilePlaceholder = screen.getByTestId("profile-placeholder");
    expect(profilePlaceholder).toBeInTheDocument();
    expect(profilePlaceholder).toHaveAttribute("data-gender", "male");
    expect(profilePlaceholder).toHaveAttribute("data-filled", "true");
  });

  it("renders as a button element", () => {
    render(<Profile gender="male" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toContainElement(screen.getByTestId("profile-placeholder"));
  });

  it("applies correct styling classes", () => {
    render(<Profile gender="male" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("border");
    expect(button).toHaveClass("border-gray-600");
    expect(button).toHaveClass("px-4");
    expect(button).toHaveClass("hover:border-black");
  });

  it("can be clicked", () => {
    const handleClick = vi.fn();
    render(
      <div onClick={handleClick}>
        <Profile gender="male" />
      </div>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
