import { cn } from "@/utils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  items: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  defaultValue?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
  itemClassName?: string;
  indicatorClassName?: string;
  labelClassName?: string;
}

export const RadioGroup = ({
  items,
  defaultValue,
  orientation = "vertical",
  className,
  itemClassName,
  indicatorClassName,
  labelClassName,
  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col gap-2" : "flex-row gap-4",
        className,
      )}
      defaultValue={defaultValue}
      {...props}
    >
      {items.map((item) => (
        <div key={item.value} className="flex items-center">
          <RadioGroupPrimitive.Item
            id={item.value}
            value={item.value}
            disabled={item.disabled}
            className={
              "h-6 w-6 rounded-full border border-black bg-light " +
              " focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" +
              " hover:border-accent" +
              " data-[state=checked]:border-accent data-[state=checked]:shadow-right-sm data-[state=checked]:shadow-accent" +
              " disabled:cursor-not-allowed disabled:border-zinc-500 disabled:bg-zinc-100" +
              " disabled:data-[state=checked]:border-accent-tint" +
              " hover:data-[state=checked] hover:data-[state=checked]:shadow-right-sm hover:data-[state=checked]:shadow-accent-shadow disabled:data-[state=checked]:bg-zinc-100" +
              ` ${itemClassName}`
            }
          >
            <RadioGroupPrimitive.Indicator
              className={cn(
                "flex h-full w-full items-center justify-center",
                "after:block after:h-4 after:w-4 after:rounded-full after:bg-accent",
                "disabled:after:bg-accent-tint",
                indicatorClassName,
              )}
            />
          </RadioGroupPrimitive.Item>
          <label
            htmlFor={item.value}
            className={cn(
              "ml-2 text-sm font-medium text-gray-700",
              "cursor-pointer",
              item.disabled && "cursor-not-allowed text-gray-400",
              labelClassName,
            )}
          >
            {item.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
};
