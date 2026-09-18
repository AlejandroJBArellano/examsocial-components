import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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

// Historia Variante Bottom (Dock Móvil)
export const BottomDock: Story = {
  args: {
    variant: "bottom",
    items: [
      {
        children: "Home",
        isLogo: true,
        href: "/",
      },
      {
        children: "Create",
        icon: "draw",
        href: "/create",
        isSelected: true,
      },
      {
        children: "Library",
        icon: "auto_stories",
        href: "/library",
      },
      {
        children: "History",
        icon: "history",
        href: "/history",
      },
    ],
    profileInfo: {
      gender: "male",
      name: "Alex",
      picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      href: "/profile",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante 'bottom' diseñada específicamente para docks de navegación inferior en dispositivos móviles, con soporte para Logo, iconos apilados y fotos de perfil reales.",
      },
    },
  },
};

// Historia Bottom Dock con botón Más/Menú interactivo
export const BottomDockWithMore: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-full max-w-md mx-auto flex flex-col border border-black rounded-lg overflow-hidden bg-white shadow-lg">
        <div className="p-8 text-center text-gray-500">
          <p className="font-semibold text-black mb-2">Simulación de pantalla móvil</p>
          <p className="text-sm">
            {isOpen ? "Menú lateral / Drawer abierto" : "Haz clic en 'Menu' abajo"}
          </p>
        </div>
        <Navbar
          variant="bottom"
          items={[
            {
              children: "AdaQuest",
              isLogo: true,
              href: "/",
            },
            {
              children: "Create",
              icon: "draw",
              href: "/create",
              isSelected: true,
            },
            {
              children: "Library",
              icon: "auto_stories",
              href: "/library",
            },
          ]}
          moreButton={{
            isOpen,
            onClick: () => setIsOpen(!isOpen),
          }}
          profileInfo={{
            gender: "female",
            name: "Sarah",
            picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
            href: "/profile",
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demostración de la barra inferior con botón 'Menu' interactivo, ideal para abrir el Drawer de opciones secundarias.",
      },
    },
  },
};

