import type { Meta, StoryObj } from "@storybook/react";

import Description from "./Description";

export default {
  title: "Components/ExamDetail/Description",
  component: Description,
} as Meta;

type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {
    count: 4.8,
  },
};
