import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ProfileCardSubscription from "./ProfileCardSubscription";

// Sample features data for testing
const testFeatures = [
  {
    name: "Feature 1",
    description: "Description 1",
    icon: "school",
  },
  {
    name: "Feature 2",
    description: "Description 2",
    icon: "analytics",
  },
  {
    name: "Feature 3",
    description: "Description 3",
    icon: "palette",
  },
];

describe("ProfileCardSubscription", () => {
  test("renders the component correctly", () => {
    render(<ProfileCardSubscription features={testFeatures} />);

    // Check if the title is rendered
    expect(screen.getByText("Go Pro")).toBeInTheDocument();

    // Check if the subtitle is rendered
    expect(
      screen.getByText(
        "With a Membership you can access all these amazing features:",
      ),
    ).toBeInTheDocument();

    // Check if the button is rendered
    expect(screen.getByText("Subscribe Now")).toBeInTheDocument();

    // Check if the premium icon is rendered
    const premiumIcon = screen.getByText("premium_workspace");
    expect(premiumIcon).toBeInTheDocument();
  });

  test("passes features to FeaturesCarousel", () => {
    render(<ProfileCardSubscription features={testFeatures} />);

    // Check if features are passed to FeaturesCarousel and rendered
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
    expect(screen.getByText("Description 3")).toBeInTheDocument();
  });

  test("renders with empty features array", () => {
    render(<ProfileCardSubscription features={[]} />);

    // Component should still render without features
    expect(screen.getByText("Go Pro")).toBeInTheDocument();
    expect(screen.getByText("Subscribe Now")).toBeInTheDocument();
  });

  test("has the correct CSS classes", () => {
    render(<ProfileCardSubscription features={testFeatures} />);

    // Check if the article has the correct classes
    const article = screen.getByText("Go Pro").closest("article");
    expect(article).toHaveClass("rounded-md");
    expect(article).toHaveClass("border-sm");
    expect(article).toHaveClass("border-black");
    expect(article).toHaveClass("bg-secondary");
    expect(article).toHaveClass("p-4");
  });
});
