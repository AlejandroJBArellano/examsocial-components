import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import AnswerToggle from "./AnswerToggle";

const meta: Meta<typeof AnswerToggle> = {
  title: "Components/AnswerToggle",
  component: AnswerToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "AnswerToggle is a component that displays a checkbox for toggling answers. It uses Radix UI for accessibility and shows a check icon when selected.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AnswerToggle>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

// Interactive example with state
const AnswerToggleWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <AnswerToggle
      checked={checked}
      onCheckedChange={(isChecked) => setChecked(isChecked as boolean)}
    />
  );
};

export const Interactive: Story = {
  render: () => <AnswerToggleWithState />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <AnswerToggle checked={false} />
        <span>Unchecked</span>
      </div>
      <div className="flex items-center gap-4">
        <AnswerToggle checked={true} />
        <span>Checked</span>
      </div>
      <div className="flex items-center gap-4">
        <AnswerToggle disabled />
        <span>Disabled</span>
      </div>
      <div className="flex items-center gap-4">
        <AnswerToggle disabled checked />
        <span>Disabled & Checked</span>
      </div>
      <div className="flex items-center gap-4">
        <AnswerToggleWithState />
        <span>Interactive (click me)</span>
      </div>
    </div>
  ),
};
