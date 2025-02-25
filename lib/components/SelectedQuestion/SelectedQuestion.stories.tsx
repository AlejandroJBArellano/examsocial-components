import type { Meta, StoryObj } from "@storybook/react";

import SelectedQuestion from "./SelectedQuestion";

export default {
  title: "Components/SelectedQuestion",
  component: SelectedQuestion,
} as Meta;

type Story = StoryObj<typeof SelectedQuestion>;

export const Default: Story = {
  args: {},
};
