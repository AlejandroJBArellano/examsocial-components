import type { Meta, StoryObj } from "@storybook/react";

import FeedbackScreen from "./FeedbackScreen";

export default {
  title: "Components/FeedbackScreen",
  component: FeedbackScreen,
} as Meta;

type Story = StoryObj<typeof FeedbackScreen>;

export const Default: Story = {
  args: {
    title: "More than 90",
    description:
      "Your commitment to understanding AI is impressive. Keep up the great progress!",
  },
};
