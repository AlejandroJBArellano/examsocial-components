import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { cn } from "../../utils";
import { Icon } from "../Icon";
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
  | "bookmark"
  | "home";

const Icons: Record<MenuItemIcon, ReactNode> = {
  workspace_premium: <Icon name="workspace_premium" />,
  list_alt_add: <Icon name="list_alt" />,
  replay: <Icon name="replay" />,
  add: <Icon name="add" />,
  edit: <Icon name="edit" />,
  delete: <Icon name="delete" />,
  favorite: <Icon name="favorite" />,
  bookmark: <Icon name="bookmark" />,
  home: <Icon name="home" />,
};

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
   * Nota: Este valor puede ser anulado por los breakpoints responsive
   */
  isCompressed?: boolean;
  /**
   * Texto del tooltip (visible cuando está comprimido)
   */
  tooltipText?: string;
  /**
   * Clase CSS personalizada
   */
  className?: string;
  /**
   * Si el componente debe ser responsive (cambia entre comprimido/expandido según breakpoints)
   * Si es true, isCompressed solo se aplica en pantallas pequeñas
   */
  isResponsive?: boolean;
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
      isResponsive = true,
      ...props
    },
    ref,
  ) => {
    // Configurar tamaños de icono según el tamaño del componente
    // const iconSize = {
    //   default: 20,
    //   md: 24,
    //   xl: 28,
    //   "2xl": 32,
    // }[size];

    // Configurar estilos según el estado y tamaño
    const getContainerStyles = () => {
      // Estilos base según el tamaño
      const sizeStyles = {
        default: "h-11 sm:h-12",
        md: "h-[60px] sm:h-14",
        xl: "h-[68px]",
        "2xl": "h-20",
      }[size];

      // Estilos para el modo comprimido según el tamaño
      const compressedStyles = {
        default: "p-4 w-[70px]",
        md: "p-6 w-[86px] gap-1",
        xl: "p-7 w-[84px] gap-2",
        "2xl": "p-8 w-24 gap-2",
      }[size];

      // Estilos para el modo expandido según el tamaño
      const expandedStyles = {
        default: "px-4 py-3 gap-2 justify-end items-center",
        md: "px-6 py-4 gap-2 justify-end items-center",
        xl: "px-7 py-5 gap-2 justify-end items-center",
        "2xl": "px-8 py-6 gap-2 justify-end items-center",
      }[size];

      // Estilos según el tipo de contenido
      const contentStyles = content === "cta" ? "shadow-sm" : "";

      // Estilos según el estado de selección
      const selectedStyles = isSelected
        ? content === "cta"
          ? "bg-accent"
          : "bg-primary-tint"
        : "bg-white";

      // Estilos responsive
      const responsiveStyles = isResponsive
        ? "flex-col items-center justify-center sm:flex-row"
        : isCompressed
          ? "flex-col items-center justify-center"
          : "flex-row";

      // Estilos de padding y ancho responsive
      const responsivePaddingStyles = isResponsive
        ? `${compressedStyles} sm:${expandedStyles}`
        : isCompressed
          ? compressedStyles
          : expandedStyles;

      return cn(
        "flex",
        responsiveStyles,
        sizeStyles,
        responsivePaddingStyles,
        contentStyles,
        selectedStyles,
        "transition-all duration-200",
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
    // const getIconStyles = () => {
    //   return cn(
    //     isSelected ? "text-black" : "text-zinc-700",
    //     content === "cta" && "text-black",
    //   );
    // };

    // Determinar si se debe mostrar el texto
    const shouldShowText = () => {
      if (isResponsive) {
        // En modo responsive, el texto se oculta en móvil y se muestra en tablet/desktop
        return "hidden sm:inline-block";
      }
      // En modo no responsive, depende del prop isCompressed
      return isCompressed ? "hidden" : "inline-block";
    };

    // Determinar si se debe mostrar el tooltip
    const shouldShowTooltip = () => {
      if (isResponsive) {
        // En modo responsive, mostrar tooltip solo en pantallas pequeñas
        return (size === "xl" || size === "2xl") && tooltipText;
      }
      // En modo no responsive, mostrar tooltip solo si está comprimido
      return (size === "xl" || size === "2xl") && isCompressed && tooltipText;
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
        data-responsive={isResponsive}
        {...props}
      >
        {content === "cta" ? (
          <>
            {Icons[icon]}

            <span className={cn(getTextStyles(), shouldShowText())}>
              {children}
            </span>
          </>
        ) : (
          <>
            <span className={cn(getTextStyles(), shouldShowText())}>
              {children}
            </span>
            {Icons[icon]}
          </>
        )}
      </button>
    );

    // Si se debe mostrar el tooltip, envolver el botón con el tooltip
    if (shouldShowTooltip()) {
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
