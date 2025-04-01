import type { Meta, StoryObj } from "@storybook/react";
import CreateExam from "./CreateExam";

export default {
  title: "Components/CreateExam",
  component: CreateExam,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "CreateExam is a component that provides a user interface for creating new exams. It includes form fields and validation for exam creation.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof CreateExam>;

type Story = StoryObj<typeof CreateExam>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "BASIC",
    canSellExams: false,
    validatePathname: async () => true,
  },
};

export const ProPlan: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "PRO",
    canSellExams: false,
    validatePathname: async () => true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with Pro plan features unlocked but selling capability disabled.",
      },
    },
  },
};

export const PremiumPlan: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: false,
    validatePathname: async () => false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with Premium plan features unlocked but selling capability disabled.",
      },
    },
  },
};

export const WithSellingEnabled: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with Premium plan and selling capability enabled, allowing the user to set a price for their exam.",
      },
    },
  },
};

export const WithConsoleLogger: Story = {
  args: {
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
    onCancel: () => {
      console.log("Exam creation cancelled");
    },
    userPlan: "BASIC",
    canSellExams: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with console logging for form submission and cancel actions.",
      },
    },
  },
};

export const WithPrefilledValues: Story = {
  args: {
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
    onCancel: () => {},
    userPlan: "PRO",
    canSellExams: false,
    initialValues: {
      title: "Sample Exam Title",
      description:
        "This is a sample exam description with some pre-filled values.",
      image: "https://placekitten.com/800/400",
      category: "COMPUTER_SCIENCE",
      questions: [],
      contents: [],
      currency: "USD",
      price: 0,
      advancedSettings: {
        randomizeQuestionOrder: false,
        showCorrectAnswers: true,
        sendEmailReport: true,
        leaderboard: true,
        maxAttempts: 1,
        passingScore: 80,
        feedback: [],
        privacy: {
          setting: "PRIVATE",
          invitees: [],
          password: "",
        },
        timing: {
          setting: "TIMED",
          hours: 1,
          minutes: 30,
          seconds: 0,
        },
        theme: "INDUSTRIAL_EDGE",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with pre-filled values to demonstrate form initialization.",
      },
    },
  },
};

export const CustomStepInteractions: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with custom step change callbacks to demonstrate interaction handling.",
      },
    },
    playFunction: () => {
      console.log("Demonstrating custom step interactions");
    },
  },
};
