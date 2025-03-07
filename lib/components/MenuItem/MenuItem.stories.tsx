import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "MenuItem es un componente que representa un elemento de menú con diferentes estados, tamaños y contenidos. Puede mostrar un icono y texto, o solo un icono en modo comprimido. Ahora incluye soporte para responsividad automática utilizando los breakpoints de Tailwind.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: [
        "workspace_premium",
        "list_alt_add",
        "replay",
        "add",
        "edit",
        "delete",
        "favorite",
        "bookmark",
      ],
    },
    size: {
      control: "select",
      options: ["default", "md", "xl", "2xl"],
    },
    content: {
      control: "select",
      options: ["default", "cta"],
    },
    isSelected: {
      control: "boolean",
    },
    isCompressed: {
      control: "boolean",
    },
    isResponsive: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// Historia por defecto
export const Default: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "default",
    content: "default",
    isSelected: false,
    isCompressed: false,
    isResponsive: false,
  },
};

// Historia con tamaño mediano
export const Medium: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "md",
    content: "default",
    isSelected: false,
    isCompressed: false,
    isResponsive: false,
  },
};

// Historia con tamaño grande
export const Large: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "xl",
    content: "default",
    isSelected: false,
    isCompressed: false,
    isResponsive: false,
  },
};

// Historia con tamaño extra grande
export const ExtraLarge: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "2xl",
    content: "default",
    isSelected: false,
    isCompressed: false,
    isResponsive: false,
  },
};

// Historia con elemento seleccionado
export const Selected: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "default",
    content: "default",
    isSelected: true,
    isCompressed: false,
    isResponsive: false,
  },
};

// Historia con elemento comprimido
export const Compressed: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "default",
    content: "default",
    isSelected: false,
    isCompressed: true,
    isResponsive: false,
  },
};

// Historia con elemento comprimido y seleccionado
export const CompressedSelected: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "default",
    content: "default",
    isSelected: true,
    isCompressed: true,
    isResponsive: false,
  },
};

// Historia con contenido CTA
export const CTA: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    size: "default",
    content: "cta",
    isSelected: false,
    isCompressed: false,
    isResponsive: false,
  },
};

// Historia con contenido CTA seleccionado
export const CTASelected: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    size: "default",
    content: "cta",
    isSelected: true,
    isCompressed: false,
    isResponsive: false,
  },
};

// Historia con contenido CTA comprimido
export const CTACompressed: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    size: "default",
    content: "cta",
    isSelected: false,
    isCompressed: true,
    isResponsive: false,
  },
};

// Historia con tooltip
export const WithTooltip: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    size: "xl",
    content: "cta",
    isSelected: false,
    isCompressed: true,
    tooltipText: "Create new item",
    isResponsive: false,
  },
};

// Historia con modo responsive
export const Responsive: Story = {
  args: {
    children: "Go Pro",
    icon: "workspace_premium",
    size: "default",
    content: "default",
    isSelected: false,
    isResponsive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Este elemento de menú cambia automáticamente entre modo comprimido en móvil (sm) y expandido en tablet/desktop (md y superiores). Redimensiona la ventana para ver el cambio.",
      },
    },
  },
};

// Historia con modo responsive y CTA
export const ResponsiveCTA: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    size: "default",
    content: "cta",
    isSelected: false,
    isResponsive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Este elemento de menú CTA cambia automáticamente entre modo comprimido en móvil (sm) y expandido en tablet/desktop (md y superiores). Redimensiona la ventana para ver el cambio.",
      },
    },
  },
};

// Historia con modo responsive y tooltip
export const ResponsiveWithTooltip: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    size: "xl",
    content: "cta",
    isSelected: false,
    tooltipText: "Create new item",
    isResponsive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Este elemento de menú muestra un tooltip en pantallas pequeñas cuando está en modo comprimido. Redimensiona la ventana para ver el cambio.",
      },
    },
  },
};

