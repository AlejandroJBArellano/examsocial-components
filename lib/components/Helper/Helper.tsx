import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren } from "react";
import { Icon } from "../Icon";

interface IHelper extends PropsWithChildren {
  align: "start" | "center" | "end";
  side: "top" | "right" | "bottom" | "left";
}

const Helper = ({ align, side, children }: IHelper) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>
          <button className="text-gray-700 hover:text-black">
            <Icon name="help" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="max-w-xs rounded border-sm border-black bg-extra px-2 py-1 text-xs"
            sideOffset={3}
            align={align}
            side={side}
            alignOffset={2}
          >
            {children}
            <Tooltip.Arrow asChild>
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
            </Tooltip.Arrow>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Helper;
