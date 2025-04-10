import { cn } from "@/utils";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import { ComponentPropsWithoutRef } from "react";
import { Checkbox } from "../Checkbox";

export const OptionSelect = (
  props: ComponentPropsWithoutRef<typeof CheckboxItem>,
) => {
  return (
    <CheckboxItem
      {...props}
      className={cn(
        "group flex cursor-pointer items-center gap-2 px-3 py-2 xl:gap-3 xl:px-4 xl:text-lg",
        "hover:bg-primary-tint hover:text-primary",
        "data-[state=checked]:text-primary",
        "data-[highlighted]:border-none data-[highlighted]:outline-none",
        props.className,
      )}
    >
      <Checkbox checked={props.checked} />
      {props.children}
    </CheckboxItem>
  );
};
