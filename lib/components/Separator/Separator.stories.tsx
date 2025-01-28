import type { Meta, StoryObj } from "@storybook/react";
import Separator from "./Separator";

export default {
  title: "Components/Separator",
  component: Separator,
} as Meta<typeof Separator>;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    children: "Invitees",
  },
};

export const CustomText: Story = {
  args: {
    children: "Hello World",
  },
};
