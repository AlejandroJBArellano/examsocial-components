import type { Meta, StoryObj } from "@storybook/react";

import QRCode from "./QRCode";

export default {
  title: "Components/QRCode",
  component: QRCode,
} as Meta;

type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  args: {},
};
