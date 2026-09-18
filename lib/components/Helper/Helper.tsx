import { cn } from "@/utils";
import { PropsWithChildren } from "react";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

export interface IHelper extends PropsWithChildren {
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  disabled?: boolean;
  /**
   * Estado controlado de apertura del helper
   */
  open?: boolean;
  /**
   * Callback cuando el estado de apertura cambia (para modo controlado)
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Estado inicial de apertura (para modo no controlado)
   */
  defaultOpen?: boolean;
}

export const Helper = ({
  align = "center",
  side = "top",
  children,
  disabled = false,
  open,
  onOpenChange,
  defaultOpen,
}: IHelper) => {
  return (
    <Tooltip
      align={align}
      side={side}
      disabled={disabled}
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      theme="extra"
      trigger={
        <button
          type="button"
          aria-label="Ayuda"
          className={cn(
            "flex items-center justify-center text-gray-700 hover:text-black",
            {
              "pointer-events-none cursor-not-allowed": disabled,
            },
          )}
          disabled={disabled}
        >
          <Icon filled name="help" size={20} />
        </button>
      }
    >
      {children}
    </Tooltip>
  );
};

export default Helper;

