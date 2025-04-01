import type { Meta, StoryObj } from "@storybook/react";

import QuestionSet from "./QuestionSet";

export default {
  title: "Components/QuestionSet",
  component: QuestionSet,
} as Meta;

type Story = StoryObj<typeof QuestionSet>;

export const Default: Story = {
  args: {
    title: "What is the capital of Nigeria?",
    id: "q1",
    options: [
      {
        text: "Lagos",
        correct: false,
        id: "o1",
      },
      {
        text: "Abuja",
        correct: true,
        id: "o2",
      },
      {
        text: "Kano",
        correct: false,
        id: "o3",
      },
      {
        text: "Ibadan",
        correct: false,
        id: "o4",
      },
    ],
  },
};
