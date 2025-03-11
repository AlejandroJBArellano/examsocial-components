import { cn } from "@/utils";
import React from "react";

export interface IconProps {
  /**
   * The name of the Material Symbol icon
   */
  name: string;
  /**
   * Optional CSS class names
   */
  className?: string;
  /**
   * Variant of the icon
   */
  variant?: "rounded" | "outlined" | "sharp";
  /**
   * Weight of the icon (100-700, default: 400)
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  /**
   * Grade of the icon (-25 to 200, default: 0)
   */
  grade?: -25 | 0 | 200;
  /**
   * Size of the icon in pixels (default: 24)
   */
  size?: number;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;

  filled?: boolean;

  /**
   * Accessible label for the icon
   */
  "aria-label"?: string;
}

const variantMap = {
  rounded: "material-symbols-rounded",
  outlined: "material-symbols-outlined",
  sharp: "material-symbols-sharp",
};

/**
 * Icon component that uses Material Symbols
 */
export const Icon: React.FC<IconProps> = ({
  name,
  className,
  variant = "outlined",
  size = 24,
  onClick,
  weight = 400,
  grade = 0,
  filled,
  "aria-label": ariaLabel,
  ...rest
}) => {
  return (
    <span
      className={cn("material-symbols", variantMap[variant], className)}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size}`,
        fontSize: `${size}px`,
      }}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : undefined}
      {...rest}
    >
      {name}
    </span>
  );
};
