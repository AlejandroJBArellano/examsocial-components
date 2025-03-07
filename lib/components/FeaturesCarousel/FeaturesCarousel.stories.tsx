import type { Meta, StoryObj } from "@storybook/react";
import FeaturesCarousel, { IconType } from "./FeaturesCarousel";

const meta: Meta<typeof FeaturesCarousel> = {
  title: "Components/FeaturesCarousel",
  component: FeaturesCarousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "FeaturesCarousel es un componente que muestra un carrusel de características con dos variantes: 'cancel' y 'subscribe'.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturesCarousel>;

// Datos de ejemplo para las características
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
];

// Historia: Variante Cancel
export const Cancel: Story = {
  args: {
    type: "cancel",
    features: sampleFeatures,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Esta variante muestra un mensaje de cancelación y las características que se perderán al cancelar la membresía.",
      },
    },
  },
};

// Historia: Variante Subscribe
export const Subscribe: Story = {
  args: {
    type: "subscribe",
    features: sampleFeatures,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Esta variante muestra un mensaje de suscripción y las características que se obtendrán al suscribirse.",
      },
    },
  },
};

// Historia: Con pocas características
export const FewFeatures: Story = {
  args: {
    type: "subscribe",
    features: sampleFeatures.slice(0, 3),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Esta historia muestra el componente con pocas características, lo que resulta en un solo indicador de diapositiva.",
      },
    },
  },
};
