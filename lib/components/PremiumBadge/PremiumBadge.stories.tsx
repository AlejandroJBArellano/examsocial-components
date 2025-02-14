import type { Meta, StoryObj } from "@storybook/react";

import PremiumBadge from "./PremiumBadge";

export default {
  title: "Components/PremiumBadge",
  component: PremiumBadge,
} as Meta;

type Story = StoryObj<typeof PremiumBadge>;

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
