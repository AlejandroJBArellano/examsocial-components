import type { Meta, StoryObj } from "@storybook/react";
import SoonBadge from "./SoonBadge";

const meta: Meta<typeof SoonBadge> = {
  title: "Components/Badges/SoonBadge",
  component: SoonBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SoonBadge>;

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
