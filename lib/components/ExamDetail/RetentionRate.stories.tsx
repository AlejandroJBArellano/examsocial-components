import type { Meta, StoryObj } from "@storybook/react";
import RetentionRate from "./RetentionRate";

const meta: Meta<typeof RetentionRate> = {
  title: "Components/ExamDetail/RetentionRate",
  component: RetentionRate,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "RetentionRate is a component that displays completion statistics for an exam in a horizontal bar chart format. It shows the percentage of users who completed the exam, ran out of time, or quit.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RetentionRate>;

export const Default: Story = {
  args: {
    completed: 65,
    outOfTime: 20,
    quit: 15,
  },
};

export const MostlyCompleted: Story = {
  args: {
    completed: 80,
    outOfTime: 15,
    quit: 5,
  },
};

export const HighOutOfTime: Story = {
  args: {
    completed: 45,
    outOfTime: 40,
    quit: 15,
  },
};

export const HighDropOut: Story = {
  args: {
    completed: 35,
    outOfTime: 25,
    quit: 40,
  },
};

export const EvenDistribution: Story = {
  args: {
    completed: 33,
    outOfTime: 33,
    quit: 34,
  },
};

export const EdgeCase100Percent: Story = {
  args: {
    completed: 100,
    outOfTime: 0,
    quit: 0,
  },
};

export const EdgeCase0Percent: Story = {
  args: {
    completed: 0,
    outOfTime: 0,
    quit: 100,
  },
};
