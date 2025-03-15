import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { RemoveFollower } from ".";

describe("RemoveFollower", () => {
  const onRemoveMock = vi.fn();
  const onCancelMock = vi.fn();
  const followerName = "Jane Doe";

  beforeEach(() => {
    onRemoveMock.mockClear();
    onCancelMock.mockClear();
  });

  it("should render correctly when open", () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    render(
      <RemoveFollower
        followerName={followerName}
        onRemove={onRemoveMock}
        onCancel={onCancelMock}
        userHref="https://example.com"
      />,
    );

    expect(screen.getByText("Remove follower")).toBeInTheDocument();
    expect(
      screen.getByText((content) =>
        content.includes("Are you sure you want to remove"),
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(
      screen.getByText("ExamSocial will not notify them about this action."),
    ).toBeInTheDocument();

    expect(screen.getByText("No, cancel")).toBeInTheDocument();
    expect(screen.getByText("Yes, remove them")).toBeInTheDocument();
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  it("should not show the modal when isOpen is false", () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    render(
      <RemoveFollower
        followerName={followerName}
        onRemove={onRemoveMock}
        onCancel={onCancelMock}
        userHref="https://example.com"
      />,
    );

    expect(HTMLDialogElement.prototype.showModal).not.toHaveBeenCalled();
  });

  it("should call onRemove when Yes button is clicked", () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    render(
      <RemoveFollower
        followerName={followerName}
        onRemove={onRemoveMock}
        onCancel={onCancelMock}
        userHref="https://example.com"
      />,
    );

    fireEvent.click(screen.getByText("Yes, remove them"));
    expect(onRemoveMock).toHaveBeenCalledTimes(1);
    expect(onCancelMock).not.toHaveBeenCalled();
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });

  it("should call onCancel when No button is clicked", () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    render(
      <RemoveFollower
        followerName={followerName}
        onRemove={onRemoveMock}
        onCancel={onCancelMock}
        userHref="https://example.com"
      />,
    );

    fireEvent.click(screen.getByText("No, cancel"));
    expect(onCancelMock).toHaveBeenCalledTimes(1);
    expect(onRemoveMock).not.toHaveBeenCalled();
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });
});
