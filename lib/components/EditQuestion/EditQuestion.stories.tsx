import type { Meta, StoryObj } from "@storybook/react";

import EditQuestion from "./EditQuestion";

export default {
  title: "Components/EditQuestion",
  component: EditQuestion,
} as Meta;

type Story = StoryObj<typeof EditQuestion>;

export const Default: Story = {
  args: {
    initialValues: {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
      ],
    },
    onCancel: () => {},
    onSubmit: () => {},
  },
};
