import type { Meta, StoryObj } from "@storybook/react";
import ReviewQuestionSet from "./ReviewQuestionSet";

export default {
  title: "Components/ReviewQuestionSet",
  component: ReviewQuestionSet,
  parameters: {
    componentSubtitle:
      "A component that displays a question with the selected answer and feedback",
    docs: {
      description: {
        component:
          "ReviewQuestionSet displays a question, the selected answer, and indicates whether the answer was correct.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    correct: {
      control: "boolean",
      description: "Whether the selected answer is correct",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
      },
    },
    selected: {
      control: { type: "number", min: 0, max: 3 },
      description: "Index of the selected answer",
      table: {
        type: { summary: "number" },
      },
    },
    question: {
      description: "Question object with title and options",
      table: {
        type: { summary: "object" },
      },
    },
  },
} as Meta<typeof ReviewQuestionSet>;

type Story = StoryObj<typeof ReviewQuestionSet>;

// Base question for all stories
const baseQuestion = {
  title: "What is the capital of France?",
  _id: "q1",
  options: [
    { text: "Paris", correct: true, _id: "o1" },
    { text: "London", correct: false, _id: "o2" },
    { text: "Berlin", correct: false, _id: "o3" },
    { text: "Madrid", correct: false, _id: "o4" },
  ],
};

export const CorrectAnswer: Story = {
  args: {
    correct: true,
    selected: 0,
    question: baseQuestion,
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a question with a correct selected answer",
      },
    },
  },
};

export const IncorrectAnswer: Story = {
  args: {
    correct: false,
    selected: 1,
    question: baseQuestion,
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a question with an incorrect selected answer",
      },
    },
  },
};

export const LongQuestionTitle: Story = {
  args: {
    correct: true,
    selected: 0,
    question: {
      ...baseQuestion,
      title:
        "What is the capital of France? This is a very long question title that should wrap to multiple lines in order to test how the component handles long question titles.",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays a question with a long title to test wrapping behavior",
      },
    },
  },
};

export const ManyOptions: Story = {
  args: {
    correct: false,
    selected: 2,
    question: {
      ...baseQuestion,
      options: [
        { text: "Paris", correct: true, _id: "o1" },
        { text: "London", correct: false, _id: "o2" },
        { text: "Berlin", correct: false, _id: "o3" },
        { text: "Madrid", correct: false, _id: "o4" },
        { text: "Rome", correct: false, _id: "o5" },
        { text: "Brussels", correct: false, _id: "o6" },
        { text: "Amsterdam", correct: false, _id: "o7" },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays a question with many options to test how the list is rendered",
      },
    },
  },
};

export const LongOptionText: Story = {
  args: {
    correct: true,
    selected: 0,
    question: {
      ...baseQuestion,
      options: [
        {
          text: "Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres.",
          correct: true,
          _id: "o1",
        },
        { text: "London", correct: false, _id: "o2" },
        { text: "Berlin", correct: false, _id: "o3" },
        { text: "Madrid", correct: false, _id: "o4" },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays a question with long option text to test wrapping behavior",
      },
    },
  },
};
