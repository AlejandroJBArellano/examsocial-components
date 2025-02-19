import type { Meta, StoryObj } from "@storybook/react";
import Participants from "./Participants";

export default {
  title: "Components/Participants",
  component: Participants,
} as Meta<typeof Participants>;

type Story = StoryObj<typeof Participants>;

export const Default: Story = {
  args: {},
};
