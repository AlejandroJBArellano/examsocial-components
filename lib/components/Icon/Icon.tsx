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
   * Fill variant (default: false)
   */
  filled?: boolean;
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
}

/**
 * Icon component that uses Material Symbols
 */
export const Icon: React.FC<IconProps> = ({
  name,
  className,
  filled = false,
  weight = 400,
  grade = 0,
  size = 24,
  onClick,
}) => {
  return (
    <span
      className={cn(
        "material-symbols",
        filled ? "material-symbols-filled" : "material-symbols-outlined",
        className,
      )}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size}`,
        fontSize: `${size}px`,
      }}
      onClick={onClick}
    >
      {name}
    </span>
  );
};
