import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import FeedbackScreen from "./FeedbackScreen";

export default {
  title: "Components/FeedbackScreen",
  component: FeedbackScreen,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "FeedbackScreen component displays customized messages based on the user's score or performance in an exam. It supports various conditions like 'greater than', 'less than', 'equal to', 'between', or 'all'.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onEdit: {
      description: "Function called when the user clicks the edit button",
      action: "edit clicked",
    },
    onDelete: {
      description: "Function called when the user clicks the delete button",
      action: "delete clicked",
    },
    message: {
      description: "The feedback message to display to the user",
      control: "text",
    },
    condition: {
      description: "The condition that triggers this feedback",
      control: {
        type: "select",
        options: ["ALL", "BETWEEN", "EQUAL_TO", "GREATER_THAN", "LESS_THAN"],
      },
    },
    index: {
      description: "The index of this feedback in the feedback array",
      control: "number",
    },
  },
} as Meta<typeof FeedbackScreen>;

type Story = StoryObj<typeof FeedbackScreen>;

export const GreaterThan: Story = {
  args: {
    message:
      "Your commitment to understanding AI is impressive. Keep up the great progress!",
    condition: "GREATER_THAN",
    gt: 90,
    index: 0,
    onEdit: action("Edit feedback clicked"),
    onDelete: action("Delete feedback clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Feedback shown when the user's score is greater than 90%",
      },
    },
  },
};

export const LessThan: Story = {
  args: {
    message:
      "You're still building your knowledge base. Keep studying and try again!",
    condition: "LESS_THAN",
    lt: 50,
    index: 1,
    onEdit: action("Edit feedback clicked"),
    onDelete: action("Delete feedback clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Feedback shown when the user's score is less than 50%",
      },
    },
  },
};

export const EqualTo: Story = {
  args: {
    message:
      "Perfect score! Your understanding of the subject matter is exceptional.",
    condition: "EQUAL_TO",
    equal: 100,
    index: 2,
    onEdit: action("Edit feedback clicked"),
    onDelete: action("Delete feedback clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Feedback shown when the user achieves exactly 100%",
      },
    },
  },
};

export const Between: Story = {
  args: {
    message:
      "Good effort! You have a solid foundation, but there's still room to grow.",
    condition: "BETWEEN",
    min: 70,
    max: 89,
    index: 3,
    onEdit: action("Edit feedback clicked"),
    onDelete: action("Delete feedback clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Feedback shown when the user's score is between 70% and 89%",
      },
    },
  },
};

export const All: Story = {
  args: {
    message:
      "Thank you for completing this exam! No matter your score, we appreciate your participation.",
    condition: "ALL",
    index: 4,
    onEdit: action("Edit feedback clicked"),
    onDelete: action("Delete feedback clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Default feedback shown to all users regardless of score",
      },
    },
  },
};

export const WithLongMessage: Story = {
  args: {
    message:
      "Your performance demonstrates a thorough understanding of the material. You've shown excellent knowledge and critical thinking skills. We encourage you to explore more advanced topics in this subject area to further enhance your expertise. Keep up the great work and continue challenging yourself!",
    condition: "GREATER_THAN",
    gt: 85,
    index: 5,
    onEdit: action("Edit feedback clicked"),
    onDelete: action("Delete feedback clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with a longer, more detailed feedback message",
      },
    },
  },
};
