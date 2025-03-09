import type { Meta, StoryObj } from "@storybook/react";
import { IconType } from "../FeaturesCarousel/FeaturesCarousel";
import ProfileCardSubscription from "./ProfileCardSubscription";

const meta: Meta<typeof ProfileCardSubscription> = {
  title: "Components/CTA/ProfileCardSubscription",
  component: ProfileCardSubscription,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ProfileCardSubscription is a component that displays a card with a subscription call-to-action and a carousel of features.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileCardSubscription>;

// Sample features data
const sampleFeatures = [
  {
    name: "Unlimited Exams",
    description: "Create as many exams as you want without any limitations.",
    icon: "school" as IconType,
  },
  {
    name: "Advanced Analytics",
    description: "Get detailed insights about your students' performance.",
    icon: "analytics" as IconType,
  },
  {
    name: "Custom Branding",
    description: "Add your own logo and colors to your exams.",
    icon: "palette" as IconType,
  },
  {
    name: "Export Results",
    description: "Download exam results in various formats.",
    icon: "download" as IconType,
  },
  {
    name: "Collaboration",
    description: "Work with other teachers on the same exam.",
    icon: "group" as IconType,
  },
  {
    name: "Question Bank",
    description: "Access a library of pre-made questions.",
    icon: "library_books" as IconType,
  },
];

// Default story
export const Default: Story = {
  args: {
    features: sampleFeatures,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default view of the ProfileCardSubscription component with multiple features.",
      },
    },
  },
};

// Story with few features
export const FewFeatures: Story = {
  args: {
    features: sampleFeatures.slice(0, 2),
  },
  parameters: {
    docs: {
      description: {
        story:
          "ProfileCardSubscription with only a few features, showing how the component adapts to less content.",
      },
    },
  },
};

// Story with many features
export const ManyFeatures: Story = {
  args: {
    features: [
      ...sampleFeatures,
      {
        name: "AI Question Generator",
        description: "Generate questions automatically using AI.",
        icon: "smart_toy" as IconType,
      },
      {
        name: "Priority Support",
        description: "Get help from our support team faster.",
        icon: "support_agent" as IconType,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "ProfileCardSubscription with many features, demonstrating the carousel functionality.",
      },
    },
  },
};
