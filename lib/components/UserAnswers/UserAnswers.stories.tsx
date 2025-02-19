import type { Meta, StoryObj } from "@storybook/react";
import UserAnswers from "./UserAnswers";

export default {
  title: "Components/UserAnswers",
  component: UserAnswers,
} as Meta<typeof UserAnswers>;

type Story = StoryObj<typeof UserAnswers>;

export const Default: Story = {
  args: {},
};
