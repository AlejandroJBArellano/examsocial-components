import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BannerExam from "./Banner";

describe("BannerExam component", () => {
  const mockProps = {
    imageUrl: "https://example.com/image.jpg",
    title: "Svelte Fundamentals",
  };

  it("renders the image with correct src", () => {
    render(<BannerExam {...mockProps} />);
    const image = screen.getByAltText(`${mockProps.title} exam banner`);
    expect(image).toHaveAttribute("src", mockProps.imageUrl);
  });

  it("applies the correct styling classes", () => {
    render(<BannerExam {...mockProps} />);
    const image = screen.getByAltText(`${mockProps.title} exam banner`);
    expect(image.className).toContain("h-60");
    expect(image.className).toContain("rounded-2xl");
    expect(image.className).toContain("shadow-right-sm");
    expect(image.className).toContain("border-2");
    expect(image.className).toContain("border-black");
    expect(image.className).toContain("w-full");
  });

  it("renders with the correct alt text", () => {
    render(<BannerExam {...mockProps} />);
    const image = screen.getByAltText(`${mockProps.title} exam banner`);
    expect(image).toBeInTheDocument();
  });
});
