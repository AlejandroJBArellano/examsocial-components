import type { Meta, StoryObj } from "@storybook/react";
import ReviewQuestionSet from "./ReviewQuestionSet";

export default {
  title: "Components/ReviewQuestionSet",
  component: ReviewQuestionSet,
} as Meta<typeof ReviewQuestionSet>;

type Story = StoryObj<typeof ReviewQuestionSet>;

export const Default: Story = {
  args: {
    correct: true,
    selected: 0,
    question: {
      title: "What is the capital of France?",
      _id: "q1",
      options: [
        { text: "Paris", correct: true, _id: "o1" },
        { text: "London", correct: false, _id: "o2" },
        { text: "Berlin", correct: false, _id: "o3" },
        { text: "Madrid", correct: false, _id: "o4" },
      ],
    },
  },
};
