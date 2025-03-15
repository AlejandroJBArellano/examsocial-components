import type { Meta, StoryObj } from "@storybook/react";
import { RemoveFollower } from ".";
import { Button } from "../Button";

const meta = {
  title: "Components/RemoveFollower",
  component: RemoveFollower,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A dialog component for confirming the removal of a follower from a user's followers list.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    followerName: {
      control: "text",
      description: "The name of the follower to remove",
    },
    onRemove: {
      action: "removed",
      description: "Function called when removal is confirmed",
    },
    onCancel: {
      action: "cancelled",
      description: "Function called when removal is cancelled",
    },
    userHref: {
      control: "text",
      description: "The href of the user to remove",
    },
  },
} as Meta<typeof RemoveFollower>;

export default meta;
type Story = StoryObj<typeof RemoveFollower>;

// Example of using the RemoveFollower component with controls
export const Default: Story = {
  args: {
    followerName: "Jane Doe",
    userHref: "https://example.com",
  },
};

// Example with a trigger button to demonstrate full interaction
const RemoveFollowerWithTrigger = () => {
  const handleRemove = () => {
    console.log("User removed");
  };

  const handleCancel = () => {
    console.log("Removal cancelled");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={handleRemove}>Remove Follower</Button>
      <RemoveFollower
        followerName="Jane Doe"
        onRemove={handleRemove}
        onCancel={handleCancel}
        userHref="https://example.com"
      />
    </div>
  );
};

export const WithTrigger: Story = {
  render: () => <RemoveFollowerWithTrigger />,
};

// Example with different follower names
const followerExamples = [
  "Dr. Smith",
  "Professor Johnson",
  "Study Group Admin",
  "ClassMate42",
];

export const DifferentNames: Story = {
  render: () => (
    <div className="space-y-4">
      {followerExamples.map((name, index) => {
        return (
          <RemoveFollower
            key={index}
            followerName={name}
            onRemove={() => console.log("User removed")}
            onCancel={() => console.log("Removal cancelled")}
            userHref="https://example.com"
          />
        );
      })}
    </div>
  ),
};
