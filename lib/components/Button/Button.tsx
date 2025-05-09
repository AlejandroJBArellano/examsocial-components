import { cn } from "@/utils";
import { ComponentPropsWithoutRef } from "react";
import { Span } from "../FontFaces";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

export type ButtonTheme =
  | "extra"
  | "light"
  | "accent"
  | "feedback-error"
  | "primary";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  rounded?: boolean;
  theme?: ButtonTheme;
}

const Button = ({ rounded, theme, ...props }: ButtonProps) => {
  const classTheme = {
    extra:
      "bg-extra border-black disabled:border-extra disabled:bg-extra-tint disabled:text-extra",
    light:
      "bg-light border-black disabled:border-gray-800 disabled:bg-gray-200 disabled:text-gray-800 hover:!shadow-right-sm !shadow-none xl:hover:!shadow-right-sm xl:!shadow-none",
    accent:
      "bg-accent text-light border-black disabled:border-accent disabled:bg-accent-tint disabled:text-accent",
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
        rounded ? "rounded-full" : "rounded-md xl:rounded-lg",
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
      className={
        "flex items-center justify-center p-2 xl:p-2 " + props.className
      }
    >
      <Icon
        name={props.children as string}
        size={props.size}
        filled={props.filled}
        responsiveSizes={{
          sm: 20,
          xl: 24,
        }}
      />
    </Button>
  );
};

Button.Icon = IconButton;

interface ActionButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Whether the item is favorited
   */
  selected?: boolean;

  name: string;
}

const ActionButton = ({
  selected,
  name,
  children,
  className,
  ...props
}: ActionButtonProps) => {
  const Trigger = (
    <button
      type="button"
      data-testid="favorite-button"
      {...props}
      className={
        cn(
          "flex h-10 w-10 items-center justify-center rounded-md border-2 border-black p-2 xl:h-11 xl:w-11",
          selected
            ? "border-accent-shadow bg-accent-tint text-accent-shadow hover:border-black hover:bg-light hover:text-black"
            : "bg-light hover:border-accent-shadow hover:bg-accent-tint hover:text-accent-shadow",
          className,
        ) +
        " hover:shadow-right-sm" +
        (selected
          ? " shadow-accent-shadow hover:shadow-black"
          : " hover:shadow-accent-shadow")
      }
    >
      <Icon
        name={name}
        filled={selected}
        responsiveSizes={{
          sm: 20,
          xl: 24,
        }}
      />
    </button>
  );

  // Envolvemos el botón con el tooltip
  return (
    <Tooltip
      trigger={Trigger}
      contentClassName="hidden xl:inline-block"
      side="top"
      align="center"
    >
      {children}
    </Tooltip>
  );
};

Button.Action = ActionButton;

interface IndexButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
  status: "done" | "pending" | "current";
}

const IndexButton = ({
  index,
  status = "pending",
  className,
  ...props
}: IndexButtonProps) => {
  return (
    <button
      type="button"
      data-testid="index-button"
      {...props}
      className={cn(
        "flex aspect-square h-5 w-5 items-center justify-center rounded-full border border-black p-[7px] xl:h-6 xl:w-6 xl:p-[8px]",
        {
          "bg-extra": status === "done",
          "bg-primary text-light shadow-right-sm hover:shadow-right":
            status === "current",
          "bg-light": status === "pending",
        },
        className,
      )}
    >
      <Span>{index}</Span>
    </button>
  );
};

Button.Index = IndexButton;
