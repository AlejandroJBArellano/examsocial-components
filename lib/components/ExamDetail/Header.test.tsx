import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HeaderExam from "./Header";

// Mock the Banner component since we're just testing the Header
vi.mock("./Banner", () => ({
  default: ({ imageUrl, title }: { imageUrl: string; title: string }) => (
    <img
      data-testid="mock-banner"
      src={imageUrl}
      alt={`${title} exam banner`}
    />
  ),
}));

const mockProps = {
  title: "Svelte Fundamentals",
  authorName: "John Doe",
  category: "Svelte",
  participants: 391,
  duration: {
    hours: 2,
    minutes: 0,
  },
  rating: 4.9,
  imageUrl: "https://example.com/image.jpg",
};

describe("HeaderExam component", () => {
  it("renders the title correctly", () => {
    render(<HeaderExam {...mockProps} />);
    expect(screen.getByText("Svelte Fundamentals")).toBeInTheDocument();
  });

  it("renders the author name correctly", () => {
    render(<HeaderExam {...mockProps} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders the category correctly", () => {
    render(<HeaderExam {...mockProps} />);
    expect(screen.getByText("Svelte")).toBeInTheDocument();
  });

  it("renders the participants count correctly", () => {
    render(<HeaderExam {...mockProps} />);
    expect(screen.getByText("391")).toBeInTheDocument();
  });

  it("renders the duration correctly", () => {
    render(<HeaderExam {...mockProps} />);
    expect(screen.getByText("2 hours")).toBeInTheDocument();
  });

  it("renders the rating correctly", () => {
    render(<HeaderExam {...mockProps} />);
    expect(screen.getByText("4.9")).toBeInTheDocument();
  });

  it("passes correct props to Banner component", () => {
    render(<HeaderExam {...mockProps} />);
    const banner = screen.getByTestId("mock-banner");
    expect(banner).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(banner).toHaveAttribute("alt", "Svelte Fundamentals exam banner");
  });

  it("formats duration with hours and minutes correctly", () => {
    const props = {
      ...mockProps,
      duration: {
        hours: 1,
        minutes: 30,
      },
    };
    render(<HeaderExam {...props} />);
    expect(screen.getByText("1 hour 30 min")).toBeInTheDocument();
  });

  it("formats duration with minutes only correctly", () => {
    const props = {
      ...mockProps,
      duration: {
        minutes: 45,
      },
    };
    render(<HeaderExam {...props} />);
    expect(screen.getByText("45 mins")).toBeInTheDocument();
  });

  it("formats duration with a single minute correctly", () => {
    const props = {
      ...mockProps,
      duration: {
        minutes: 1,
      },
    };
    render(<HeaderExam {...props} />);
    expect(screen.getByText("1 min")).toBeInTheDocument();
  });
});
