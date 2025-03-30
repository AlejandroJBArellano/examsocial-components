import type { Meta, StoryObj } from "@storybook/react";
import PremiumBadge from "./PremiumBadge";

const meta: Meta<typeof PremiumBadge> = {
  title: "Components/Badges/PremiumBadge",
  component: PremiumBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PremiumBadge>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Big: Story = {
  args: {
    size: "big",
  },
};
