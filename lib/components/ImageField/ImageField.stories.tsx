import type { Meta, StoryObj } from "@storybook/react";

import ImageField from "./ImageField";

export default {
  title: "Components/ImageField",
  component: ImageField,
} as Meta;

type Story = StoryObj<typeof ImageField>;

export const Default: Story = {
  args: {
    children: "Image",
  },
};
