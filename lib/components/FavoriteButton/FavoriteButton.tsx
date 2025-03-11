import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

interface FavoriteButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Whether the item is favorited
   */
  favorite?: boolean;
}

const FavoriteButton = ({
  favorite = false,
  children,
  className,
  ...props
}: FavoriteButtonProps) => {
  const buttonElement = (
    <button
      type="button"
      data-testid="favorite-button"
      {...props}
      className={
        cn(
          "flex h-10 w-10 items-center justify-center rounded-md border-2 border-black p-2 xl:h-11 xl:w-11",
          favorite
            ? "border-accent-shadow bg-accent-tint text-accent-shadow hover:border-black hover:bg-white hover:text-black"
            : "bg-white hover:border-accent-shadow hover:bg-accent-tint hover:text-accent-shadow",
          className,
        ) +
        " hover:shadow-right-sm" +
        (favorite
          ? " shadow-accent-shadow hover:shadow-black"
          : " hover:shadow-accent-shadow")
      }
    >
      <Icon name="favorite" filled />
    </button>
  );

  // Envolvemos el botón con el tooltip
  return (
    <Tooltip
      trigger={buttonElement}
      contentClassName="hidden xl:inline-block"
      side="top"
      align="center"
    >
      {children}
    </Tooltip>
  );
};

export default FavoriteButton;
