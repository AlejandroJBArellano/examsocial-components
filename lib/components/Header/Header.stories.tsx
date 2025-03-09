import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header is a component that displays the logo and a call-to-action button at the top of the page. It's typically used as the main navigation header for the application.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};

export const WithCustomButtonText: Story = {
  render: () => (
    <div className="bg-white">
      <Header>
        <Button theme="accent">Sign Up</Button>
      </Header>
    </div>
  ),
};

export const WithCustomTheme: Story = {
  render: () => (
    <div className="bg-white">
      <Header>
        <Button theme="primary">Login</Button>
      </Header>
    </div>
  ),
};

export const WithoutButton: Story = {
  render: () => (
    <div className="bg-white">
      <Header>
        <Button theme="accent">Sign Up</Button>
      </Header>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="overflow-hidden rounded-md border">
        <h3 className="bg-gray-100 p-2 font-medium">Default Header</h3>
        <div className="bg-white p-4">
          <Header />
        </div>
      </div>

      <div className="overflow-hidden rounded-md border">
        <h3 className="bg-gray-100 p-2 font-medium">
          Header with Custom Button Text
        </h3>
        <div className="bg-white p-4">
          <Header>
            <Button theme="accent">Sign Up</Button>
          </Header>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border">
        <h3 className="bg-gray-100 p-2 font-medium">
          Header with Primary Button Theme
        </h3>
        <div className="bg-white p-4">
          <Header>
            <Button theme="primary">Login</Button>
          </Header>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border">
        <h3 className="bg-gray-100 p-2 font-medium">Header without Button</h3>
        <div className="bg-white p-4">
          <Header>
            <Button theme="accent">Sign Up</Button>
          </Header>
        </div>
      </div>
    </div>
  ),
};
