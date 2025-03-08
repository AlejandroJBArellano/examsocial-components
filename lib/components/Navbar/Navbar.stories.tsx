import { Person } from "@mui/icons-material";
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
          "Navbar es un componente de barra de navegación responsive que se adapta automáticamente a diferentes tamaños de pantalla. En pantallas pequeñas, los elementos se muestran comprimidos (solo iconos), mientras que en pantallas más grandes se muestran expandidos (iconos y texto).",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Componente de perfil de ejemplo
const ProfileComponent = () => (
  <div className="flex items-center gap-2">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200">
      <Person className="text-zinc-700" />
    </div>
  </div>
);

// Historia por defecto
export const Default: Story = {
  args: {
    items: [
      {
        label: "Home",
        icon: "home",
        isSelected: true,
      },
      {
        label: "Library",
        icon: "bookmark",
      },
      {
        label: "History",
        icon: "replay",
      },
      {
        label: "Create",
        icon: "list_alt_add",
        isCTA: true,
        tooltipText: "Create new exam",
      },
    ],
    profileComponent: <ProfileComponent />,
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
        label: "Home",
        icon: "home",
        isSelected: true,
      },
      {
        label: "Library",
        icon: "bookmark",
      },
      {
        label: "History",
        icon: "replay",
      },
      {
        label: "Create",
        icon: "list_alt_add",
        isCTA: true,
      },
    ],
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
        label: "Home",
        icon: "home",
        isSelected: true,
      },
      {
        label: "Library",
        icon: "bookmark",
      },
      {
        label: "History",
        icon: "replay",
      },
      {
        label: "Settings",
        icon: "edit",
      },
      {
        label: "Favorites",
        icon: "favorite",
      },
      {
        label: "Create",
        icon: "list_alt_add",
        isCTA: true,
      },
    ],
    profileComponent: <ProfileComponent />,
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
        label: "Home",
        icon: "home",
        isSelected: true,
        tooltipText: "Go to home page",
      },
      {
        label: "Library",
        icon: "bookmark",
        tooltipText: "View your library",
      },
      {
        label: "History",
        icon: "replay",
        tooltipText: "View your history",
      },
      {
        label: "Create",
        icon: "list_alt_add",
        isCTA: true,
        tooltipText: "Create new exam",
      },
    ],
    profileComponent: <ProfileComponent />,
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
