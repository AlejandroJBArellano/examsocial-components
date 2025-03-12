import { ComponentPropsWithoutRef } from "react";
import { MenuItem } from "../MenuItem";
import Profile from "../Profile/Profile";
import { ProfilePlaceholderGender } from "../ProfilePlaceholder/ProfilePlaceholder";

export interface NavbarItem extends ComponentPropsWithoutRef<"a"> {
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
   * Información del perfil
   */
  profileInfo?: {
    gender: ProfilePlaceholderGender;
    name: string;
  };

  children?: React.ReactNode;
}

/**
 * Componente de barra de navegación responsive
 *
 * Se adapta automáticamente a diferentes tamaños de pantalla:
 * - En móvil: Muestra los elementos comprimidos (solo iconos)
 * - En tablet/desktop: Muestra los elementos expandidos (iconos y texto)
 */
export const Navbar = ({ items, profileInfo, children }: NavbarProps) => {
  return (
    <nav className="mb-4 flex justify-center border-y-sm border-black bg-white px-4 md:justify-between">
      <ul className="flex divide-x-sm divide-gray-600 [&>li>a]:border-0">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              (item.isSelected
                ? "flex place-items-center bg-primary-tint"
                : "") + " cursor-pointer"
            }
          >
            <MenuItem isCompressed {...item}>
              {item.children}
            </MenuItem>
          </li>
        ))}
      </ul>
      {profileInfo ? (
        <Profile
          gender={profileInfo.gender}
          name={profileInfo.name}
          className="size-9 md:size-11 xl:size-12 2xl:size-13"
        />
      ) : (
        <button className="group border-x-sm border-gray-600 px-4 hover:border-black md:px-6 md:py-1 xl:px-7 xl:py-5 2xl:px-8 2xl:py-6">
          {children}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
