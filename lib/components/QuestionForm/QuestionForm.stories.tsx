import type { Meta, StoryObj } from "@storybook/react";

import QuestionForm from "./QuestionForm";

export default {
  title: "Components/QuestionForm",
  component: QuestionForm,
} as Meta;

type Story = StoryObj<typeof QuestionForm>;

export const Default: Story = {
  args: {},
};
