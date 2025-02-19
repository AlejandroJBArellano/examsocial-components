import type { Meta, StoryObj } from "@storybook/react";
import QuestionDetail from "./QuestionDetail";

export default {
  title: "Components/QuestionDetail",
  component: QuestionDetail,
} as Meta<typeof QuestionDetail>;

type Story = StoryObj<typeof QuestionDetail>;

export const Default: Story = {
  args: {},
};
