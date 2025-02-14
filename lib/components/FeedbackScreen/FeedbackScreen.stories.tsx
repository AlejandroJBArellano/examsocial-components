import type { Meta, StoryObj } from "@storybook/react";

import FeedbackScreen from "./FeedbackScreen";

export default {
  title: "Components/FeedbackScreen",
  component: FeedbackScreen,
} as Meta;

type Story = StoryObj<typeof FeedbackScreen>;

export const Default: Story = {
  args: {
    title: "Feedback",
    description: "Please, provide your feedback",
  },
};
