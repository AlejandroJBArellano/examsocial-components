import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  rounded?: boolean;
  theme?: "extra" | "light" | "accent" | "feedback-error" | "primary";
}

const Button = ({ rounded, theme, ...props }: ButtonProps) => {
  const classTheme = {
    extra:
      "bg-extra border-black disabled:border-extra disabled:bg-extra-tint disabled:text-extra",
    light:
      "bg-light border-black disabled:border-light disabled:bg-light-tint disabled:text-light hover:!shadow-right-sm !shadow-none xl:hover:!shadow-right-sm xl:!shadow-none",
    accent:
      "bg-accent border-black disabled:border-accent disabled:bg-accent-tint disabled:text-accent",
    primary:
      "bg-primary border-black disabled:border-primary disabled:bg-primary-tint disabled:text-primary",
    "feedback-error":
      "bg-feedback-error-tint border-error-tint shadow-feedback-error border-feedback-error text-feedback-error hover:shadow-feedback-error disabled:bg-zinc-50/50 disabled:text-feedback-error-tint disabled:border-feedback-error-tint xl:shadow-feedback-error xl:hover:shadow-feedback-error",
  };

  return (
    <button data-testid="button"
      {...props}
      className={cn(
        `border px-4 py-2 shadow-right-sm duration-300 ease-out hover:shadow-right hover:transition-all
        disabled:cursor-not-allowed disabled:shadow-none xl:px-6 xl:text-2xl xl:font-medium xl:shadow-right xl:hover:shadow-right-lg  xl:disabled:hover:shadow-none`,
        classTheme[theme || "light"],
        rounded ? "rounded-full" : "rounded-md",
        props.className,
      )}
    />
  );
};

export default Button;