import type { Meta, StoryObj } from "@storybook/react";
import PrivacySettings from "./PrivacySettings";

export default {
  title: "Components/PrivacySettings",
  component: PrivacySettings,
} as Meta<typeof PrivacySettings>;

type Story = StoryObj<typeof PrivacySettings>;

export const Default: Story = {
  args: {},
};
