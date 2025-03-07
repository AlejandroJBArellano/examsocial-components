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
          "MenuItem es un componente que representa un elemento de menú con diferentes estados, tamaños y contenidos. Puede mostrar un icono y texto, o solo un icono en modo comprimido.",
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
  },
};

// Historia con todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Default</span>
          <MenuItem icon="workspace_premium">Go Pro</MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Medium</span>
          <MenuItem icon="workspace_premium" size="md">
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Large</span>
          <MenuItem icon="workspace_premium" size="xl">
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Extra Large</span>
          <MenuItem icon="workspace_premium" size="2xl">
            Go Pro
          </MenuItem>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Selected</span>
          <MenuItem icon="workspace_premium" isSelected>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Compressed</span>
          <MenuItem icon="workspace_premium" isCompressed>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">Compressed Selected</span>
          <MenuItem icon="workspace_premium" isCompressed isSelected>
            Go Pro
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">CTA</span>
          <MenuItem icon="list_alt_add" content="cta">
            Create
          </MenuItem>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">CTA Selected</span>
          <MenuItem icon="list_alt_add" content="cta" isSelected>
            Create
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">CTA Compressed</span>
          <MenuItem icon="list_alt_add" content="cta" isCompressed>
            Create
          </MenuItem>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">With Tooltip</span>
          <MenuItem
            icon="list_alt_add"
            size="xl"
            isCompressed
            tooltipText="Create new item"
          >
            Create
          </MenuItem>
        </div>
      </div>
    </div>
  ),
};
