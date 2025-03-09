import { ReactNode } from "react";
import MenuItem from "../MenuItem";

export interface NavbarItem {
  /**
   * Texto del elemento de navegación
   */
  label: string;
  /**
   * Icono a mostrar
   */
  icon: string;
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
export const Navbar = ({ items }: NavbarProps) => {
  return (
    <nav className="mb-4 flex justify-center border-y-sm border-black px-4 md:justify-between">
      <ul className="flex [&>li>button]:border-y-0">
        {items.map((item, index) => (
          <li key={index}>
            <MenuItem
              icon={item.icon}
              isSelected={item.isSelected}
              isCTA={item.isCTA}
              tooltipText={item.tooltipText}
              onClick={item.onClick}
            >
              {item.label}
            </MenuItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
