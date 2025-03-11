import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import ImageInput from "./ImageInput";

const meta: Meta<typeof ImageInput> = {
  title: "Components/ImageInput",
  component: ImageInput,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "ImageInput is a component that allows users to upload and preview images. It supports drag and drop functionality and displays a preview of the selected image. When files are dragged over the component, a special UI appears showing 'Drop it like it's hot'.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  args: {},
};

export const WithOnChangeHandler: Story = {
  args: {
    onChange: (e) => {
      if (e.target.files && e.target.files.length > 0) {
        console.log("Selected file:", e.target.files[0].name);
        // In a real app, you would process the file here
      }
    },
  },
};

// Interactive example with custom handler that shows a preview
const InteractiveImageInput = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-medium">Drag & Drop Demo</h3>
        <p className="mb-2 text-sm text-gray-600">
          You can either click to select a file or drag and drop an image file
          onto the input area. When dragging a file over the component, a
          special UI will appear.
        </p>
      </div>

      <ImageInput onChange={handleImageChange} />

      {previewUrl && (
        <div className="mt-4">
          <h3 className="mb-2 text-sm font-medium">Preview:</h3>
          <div className="flex items-start gap-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-xs rounded-md shadow-md"
              style={{ maxHeight: "200px" }}
            />
            <div>
              <p className="text-sm font-medium">File name: {fileName}</p>
              <p className="mt-1 text-xs text-gray-500">
                Try dropping another image to replace this one
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const DragAndDropExample: Story = {
  render: () => <InteractiveImageInput />,
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates the drag and drop functionality. Try dragging an image file over the component to see the special UI, then drop it to upload.",
      },
    },
  },
};

export const InteractiveExample: Story = {
  render: () => <InteractiveImageInput />,
};
