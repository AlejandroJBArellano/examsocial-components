import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../utils";

export type ProviderType = "facebook" | "google" | "apple" | "x" | "reddit";

interface ProviderButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Tipo de proveedor
   */
  provider: ProviderType;
  /**
   * Texto del botón
   */
  text?: string;
  /**
   * Icono personalizado (opcional)
   */
  icon?: ReactNode;
  /**
   * Tamaño del botón
   */
  size?: "default" | "large";
}

const ProviderButton = ({
  provider,
  text,
  icon,
  size = "default",
  className,
  ...props
}: ProviderButtonProps) => {
  // Configuración de colores y estilos por proveedor
  const providerConfig = {
    facebook: {
      bgColor: "bg-[#1877F2]",
      textColor: "text-white",
      defaultText: "Sign In with Facebook",
      defaultIcon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
            fill="white"
          />
        </svg>
      ),
    },
    google: {
      bgColor: "bg-white",
      textColor: "text-black/80",
      defaultText: "Sign In with Google",
      defaultIcon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.76 10.23C19.76 9.46 19.69 8.87 19.55 8.26H10.08V12.05H15.6C15.5 12.81 14.86 14 13.54 14.82L13.53 14.92L16.51 17.21L16.7 17.22C18.6 15.5 19.76 13.06 19.76 10.23Z"
            fill="#4285F4"
          />
          <path
            d="M10.08 20C12.82 20 15.1 19.11 16.71 17.22L13.54 14.82C12.7 15.42 11.56 15.83 10.08 15.83C7.43 15.83 5.17 14.11 4.36 11.71L4.27 11.72L1.19 14.09L1.14 14.18C2.74 17.62 6.14 20 10.08 20Z"
            fill="#34A853"
          />
          <path
            d="M4.36 11.71C4.15 11.1 4.03 10.45 4.03 9.78C4.03 9.1 4.15 8.45 4.35 7.84L4.34 7.73L1.22 5.32L1.14 5.37C0.42 6.7 0 8.2 0 9.78C0 11.36 0.42 12.86 1.14 14.18L4.36 11.71Z"
            fill="#FBBC05"
          />
          <path
            d="M10.08 3.72C11.98 3.72 13.28 4.51 13.99 5.18L16.82 2.37C15.09 0.77 12.82 -0.03 10.08 -0.03C6.14 -0.03 2.74 2.35 1.14 5.78L4.35 8.25C5.17 5.85 7.43 3.72 10.08 3.72Z"
            fill="#EA4335"
          />
        </svg>
      ),
    },
    apple: {
      bgColor: "bg-black",
      textColor: "text-white",
      defaultText: "Sign In with Apple",
      defaultIcon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 0C12.76 0 11.09 1.02 10.17 2.53C9.33 1.15 7.8 0 5.5 0C5.33 0 5.17 0 5 0.03V9.11C5.17 9.09 5.33 9.09 5.5 9.09C7.8 9.09 9.33 10.24 10.17 11.62C11.09 10.11 12.76 9.09 14.5 9.09C14.67 9.09 14.83 9.09 15 9.11V0.03C14.83 0 14.67 0 14.5 0ZM5 20C7.76 20 10 17.76 10 15V10C10 7.24 7.76 5 5 5C2.24 5 0 7.24 0 10V15C0 17.76 2.24 20 5 20ZM15 20C17.76 20 20 17.76 20 15V10C20 7.24 17.76 5 15 5C12.24 5 10 7.24 10 10V15C10 17.76 12.24 20 15 20Z"
            fill="white"
          />
        </svg>
      ),
    },
    x: {
      bgColor: "bg-black",
      textColor: "text-white",
      defaultText: "Sign In with X",
      defaultIcon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.98 8.25L19.53 0H17.77L11.26 7.12L6.04 0H0L7.8 10.79L0 19.25H1.76L8.52 11.88L13.96 19.25H20L11.98 8.25ZM9.39 10.96L8.58 9.86L2.38 1.51H5.12L10.14 8.29L10.95 9.39L17.38 17.99H14.64L9.39 10.96Z"
            fill="white"
          />
        </svg>
      ),
    },
    reddit: {
      bgColor: "bg-[#D93900]",
      textColor: "text-white",
      defaultText: "Sign In with Reddit",
      defaultIcon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 9.99C20 8.9 19.1 8 18 8C17.45 8 16.95 8.22 16.59 8.59C15.13 7.63 13.24 7.01 11.21 6.93L12.32 2.67L15.21 3.36C15.27 4.27 16.03 5 17 5C18.05 5 19 4.05 19 3C19 1.95 18.05 1 17 1C16.25 1 15.6 1.44 15.27 2.09L11.76 1.29C11.55 1.24 11.33 1.36 11.27 1.57L9.96 6.65C7.83 6.7 5.84 7.32 4.31 8.31C3.95 7.93 3.44 7.7 2.88 7.7C1.78 7.7 0.88 8.6 0.88 9.7C0.88 10.47 1.33 11.14 1.96 11.47C1.93 11.64 1.91 11.81 1.91 11.99C1.91 15.39 5.48 18.13 9.96 18.13C14.44 18.13 18.01 15.39 18.01 11.99C18.01 11.81 17.99 11.64 17.96 11.47C18.6 11.13 19.05 10.46 19.05 9.69L20 9.99ZM4.5 11C5.05 11 5.5 11.45 5.5 12C5.5 12.55 5.05 13 4.5 13C3.95 13 3.5 12.55 3.5 12C3.5 11.45 3.95 11 4.5 11ZM14.5 15.75C13.31 16.94 11.28 17.04 10 17.04C8.72 17.04 6.69 16.94 5.5 15.75C5.31 15.56 5.31 15.25 5.5 15.06C5.69 14.87 6 14.87 6.19 15.06C6.94 15.81 8.28 16.04 10 16.04C11.72 16.04 13.06 15.81 13.81 15.06C14 14.87 14.31 14.87 14.5 15.06C14.69 15.25 14.69 15.56 14.5 15.75ZM15.5 13C14.95 13 14.5 12.55 14.5 12C14.5 11.45 14.95 11 15.5 11C16.05 11 16.5 11.45 16.5 12C16.5 12.55 16.05 13 15.5 13Z"
            fill="white"
          />
        </svg>
      ),
    },
  };

  const config = providerConfig[provider];
  const buttonText = text || config.defaultText;
  const buttonIcon = icon || config.defaultIcon;

  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center rounded-sm border-2 border-black",
        config.bgColor,
        config.textColor,
        size === "default"
          ? "h-11 gap-2 px-3 py-3 text-base"
          : "h-14 gap-3 px-4 py-4 text-lg",
        className,
      )}
      {...props}
    >
      <span className={size === "default" ? "h-5 w-5" : "h-6 w-6"}>
        {buttonIcon}
      </span>
      <span className="font-medium">{buttonText}</span>
    </button>
  );
};

export default ProviderButton;
