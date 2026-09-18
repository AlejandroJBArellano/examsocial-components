import { cn } from "@/utils";
import React from "react";
import { Icon } from "../Icon";
import { useSelectContext } from "./Select";

export interface OptionSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  onCheckedChange?: (checked: boolean) => void;
}

export const OptionSelect = ({
  checked = false,
  disabled = false,
  onSelect,
  onCheckedChange,
  onClick,
  className,
  children,
  ...props
}: OptionSelectProps) => {
  const { close } = useSelectContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
    onSelect?.();
    onCheckedChange?.(!checked);
    close();
  };

  return (
    <div
      role="menuitemcheckbox"
      aria-checked={checked}
      aria-disabled={disabled}
      data-state={checked ? "checked" : "unchecked"}
      data-disabled={disabled ? "" : undefined}
      onClick={handleClick}
      className={cn(
        "group flex cursor-pointer items-center gap-2 px-3 py-2 xl:gap-3 xl:px-4 xl:text-lg",
        "hover:bg-primary-tint hover:text-primary",
        "data-[state=checked]:text-primary",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      <Icon
        name="check"
        responsiveSizes={{
          sm: 18,
          xl: 24,
        }}
        className={checked ? "" : "text-transparent"}
      />
      {children}
    </div>
  );
};

