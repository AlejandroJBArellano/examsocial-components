import type { Meta, StoryObj } from "@storybook/react";

import QRCodeCard from "./QRCodeCard";

export default {
  title: "Components/ExamDetail/QRCodeCard",
  component: QRCodeCard,
} as Meta;

type Story = StoryObj<typeof QRCodeCard>;

export const Default: Story = {
  args: {},
};
