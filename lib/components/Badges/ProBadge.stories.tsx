import type { Meta, StoryObj } from "@storybook/react";

import ProBadge from "./ProBadge";

export default {
  title: "Components/Badges/ProBadge",
  component: ProBadge,
} as Meta;

type Story = StoryObj<typeof ProBadge>;

export const Default: Story = {
  args: {
    size: "small",
  },
};

export const Big: Story = {
  args: {
    size: "big",
  },
};
