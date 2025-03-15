import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { EditCollection } from "./EditCollection";

const meta: Meta<typeof EditCollection> = {
  title: "Components/Collection/Edit",
  component: EditCollection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditCollection>;

export const Default: Story = {
  args: {
    onSubmit: action("onSubmit"),
    onCancel: action("onCancel"),
    collection: {
      name: "Science Questions",
      _id: "col-123",
      description: "A collection of science-related questions",
      private: false,
    },
  },
  render: (args) => {
    return <EditCollection {...args} />;
  },
};

export const PrivateCollection: Story = {
  args: {
    onSubmit: action("onSubmit"),
    onCancel: action("onCancel"),
    collection: {
      name: "Private Notes",
      _id: "col-456",
      description: "My personal notes collection",
      private: true,
    },
  },
};
