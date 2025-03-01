import type { Meta, StoryObj } from "@storybook/react";
import TimingSettings from "./TimingSettings";

export default {
  title: "Components/TimingSettings",
  component: TimingSettings,
} as Meta<typeof TimingSettings>;

type Story = StoryObj<typeof TimingSettings>;

export const Default: Story = {
  args: {},
};
