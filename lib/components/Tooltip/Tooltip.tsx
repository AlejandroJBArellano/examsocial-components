import * as RadixTooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";

interface TooltipProps extends PropsWithChildren {
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
}

const Tooltip = ({
  align = "center",
  side = "top",
  children,
  trigger,
  contentClassName = "",
  delayDuration = 0,
  theme = "extra",
}: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delayDuration}>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={`z-50 max-w-xs rounded border-sm border-black px-2 py-1 text-xs ${contentClassName} bg-${theme}`}
            sideOffset={3}
            align={align}
            side={side}
            alignOffset={2}
          >
            {children}
            <RadixTooltip.Arrow asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
              >
                <path
                  d="M10.3301 0.5L6 8L1.66987 0.499999L10.3301 0.5Z"
                  fill="#FFC34D"
                  stroke="black"
                />
              </svg>
            </RadixTooltip.Arrow>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