// Historia con todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Default</span>
          <MenuItem icon="workspace_premium" isResponsive={false}>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Medium</span>
          <MenuItem icon="workspace_premium" size="md" isResponsive={false}>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Large</span>
          <MenuItem icon="workspace_premium" size="xl" isResponsive={false}>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Extra Large</span>
          <MenuItem icon="workspace_premium" size="2xl" isResponsive={false}>
            Go Pro
          </MenuItem>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Selected</span>
          <MenuItem icon="workspace_premium" isSelected isResponsive={false}>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Compressed</span>
          <MenuItem icon="workspace_premium" isCompressed isResponsive={false}>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Compressed Selected</span>
          <MenuItem
            icon="workspace_premium"
            isCompressed
            isSelected
            isResponsive={false}
          >
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">CTA</span>
          <MenuItem icon="list_alt_add" content="cta" isResponsive={false}>
            Create
          </MenuItem>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">CTA Selected</span>
          <MenuItem
            icon="list_alt_add"
            content="cta"
            isSelected
            isResponsive={false}
          >
            Create
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">CTA Compressed</span>
          <MenuItem
            icon="list_alt_add"
            content="cta"
            isCompressed
            isResponsive={false}
          >
            Create
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">With Tooltip</span>
          <MenuItem
            icon="list_alt_add"
            size="xl"
            content="cta"
            isCompressed
            tooltipText="Create new item"
            isResponsive={false}
          >
            Create
          </MenuItem>
        </div>
      </div>

      <h3 className="mb-2 mt-4 text-lg font-bold">Responsive Variants</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Responsive Default</span>
          <MenuItem icon="workspace_premium" isResponsive>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Responsive Medium</span>
          <MenuItem icon="workspace_premium" size="md" isResponsive>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Responsive CTA</span>
          <MenuItem icon="list_alt_add" content="cta" isResponsive>
            Create
          </MenuItem>
        </div>
      </div>
    </div>
  ),
};

// Historia con ejemplo de navegación responsive
export const ResponsiveNavigation: Story = {
  render: () => (
    <div className="flex w-full max-w-4xl flex-col gap-4">
      <h3 className="text-lg font-bold">Ejemplo de Navegación Responsive</h3>
      <p className="mb-4 text-sm text-gray-600">
        Este ejemplo muestra cómo el componente MenuItem se adapta
        automáticamente a diferentes tamaños de pantalla. En pantallas pequeñas,
        los elementos se muestran comprimidos (solo iconos), mientras que en
        pantallas más grandes se muestran expandidos (iconos y texto).
        Redimensiona la ventana para ver el cambio.
      </p>

      {/* Navegación móvil (vertical) */}
      <div className="block sm:hidden">
        <div className="rounded-lg bg-white p-4 shadow">
          <h4 className="mb-2 text-sm font-bold">Vista Móvil (Vertical)</h4>
          <div className="flex flex-col gap-2">
            <MenuItem icon="home" isSelected isResponsive>
              Home
            </MenuItem>
            <MenuItem icon="list_alt_add" isResponsive>
              Exams
            </MenuItem>
            <MenuItem icon="replay" isResponsive>
              History
            </MenuItem>
            <MenuItem icon="favorite" isResponsive>
              Favorites
            </MenuItem>
            <MenuItem icon="workspace_premium" isResponsive>
              Go Pro
            </MenuItem>
          </div>
        </div>
      </div>

      {/* Navegación tablet/desktop (horizontal) */}
      <div className="hidden sm:block">
        <div className="rounded-lg bg-white p-4 shadow">
          <h4 className="mb-2 text-sm font-bold">
            Vista Tablet/Desktop (Horizontal)
          </h4>
          <div className="flex flex-row justify-between gap-2">
            <MenuItem icon="home" isSelected isResponsive>
              Home
            </MenuItem>
            <MenuItem icon="list_alt_add" isResponsive>
              Exams
            </MenuItem>
            <MenuItem icon="replay" isResponsive>
              History
            </MenuItem>
            <MenuItem icon="favorite" isResponsive>
              Favorites
            </MenuItem>
            <MenuItem icon="workspace_premium" isResponsive>
              Go Pro
            </MenuItem>
          </div>
        </div>
      </div>

      {/* Ejemplo de barra lateral */}
      <div className="mt-8">
        <h4 className="mb-2 text-sm font-bold">Ejemplo de Barra Lateral</h4>
        <div className="flex flex-row">
          {/* Barra lateral */}
          <div className="flex flex-col gap-4 rounded-l-lg bg-white p-2 shadow">
            <MenuItem icon="home" isSelected isResponsive>
              Home
            </MenuItem>
            <MenuItem icon="list_alt_add" isResponsive>
              Exams
            </MenuItem>
            <MenuItem icon="replay" isResponsive>
              History
            </MenuItem>
            <MenuItem icon="favorite" isResponsive>
              Favorites
            </MenuItem>
            <MenuItem
              icon="list_alt_add"
              content="cta"
              isResponsive
              tooltipText="Create new exam"
            >
              Create
            </MenuItem>
          </div>

          {/* Contenido principal */}
          <div className="flex-1 rounded-r-lg bg-gray-100 p-4">
            <div className="flex h-64 items-center justify-center rounded-lg bg-white p-4">
              <p className="text-gray-500">Contenido principal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Este ejemplo muestra cómo utilizar el componente MenuItem en un contexto de navegación real, aprovechando su capacidad responsive para adaptarse a diferentes tamaños de pantalla.",
      },
    },
  },
};
