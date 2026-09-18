import { cn } from "@/utils";
import React, { useState } from "react";
import { CheckboxProps } from "../Checkbox";
import { Icon } from "../Icon";

export type AnswerToggleProps = CheckboxProps;

const AnswerToggle = ({
  checked: controlledChecked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className,
  onClick,
  ...props
}: AnswerToggleProps) => {
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
        "flex aspect-square h-8 w-8 items-center justify-center rounded-md border border-black p-[7px] transition-all duration-300 ease-in-out xl:h-10 xl:w-10 xl:p-2",
        "data-[state=indeterminate]:shadow-black data-[state=unchecked]:shadow-black",
        "data-[state=checked]:border-feedback-success data-[state=checked]:bg-feedback-success-tint data-[state=checked]:text-feedback-success data-[state=checked]:shadow-feedback-success",
        "hover:shadow-right-sm",
        className,
      )}
    >
      {isChecked && (
        <span className="flex h-5 w-5 place-items-center xl:h-6 xl:w-6">
          <Icon
            name="check"
            data-testid="CheckIcon"
            size={20}
            responsiveSizes={{
              xl: 24,
            }}
          />
        </span>
      )}
    </button>
  );
};

export default AnswerToggle;

