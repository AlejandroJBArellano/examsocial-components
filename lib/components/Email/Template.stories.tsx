import type { Meta, StoryObj } from "@storybook/react";
import EmailTemplate from "./Template";

export default {
  title: "Components/EmailTemplate",
  component: EmailTemplate,
} as Meta<typeof EmailTemplate>;

type Story = StoryObj<typeof EmailTemplate>;

export const Default: Story = {
  args: {},
};
