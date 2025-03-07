import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import SocialPost from "./SocialPost";

describe("SocialPost", () => {
  test("renders examCreated type correctly", () => {
    render(
      <SocialPost type="examCreated">
        <SocialPost.Header
          username="testuser"
          timestamp="8h"
          mainAction="Created a new exam"
        />
        <SocialPost.ExamCard
          title="Test Exam"
          description="Test description"
          image="test-image.jpg"
        />
      </SocialPost>,
    );

    expect(screen.getByText("testuser")).toBeInTheDocument();
    expect(screen.getByText("Created a new exam")).toBeInTheDocument();
    expect(screen.getByText("8h")).toBeInTheDocument();
    expect(screen.getByText("Test Exam")).toBeInTheDocument();
  });

  test("renders review type correctly", () => {
    render(
      <SocialPost type="review">
        <SocialPost.Header
          username="testuser"
          timestamp="2d"
          mainAction="Left a"
          secondaryAction="review"
          showStars={true}
        />
        <SocialPost.Review
          content="Test review content"
          exam={{
            title: "Test Exam",
            image: "test-image.jpg",
          }}
        />
      </SocialPost>,
    );

    expect(screen.getByText("testuser")).toBeInTheDocument();
    expect(screen.getByText("Left a")).toBeInTheDocument();
    expect(screen.getByText("review")).toBeInTheDocument();
    expect(screen.getByText("2d")).toBeInTheDocument();
  });

  test("renders favoriteSaved type correctly", () => {
    render(
      <SocialPost type="favoriteSaved">
        <SocialPost.Header username="testuser" timestamp="2d" />
        <SocialPost.FavoriteSaved
          collectionName="Favorites"
          title="Test Exam"
          image="test-image.jpg"
        />
      </SocialPost>,
    );

    expect(screen.getByText("testuser")).toBeInTheDocument();
    expect(screen.getByText("2d")).toBeInTheDocument();
    expect(screen.getByText("Saved in")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("Test Exam")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(
      <SocialPost className="custom-class">
        <SocialPost.Header username="testuser" timestamp="8h" />
      </SocialPost>,
    );

    const article = screen.getByRole("article");
    expect(article).toHaveClass("custom-class");
  });
});
