import { ComponentPropsWithoutRef, useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import { cn } from "../../utils";

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
}

const FavoriteButton = ({
  isFavorite = false,
  onFavoriteChange,
  size = "default",
  tooltipText = "Add to favorites",
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

  return (
    <div className="relative">
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
        <MaterialSymbol
          icon="favorite"
          size={size === "default" ? 20 : 24}
          fill={favorite || isHovering}
          className={
            favorite || isHovering ? "text-accent-shadow" : "text-black"
          }
        />
      </button>
      {isHovering && size === "large" && (
        <div className="absolute left-0 top-full mt-1 rounded-md bg-extra p-1 text-sm">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default FavoriteButton;
