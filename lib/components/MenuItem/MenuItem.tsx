import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import { cn } from "../../utils";
import { Tooltip } from "../Tooltip";

// Tipos para el componente
export type MenuItemSize = "default" | "md" | "xl" | "2xl";
export type MenuItemContent = "default" | "cta";
export type MenuItemIcon =
  | "workspace_premium"
  | "list_alt_add"
  | "replay"
  | "add"
  | "edit"
  | "delete"
  | "favorite"
  | "bookmark";

// Props para el componente
export interface MenuItemProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Contenido del elemento de menú
   */
  children?: ReactNode;
  /**
   * Icono a mostrar
   */
  icon?: MenuItemIcon;
  /**
   * Tamaño del elemento de menú
   */
  size?: MenuItemSize;
  /**
   * Tipo de contenido
   */
  content?: MenuItemContent;
  /**
   * Si el elemento está seleccionado
   */
  isSelected?: boolean;
  /**
   * Si el elemento está comprimido (solo muestra el icono)
   */
  isCompressed?: boolean;
  /**
   * Texto del tooltip (solo visible en tamaños xl y 2xl cuando está comprimido)
   */
  tooltipText?: string;
  /**
   * Clase CSS personalizada
   */
  className?: string;
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      children,
      icon = "workspace_premium",
      size = "default",
      content = "default",
      isSelected = false,
      isCompressed = false,
      tooltipText,
      className,
      ...props
    },
    ref,
  ) => {
    // Determinar si se debe mostrar el tooltip
    const showTooltip =
      (size === "xl" || size === "2xl") && isCompressed && tooltipText;

    // Configurar tamaños de icono según el tamaño del componente
    const iconSize = {
      default: 20,
      md: 24,
      xl: 28,
      "2xl": 32,
    }[size];

    // Configurar estilos según el estado y tamaño
    const getContainerStyles = () => {
      // Estilos base según el tamaño
      const sizeStyles = {
        default: isCompressed
          ? "p-4 h-11 w-[70px]"
          : "px-4 py-3 h-12 gap-2 justify-end items-center",
        md: isCompressed
          ? "p-6 h-[60px] w-[86px] gap-1"
          : "px-6 py-4 h-14 gap-2 justify-end items-center",
        xl: isCompressed
          ? "p-7 h-[68px] w-[84px] gap-2"
          : "px-7 py-5 h-[68px] gap-2 justify-end items-center",
        "2xl": isCompressed
          ? "p-8 h-20 w-24 gap-2"
          : "px-8 py-6 h-20 gap-2 justify-end items-center",
      }[size];

      // Estilos según el tipo de contenido
      const contentStyles = content === "cta" ? "shadow-sm" : "";

      // Estilos según el estado de selección
      const selectedStyles = isSelected
        ? content === "cta"
          ? "bg-accent"
          : "bg-primary-tint"
        : "bg-white";

      return cn(
        "flex",
        isCompressed ? "flex-col items-center justify-center" : "flex-row",
        sizeStyles,
        contentStyles,
        selectedStyles,
        className,
      );
    };

    // Configurar estilos de texto según el tamaño
    const getTextStyles = () => {
      return cn(
        "font-medium",
        size === "default" && "text-base leading-6",
        size === "md" && "text-base leading-6",
        size === "xl" && "text-lg leading-7",
        size === "2xl" && "text-lg leading-7",
        isSelected ? "text-black" : "text-zinc-700",
        content === "cta" && "font-bold text-black",
      );
    };

    // Configurar estilos de icono
    const getIconStyles = () => {
      return cn(
        isSelected ? "text-black" : "text-zinc-700",
        content === "cta" && "text-black",
      );
    };

    // Renderizar el botón
    const button = (
      <button
        ref={ref}
        type="button"
        className={getContainerStyles()}
        data-testid="menu-item"
        data-selected={isSelected}
        data-compressed={isCompressed}
        data-content={content}
        {...props}
      >
        {content === "cta" ? (
          <>
            <MaterialSymbol
              icon={icon}
              size={iconSize}
              className={getIconStyles()}
            />
            {!isCompressed && (
              <span className={getTextStyles()}>{children}</span>
            )}
          </>
        ) : (
          <>
            {!isCompressed && (
              <span className={getTextStyles()}>{children}</span>
            )}
            <MaterialSymbol
              icon={icon}
              size={iconSize}
              className={getIconStyles()}
            />
          </>
        )}
      </button>
    );

    // Si se debe mostrar el tooltip, envolver el botón con el tooltip
    if (showTooltip) {
      return (
        <Tooltip trigger={button} side="right" align="center">
          {tooltipText}
        </Tooltip>
      );
    }

    // Si no se debe mostrar el tooltip, devolver solo el botón
    return button;
  },
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
