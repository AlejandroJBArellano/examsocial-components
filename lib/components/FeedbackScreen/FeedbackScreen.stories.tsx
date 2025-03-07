import type { Meta, StoryObj } from "@storybook/react";

import FeedbackScreen from "./FeedbackScreen";

export default {
  title: "Components/FeedbackScreen",
  component: FeedbackScreen,
} as Meta;

type Story = StoryObj<typeof FeedbackScreen>;

export const Default: Story = {
  args: {
    message:
      "Your commitment to understanding AI is impressive. Keep up the great progress!",
    condition: "GREATER_THAN",
    gt: 90,
    index: 0,
    onEdit: (index) => console.log(`Edit feedback at index ${index}`),
    onDelete: (index) => console.log(`Delete feedback at index ${index}`),
  },
};
