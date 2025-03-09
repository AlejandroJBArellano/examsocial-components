import * as Checkbox from "@radix-ui/react-checkbox";
import { cn } from "../../utils";
import { Icon } from "../Icon";

const AnswerToggle = ({ className, ...props }: Checkbox.CheckboxProps) => {
  return (
    <Checkbox.Root
      {...props}
      className={cn(
        "flex aspect-square h-10 w-10 items-center justify-center rounded-md border border-black p-2 transition-all duration-300 ease-in-out xl:h-11 xl:w-11",
        "data-[state=indeterminate]:shadow-black data-[state=unchecked]:shadow-black",
        "data-[state=checked]:border-feedback-success data-[state=checked]:bg-feedback-success-tint data-[state=checked]:text-feedback-success data-[state=checked]:shadow-feedback-success",
        "hover:shadow-right-sm",
        className,
      )}
    >
      <Checkbox.Indicator className="flex h-5 w-5 place-items-center xl:h-6 xl:w-6">
        <Icon name="check" data-testid="CheckIcon" size={20} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

export default AnswerToggle;
