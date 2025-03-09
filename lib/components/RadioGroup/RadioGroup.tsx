import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
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
            className={twMerge(
              "h-5 w-5 rounded-full border border-gray-300 bg-white",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              itemClassName,
            )}
          >
            <RadioGroupPrimitive.Indicator
              className={twMerge(
                "flex h-full w-full items-center justify-center",
                "after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-blue-600",
                indicatorClassName,
              )}
            />
          </RadioGroupPrimitive.Item>
          <label
            htmlFor={item.value}
            className={twMerge(
              "ml-2 text-sm font-medium text-gray-700",
              "cursor-pointer",
              item.disabled && "cursor-not-allowed opacity-50",
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
