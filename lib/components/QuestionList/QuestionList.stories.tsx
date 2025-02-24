import type { Meta, StoryObj } from "@storybook/react";

import QuestionList from "./QuestionList";

export default {
  title: "Components/QuestionList",
  component: QuestionList,
} as Meta;

type Story = StoryObj<typeof QuestionList>;

export const Default: Story = {
  args: {},
};
