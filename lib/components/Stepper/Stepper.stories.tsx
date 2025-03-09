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
