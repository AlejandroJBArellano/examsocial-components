import { cn } from "@/utils";
import React, { useState } from "react";
import { Icon } from "../Icon";

export interface CheckboxProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean | "indeterminate";
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  checked: controlledChecked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className,
  onClick,
  ...props
}: CheckboxProps) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked === true : uncontrolledChecked;

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
      type="button"
      role="checkbox"
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      data-disabled={disabled ? "" : undefined}
      data-checked={isChecked ? "true" : undefined}
      disabled={disabled}
      onClick={handleClick}
      {...props}
      className={cn(
        "flex aspect-square h-6 w-6 items-center justify-center rounded-md border-black text-primary-tint shadow-black transition-shadow duration-300 ease-in-out",
        "data-[state=checked]:bg-primary data-[state=checked]:disabled:bg-primary-shadow",
        "hover:shadow-right-sm",
        "data-[state=checked]:hover:bg-primary-shadow",
        "disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-200 disabled:text-zinc-800 disabled:hover:shadow-none",
        "xl:h-8 xl:w-8",
        "border",
        className,
      )}
    >
      {isChecked && (
        <span className="flex place-items-center text-light">
          <Icon
            name="check"
            responsiveSizes={{
              sm: 18,
              xl: 24,
            }}
          />
        </span>
      )}
    </button>
  );
};

export default Checkbox;

