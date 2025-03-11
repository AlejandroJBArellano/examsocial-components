import type { Meta, StoryObj } from "@storybook/react";
import EmailTemplate from "./Template";

export default {
  title: "Components/EmailTemplate",
  component: EmailTemplate,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A reusable email template component for the ExamSocial platform. This template provides consistent styling and branding for all transactional emails.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Add additional argTypes if parameters are added to the component
  },
} as Meta<typeof EmailTemplate>;

type Story = StoryObj<typeof EmailTemplate>;

/**
 * The default email template with standard branding elements.
 */
export const Default: Story = {
  args: {},
};
