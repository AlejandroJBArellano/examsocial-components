import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils";
import { Icon } from "../Icon";

export type ButtonTheme =
  | "extra"
  | "light"
  | "accent"
  | "feedback-error"
  | "primary";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  rounded?: boolean;
  theme?: ButtonTheme;
}

const Button = ({ rounded, theme, ...props }: ButtonProps) => {
  const classTheme = {
    extra:
      "bg-extra border-black disabled:border-extra disabled:bg-extra-tint disabled:text-extra",
    light:
      "bg-white border-black disabled:border-[#27272A] disabled:bg-[#E4E4E7] disabled:text-[#27272A] hover:!shadow-right-sm !shadow-none xl:hover:!shadow-right-sm xl:!shadow-none",
    accent:
      "bg-accent border-black disabled:border-accent disabled:bg-accent-tint disabled:text-accent",
    primary:
      "bg-primary border-black disabled:border-primary disabled:bg-primary-tint disabled:text-primary",
    "feedback-error":
      "bg-feedback-error-tint border-error-tint shadow-feedback-error border-feedback-error text-feedback-error hover:shadow-feedback-error disabled:bg-zinc-50/50 disabled:text-feedback-error-tint disabled:border-feedback-error-tint xl:shadow-feedback-error xl:hover:shadow-feedback-error",
  };

  return (
    <button
      data-testid="button"
      {...props}
      type={props.type || "button"}
      className={cn(
        `border px-4 py-2 shadow-right-sm duration-300 ease-out hover:shadow-right hover:transition-all disabled:cursor-not-allowed disabled:shadow-none xl:px-6 xl:text-2xl xl:font-medium xl:shadow-right xl:hover:shadow-right-lg xl:disabled:hover:shadow-none`,
        classTheme[theme || "light"],
        rounded ? "rounded-full" : "rounded-md",
        props.className,
      )}
    />
  );
};

export default Button;

interface IconButtonProps extends ButtonProps {
  size: number;
  filled?: boolean;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <Button
      {...props}
      className={"flex items-center justify-center p-2 " + props.className}
    >
      <Icon
        name={props.children as string}
        size={props.size}
        filled={props.filled}
      />
    </Button>
  );
};

Button.Icon = IconButton;
