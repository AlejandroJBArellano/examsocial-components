import type { Meta, StoryObj } from "@storybook/react";
import Option from "./Option";

const meta: Meta<typeof Option> = {
  title: "Components/Option",
  component: Option,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Option is a component that displays a selectable option with radio button input. It's used for selecting answers in questions.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Option>;

export const Default: Story = {
  args: {
    option: {
      id: "option1",
      text: "Option 1",
    },
    selectAnswer: (id) => console.log("Selected option:", id),
  },
};

export const LongText: Story = {
  args: {
    option: {
      id: "option2",
      text: "This is a very long option text that demonstrates how the component handles longer content in the option.",
    },
    selectAnswer: (id) => console.log("Selected option:", id),
  },
};

export const WithCustomHandler: Story = {
  args: {
    option: {
      id: "option3",
      text: "Click me to see an alert",
    },
    selectAnswer: (id) => alert(`You selected option with ID: ${id}`),
  },
};

export const AllOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Option
        option={{ id: "option1", text: "Option 1" }}
        selectAnswer={(id) => console.log("Selected option:", id)}
      />
      <Option
        option={{ id: "option2", text: "Option 2" }}
        selectAnswer={(id) => console.log("Selected option:", id)}
      />
      <Option
        option={{ id: "option3", text: "Option 3" }}
        selectAnswer={(id) => console.log("Selected option:", id)}
      />
    </div>
  ),
};
