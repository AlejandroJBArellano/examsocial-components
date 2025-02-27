import type { Meta, StoryObj } from "@storybook/react";

import QuestionSet from "./QuestionSet";

export default {
  title: "Components/QuestionSet",
  component: QuestionSet,
} as Meta;

type Story = StoryObj<typeof QuestionSet>;

export const Default: Story = {
  args: {
    question: "What is the capital of Nigeria?",
    options: [
      {
        text: "Lagos",
        correct: false,
      },
      {
        text: "Abuja",
        correct: true,
      },
      {
        text: "Kano",
        correct: false,
      },
      {
        text: "Ibadan",
        correct: false,
      },
    ],
  },
};
