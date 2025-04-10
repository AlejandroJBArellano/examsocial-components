import { cn } from "@/utils";
import * as CheckboxElement from "@radix-ui/react-checkbox";
import { Icon } from "../Icon";

export type CheckboxProps = CheckboxElement.CheckboxProps;

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <CheckboxElement.Root
      {...props}
      className={
        cn(
          "flex aspect-square h-6 w-6 items-center justify-center rounded-md border-black text-primary-tint shadow-black transition-shadow duration-300 ease-in-out",
          "data-[state=checked]:bg-primary data-[state=checked]:disabled:bg-primary-shadow",
          "hover:shadow-right-sm",
          "data-[state=checked]:hover:bg-primary-shadow",
          "disabled:cursor-not-allowed disabled:border-gray-800 disabled:bg-gray-200 disabled:hover:shadow-none",
          "xl:h-8 xl:w-8",
          className,
        ) + " border"
      }
    >
      <CheckboxElement.Indicator className="flex place-items-center text-light">
        <Icon
          name="check"
          responsiveSizes={{
            sm: 18,
            xl: 24,
          }}
        />
      </CheckboxElement.Indicator>
    </CheckboxElement.Root>
  );
};

export default Checkbox;
