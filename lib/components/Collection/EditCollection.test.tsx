import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EditCollection } from "./EditCollection";

describe("EditCollection", () => {
  const onSubmitMock = vi.fn();
  const onCancelMock = vi.fn();
  const mockCollection = {
    name: "Test Collection",
    _id: "col-123",
    description: "This is a test collection",
    private: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly when isOpen is true", () => {
    render(
      <EditCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
        collection={mockCollection}
      />,
    );

    expect(screen.getByText("Edit Collection")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toHaveValue(mockCollection.name);
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toHaveValue(
      mockCollection.description,
    );
    expect(screen.getByText("Private collection")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("doesn't render when isOpen is false", () => {
    render(
      <EditCollection
        isOpen={false}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
        collection={mockCollection}
      />,
    );

    expect(screen.queryByText("Edit Collection")).not.toBeVisible();
  });

  it("calls onSubmit with updated form data when submitted", async () => {
    const user = userEvent.setup();

    render(
      <EditCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
        collection={mockCollection}
      />,
    );

    // Update form fields
    await user.clear(screen.getByLabelText("Name"));
    await user.type(screen.getByLabelText("Name"), "Updated Collection");

    await user.clear(screen.getByLabelText("Description"));
    await user.type(
      screen.getByLabelText("Description"),
      "This is an updated collection",
    );

    // Submit the form
    await user.click(screen.getByRole("button", { name: "Save" }));

    // Check if onSubmit was called with the correct data
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Updated Collection",
          description: "This is an updated collection",
          private: false,
          _id: mockCollection._id,
        }),
      );
    });
  });

  it("calls onCancel when Cancel button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <EditCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
        collection={mockCollection}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  it("toggles private collection state", async () => {
    const user = userEvent.setup();

    render(
      <EditCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
        collection={mockCollection}
      />,
    );

    // Toggle private switch
    const switchElement = screen.getByRole("checkbox");
    await user.click(switchElement);

    // Submit the form
    await user.click(screen.getByRole("button", { name: "Save" }));

    // Check if onSubmit was called with private set to true
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          private: true,
        }),
      );
    });
  });

  it("initializes with private collection state from props", async () => {
    const privateCollection = {
      ...mockCollection,
      private: true,
    };

    render(
      <EditCollection
        isOpen={true}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
        collection={privateCollection}
      />,
    );

    // Check if switch is on
    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).toBeChecked();
  });
});
