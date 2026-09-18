"use client";
import { cn } from "@/utils";
import React, { forwardRef, useState } from "react";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: "smoll" | "default";
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      className,
      size = "default",
      onClick,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? !!controlledChecked : uncontrolledChecked;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      const nextChecked = !isChecked;
      if (!isControlled) {
        setUncontrolledChecked(nextChecked);
      }
      onCheckedChange?.(nextChecked);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : "unchecked"}
        data-disabled={disabled ? "" : undefined}
        disabled={disabled}
        onClick={handleClick}
        {...props}
        className={cn(
          "group flex w-20 min-w-20 rounded-full border border-black transition-all duration-300 ease-in-out data-[disabled]:cursor-not-allowed data-[state=checked]:justify-end data-[state=checked]:bg-primary",
          className,
          {
            "p-[1px] xl:p-[3px]": size === "smoll",
            "p-[3px]": size === "default" || !size,
          },
        )}
      >
        <span
          className={cn(
            "block rounded-full bg-black group-data-[state=checked]:bg-light",
            {
              "h-7 w-7 xl:h-8 xl:w-8": size === "default" || !size,
              "h-4 w-4 xl:h-5 xl:w-5": size === "smoll",
            },
          )}
        />
      </button>
    );
  },
);

Switch.displayName = "Switch";
export default Switch;

