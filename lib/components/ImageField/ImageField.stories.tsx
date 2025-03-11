import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ImageField from "./ImageField";

const meta: Meta<typeof ImageField> = {
  title: "Components/ImageField",
  component: ImageField,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "ImageField is a component that provides a complete solution for image upload with preview. It supports both single and multiple image modes. The component handles the image selection, preview, and deletion, with appropriate state management.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageField>;

// Single image mode component
const SingleImageFieldExample = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="p-4">
      <ImageField image={image} setImage={setImage}>
        Profile Image
      </ImageField>
    </div>
  );
};

// Multiple images mode component
const MultipleImageFieldExample = () => {
  const [images, setImages] = useState<File[]>([]);

  return (
    <div className="p-4">
      <ImageField images={images} setImages={setImages} multiple={true}>
        Gallery Images
      </ImageField>
    </div>
  );
};

export const SingleImage: Story = {
  render: () => <SingleImageFieldExample />,
};

export const MultipleImages: Story = {
  render: () => <MultipleImageFieldExample />,
};

// Static examples for documentation
export const SingleImageStatic: Story = {
  args: {
    children: "Profile Image",
    image: null,
    setImage: () => console.log("setImage called"),
  },
};

export const MultipleImagesStatic: Story = {
  args: {
    children: "Gallery Images",
    images: [],
    setImages: () => console.log("setImages called"),
    multiple: true,
  },
};
