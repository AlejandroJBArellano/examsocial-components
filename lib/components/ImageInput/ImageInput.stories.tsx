import type { Meta, StoryObj } from "@storybook/react";

import ImageInput from "./ImageInput";

export default {
  title: "Components/ImageInput",
  component: ImageInput,
} as Meta;

type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  args: {},
};
