"use client";
import { cn } from "@/utils";
import * as SwitchReact from "@radix-ui/react-switch";
import { RefAttributes } from "react";

const Switch = (
  props: Partial<SwitchReact.SwitchProps & RefAttributes<HTMLButtonElement>> & {
    size?: "smoll" | "default";
  },
) => (
  <SwitchReact.Root
    {...props}
    className={cn(
      "group flex w-20 min-w-20 rounded-full border border-black transition-all duration-300 ease-in-out data-[disabled]:cursor-not-allowed data-[state=checked]:justify-end data-[state=checked]:bg-primary",
      props.className,
      {
        "p-[1px] xl:p-[3px]": props.size === "smoll",
        "p-[3px]": props.size === "default" || !props.size,
      },
    )}
  >
    <SwitchReact.Thumb
      className={cn(
        "block rounded-full bg-black group-data-[state=checked]:bg-light",
        {
          "h-7 w-7 xl:h-8 xl:w-8": props.size === "default" || !props.size,
          "h-4 w-4 xl:h-5 xl:w-5": props.size === "smoll",
        },
      )}
    />
  </SwitchReact.Root>
);
export default Switch;
