/**
 * UserAnswers Component Tests
 *
 * This file provides a template for testing the UserAnswers component.
 * Before running these tests, make sure you have the proper testing libraries installed:
 *
 * npm install --save-dev @testing-library/react @testing-library/jest-dom
 */

// Example test implementation when testing libraries are properly set up:

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import UserAnswers from "./UserAnswers";

describe("UserAnswers", () => {
  const mockOnClose = vi.fn();
  const userName = "Test User";
  const childrenText = "Test Children Content";

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it("renders the component with the correct user name", () => {
    render(
      <UserAnswers userName={userName} onClose={mockOnClose}>
        <div>{childrenText}</div>
      </UserAnswers>,
    );

    expect(screen.getByText(`${userName}'s Answers`)).toBeInTheDocument();
  });

  it("renders the children content", () => {
    render(
      <UserAnswers userName={userName} onClose={mockOnClose}>
        <div data-testid="child-content">{childrenText}</div>
      </UserAnswers>,
    );

    expect(screen.getByTestId("child-content")).toBeInTheDocument();
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(
      <UserAnswers userName={userName} onClose={mockOnClose}>
        <div>{childrenText}</div>
      </UserAnswers>,
    );

    const closeButton = screen.getByLabelText("Close answers");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("uses proper semantic HTML structure", () => {
    render(
      <UserAnswers userName={userName} onClose={mockOnClose}>
        <div>{childrenText}</div>
      </UserAnswers>,
    );

    // Check for section as container
    const section = screen.getByLabelText(`${userName}'s Answers`);
    expect(section.tagName).toBe("SECTION");

    // Check for header
    const header = section.querySelector("header");
    expect(header).toBeInTheDocument();

    // Check for main content area
    const main = section.querySelector("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("grid");
    expect(main).toHaveClass("xl:grid-cols-2");
  });
});
