import type { Meta, StoryObj } from "@storybook/react";

import UsersCount from "./UsersCount";

export default {
  title: "Components/UsersCount",
  component: UsersCount,
} as Meta;

type Story = StoryObj<typeof UsersCount>;

export const Default: Story = {
  args: {},
};
