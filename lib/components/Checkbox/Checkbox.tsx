import CheckIcon from "@mui/icons-material/Check";
import * as CheckboxElement from "@radix-ui/react-checkbox";
import { cn } from "../../utils";

 const Checkbox = ({
  className,
  ...props
}: CheckboxElement.CheckboxProps) => {
  return (
    <CheckboxElement.Root
      {...props}
      className={cn(
        "flex aspect-square h-6 w-6 items-center justify-center rounded border border-black shadow-black transition-shadow duration-300 ease-in-out",
        "data-[state=checked]:bg-primary data-[state=checked]:disabled:bg-zinc-200",
        "hover:shadow-right-sm",
        "disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-200 disabled:text-zinc-800 disabled:hover:shadow-none",
        className,
      )}
    >
      <CheckboxElement.Indicator className="flex h-4 w-4 place-items-center">
        <CheckIcon className="h-4 w-4" />
      </CheckboxElement.Indicator>
    </CheckboxElement.Root>
  );
};

export default Checkbox;