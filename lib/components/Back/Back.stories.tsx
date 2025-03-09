import type { Meta, StoryObj } from "@storybook/react";
import Back from "./Back";

const meta: Meta<typeof Back> = {
  title: "Components/Back",
  component: Back,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Back is a navigation component that displays an arrow icon followed by text. It's typically used for navigation to previous pages or sections.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Back>;

export const Default: Story = {
  args: {
    children: "Go Back",
  },
};

export const LongText: Story = {
  args: {
    children: "Return to Previous Page",
  },
};

export const ShortText: Story = {
  args: {
    children: "Back",
  },
};

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4 rounded-md bg-gray-100 p-4">
      <Back>Return to Dashboard</Back>
      <div className="rounded-md bg-white p-4">
        <h2 className="text-xl font-bold">Content Section</h2>
        <p>This shows the Back component in a typical page context.</p>
      </div>
    </div>
  ),
};
