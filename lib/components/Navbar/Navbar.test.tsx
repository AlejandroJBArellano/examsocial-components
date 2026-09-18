import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Navbar, { NavbarItem } from "./Navbar";

describe("Navbar component", () => {
  const items: NavbarItem[] = [
    {
      href: "/dashboard",
      children: "Dashboard",
      icon: "dashboard",
      isSelected: true,
    },
    { href: "/exams", children: "Exams", icon: "quiz" },
    { href: "/", children: "Home", isLogo: true },
  ];

  it("renders navigation items and custom button children in top variant", () => {
    render(
      <Navbar items={items}>
        <span>Custom Action</span>
      </Navbar>,
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Exams")).toBeInTheDocument();
    expect(screen.getByText("Custom Action")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toHaveAttribute(
      "data-variant",
      "top",
    );
  });

  it("renders with profileInfo (without picture) in top variant", () => {
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

  it("renders with profileInfo.picture in top variant", () => {
    render(
      <Navbar
        items={items}
        profileInfo={{
          gender: "female",
          name: "Jane Doe",
          picture: "https://example.com/photo.jpg",
          href: "/profile",
        }}
      />,
    );

    const img = screen.getByAltText("Jane Doe");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/photo.jpg");
  });

  it("renders bottom variant correctly with items, currentPath, moreButton and profile picture", () => {
    const handleMoreClick = vi.fn();
    const handleProfileClick = vi.fn();

    const CustomLink = ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a href={href} data-custom-link="true" {...props}>
        {children}
      </a>
    );

    const { rerender } = render(
      <Navbar
        variant="bottom"
        items={items}
        currentPath="/exams"
        linkComponent={CustomLink}
        moreButton={{
          isOpen: false,
          onClick: handleMoreClick,
        }}
        profileInfo={{
          gender: "male",
          name: "John Doe",
          picture: "https://example.com/john.jpg",
          href: "/profile",
          onClick: handleProfileClick,
        }}
      />,
    );

    const nav = screen.getByTestId("navbar");
    expect(nav).toHaveAttribute("data-variant", "bottom");

    // Check custom link component rendered
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("data-custom-link", "true");

    // Check more button click
    const moreBtn = screen.getByTestId("navbar-more-button");
    expect(moreBtn).toHaveTextContent("Menu");
    fireEvent.click(moreBtn);
    expect(handleMoreClick).toHaveBeenCalled();

    // Check profile link with picture
    const profileImg = screen.getByAltText("John Doe");
    expect(profileImg).toBeInTheDocument();

    // Rerender with moreButton open and custom label/icon
    rerender(
      <Navbar
        variant="bottom"
        items={items}
        moreButton={{
          isOpen: true,
          onClick: handleMoreClick,
          label: "Cerrar",
          icon: "close",
        }}
        profileInfo={{
          gender: "male",
          name: "John Doe",
          href: "/profile",
        }}
      />,
    );

    expect(screen.getByTestId("navbar-more-button")).toHaveTextContent("Cerrar");
  });

  it("renders bottom variant with item having no icon and no logo", () => {
    render(
      <Navbar
        variant="bottom"
        items={[{ href: "/about", children: "About" }]}
      />,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders bottom variant with profile button without picture (placeholder mode)", () => {
    const handleProfileClick = vi.fn();

    render(
      <Navbar
        variant="bottom"
        items={items}
        profileInfo={{
          gender: "male",
          name: "Placeholder Button",
          onClick: handleProfileClick,
        }}
      />,
    );

    const profileBtn = screen.getByTestId("navbar-profile-button");
    fireEvent.click(profileBtn);
    expect(handleProfileClick).toHaveBeenCalled();
  });

  it("renders bottom variant with profile button with picture (no href)", () => {
    const handleProfileClick = vi.fn();

    render(
      <Navbar
        variant="bottom"
        items={items}
        profileInfo={{
          gender: "female",
          name: "Photo Button",
          picture: "https://example.com/button-photo.jpg",
          onClick: handleProfileClick,
        }}
      />,
    );

    const profileBtn = screen.getByTestId("navbar-profile-button");
    fireEvent.click(profileBtn);
    expect(handleProfileClick).toHaveBeenCalled();
    expect(screen.getByAltText("Photo Button")).toBeInTheDocument();
  });

  it("renders bottom variant with active profile link", () => {
    render(
      <Navbar
        variant="bottom"
        items={items}
        currentPath="/my-profile"
        profileInfo={{
          gender: "male",
          name: "Active Profile",
          picture: "https://example.com/active.jpg",
          href: "/my-profile",
        }}
      />,
    );

    const img = screen.getByAltText("Active Profile");
    expect(img.className).toContain("border-primary");
  });

  it("renders bottom variant without profileInfo or children", () => {
    render(<Navbar variant="bottom" items={items} />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders bottom variant with children when no profileInfo is provided", () => {
    render(
      <Navbar variant="bottom" items={items}>
        <button data-testid="extra-child">Extra</button>
      </Navbar>,
    );

    expect(screen.getByTestId("extra-child")).toBeInTheDocument();
  });
});
