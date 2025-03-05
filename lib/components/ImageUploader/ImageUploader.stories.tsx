import type { Meta, StoryObj } from "@storybook/react";

import ImageUploader from "./ImageUploader";

export default {
  title: "Components/ImageUploader",
  component: ImageUploader,
} as Meta;

type Story = StoryObj<typeof ImageUploader>;

export const Default: Story = {
  args: {
    image: new File([""], "image.png"),
  },
};
