import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Profile is a button component that displays a user profile placeholder icon. It supports different genders and filled/unfilled states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    gender: {
      control: "select",
      options: ["male", "female"],
      description: "The gender of the profile placeholder",
    },
    filled: {
      control: "boolean",
      description: "Whether the profile placeholder is filled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const MaleUnfilled: Story = {
  args: {
    gender: "male",
    filled: false,
  },
};

export const MaleFilled: Story = {
  args: {
    gender: "male",
    filled: true,
  },
};

export const FemaleUnfilled: Story = {
  args: {
    gender: "female",
    filled: false,
  },
};

export const FemaleFilled: Story = {
  args: {
    gender: "female",
    filled: true,
  },
};

export const ProfileGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center">
        <Profile gender="male" filled={false} />
        <span className="mt-2 text-xs">Male (Unfilled)</span>
      </div>
      <div className="flex flex-col items-center">
        <Profile gender="male" filled={true} />
        <span className="mt-2 text-xs">Male (Filled)</span>
      </div>
      <div className="flex flex-col items-center">
        <Profile gender="female" filled={false} />
        <span className="mt-2 text-xs">Female (Unfilled)</span>
      </div>
      <div className="flex flex-col items-center">
        <Profile gender="female" filled={true} />
        <span className="mt-2 text-xs">Female (Filled)</span>
      </div>
    </div>
  ),
};
