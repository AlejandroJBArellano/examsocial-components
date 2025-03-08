import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Components/ExamDetail/Header",
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    count: 4.8,
  },
};
