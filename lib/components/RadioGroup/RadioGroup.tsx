import { cn } from "@/utils";
import React, { useState } from "react";

export interface RadioGroupItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  items: RadioGroupItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  className?: string;
  itemClassName?: string;
  indicatorClassName?: string;
  labelClassName?: string;
}

export const RadioGroup = ({
  items,
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled: groupDisabled = false,
  orientation = "vertical",
  className,
  itemClassName,
  indicatorClassName,
  labelClassName,
  ...props
}: RadioGroupProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const selectedValue = isControlled ? controlledValue : uncontrolledValue;

  const handleSelect = (itemValue: string, itemDisabled?: boolean) => {
    if (groupDisabled || itemDisabled) return;
    if (!isControlled) {
      setUncontrolledValue(itemValue);
    }
    onValueChange?.(itemValue);
  };

  return (
    <div
      role="radiogroup"
      aria-orientation={orientation}
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col gap-2" : "flex-row gap-4",
        className,
      )}
      {...props}
    >
      {items.map((item) => {
        const isChecked = selectedValue === item.value;
        const isDisabled = groupDisabled || !!item.disabled;

        return (
          <div key={item.value} className="flex items-center">
            <button
              type="button"
              role="radio"
              id={item.value}
              aria-checked={isChecked}
              data-state={isChecked ? "checked" : "unchecked"}
              disabled={isDisabled}
              onClick={() => handleSelect(item.value, item.disabled)}
              className={cn(
                "h-6 w-6 rounded-full border border-black bg-light",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                "hover:border-accent",
                "data-[state=checked]:border-accent data-[state=checked]:shadow-right-sm data-[state=checked]:shadow-accent",
                "disabled:cursor-not-allowed disabled:border-zinc-500 disabled:bg-zinc-100",
                "disabled:data-[state=checked]:border-accent-tint disabled:data-[state=checked]:bg-zinc-100",
                "hover:data-[state=checked]:shadow-right-sm hover:data-[state=checked]:shadow-accent-shadow",
                itemClassName,
              )}
            >
              {isChecked && (
                <span
                  className={cn(
                    "flex h-full w-full items-center justify-center",
                    "after:block after:h-4 after:w-4 after:rounded-full after:bg-accent",
                    isDisabled && "after:bg-accent-tint",
                    indicatorClassName,
                  )}
                />
              )}
            </button>
            <label
              htmlFor={item.value}
              onClick={() => handleSelect(item.value, item.disabled)}
              className={cn(
                "ml-2 text-sm font-medium text-gray-700",
                "cursor-pointer",
                isDisabled && "cursor-not-allowed text-gray-400",
                labelClassName,
              )}
            >
              {item.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

