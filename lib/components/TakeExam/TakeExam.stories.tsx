import type { Meta, StoryObj } from "@storybook/react";

import TakeExam from "./TakeExam";

export default {
  title: "Components/TakeExam",
  component: TakeExam,
} as Meta;

type Story = StoryObj<typeof TakeExam>;

export const Default: Story = {
  args: {},
};
