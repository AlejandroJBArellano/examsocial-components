import type { Meta, StoryObj } from "@storybook/react";

import ReportExam from "./ReportExam";

export default {
  title: "Components/ReportExam",
  component: ReportExam,
} as Meta;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  args: {},
};
