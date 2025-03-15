import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  error?: boolean;
  containerClassName?: string;
}

const Input = ({
  LeftIcon,
  RightIcon,
  error,
  containerClassName,
  ...props
}: InputProps) => {
  return (
    <div
      className={cn("relative flex flex-auto", containerClassName)}
      data-testid="input-container"
    >
      <input
        data-testid="input"
        {...props}
        className={
          cn(
            "peer rounded-md border border-black bg-white px-4 py-3 shadow-right-sm transition-all duration-300 ease-in-out",
            "hover:border-black hover:shadow-black",
            "placeholder:text-zinc-700 placeholder-shown:shadow-none placeholder-shown:hover:shadow-right-sm placeholder-shown:focus:shadow-right-sm placeholder-shown:focus:shadow-extra",
            "focus:border-extra focus:shadow-right-sm focus:shadow-extra focus:outline-none",
            "xl:px-4 xl:py-2 xl:text-lg xl:placeholder:text-lg",
            "hover:shadow-right",
            {
              "border-feedback-error bg-feedback-error-tint text-feedback-error shadow-right-sm shadow-feedback-error":
                error,
              "hover:border-feedback-error hover:!shadow-feedback-error": error,
              "placeholder:text-feedback-error placeholder-shown:focus:bg-white":
                error,
              "focus:border-feedback-error focus:text-black focus:shadow-feedback-error":
                error,
              "pl-10 xl:pl-10": LeftIcon,
              "pr-10 xl:pr-10": RightIcon,
            },
            props.className,
          ) + " shadow-right-sm"
        }
      />
      {LeftIcon && (
        <div
          data-testid="left-icon"
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 peer-focus:text-extra",
            {
              "!text-feedback-error": error,
            },
          )}
        >
          {LeftIcon}
        </div>
      )}
      {RightIcon && (
        <div
          data-testid="right-icon"
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 peer-focus:text-extra",
            {
              "!text-feedback-error": error,
            },
          )}
        >
          {RightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
