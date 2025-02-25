import type { Meta, StoryObj } from "@storybook/react";

import Result from "./Result";

export default {
  title: "Components/Result",
  component: Result,
} as Meta;

type Story = StoryObj<typeof Result>;

export const Default: Story = {
  args: {
    count: 4.8,
  },
};
