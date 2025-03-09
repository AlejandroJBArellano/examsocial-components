import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Smoll } from "../FontFaces";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

// Tipos para el componente
export type MenuItemSize = "default" | "md" | "xl" | "2xl";
export type MenuItemContent = "default" | "cta";

// Props para el componente
export interface MenuItemProps extends ComponentPropsWithoutRef<"a"> {
  /**
   * Icono a mostrar
   */
  icon?: string;
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

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  (
    {
      children,
      icon = "workspace_premium",
      isSelected = false,
      isCompressed = false,
      tooltipText,
      isCTA,
      ...props
    },
    ref,
  ) => {
    const CTAClasses = ` !text-black border-black bg-accent ${isSelected ? "hover:shadow-right" : "shadow-right-sm hover:border hover:shadow-right"}`;
    // Renderizar el botón
    const Anchor = (
      <a
        ref={ref}
        className={
          "flex flex-col place-items-center border-sm border-gray-600 px-4 py-1 text-gray-600 hover:border-gray-900 hover:text-gray-900 data-[selected]:border-primary-shadow data-[selected]:bg-primary-tint data-[selected]:text-primary-shadow md:px-6 md:py-2 xl:px-7 xl:py-5 2xl:px-8 2xl:py-6" +
          (isCTA ? CTAClasses : "")
        }
        data-testid="menu-item"
        data-selected={isSelected ? "true" : undefined}
        data-compressed={isCompressed}
        {...props}
      >
        <Icon name={icon} filled size={20} />
        <Smoll className="xl:hidden">{children}</Smoll>
      </a>
    );

    // Si se debe mostrar el tooltip, envolver el botón con el tooltip
    return (
      <Tooltip
        contentClassName="hidden xl:block"
        trigger={Anchor}
        side="right"
        align="center"
        theme={isCTA ? "accent" : undefined}
      >
        {tooltipText}
      </Tooltip>
    );
  },
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
