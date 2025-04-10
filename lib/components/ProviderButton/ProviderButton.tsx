import { cn } from "@/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { FocusSpan } from "../FontFaces/Spans";

export type ProviderType =
  | "facebook"
  | "google"
  | "apple"
  | "x"
  | "reddit"
  | "github";

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
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <g clip-path="url(#clip0_497_2973)">
            <rect
              width="20"
              height="20"
              transform="translate(0.5)"
              fill="#1877F2"
            />
            <path
              d="M20.0827 10.0582C20.0827 4.76547 15.7921 0.474869 10.4993 0.474869C5.20662 0.474869 0.916016 4.76547 0.916016 10.0582C0.916016 14.8415 4.4205 18.8062 9.00195 19.5251V12.8284H6.56868V10.0582H9.00195V7.94687C9.00195 5.54505 10.4327 4.21836 12.6217 4.21836C13.6702 4.21836 14.7669 4.40553 14.7669 4.40553V6.76393H13.5585C12.368 6.76393 11.9967 7.50265 11.9967 8.26052V10.0582H14.6546L14.2297 12.8284H11.9967V19.5251C16.5782 18.8062 20.0827 14.8415 20.0827 10.0582Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_497_2973">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    google: {
      bgColor: "bg-light",
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
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <rect
            width="20"
            height="20"
            transform="translate(0.5)"
            fill="black"
          />
          <path
            d="M18.2338 15.3533C17.944 16.023 17.6009 16.6393 17.2034 17.206C16.6615 17.9786 16.2178 18.5134 15.8759 18.8103C15.3459 19.2978 14.778 19.5474 14.1699 19.5616C13.7334 19.5616 13.2069 19.4374 12.594 19.1854C11.9792 18.9345 11.4141 18.8103 10.8975 18.8103C10.3556 18.8103 9.7745 18.9345 9.1529 19.1854C8.53036 19.4374 8.02884 19.5687 7.6454 19.5817C7.06226 19.6065 6.48101 19.3498 5.90082 18.8103C5.53051 18.4873 5.06733 17.9336 4.51246 17.1493C3.91713 16.3116 3.42768 15.3403 3.04424 14.2329C2.63359 13.0368 2.42773 11.8786 2.42773 10.7573C2.42773 9.47278 2.70529 8.36493 3.26122 7.43656C3.69814 6.69086 4.27939 6.10262 5.00687 5.6708C5.73436 5.23897 6.5204 5.01891 7.36691 5.00483C7.83009 5.00483 8.43749 5.14811 9.1923 5.42968C9.94498 5.7122 10.4283 5.85548 10.6402 5.85548C10.7986 5.85548 11.3355 5.68795 12.2456 5.35396C13.1063 5.04423 13.8327 4.91598 14.4278 4.9665C16.0404 5.09664 17.2519 5.73232 18.0576 6.87755C16.6154 7.75138 15.902 8.97529 15.9162 10.5454C15.9292 11.7683 16.3728 12.786 17.2448 13.5941C17.6399 13.9691 18.0812 14.259 18.5722 14.4648C18.4657 14.7736 18.3533 15.0694 18.2338 15.3533ZM14.5355 0.800129C14.5355 1.75868 14.1853 2.65368 13.4873 3.48208C12.6449 4.46688 11.626 5.03595 10.5211 4.94615C10.5071 4.83116 10.4989 4.71013 10.4989 4.58294C10.4989 3.66274 10.8995 2.67793 11.6109 1.87272C11.9661 1.46503 12.4178 1.12604 12.9655 0.855616C13.5121 0.589231 14.0291 0.441914 14.5154 0.416687C14.5296 0.54483 14.5355 0.672982 14.5355 0.800117V0.800129Z"
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
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M11.865 8.46864L19.1623 0H17.433L11.0968 7.3532L6.03614 0H0.199219L7.852 11.1193L0.199219 20H1.92853L8.61972 12.2348L13.9642 20H19.8011L11.8646 8.46864H11.865ZM9.49648 11.2173L8.7211 10.1101L2.55163 1.29968H5.20775L10.1866 8.40994L10.962 9.51718L17.4339 18.7594H14.7777L9.49648 11.2177V11.2173Z"
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
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M8.30242 11.996C7.74597 11.996 7.29839 11.5484 7.29839 11.004C7.29839 10.4476 7.74597 10 8.30242 10C8.85081 10 9.29435 10.4476 9.29435 11.004C9.29435 11.5524 8.84677 11.996 8.30242 11.996ZM20.5 10C20.5 15.5242 16.0242 20 10.5 20C4.97581 20 0.5 15.5242 0.5 10C0.5 4.47581 4.97581 0 10.5 0C16.0242 0 20.5 4.47581 20.5 10ZM15.1653 8.33871C14.7863 8.33871 14.4516 8.49597 14.2056 8.74194C13.3024 8.11694 12.0847 7.71371 10.7339 7.66935L11.4355 4.5121L13.6694 5.01613C13.6694 5.56452 14.1169 6.00806 14.6613 6.00806C15.2177 6.00806 15.6653 5.55242 15.6653 5.00403C15.6653 4.45565 15.2177 4 14.6613 4C14.2702 4 13.9355 4.23387 13.7702 4.55645L11.3024 4.00806C11.1815 3.97581 11.0565 4.06452 11.0242 4.18548L10.254 7.66935C8.91532 7.72581 7.70968 8.125 6.80645 8.75C6.56048 8.49193 6.21371 8.33871 5.83468 8.33871C4.42742 8.33871 3.96774 10.2298 5.25403 10.871C5.20968 11.0726 5.18548 11.2823 5.18548 11.496C5.18548 13.6169 7.57258 15.3347 10.5081 15.3347C13.4556 15.3347 15.8427 13.6169 15.8427 11.496C15.8427 11.2823 15.8185 11.0605 15.7661 10.8589C17.0282 10.2137 16.5645 8.33871 15.1653 8.33871ZM12.3871 13.0242C11.6532 13.7581 9.31855 13.746 8.6129 13.0242C8.52419 12.9355 8.36693 12.9355 8.27823 13.0242C8.17742 13.125 8.17742 13.2823 8.27823 13.371C9.19758 14.2903 11.7984 14.2903 12.7218 13.371C12.8226 13.2823 12.8226 13.125 12.7218 13.0242C12.6331 12.9355 12.4758 12.9355 12.3871 13.0242ZM12.6976 10C12.1492 10 11.7056 10.4476 11.7056 11.004C11.7056 11.5524 12.1532 11.996 12.6976 11.996C13.254 11.996 13.7016 11.5484 13.7016 11.004C13.7016 10.4476 13.2581 10 12.6976 10Z"
            fill="white"
          />
        </svg>
      ),
    },
    github: {
      bgColor: "bg-light",
      textColor: "text-black/80",
      defaultText: "Sign In with GitHub",
      defaultIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 98 96"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill="#24292f"
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
        "flex items-center justify-center rounded-[10px]",
        config.bgColor,
        config.textColor,
        size === "default"
          ? "h-11 gap-2 px-3 py-3 text-base xl:h-14 xl:gap-3 xl:p-4"
          : "h-14 gap-3 px-4 py-4 text-lg xl:p-4",
        className,
      )}
      {...props}
    >
      <span
        className={size === "default" ? "h-5 w-5 xl:h-6 xl:w-6" : "h-6 w-6"}
      >
        {buttonIcon}
      </span>
      <FocusSpan>{buttonText}</FocusSpan>
    </button>
  );
};

export default ProviderButton;
