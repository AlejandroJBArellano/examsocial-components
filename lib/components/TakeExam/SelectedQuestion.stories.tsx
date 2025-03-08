import type { Meta, StoryObj } from "@storybook/react";

import { v4 as uuidv4 } from "uuid";
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
          { text: "Paris", correct: true, _id: uuidv4() },
          { text: "London", _id: uuidv4() },
          { text: "Berlin", _id: uuidv4() },
          { text: "Madrid", _id: uuidv4() },
        ],
        _id: uuidv4(),
      },
      {
        question: "What is the largest planet in our solar system?",
        options: [
          { text: "Jupiter", correct: true, _id: uuidv4() },
          { text: "Saturn", _id: uuidv4() },
          { text: "Earth", _id: uuidv4() },
          { text: "Mars", _id: uuidv4() },
        ],
        _id: uuidv4(),
      },
      {
        question: "What is the chemical symbol for water?",
        options: [
          { text: "H2O", correct: true, _id: uuidv4() },
          { text: "O2", _id: uuidv4() },
          { text: "CO2", _id: uuidv4() },
          { text: "H2", _id: uuidv4() },
        ],
        _id: uuidv4(),
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
          { text: "William Shakespeare", correct: true, _id: uuidv4() },
          { text: "Charles Dickens", _id: uuidv4() },
          { text: "Jane Austen", _id: uuidv4() },
          { text: "Mark Twain", _id: uuidv4() },
        ],
        _id: uuidv4(),
      },
      {
        question: "What is the speed of light?",
        options: [
          {
            text: "299,792,458 meters per second",
            correct: true,
            _id: uuidv4(),
          },
          { text: "150,000,000 meters per second", _id: uuidv4() },
          { text: "300,000,000 meters per second", _id: uuidv4() },
          { text: "299,792,000 meters per second", _id: uuidv4() },
        ],
        _id: uuidv4(),
      },
    ],
    selected: 0,
    setSelected: () => {},
  },
};
