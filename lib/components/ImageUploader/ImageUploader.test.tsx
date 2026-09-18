import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ImageUploader from "./ImageUploader";

describe("ImageUploader component", () => {
  beforeEach(() => {
    global.URL.createObjectURL = vi.fn(() => "blob:mock-url");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders image in KB format", () => {
    const file = new File(["a".repeat(2048)], "photo.jpg", { type: "image/jpeg" });
    const onDelete = vi.fn();

    render(<ImageUploader image={file} onDelete={onDelete} />);

    expect(screen.getByText("photo.jpg")).toBeInTheDocument();
    expect(screen.getByText("2.00 KB")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "blob:mock-url");

    fireEvent.click(screen.getByRole("button"));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("renders image in MB format", () => {
    const file = new File(["dummy"], "photo_large.jpg", { type: "image/jpeg" });
    Object.defineProperty(file, "size", { value: 5 * 1024 * 1024 });

    render(<ImageUploader image={file} onDelete={vi.fn()} />);
    expect(screen.getByText("5.00 MB")).toBeInTheDocument();
  });

  it("renders image in GB format", () => {
    const file = new File(["dummy"], "huge_image.jpg", { type: "image/jpeg" });
    Object.defineProperty(file, "size", { value: 2 * 1024 * 1024 * 1024 });

    render(<ImageUploader image={file} onDelete={vi.fn()} />);
    expect(screen.getByText("2.00 GB")).toBeInTheDocument();
  });
});
