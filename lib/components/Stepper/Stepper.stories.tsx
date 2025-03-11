import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";

/**
 * The Stepper component displays the current progress through a sequential process.
 * It can show completed, pending, warning, error, and disabled steps with optional tooltips.
 */
export default {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A stepper component that displays progress through a sequential process, such as exam questions or form steps.",
      },
    },
  },
  argTypes: {
    activeStep: {
      description: "The current active step (1-based index)",
      control: { type: "number" },
    },
    steps: {
      description:
        "Array of step objects with id, optional status, and tooltip",
    },
    allowManualStepChange: {
      description: "Whether users can jump to any step by clicking on it",
      control: { type: "boolean" },
    },
    time: {
      description: "Display a timer with the provided time string",
      control: { type: "text" },
    },
    showDivision: {
      description: "Whether to show the step division indicator (e.g., '3/5')",
      control: { type: "boolean" },
    },
    theme: {
      description: "Theme variant of the stepper",
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    onSelectStep: {
      description: "Callback function triggered when a step is selected",
      action: "step selected",
    },
    onReportExam: {
      description:
        "Callback function triggered when report exam button is clicked (secondary theme only)",
      action: "report exam clicked",
    },
  },
} as Meta<typeof Stepper>;

type Story = StoryObj<typeof Stepper>;

/**
 * Default stepper with 5 steps and the third step active.
 */
export const Default: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 2,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
  },
};

/**
 * Example showing all possible step statuses with tooltips.
 */
export const WithStepStatuses: Story = {
  args: {
    steps: [
      { id: 1, status: "completed", tooltip: "Completed step" },
      { id: 2, status: "pending", tooltip: "Current step" },
      { id: 3, status: "warning", tooltip: "Warning in this step" },
      { id: 4, status: "error", tooltip: "Error in this step" },
      { id: 5, status: "disabled", tooltip: "Disabled step" },
    ],
    activeStep: 2,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
  },
};

/**
 * Stepper with a title displayed.
 */
export const WithTitle: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 2,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
    children: "Exam Progress",
  },
};

/**
 * Stepper with time display and step division indicator.
 */
export const WithTimeAndDivision: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 3,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
    children: "Exam Progress",
    time: "15:30",
    showDivision: true,
  },
};

/**
 * Stepper with secondary theme, which includes a report exam button.
 */
export const SecondaryTheme: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 3,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
    children: "Exam Progress",
    time: "15:30",
    showDivision: true,
    theme: "secondary",
    onReportExam: () => alert("Report exam clicked"),
  },
};

/**
 * Stepper that allows users to manually navigate by clicking on steps.
 */
export const AllowManualStepChange: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 3,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
    allowManualStepChange: true,
    children: "Exam Progress - Click steps to navigate",
  },
};
