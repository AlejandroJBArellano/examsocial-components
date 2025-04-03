import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "../Field";
import { ComingSoonWrapper } from "./ComingSoonWrapper";

const meta: Meta<typeof ComingSoonWrapper> = {
  title: "Components/Wrapper/ComingSoonWrapper",
  component: ComingSoonWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ComingSoonWrapper>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-80 p-4">
        <Field
          label="Example Field"
          inputProps={{
            placeholder: "Enter something here",
          }}
        />
      </div>
    ),
    badgeSize: "small",
  },
};

export const BigBadge: Story = {
  args: {
    ...Default.args,
    badgeSize: "big",
  },
};
