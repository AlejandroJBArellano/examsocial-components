import type { Meta, StoryObj } from "@storybook/react";
import QuestionSet from "./QuestionSet";

export default {
  title: "Components/QuestionSet",
  component: QuestionSet,
  parameters: {
    docs: {
      description: {
        component:
          "A component for displaying multiple-choice questions with selectable options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onOptionSelect: { action: "option selected" },
    showAnswers: { control: "boolean" },
  },
} as Meta;

type Story = StoryObj<typeof QuestionSet>;

export const Default: Story = {
  args: {
    title: "What is the capital of Nigeria?",
    id: "q1",
    options: [
      { text: "Lagos", correct: false, id: "o1" },
      { text: "Abuja", correct: true, id: "o2" },
      { text: "Kano", correct: false, id: "o3" },
      { text: "Ibadan", correct: false, id: "o4" },
    ],
  },
};

export const WithExplanation: Story = {
  args: {
    ...Default.args,
    viewOnly: true,
    helperText:
      "Abuja has been the capital of Nigeria since December 12, 1991.",
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    image: "https://example.com/nigeria-map.jpg",
  },
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    helperText: "Choose the city that has been Nigeria's capital since 1991.",
  },
};
