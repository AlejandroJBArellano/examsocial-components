import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Select is a dropdown component that allows users to choose from a list of options. It uses Radix UI for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    text: "Select an option",
    children: (
      <>
        <Select.Option>Option 1</Select.Option>
        <Select.Option>Option 2</Select.Option>
        <Select.Option>Option 3</Select.Option>
      </>
    ),
  },
};

export const WithPreselectedOption: Story = {
  args: {
    text: "Option 2",
    children: (
      <>
        <Select.Option>Option 1</Select.Option>
        <Select.Option checked>Option 2</Select.Option>
        <Select.Option>Option 3</Select.Option>
      </>
    ),
  },
};

// Interactive example with state
const SelectWithState = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");

  return (
    <div className="w-64">
      <Select text={selectedOption}>
        <Select.Option
          checked={selectedOption === "Option 1"}
          onCheckedChange={() => setSelectedOption("Option 1")}
        >
          Option 1
        </Select.Option>
        <Select.Option
          checked={selectedOption === "Option 2"}
          onCheckedChange={() => setSelectedOption("Option 2")}
        >
          Option 2
        </Select.Option>
        <Select.Option
          checked={selectedOption === "Option 3"}
          onCheckedChange={() => setSelectedOption("Option 3")}
        >
          Option 3
        </Select.Option>
      </Select>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <SelectWithState />,
};

export const WithManyOptions: Story = {
  args: {
    text: "Select a country",
    children: (
      <>
        <Select.Option>United States</Select.Option>
        <Select.Option>Canada</Select.Option>
        <Select.Option>Mexico</Select.Option>
        <Select.Option>Brazil</Select.Option>
        <Select.Option>Argentina</Select.Option>
        <Select.Option>United Kingdom</Select.Option>
        <Select.Option>France</Select.Option>
        <Select.Option>Germany</Select.Option>
        <Select.Option>Spain</Select.Option>
        <Select.Option>Italy</Select.Option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    text: "Select an option",
    error: true,
    children: (
      <>
        <Select.Option>Option 1</Select.Option>
        <Select.Option>Option 2</Select.Option>
        <Select.Option>Option 3</Select.Option>
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium">Default</p>
        <Select text="Select an option">
          <Select.Option>Option 1</Select.Option>
          <Select.Option>Option 2</Select.Option>
          <Select.Option>Option 3</Select.Option>
        </Select>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">With Preselected Option</p>
        <Select text="Option 2">
          <Select.Option>Option 1</Select.Option>
          <Select.Option checked>Option 2</Select.Option>
          <Select.Option>Option 3</Select.Option>
        </Select>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Interactive</p>
        <SelectWithState />
      </div>
    </div>
  ),
};
