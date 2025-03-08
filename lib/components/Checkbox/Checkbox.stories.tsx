import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Checkbox is a component that allows users to select one or multiple options from a set. It uses Radix UI for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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
const CheckboxWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={(isChecked) => setChecked(isChecked as boolean)}
    />
  );
};

export const Interactive: Story = {
  render: () => <CheckboxWithState />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Checkbox checked={false} />
        <span>Unchecked</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox checked={true} />
        <span>Checked</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox disabled />
        <span>Disabled</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox disabled checked />
        <span>Disabled & Checked</span>
      </div>
      <div className="flex items-center gap-4">
        <CheckboxWithState />
        <span>Interactive (click me)</span>
      </div>
    </div>
  ),
};
