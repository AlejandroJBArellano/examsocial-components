import type { Meta, StoryObj } from "@storybook/react";

import { NewAdditionalContent } from "./New";

export default {
  title: "Components/NewAdditionalContent",
  component: NewAdditionalContent,
} as Meta;

type Story = StoryObj<typeof NewAdditionalContent>;

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
