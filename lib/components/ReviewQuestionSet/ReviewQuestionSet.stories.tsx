import type { Meta, StoryObj } from "@storybook/react";
import ReviewQuestionSet from "./ReviewQuestionSet";

export default {
  title: "Components/ReviewQuestionSet",
  component: ReviewQuestionSet,
} as Meta<typeof ReviewQuestionSet>;

type Story = StoryObj<typeof ReviewQuestionSet>;

export const Default: Story = {
  args: {
    correct: false,
    question: {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London" },
        { text: "Berlin" },
        { text: "Madrid" },
      ],
    },
  },
};
