import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../Button";
import Participants, { Participant } from "./Participants";

describe("Participants component", () => {
  it("renders the title correctly", () => {
    render(
      <Participants title="Test Participants">
        <Participant name="John Doe" />
      </Participants>,
    );
    expect(screen.getByText("Test Participants")).toBeDefined();
  });

  it("renders children correctly", () => {
    render(
      <Participants>
        <Participant name="John Doe" />
        <Participant name="Jane Smith" />
      </Participants>,
    );
    expect(screen.getByText("John Doe")).toBeDefined();
    expect(screen.getByText("Jane Smith")).toBeDefined();
  });

  it("applies custom className correctly", () => {
    render(
      <Participants className="custom-class">
        <Participant name="John Doe" />
      </Participants>,
    );
    const container = screen.getByTestId("participants-container");
    expect(container.className).toContain("custom-class");
  });
});

describe("Participant component", () => {
  it("renders name correctly", () => {
    render(<Participant name="John Doe" />);
    expect(screen.getByText("John Doe")).toBeDefined();
  });

  it("renders avatar correctly", () => {
    render(<Participant name="John Doe" avatar="test-avatar.jpg" />);
    const avatar = screen.getByAltText("John Doe's avatar");
    expect(avatar).toBeDefined();
    expect(avatar.getAttribute("src")).toBe("test-avatar.jpg");
  });

  it("renders score when provided", () => {
    render(<Participant name="John Doe" score="15/25" />);
    expect(screen.getByText("15/25")).toBeDefined();
  });

  it("does not render score when not provided", () => {
    render(<Participant name="John Doe" />);
    const scoreElements = screen.queryAllByTestId("score");
    expect(scoreElements.length).toBe(0);
  });

  it("renders action when provided", () => {
    const testId = "test-button";
    render(
      <Participant name="John Doe">
        <Button data-testid={testId}>Action</Button>
      </Participant>,
    );
    expect(screen.getByTestId(testId)).toBeDefined();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Participant name="John Doe" onClick={handleClick} />);

    const participant = screen.getByTestId("participant");
    fireEvent.click(participant);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("adds cursor-pointer class when onClick is provided", () => {
    const handleClick = vi.fn();
    render(<Participant name="John Doe" onClick={handleClick} />);

    const participant = screen.getByTestId("participant");
    expect(participant.className).toContain("cursor-pointer");
  });

  it("does not add cursor-pointer class when onClick is not provided", () => {
    render(<Participant name="John Doe" />);

    const participant = screen.getByTestId("participant");
    expect(participant.className).not.toContain("cursor-pointer");
  });

  it("applies custom className correctly", () => {
    render(<Participant name="John Doe" className="custom-class" />);
    const participant = screen.getByTestId("participant");
    expect(participant.className).toContain("custom-class");
  });
});
