import type { Meta, StoryObj } from "@storybook/react";

import { NewAdditionalContent } from "./New";

export default {
  title: "Components/NewAdditionalContent",
  component: NewAdditionalContent,
} as Meta;

type Story = StoryObj<typeof NewAdditionalContent>;

export const Default: Story = {
  args: {
    onSubmit: (values) => console.log(values),
    onCancel: () => console.log("Cancelled"),
  },
};
