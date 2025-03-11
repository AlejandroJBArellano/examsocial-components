import type { Meta, StoryObj } from "@storybook/react";

import ImageInput from "./ImageInput";

export default {
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
} as Meta;

type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  args: {},
};
