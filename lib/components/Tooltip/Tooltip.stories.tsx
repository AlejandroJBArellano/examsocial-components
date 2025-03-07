import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: "This is a tooltip",
    trigger: (
      <button className="rounded-md border-2 border-black bg-white px-4 py-2">
        Hover me
      </button>
    ),
    align: "center",
    side: "top",
  },
};

export const Left: Story = {
  args: {
    children: "This is a tooltip on the left",
    trigger: (
      <button className="rounded-md border-2 border-black bg-white px-4 py-2">
        Hover me
      </button>
    ),
    align: "center",
    side: "left",
  },
};

export const Right: Story = {
  args: {
    children: "This is a tooltip on the right",
    trigger: (
      <button className="rounded-md border-2 border-black bg-white px-4 py-2">
        Hover me
      </button>
    ),
    align: "center",
    side: "right",
  },
};

export const Bottom: Story = {
  args: {
    children: "This is a tooltip on the bottom",
    trigger: (
      <button className="rounded-md border-2 border-black bg-white px-4 py-2">
        Hover me
      </button>
    ),
    align: "center",
    side: "bottom",
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-1">
        <p className="font-bold">Custom tooltip</p>
        <p>With multiple lines of content</p>
      </div>
    ),
    trigger: (
      <button className="rounded-md border-2 border-black bg-white px-4 py-2">
        Hover me
      </button>
    ),
    align: "center",
    side: "top",
  },
};
