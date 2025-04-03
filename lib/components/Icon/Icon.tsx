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
   * Responsive sizes for different breakpoints
   * Example: { sm: 16, md: 20, lg: 24, xl: 32 }
   */
  responsiveSizes?: {
    sm?: number;
    md?: number;
    xl?: number;
    "2xl"?: number;
  };
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
  responsiveSizes,
  onClick,
  weight = 400,
  grade = 0,
  filled,
  "aria-label": ariaLabel,
  ...rest
}) => {
  // Base style for the icon
  const baseStyle = {
    fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size}`,
    fontSize: `${size}px`,
  };

  // Generate responsive styles if responsiveSizes is provided
  let responsiveClasses = "";
  if (responsiveSizes) {
    // Create media query styles for each breakpoint
    const mediaQueries = {
      sm: "@media (min-width: 640px)",
      md: "@media (min-width: 768px)",
      xl: "@media (min-width: 1280px)",
      "2xl": "@media (min-width: 1536px)",
    };

    // Create a style element to inject responsive styles
    const styleId = `icon-responsive-styles-${name}-${Math.random().toString(36).substr(2, 9)}`;

    // Remove existing style element if it exists
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create CSS content
    let cssContent = "";
    Object.entries(responsiveSizes).forEach(([breakpoint, breakpointSize]) => {
      if (mediaQueries[breakpoint as keyof typeof mediaQueries]) {
        cssContent += `
          ${mediaQueries[breakpoint as keyof typeof mediaQueries]} {
            .${styleId} {
              font-size: ${breakpointSize}px !important;
              font-variation-settings: 'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${breakpointSize} !important;
            }
          }
        `;
      }
    });

    // Inject styles if we have content
    if (cssContent) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = cssContent;
      document.head.appendChild(style);

      // Set the class for the icon
      responsiveClasses = styleId;
    }
  }

  return (
    <span
      className={cn(
        "material-symbols",
        variantMap[variant],
        responsiveClasses,
        className,
      )}
      style={baseStyle}
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
