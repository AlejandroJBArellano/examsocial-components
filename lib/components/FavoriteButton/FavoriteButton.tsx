import { Favorite } from "@mui/icons-material";
import { ComponentPropsWithoutRef, useState } from "react";
import { cn } from "../../utils";
import { Tooltip } from "../Tooltip";

interface FavoriteButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Whether the item is favorited
   */
  isFavorite?: boolean;
  /**
   * Callback when favorite status changes
   */
  onFavoriteChange?: (isFavorite: boolean) => void;
  /**
   * Size of the button
   */
  size?: "default" | "large";
  /**
   * Tooltip text
   */
  tooltipText?: string;
  /**
   * Tooltip position
   */
  tooltipSide?: "top" | "right" | "bottom" | "left";
}

const FavoriteButton = ({
  isFavorite = false,
  onFavoriteChange,
  size = "default",
  tooltipText = "Add to favorites",
  tooltipSide = "left",
  className,
  ...props
}: FavoriteButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [favorite, setFavorite] = useState(isFavorite);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newFavoriteState = !favorite;
    setFavorite(newFavoriteState);
    onFavoriteChange?.(newFavoriteState);
    props.onClick?.(e);
  };

  const buttonElement = (
    <button
      type="button"
      data-testid="favorite-button"
      {...props}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "flex items-center justify-center rounded-md border-2 border-black",
        size === "default" ? "h-10 w-10 p-2" : "h-11 w-11 p-2",
        favorite
          ? isHovering
            ? "bg-white"
            : "bg-accent-tint"
          : isHovering
            ? "bg-accent-tint"
            : "bg-white",
        className,
      )}
    >
      <Favorite
        className={favorite || isHovering ? "text-accent-shadow" : "text-black"}
      />
    </button>
  );

  // Si no hay texto de tooltip o el tamaño no es large, solo devolvemos el botón
  if (!tooltipText || size !== "large") {
    return buttonElement;
  }

  // Si hay texto de tooltip y el tamaño es large, envolvemos el botón con el tooltip
  return (
    <Tooltip trigger={buttonElement} side={tooltipSide} align="center">
      {tooltipText}
    </Tooltip>
  );
};

export default FavoriteButton;
