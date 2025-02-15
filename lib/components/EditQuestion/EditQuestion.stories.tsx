import type { Meta, StoryObj } from "@storybook/react";

import EditQuestion from "./EditQuestion";

export default {
  title: "Components/EditQuestion",
  component: EditQuestion,
} as Meta;

type Story = StoryObj<typeof EditQuestion>;

export const Default: Story = {
  args: {},
};
