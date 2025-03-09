import { ReactNode } from "react";
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
export const Navbar = ({ items }: NavbarProps) => {
  return (
    <nav>
      {/* Lista de elementos de navegación */}
      <ul className="mb-4 flex px-4">
        <li className="flex h-full w-4 border-y-sm border-black" key={-1} />
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
        <li
          className="flex h-full w-4 border-y-sm border-black"
          key={items.length}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
