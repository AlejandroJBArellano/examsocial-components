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
    _id: "q1",
    options: [
      {
        text: "Lagos",
        correct: false,
        _id: "o1",
      },
      {
        text: "Abuja",
        correct: true,
        _id: "o2",
      },
      {
        text: "Kano",
        correct: false,
        _id: "o3",
      },
      {
        text: "Ibadan",
        correct: false,
        _id: "o4",
      },
    ],
  },
};
