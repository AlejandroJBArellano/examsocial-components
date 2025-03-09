import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { Smoll } from "../FontFaces";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

// Tipos para el componente
export type MenuItemSize = "default" | "md" | "xl" | "2xl";
export type MenuItemContent = "default" | "cta";

// Props para el componente
export interface MenuItemProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Contenido del elemento de menú
   */
  children?: ReactNode;
  /**
   * Icono a mostrar
   */
  icon?: string;
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
   * Si el elemento es un CTA
   */
  isCTA?: boolean;
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
      isCTA,
      ...props
    },
    ref,
  ) => {
    // Determinar si se debe mostrar el tooltip
    const shouldShowTooltip = () => {
      return (size === "xl" || size === "2xl") && isCompressed && tooltipText;
    };

    const CTAClasses = ` !text-black border-black bg-accent ${isSelected ? "hover:shadow-right" : "shadow-right-sm hover:border hover:shadow-right"}`;

    // Renderizar el botón
    const button = (
      <button
        ref={ref}
        type="button"
        className={
          "flex flex-col border-sm border-gray-600 px-4 py-1 text-gray-600 hover:border-gray-900 hover:text-gray-900 data-[selected='true']:border-primary-shadow data-[selected='true']:bg-primary-tint data-[selected='true']:text-primary-shadow md:px-6 md:py-2 xl:px-7 xl:py-5 2xl:px-8 2xl:py-6" +
          (isCTA ? CTAClasses : "")
        }
        data-testid="menu-item"
        data-selected={isSelected ? "true" : "false"}
        data-compressed={isCompressed}
        data-content={content}
        {...props}
      >
        <Icon name={icon} filled size={20} />
        <Smoll className="xl:hidden">{children}</Smoll>
      </button>
    );

    // Si se debe mostrar el tooltip, envolver el botón con el tooltip
    if (shouldShowTooltip()) {
      return (
        <Tooltip
          trigger={button}
          side="right"
          align="center"
          theme={isCTA ? "accent" : undefined}
        >
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
