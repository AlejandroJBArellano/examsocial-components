import type { Meta, StoryObj } from "@storybook/react";

import SelectedQuestion from "./SelectedQuestion";

export default {
  title: "Components/SelectedQuestion",
  component: SelectedQuestion,
} as Meta;

type Story = StoryObj<typeof SelectedQuestion>;

export const Default: Story = {
  args: {
    questions: [
      {
        question: "What is the capital of France?",
        options: [
          { text: "Paris", correct: true },
          { text: "London" },
          { text: "Berlin" },
          { text: "Madrid" },
        ],
        _id: "1",
      },
    ],
  },
};
