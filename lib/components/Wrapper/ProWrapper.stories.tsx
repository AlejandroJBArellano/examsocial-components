import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "../Field";
import { ProWrapper } from "./ProWrapper";

const meta: Meta<typeof ProWrapper> = {
  title: "Components/Wrapper/ProWrapper",
  component: ProWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProWrapper>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-80 p-4">
        <Field
          label="Pro Feature"
          inputProps={{
            placeholder: "This feature requires Pro",
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
