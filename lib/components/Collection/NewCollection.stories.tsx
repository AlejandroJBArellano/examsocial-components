import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { NewCollection } from "./NewCollection";

const meta: Meta<typeof NewCollection> = {
  title: "Components/Collection/New",
  component: NewCollection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewCollection>;

export const Default: Story = {
  args: {
    onSubmit: action("onSubmit"),
    onCancel: action("onCancel"),
  },
  render: (args: Story["args"]) => {
    return <NewCollection {...args} />;
  },
};
