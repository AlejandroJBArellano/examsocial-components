import CheckIcon from "@mui/icons-material/Check";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils";

export const OptionSelect = (
  props: ComponentPropsWithoutRef<typeof CheckboxItem>,
) => {
  return (
    <CheckboxItem
      {...props}
      className={cn(
        "group flex cursor-pointer items-center gap-2 px-3 py-2 xl:gap-3 xl:px-4 xl:text-lg",
        "hover:bg-accent-tint hover:text-accent-shadow",
        "data-[state=checked]:bg-accent-shadow data-[state=checked]:text-white",
        "data-[highlighted]:border-none data-[highlighted]:outline-none",
        props.className,
      )}
    >
      <CheckIcon className="h-4 w-4 text-white" />
      {props.children}
    </CheckboxItem>
  );
};
