import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ReviewQuestionSet from "../ReviewQuestionSet";

// Mock question data
const mockQuestion = {
  title: "What is the capital of France?",
  _id: "q1",
  options: [
    { text: "Paris", correct: true, _id: "o1" },
    { text: "London", correct: false, _id: "o2" },
    { text: "Berlin", correct: false, _id: "o3" },
    { text: "Madrid", correct: false, _id: "o4" },
  ],
};

describe("ReviewQuestionSet", () => {
  // Test rendering with correct answer
  it("renders correctly with a correct answer", () => {
    const { container } = render(
      <ReviewQuestionSet question={mockQuestion} selected={0} correct={true} />,
    );

    // Check question title is rendered
    expect(screen.getByText("What is the capital of France?")).toBeTruthy();

    // Check correct answer icon is displayed
    const icon = container.querySelector(".material-symbols");
    expect(icon).toBeTruthy();
    expect(icon?.textContent).toBe("check");
    expect(icon?.getAttribute("aria-label")).toBe("Correct answer");

    // Check selected option is displayed
    expect(screen.getByText("Paris")).toBeTruthy();
  });

  // Test rendering with incorrect answer
  it("renders correctly with an incorrect answer", () => {
    const { container } = render(
      <ReviewQuestionSet
        question={mockQuestion}
        selected={1}
        correct={false}
      />,
    );

    // Check question title is rendered
    expect(screen.getByText("What is the capital of France?")).toBeTruthy();

    // Check incorrect answer icon is displayed
    const icon = container.querySelector(".material-symbols");
    expect(icon).toBeTruthy();
    expect(icon?.textContent).toBe("close");
    expect(icon?.getAttribute("aria-label")).toBe("Incorrect answer");

    // Check selected option is displayed
    expect(screen.getByText("London")).toBeTruthy();
  });

  // Test toggling options visibility
  it('toggles options visibility when "Show all options" button is clicked', () => {
    render(
      <ReviewQuestionSet question={mockQuestion} selected={0} correct={true} />,
    );

    // Initially, other options should not be visible
    expect(screen.queryByText("Berlin")).toBe(null);

    // Click "Show all options" button
    const showOptionsButton = screen.getByText("Show all options");
    fireEvent.click(showOptionsButton);

    // After clicking, other options should be visible
    expect(screen.getByText("Berlin")).toBeTruthy();
    expect(screen.getByText("London")).toBeTruthy();
    expect(screen.getByText("Madrid")).toBeTruthy();

    // Button text should change to "Hide all options"
    expect(screen.getByText("Hide all options")).toBeTruthy();

    // Click "Hide all options" button
    const hideOptionsButton = screen.getByText("Hide all options");
    fireEvent.click(hideOptionsButton);

    // After clicking again, other options should be hidden
    expect(screen.queryByText("Berlin")).toBe(null);
  });

  // Test accessibility features
  it("includes proper accessibility attributes", () => {
    const { container } = render(
      <ReviewQuestionSet question={mockQuestion} selected={0} correct={true} />,
    );

    // Check aria-expanded attribute on the button
    const button = screen.getByText("Show all options").closest("button");
    expect(button?.getAttribute("aria-expanded")).toBe("false");

    // Check aria-controls attribute on the button
    expect(button?.getAttribute("aria-controls")).toBe("options-list");

    // Check icon is present with the correct icon name and aria-label
    const icon = container.querySelector(".material-symbols");
    expect(icon).toBeTruthy();
    expect(icon?.textContent).toBe("check");
    expect(icon?.getAttribute("aria-label")).toBe("Correct answer");

    // Click button to show options
    fireEvent.click(button!);

    // Check aria-expanded is updated
    expect(button?.getAttribute("aria-expanded")).toBe("true");

    // Check options list has correct id
    const optionsList = container.querySelector("ul");
    expect(optionsList?.getAttribute("id")).toBe("options-list");
  });

  // Test rendering with different selected options
  it("properly highlights the selected option", () => {
    render(
      <ReviewQuestionSet
        question={mockQuestion}
        selected={2}
        correct={false}
      />,
    );

    // Check the selected option is visible
    const selectedOption = screen.getByText("Berlin");
    expect(selectedOption).toBeTruthy();

    // Show all options
    fireEvent.click(screen.getByText("Show all options"));

    // All options should be visible
    const optionElements = screen.getAllByRole("listitem");
    expect(optionElements.length).toBe(4);
  });
});
