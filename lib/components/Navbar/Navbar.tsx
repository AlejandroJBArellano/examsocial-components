import { ReactNode } from "react";
import { cn } from "../../utils";
import MenuItem, { MenuItemIcon } from "../MenuItem";

export interface NavbarItem {
  /**
   * Texto del elemento de navegación
   */
  label: string;
  /**
   * Icono a mostrar
   */
  icon: MenuItemIcon;
  /**
   * Si el elemento está seleccionado
   */
  isSelected?: boolean;
  /**
   * Si el elemento es de tipo CTA (Call to Action)
   */
  isCTA?: boolean;
  /**
   * Función a ejecutar al hacer clic en el elemento
   */
  onClick?: () => void;
  /**
   * Texto del tooltip (visible cuando está comprimido)
   */
  tooltipText?: string;
}

export interface NavbarProps {
  /**
   * Elementos de navegación
   */
  items: NavbarItem[];
  /**
   * Componente de perfil a mostrar en la barra de navegación
   */
  profileComponent?: ReactNode;
  /**
   * Clase CSS personalizada
   */
  className?: string;
}

/**
 * Componente de barra de navegación responsive
 *
 * Se adapta automáticamente a diferentes tamaños de pantalla:
 * - En móvil: Muestra los elementos comprimidos (solo iconos)
 * - En tablet/desktop: Muestra los elementos expandidos (iconos y texto)
 */
export const Navbar = ({ items, profileComponent, className }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "mb-4 flex w-full items-center justify-between bg-white",
        "px-4 py-2 shadow-sm sm:px-6",
        className,
      )}
    >
      {/* Lista de elementos de navegación */}
      <ul className="flex flex-row gap-1 sm:gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <MenuItem
              icon={item.icon}
              isSelected={item.isSelected}
              content={item.isCTA ? "cta" : "default"}
              isResponsive
              tooltipText={item.tooltipText}
              onClick={item.onClick}
            >
              {item.label}
            </MenuItem>
          </li>
        ))}
      </ul>

      {/* Componente de perfil (si existe) */}
      {profileComponent && (
        <div className="flex items-center">{profileComponent}</div>
      )}
    </nav>
  );
};

export default Navbar;
