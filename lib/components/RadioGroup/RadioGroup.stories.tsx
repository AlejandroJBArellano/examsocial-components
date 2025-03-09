import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    items: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    defaultValue: "option1",
  },
};

export const Horizontal: Story = {
  args: {
    items: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    defaultValue: "option1",
    orientation: "horizontal",
  },
};

export const WithDisabledOption: Story = {
  args: {
    items: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
    defaultValue: "option1",
  },
};

export const WithDisabledSelectedOption: Story = {
  args: {
    items: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
    defaultValue: "option2",
  },
};

export const CustomStyling: Story = {
  args: {
    items: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    defaultValue: "option1",
    className: "gap-4",
    itemClassName: "h-7 w-7 border-2",
    indicatorClassName: "after:h-3 after:w-3",
    labelClassName: "text-base font-bold text-gray-800",
  },
};
