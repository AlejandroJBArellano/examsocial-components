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
      "group flex w-20 min-w-20 rounded-full border border-black p-1 transition-all duration-300 ease-in-out data-[disabled]:cursor-not-allowed data-[state=checked]:justify-end data-[state=checked]:bg-primary",
      props.className,
    )}
  >
    <SwitchReact.Thumb className="block h-7 w-7 rounded-full bg-black group-data-[state=checked]:bg-light xl:h-8 xl:w-8" />
  </SwitchReact.Root>
);

export default Switch;
