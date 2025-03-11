import type { Meta, StoryObj } from "@storybook/react";

import UsersCount from "./UsersCount";

export default {
  title: "Components/ExamDetail/UsersCount",
  component: UsersCount,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

type Story = StoryObj<typeof UsersCount>;

export const Default: Story = {
  args: {},
};
