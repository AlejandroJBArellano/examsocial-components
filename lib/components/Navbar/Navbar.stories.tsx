import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Navbar is a responsive navigation bar component that automatically adapts to different screen sizes. On small screens, elements are displayed in a compressed format (icons only), while on larger screens they are shown expanded (icons and text).",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Historia por defecto
export const Default: Story = {
  args: {
    items: [
      {
        children: "Home",
        icon: "home",
        isSelected: true,
        href: "/",
        tooltipText: "Home",
      },
      {
        children: "Library",
        icon: "bookmark",
        href: "/library",
        tooltipText: "Library",
      },
      {
        children: "History",
        icon: "replay",
        href: "/history",
        tooltipText: "History",
      },
      {
        children: "Create",
        icon: "list_alt_add",
        isCTA: true,
        tooltipText: "Create new exam",
        href: "/create",
      },
    ],
    profileInfo: {
      gender: "male",
      name: "John Doe",
      href: "/profile",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo básico de la barra de navegación con elementos de navegación y un componente de perfil. Redimensiona la ventana para ver cómo se adapta a diferentes tamaños de pantalla.",
      },
    },
  },
};

// Historia sin componente de perfil
export const WithoutProfile: Story = {
  args: {
    items: [
      {
        children: "Home",
        icon: "home",
        isSelected: true,
        href: "/",
      },
      {
        children: "Library",
        icon: "bookmark",
        href: "/library",
      },
      {
        children: "History",
        icon: "replay",
        href: "/history",
      },
      {
        children: "Create",
        icon: "list_alt_add",
        isCTA: true,
        href: "/create",
      },
    ],
    profileInfo: {
      gender: "male",
      name: "John Doe",
      href: "/profile",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de la barra de navegación sin componente de perfil.",
      },
    },
  },
};

// Historia con muchos elementos
export const WithManyItems: Story = {
  args: {
    items: [
      {
        children: "Home",
        icon: "home",
        isSelected: true,
        href: "/",
      },
      {
        children: "Library",
        icon: "bookmark",
        href: "/library",
      },
      {
        children: "History",
        icon: "replay",
        href: "/history",
      },
      {
        children: "Settings",
        icon: "edit",
        href: "/settings",
      },
      {
        children: "Favorites",
        icon: "favorite",
        href: "/favorites",
      },
      {
        children: "Create",
        icon: "list_alt_add",
        isCTA: true,
        href: "/create",
      },
    ],
    profileInfo: {
      gender: "male",
      name: "John Doe",
      href: "/profile",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo de la barra de navegación con muchos elementos. En pantallas pequeñas, los elementos se muestran comprimidos para ahorrar espacio.",
      },
    },
  },
};

// Historia con tooltips en todos los elementos
export const WithTooltips: Story = {
  args: {
    items: [
      {
        children: "Home",
        icon: "home",
        isSelected: true,
        tooltipText: "Go to home page",
        href: "/",
      },
      {
        children: "Library",
        icon: "bookmark",
        tooltipText: "View your library",
        href: "/library",
      },
      {
        children: "History",
        icon: "replay",
        tooltipText: "View your history",
        href: "/history",
      },
      {
        children: "Create",
        icon: "list_alt_add",
        isCTA: true,
        tooltipText: "Create new exam",
        href: "/create",
      },
    ],
    profileInfo: {
      gender: "male",
      name: "John Doe",
      href: "/profile",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo de la barra de navegación con tooltips en todos los elementos. Los tooltips son visibles en pantallas pequeñas cuando los elementos están comprimidos.",
      },
    },
  },
};
