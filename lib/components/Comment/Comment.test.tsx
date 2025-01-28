import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Comment from "./Comment";

describe("Comment Component", () => {
  it("should render the Comment component", () => {
    render(
      <Comment
        user={{ name: "John Doe", avatar: "" }}
        createdAt={new Date()}
        rating={4}
      >
        This is a comment
      </Comment>
    );
    const commentElement = screen.getByTestId("comment");
    expect(commentElement).toBeDefined();
  });

  it("should display the user's name", () => {
    render(
      <Comment
        user={{ name: "John Doe", avatar: "" }}
        createdAt={new Date()}
        rating={4}
      >
        This is a comment
      </Comment>
    );
    const userNameElement = screen.getByText("John Doe");
    expect(userNameElement).toBeDefined();
  });

  it("should display the comment text", () => {
    render(
      <Comment
        user={{ name: "John Doe", avatar: "" }}
        createdAt={new Date()}
        rating={4}
      >
        This is a comment
      </Comment>
    );
    const commentTextElement = screen.getByText("This is a comment");
    expect(commentTextElement).toBeDefined();
  });

  it("should display the correct rating", () => {
    render(
      <Comment
        user={{ name: "John Doe", avatar: "" }}
        createdAt={new Date()}
        rating={4}
      >
        This is a comment
      </Comment>
    );
    const filledStars = screen.getAllByTestId("GradeIcon");
    expect(filledStars.length).toBe(4);
  });

  it("should display the correct time ago", () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 5);
    render(
      <Comment
        user={{ name: "John Doe", avatar: "" }}
        createdAt={date}
        rating={4}
      >
        This is a comment
      </Comment>
    );
    const timeAgoElement = screen.getByText(/5 minutes ago/i);
    expect(timeAgoElement).toBeDefined();
  });

  // Add more tests as needed
});
