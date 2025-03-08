import type { Meta, StoryObj } from "@storybook/react";
import { IconExample } from "./IconExample";

const meta: Meta<typeof IconExample> = {
  title: "Examples/IconExample",
  component: IconExample,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "IconExample is a demonstration component that showcases how to use the Icon component in different contexts and with various configurations.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconExample>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: "bg-gray-100 rounded-lg shadow-md",
  },
};
