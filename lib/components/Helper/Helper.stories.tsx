import type { Meta, StoryObj } from "@storybook/react";

import Helper from "./Helper";

export default {
  title: "Components/Helper",
  component: Helper,
} as Meta;

type Story = StoryObj<typeof Helper>;

export const Default: Story = {
  args: {
    align: "center",
    side: "top",
    children: "This is a helper component",
  },
};
