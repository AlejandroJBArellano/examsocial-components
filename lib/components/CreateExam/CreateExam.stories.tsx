import type { Meta, StoryObj } from "@storybook/react";
import CreateExam from "./CreateExam";

export default {
  title: "Components/CreateExam",
  component: CreateExam,
} as Meta<typeof CreateExam>;

type Story = StoryObj<typeof CreateExam>;

export const Default: Story = {
  args: {},
};
