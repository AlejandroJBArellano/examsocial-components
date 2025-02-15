import type { Meta, StoryObj } from "@storybook/react";

import NewQuestion from "./NewQuestion";

export default {
  title: "Components/NewQuestion",
  component: NewQuestion,
} as Meta;

type Story = StoryObj<typeof NewQuestion>;

export const Default: Story = {
  args: {},
};
