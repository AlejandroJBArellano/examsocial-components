import { cn } from "@/utils";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Icon } from "../Icon";
import { Logo } from "../../illustrations";
import { MenuItem } from "../MenuItem";
import Profile from "../Profile/Profile";
import { ProfilePlaceholder } from "../ProfilePlaceholder";
import { ProfilePlaceholderGender } from "../ProfilePlaceholder/ProfilePlaceholder";

export interface NavbarItem extends ComponentPropsWithoutRef<"a"> {
  /**
   * Icono a mostrar
   */
  icon?: string;
  /**
   * Si el elemento está seleccionado
   */
  isSelected?: boolean;
  /**
   * Si el elemento es de tipo CTA (Call to Action)
   */
  isCTA?: boolean;
  /**
   * Link al que apunta el item
   */
  href: string;
  /**
   * Texto del tooltip (visible cuando está comprimido)
   */
  tooltipText?: string;
  /**
   * Si debe mostrar el Logo en lugar de un icono estándar
   */
  isLogo?: boolean;
}

export interface NavbarProfileInfo {
  gender: ProfilePlaceholderGender;
  name: string;
  picture?: string;
  href?: string;
  onClick?: () => void;
}

export interface NavbarMoreButton {
  isOpen?: boolean;
  onClick: () => void;
  label?: string;
  icon?: string;
}

export interface NavbarProps {
  /**
   * Elementos de navegación
   */
  items: NavbarItem[];

  /**
   * Información del perfil
   */
  profileInfo?: NavbarProfileInfo;

  /**
   * Variante de la barra de navegación: "top" (cabecera superior) o "bottom" (dock móvil inferior)
   * @default "top"
   */
  variant?: "top" | "bottom";

  /**
   * Componente de enlace personalizado (ej: Link de Next.js o React Router)
   */
  linkComponent?: ElementType;

  /**
   * Ruta actual para marcar automáticamente el elemento seleccionado
   */
  currentPath?: string;

  /**
   * Configuración de botón de menú "Más" para navegación móvil
   */
  moreButton?: NavbarMoreButton;

  /**
   * Clase CSS personalizada
   */
  className?: string;

  /**
   * Elementos hijos o botones de acción alternativos
   */
  children?: ReactNode;
}

/**
 * Componente de barra de navegación responsive
 *
 * Soporta dos variantes:
 * - "top": Barra superior horizontal clásica con divide-x y soporte para MenuItem.
 * - "bottom": Dock inferior optimizado para móviles con iconos apilados, labels y botón Más/Menú.
 */
