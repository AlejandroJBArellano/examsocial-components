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
          "ImageInput is a component that allows users to upload and preview images. It supports drag and drop functionality and displays a preview of the selected image.",
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <ImageInput onChange={handleImageChange} />
      {previewUrl && (
        <div className="mt-4">
          <h3 className="mb-2 text-sm font-medium">Preview:</h3>
          <img
            src={previewUrl}
            alt="Preview"
            className="max-w-xs rounded-md shadow-md"
            style={{ maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export const InteractiveExample: Story = {
  render: () => <InteractiveImageInput />,
};
