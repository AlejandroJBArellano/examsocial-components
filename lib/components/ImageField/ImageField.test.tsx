import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ImageField from "./ImageField";

// Mock the ImageInput and ImageUploader components
vi.mock("../ImageInput/ImageInput", () => ({
  default: ({
    onChange,
  }: {
    onChange: (e: { target: { files: File[] } }) => void;
  }) => (
    <button
      data-testid="mock-image-input"
      onClick={() => {
        const mockEvent = {
          target: {
            files: [new File(["content"], "test.png", { type: "image/png" })],
          },
        };
        onChange(mockEvent);
      }}
    >
      Mock Image Input
    </button>
  ),
}));

vi.mock("../ImageUploader", () => ({
  ImageUploader: ({
    onDelete,
    image,
  }: {
    onDelete: () => void;
    image: File;
  }) => (
    <div data-testid="mock-image-uploader" onClick={onDelete}>
      Mock Image Uploader: {image.name}
    </div>
  ),
}));

describe("ImageField component", () => {
  it("renders with single image mode correctly", () => {
    const mockSetImage = vi.fn();
    render(
      <ImageField image={null} setImage={mockSetImage}>
        Upload Image
      </ImageField>,
    );

    expect(screen.getByText("Upload Image")).toBeInTheDocument();
    expect(screen.getByTestId("mock-image-input")).toBeInTheDocument();
  });

  it("shows ImageUploader when an image is provided in single mode", () => {
    const mockSetImage = vi.fn();
    const mockFile = new File(["dummy content"], "example.png", {
      type: "image/png",
    });

    render(
      <ImageField image={mockFile} setImage={mockSetImage}>
        Upload Image
      </ImageField>,
    );

    expect(screen.getByTestId("mock-image-uploader")).toBeInTheDocument();
    expect(
      screen.getByText(`Mock Image Uploader: ${mockFile.name}`),
    ).toBeInTheDocument();
  });

  it("calls setImage with file when selecting an image", () => {
    const mockSetImage = vi.fn();

    render(
      <ImageField image={null} setImage={mockSetImage}>
        Upload Image
      </ImageField>,
    );

    fireEvent.click(screen.getByTestId("mock-image-input"));
    expect(mockSetImage).toHaveBeenCalledWith(expect.any(File));
  });

  it("calls setImage with null when deleting an image", () => {
    const mockSetImage = vi.fn();
    const mockFile = new File(["dummy content"], "example.png", {
      type: "image/png",
    });

    render(
      <ImageField image={mockFile} setImage={mockSetImage}>
        Upload Image
      </ImageField>,
    );

    fireEvent.click(screen.getByTestId("mock-image-uploader"));
    expect(mockSetImage).toHaveBeenCalledWith(null);
  });

  it("renders with multiple image mode correctly", () => {
    const mockSetImages = vi.fn();
    render(
      <ImageField images={[]} setImages={mockSetImages} multiple={true}>
        Upload Multiple Images
      </ImageField>,
    );

    expect(screen.getByText("Upload Multiple Images")).toBeInTheDocument();
    expect(screen.getByTestId("mock-image-input")).toBeInTheDocument();
  });

  it("shows ImageUploaders for each image in multiple mode", () => {
    const mockSetImages = vi.fn();
    const mockFiles = [
      new File(["dummy content 1"], "example1.png", { type: "image/png" }),
      new File(["dummy content 2"], "example2.png", { type: "image/png" }),
    ];

    render(
      <ImageField images={mockFiles} setImages={mockSetImages} multiple={true}>
        Upload Multiple Images
      </ImageField>,
    );

    expect(screen.getAllByTestId("mock-image-uploader").length).toBe(2);
    expect(
      screen.getByText(`Mock Image Uploader: ${mockFiles[0].name}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Mock Image Uploader: ${mockFiles[1].name}`),
    ).toBeInTheDocument();
  });

  it("calls setImages with files array when selecting images in multiple mode", () => {
    const mockSetImages = vi.fn();

    render(
      <ImageField images={[]} setImages={mockSetImages} multiple={true}>
        Upload Multiple Images
      </ImageField>,
    );

    fireEvent.click(screen.getByTestId("mock-image-input"));
    expect(mockSetImages).toHaveBeenCalledWith(expect.any(Array));
  });

  it("calls setImages with filtered array when deleting an image in multiple mode", () => {
    const mockSetImages = vi.fn();
    const mockFiles = [
      new File(["dummy content 1"], "example1.png", {
        type: "image/png",
        lastModified: 1,
      }),
      new File(["dummy content 2"], "example2.png", {
        type: "image/png",
        lastModified: 2,
      }),
    ];

    render(
      <ImageField images={mockFiles} setImages={mockSetImages} multiple={true}>
        Upload Multiple Images
      </ImageField>,
    );

    const uploaders = screen.getAllByTestId("mock-image-uploader");
    fireEvent.click(uploaders[0]);

    expect(mockSetImages).toHaveBeenCalledWith([mockFiles[1]]);
  });
});