export const Navbar = ({
  items,
  profileInfo,
  variant = "top",
  linkComponent,
  currentPath,
  moreButton,
  className,
  children,
}: NavbarProps) => {
  const LinkElem = linkComponent || "a";

  if (variant === "bottom") {
    const isProfileActive =
      profileInfo?.href && currentPath
        ? currentPath === profileInfo.href
        : false;

    return (
      <nav
        data-testid="navbar"
        data-variant="bottom"
        className={cn(
          "relative z-50 flex w-full justify-between border-t border-black bg-light px-2 sm:px-4",
          className,
        )}
      >
        <ul className="flex h-full flex-1 items-stretch justify-around divide-x divide-gray-600 [&>li>a]:border-0">
          {items.map((item, index) => {
            const selected =
              item.isSelected ??
              (currentPath ? currentPath === item.href : false);

            return (
              <li
                key={index}
                className={cn(
                  "flex flex-1 cursor-pointer place-items-center transition-all",
                  selected && "bg-primary-tint",
                )}
              >
                <LinkElem
                  href={item.href}
                  onClick={item.onClick}
                  className="flex h-full w-full flex-col items-center justify-center gap-1 p-2 text-center text-gray-800 transition-all hover:text-black"
                >
                  {item.isLogo || item.icon === "logo" ? (
                    <Logo className="mx-auto mb-1 size-7" />
                  ) : item.icon ? (
                    <Icon name={item.icon} size={22} filled={selected} />
                  ) : null}
                  {item.children && (
                    <span className="max-w-[75px] break-words text-center text-[10px] font-medium leading-tight sm:text-[11px]">
                      {item.children}
                    </span>
                  )}
                </LinkElem>
              </li>
            );
          })}

          {moreButton && (
            <li
              className={cn(
                "flex flex-1 cursor-pointer place-items-center transition-all",
                moreButton.isOpen && "bg-primary-tint",
              )}
            >
              <button
                type="button"
                onClick={moreButton.onClick}
                data-testid="navbar-more-button"
                className="flex h-full w-full flex-col items-center justify-center p-2 text-gray-800 transition-all hover:bg-gray-100 active:scale-95"
              >
                <Icon
                  name={
                    moreButton.icon || (moreButton.isOpen ? "close" : "menu")
                  }
                  size={24}
                />
                <span className="mt-0.5 text-[11px] font-medium leading-none">
                  {moreButton.label || (moreButton.isOpen ? "Close" : "Menu")}
                </span>
              </button>
            </li>
          )}

          {profileInfo ? (
            <li
              className={cn(
                "flex flex-1 cursor-pointer place-items-center transition-all",
                isProfileActive && "bg-primary-tint",
              )}
            >
              {profileInfo.href ? (
                <LinkElem
                  href={profileInfo.href}
                  onClick={profileInfo.onClick}
                  data-testid="navbar-profile-link"
                  className="flex h-full w-full items-center justify-center p-1"
                >
                  {profileInfo.picture ? (
                    <img
                      src={profileInfo.picture}
                      alt={profileInfo.name}
                      className={cn(
                        "size-9 rounded-full border object-cover transition-all duration-300",
                        isProfileActive
                          ? "border-primary shadow-right-sm"
                          : "border-gray-400 hover:border-black",
                      )}
                    />
                  ) : (
                    <ProfilePlaceholder
                      gender={profileInfo.gender}
                      name={profileInfo.name}
                      className="mx-auto size-8"
                    />
                  )}
                </LinkElem>
              ) : (
                <button
                  type="button"
                  onClick={profileInfo.onClick}
                  data-testid="navbar-profile-button"
                  className="flex h-full w-full items-center justify-center p-1"
                >
                  {profileInfo.picture ? (
                    <img
                      src={profileInfo.picture}
                      alt={profileInfo.name}
                      className="size-9 rounded-full border border-gray-400 object-cover transition-all duration-300 hover:border-black"
                    />
                  ) : (
                    <ProfilePlaceholder
                      gender={profileInfo.gender}
                      name={profileInfo.name}
                      className="mx-auto size-8"
                    />
                  )}
                </button>
              )}
            </li>
          ) : children ? (
            <li className="flex flex-1 cursor-pointer place-items-center transition-all">
              <div className="flex h-full w-full items-center justify-center p-1">
                {children}
              </div>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }

  // Modo "top" por defecto
  return (
    <nav
      data-testid="navbar"
      data-variant="top"
      className={cn(
        "mb-4 flex justify-center border-y border-black bg-light px-4 md:justify-between",
        className,
      )}
    >
      <ul className="flex divide-x divide-gray-600 [&>li>a]:border-0">
        {items.map((item, index) => {
          const selected =
            item.isSelected ??
            (currentPath ? currentPath === item.href : false);

          return (
            <li
              key={index}
              className={cn(
                "cursor-pointer",
                selected && "flex place-items-center bg-primary-tint",
              )}
            >
              <MenuItem isCompressed {...item} isSelected={selected}>
                {item.children}
              </MenuItem>
            </li>
          );
        })}
      </ul>
      {profileInfo ? (
        profileInfo.picture ? (
          <div className="flex items-center px-4">
            <img
              src={profileInfo.picture}
              alt={profileInfo.name}
              className="size-9 rounded-full border border-gray-400 object-cover hover:border-black md:size-11 xl:size-12 2xl:size-13"
            />
          </div>
        ) : (
          <Profile
            gender={profileInfo.gender}
            name={profileInfo.name}
            className="size-9 md:size-11 xl:size-12 2xl:size-13"
          />
        )
      ) : (
        <button className="group border-x border-gray-600 px-4 hover:border-black md:px-6 md:py-1 xl:px-7 xl:py-5 2xl:px-8 2xl:py-6">
          {children}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
