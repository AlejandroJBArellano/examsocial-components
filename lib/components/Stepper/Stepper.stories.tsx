import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
} as Meta<typeof Stepper>;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 2,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
  },
};

export const FirstStepActive: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 1,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
  },
};

export const LastStepActive: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 5,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
  },
};

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

export const WithTitle: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 2,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
    children: "Exam Progress",
  },
};

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

export const AllowManualStepChange: Story = {
  args: {
    steps: Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })),
    activeStep: 3,
    onSelectStep: (step: number) => alert(`Step ${step} clicked`),
    allowManualStepChange: true,
    children: "Exam Progress - Click steps to navigate",
  },
};
