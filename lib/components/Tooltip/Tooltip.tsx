import { cn } from "@/utils";
import { PropsWithChildren, ReactNode, useId, useState } from "react";

export interface TooltipProps extends PropsWithChildren {
  /**
   * Alineación horizontal del tooltip
   */
  align?: "start" | "center" | "end";
  /**
   * Lado donde se mostrará el tooltip
   */
  side?: "top" | "right" | "bottom" | "left";
  /**
   * Elemento que activará el tooltip
   */
  trigger: ReactNode;
  /**
   * Clase CSS personalizada para el contenido del tooltip
   */
  contentClassName?: string;
  /**
   * Retraso antes de mostrar el tooltip (en ms)
   */
  delayDuration?: number;

  theme?: "accent" | "primary" | "secondary" | "extra";

  /**
   * Estado controlado de apertura del tooltip
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

  /**
   * Desactivar tooltip
   */
  disabled?: boolean;

  /**
   * Container opcional para el portal del tooltip
   */
  container?: HTMLElement;
}

const themeSVG = {
  extra: "fill-extra",
  primary: "fill-primary",
  secondary: "fill-secondary",
  accent: "fill-accent",
};

const themeBackground = {
  extra: "bg-extra",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const getPositionClasses = (
  side: "top" | "bottom" | "left" | "right",
  align: "start" | "center" | "end",
) => {
  let sideClass = "";
  let alignClass = "";
  let arrowClass = "";

  if (side === "top") {
    sideClass = "bottom-full mb-2";
    arrowClass = "top-[calc(100%-1px)] left-1/2 -translate-x-1/2";
    if (align === "center") alignClass = "left-1/2 -translate-x-1/2";
    else if (align === "start") alignClass = "left-0";
    else alignClass = "right-0";
  } else if (side === "bottom") {
    sideClass = "top-full mt-2";
    arrowClass = "bottom-[calc(100%-1px)] left-1/2 -translate-x-1/2 rotate-180";
    if (align === "center") alignClass = "left-1/2 -translate-x-1/2";
    else if (align === "start") alignClass = "left-0";
    else alignClass = "right-0";
  } else if (side === "left") {
    sideClass = "right-full mr-2";
    arrowClass = "left-[calc(100%-1px)] top-1/2 -translate-y-1/2 -rotate-90";
    if (align === "center") alignClass = "top-1/2 -translate-y-1/2";
    else if (align === "start") alignClass = "top-0";
    else alignClass = "bottom-0";
  } else {
    sideClass = "left-full ml-2";
    arrowClass = "right-[calc(100%-1px)] top-1/2 -translate-y-1/2 rotate-90";
    if (align === "center") alignClass = "top-1/2 -translate-y-1/2";
    else if (align === "start") alignClass = "top-0";
    else alignClass = "bottom-0";
  }

  return { sideClass, alignClass, arrowClass };
};

export const Tooltip = ({
  align = "center",
  side = "top",
  children,
  trigger,
  contentClassName = "",
  delayDuration = 0,
  theme = "extra",
  open,
  onOpenChange,
  defaultOpen = false,
  disabled = false,
}: TooltipProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const isControlled = open !== undefined;
  const isOpen = disabled ? false : isControlled ? open : uncontrolledOpen;

  const handleOpen = () => {
    if (disabled) return;
    if (delayDuration > 0) {
      const timeout = setTimeout(() => {
        if (!isControlled) setUncontrolledOpen(true);
        onOpenChange?.(true);
      }, delayDuration);
      setTimer(timeout);
    } else {
      if (!isControlled) setUncontrolledOpen(true);
      onOpenChange?.(true);
    }
  };

  const handleClose = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    if (!isControlled) setUncontrolledOpen(false);
    onOpenChange?.(false);
  };

  const { sideClass, alignClass, arrowClass } = getPositionClasses(side, align);

  return (
    <div
      className="group relative inline-flex"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      <div data-testid="tooltip-trigger" className="inline-flex" aria-describedby={isOpen ? tooltipId : undefined}>
        {trigger}
      </div>

      <div
        id={tooltipId}
        role="tooltip"
        data-testid="tooltip-content"
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "absolute z-50 max-w-xs whitespace-nowrap rounded border border-black px-2 py-1 text-xs transition-opacity duration-150",
          sideClass,
          alignClass,
          themeBackground[theme],
          contentClassName,
          isOpen
            ? "visible opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100",
        )}
      >
        {children}
        <svg
          data-testid="tooltip-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={cn("pointer-events-none absolute overflow-visible", arrowClass)}
        >
          <polygon
            points="0,-1 12,-1 6,8"
            className={themeSVG[theme]}
          />
          <path
            d="M0 0L6 8L12 0"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tooltip;

