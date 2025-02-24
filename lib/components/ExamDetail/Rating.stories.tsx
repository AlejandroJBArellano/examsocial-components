import type { Meta, StoryObj } from "@storybook/react";

import Rating from "./Rating";

export default {
  title: "Components/Rating",
  component: Rating,
} as Meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    count: 4.8,
  },
};
