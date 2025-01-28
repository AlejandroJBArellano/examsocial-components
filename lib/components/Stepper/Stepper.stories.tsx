import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
} as Meta<typeof Stepper>;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    steps: 5,
    activeStep: 2,
    onClickStep: (step: number) => alert(`Step ${step} clicked`),
  },
};

export const FirstStepActive: Story = {
  args: {
    steps: 5,
    activeStep: 1,
    onClickStep: (step: number) => alert(`Step ${step} clicked`),
  },
};

export const LastStepActive: Story = {
  args: {
    steps: 5,
    activeStep: 5,
    onClickStep: (step: number) => alert(`Step ${step} clicked`),
  },
};
