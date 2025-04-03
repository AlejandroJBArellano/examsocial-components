import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "../Field";
import { PremiumWrapper } from "./PremiumWrapper";

const meta: Meta<typeof PremiumWrapper> = {
  title: "Components/Wrapper/PremiumWrapper",
  component: PremiumWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PremiumWrapper>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-80 p-4">
        <Field
          label="Premium Feature"
          inputProps={{
            placeholder: "This feature requires Premium",
          }}
        />
      </div>
    ),
    show: true,
    badgeSize: "small",
  },
};

export const BigBadge: Story = {
  args: {
    ...Default.args,
    badgeSize: "big",
  },
};

export const NotShown: Story = {
  args: {
    ...Default.args,
    show: false,
  },
};
