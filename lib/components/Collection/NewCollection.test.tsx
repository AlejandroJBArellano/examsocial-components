import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { NewCollection } from "../NewCollection";

describe("NewCollection", () => {
  const onSubmitMock = vi.fn();
  const onCancelMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly when isOpen is true", () => {
    render(
      <NewCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
      />,
    );

    expect(screen.getByText("New Collection")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByText("Private collection")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create" })).toBeInTheDocument();
  });

  it("doesn't render when isOpen is false", () => {
    render(
      <NewCollection
        isOpen={false}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
      />,
    );

    expect(screen.queryByText("New Collection")).not.toBeVisible();
  });

  it("calls onSubmit with form data when submitted", async () => {
    const user = userEvent.setup();

    render(
      <NewCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
      />,
    );

    // Fill out the form
    await user.type(screen.getByLabelText("Name"), "Test Collection");
    await user.type(
      screen.getByLabelText("Description"),
      "This is a test collection",
    );

    // Submit the form
    await user.click(screen.getByRole("button", { name: "Create" }));

    // Check if onSubmit was called with the correct data
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Test Collection",
          description: "This is a test collection",
          private: false,
          _id: expect.any(String),
        }),
      );
    });
  });

  it("calls onCancel when Cancel button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <NewCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  it("toggles private collection state", async () => {
    const user = userEvent.setup();

    render(
      <NewCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
      />,
    );

    // Fill out the form
    await user.type(screen.getByLabelText("Name"), "Test Collection");

    // Toggle private switch
    const switchElement = screen.getByRole("checkbox");
    await user.click(switchElement);

    // Submit the form
    await user.click(screen.getByRole("button", { name: "Create" }));

    // Check if onSubmit was called with private set to true
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          private: true,
        }),
      );
    });
  });
});
