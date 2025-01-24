import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Comment from "./Comment";

describe("Comment Component", () => {
  it("should render the Comment component", () => {
    render(<Comment />);
    const commentElement = screen.getByTestId("comment");
    expect(commentElement).toBeDefined();
  });

  // Add more tests as needed
});
