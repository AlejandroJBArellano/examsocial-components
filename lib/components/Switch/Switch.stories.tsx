import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Switch is a toggle component that allows users to turn an option on or off. It uses Radix UI for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

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

export const SmollSize: Story = {
  args: {
    size: "smoll",
    checked: false,
  },
};

export const SmollSizeChecked: Story = {
  args: {
    size: "smoll",
    checked: true,
  },
};

export const SmollSizeDisabled: Story = {
  args: {
    size: "smoll",
    disabled: true,
  },
};

export const SmollSizeDisabledChecked: Story = {
  args: {
    size: "smoll",
    disabled: true,
    checked: true,
  },
};

export const CustomClassName: Story = {
  args: {
    className: "bg-gray-200",
    checked: false,
  },
};

// Interactive example with state
const SwitchWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Switch
        checked={checked}
        onCheckedChange={(isChecked) => setChecked(isChecked as boolean)}
      />
      <span>{checked ? "On" : "Off"}</span>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <SwitchWithState />,
};

const SmollSwitchWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Switch
        size="smoll"
        checked={checked}
        onCheckedChange={(isChecked) => setChecked(isChecked as boolean)}
      />
      <span>{checked ? "On" : "Off"}</span>
    </div>
  );
};

export const InteractiveSmoll: Story = {
  render: () => <SmollSwitchWithState />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Switch checked={false} />
        <span>Off</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked={true} />
        <span>On</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch disabled />
        <span>Disabled Off</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch disabled checked />
        <span>Disabled On</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="smoll" checked={false} />
        <span>Smoll Off</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="smoll" checked={true} />
        <span>Smoll On</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="smoll" disabled />
        <span>Smoll Disabled Off</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="smoll" disabled checked />
        <span>Smoll Disabled On</span>
      </div>
      <SwitchWithState />
      <SmollSwitchWithState />
    </div>
  ),
};
