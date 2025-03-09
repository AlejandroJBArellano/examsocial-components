import type { Meta, StoryObj } from "@storybook/react";
import CreateExam from "./CreateExam";

export default {
  title: "Components/CreateExam",
  component: CreateExam,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "CreateExam is a component that provides a user interface for creating new exams. It includes form fields and validation for exam creation.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof CreateExam>;

type Story = StoryObj<typeof CreateExam>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
};
