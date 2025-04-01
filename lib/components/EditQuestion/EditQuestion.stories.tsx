import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { v4 as uuidv4 } from "uuid";
import EditQuestion from "./EditQuestion";

export default {
  title: "Components/EditQuestion",
  component: EditQuestion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "EditQuestion component allows users to modify existing exam questions with a form interface.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: {
      description: "Function called when the user submits the form",
      action: "submitted",
    },
    onCancel: {
      description: "Function called when the user cancels the form",
      action: "cancelled",
    },
    initialValues: {
      description: "The initial question data to edit",
    },
  },
} as Meta<typeof EditQuestion>;

type Story = StoryObj<typeof EditQuestion>;

// Helper function to create a mock question ID
const createMockId = () => uuidv4();

export const Default: Story = {
  args: {
    initialValues: {
      title: "What is the capital of France?",
      id: createMockId(),
      options: [
        { text: "Paris", correct: true, id: createMockId() },
        { text: "London", correct: false, id: createMockId() },
        { text: "Berlin", correct: false, id: createMockId() },
        { text: "Madrid", correct: false, id: createMockId() },
      ],
    },
    onCancel: action("Cancel button clicked"),
    onSubmit: action("Form submitted"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default view of the EditQuestion component with a basic geography question",
      },
    },
  },
};

export const WithMultipleCorrectAnswers: Story = {
  args: {
    initialValues: {
      title:
        "Which of the following are programming languages? (Select all that apply)",
      id: createMockId(),
      options: [
        { text: "JavaScript", correct: true, id: createMockId() },
        { text: "Python", correct: true, id: createMockId() },
        { text: "HTML", correct: false, id: createMockId() },
        { text: "CSS", correct: false, id: createMockId() },
      ],
    },
    onCancel: action("Cancel button clicked"),
    onSubmit: action("Form submitted"),
  },
  parameters: {
    docs: {
      description: {
        story: "Shows editing a question with multiple correct answers",
      },
    },
  },
};

export const WithLongerQuestion: Story = {
  args: {
    initialValues: {
      title:
        "In the context of web development, what is the primary purpose of React's virtual DOM and how does it improve performance compared to direct DOM manipulation?",
      id: createMockId(),
      options: [
        {
          text: "It creates a lightweight copy of the DOM in memory and compares it with the real DOM to minimize actual DOM updates",
          correct: true,
          id: createMockId(),
        },
        {
          text: "It bypasses the browser's rendering engine completely to make direct hardware-accelerated changes",
          correct: false,
          id: createMockId(),
        },
        {
          text: "It provides a way to write HTML directly in JavaScript files without performance penalties",
          correct: false,
          id: createMockId(),
        },
        {
          text: "It creates a separate thread for DOM operations to avoid blocking the main UI thread",
          correct: false,
          id: createMockId(),
        },
      ],
    },
    onCancel: action("Cancel button clicked"),
    onSubmit: action("Form submitted"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with a longer, more complex question and detailed answer options",
      },
    },
  },
};

export const WithFewerOptions: Story = {
  args: {
    initialValues: {
      title: "Is JavaScript a compiled or interpreted language?",
      id: createMockId(),
      options: [
        { text: "Interpreted", correct: true, id: createMockId() },
        { text: "Compiled", correct: false, id: createMockId() },
      ],
    },
    onCancel: action("Cancel button clicked"),
    onSubmit: action("Form submitted"),
  },
  parameters: {
    docs: {
      description: {
        story: "A simpler question with only two options (true/false style)",
      },
    },
  },
};
