"use client";
import * as SwitchReact from "@radix-ui/react-switch";
import { RefAttributes } from "react";
import { cn } from "../../utils";

const Switch = (
  props: Partial<SwitchReact.SwitchProps & RefAttributes<HTMLButtonElement>>,
) => (
  <SwitchReact.Root
    {...props}
    className={cn(
      props.className,
      "flex rounded-full border border-black p-1 transition-all duration-300 ease-in-out data-[state=checked]:justify-end data-[state=checked]:bg-primary",
    )}
  >
    <SwitchReact.Thumb className="block h-7 w-7 rounded-full bg-black xl:h-8 xl:w-8" />
  </SwitchReact.Root>
);

export default Switch;
