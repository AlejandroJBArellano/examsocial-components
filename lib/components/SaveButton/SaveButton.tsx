import { ComponentPropsWithoutRef, useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import { cn } from "../../utils";
import { Tooltip } from "../Tooltip";

interface SaveButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * Whether the item is saved
   */
  isSaved?: boolean;
  /**
   * Callback when saved status changes
   */
  onSaveChange?: (isSaved: boolean) => void;
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

const SaveButton = ({
  isSaved = false,
  onSaveChange,
  size = "default",
  tooltipText = "Add to collection",
  tooltipSide = "left",
  className,
  ...props
}: SaveButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [saved, setSaved] = useState(isSaved);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newSavedState = !saved;
    setSaved(newSavedState);
    onSaveChange?.(newSavedState);
    props.onClick?.(e);
  };

  const buttonElement = (
    <button
      type="button"
      data-testid="save-button"
      {...props}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "flex items-center justify-center rounded-md border-2 border-black",
        size === "default" ? "h-10 w-10 p-2" : "h-11 w-11 p-2",
        saved
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
        icon="bookmark"
        size={size === "default" ? 20 : 24}
        fill={saved || isHovering}
        className={saved || isHovering ? "text-accent-shadow" : "text-black"}
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
      {saved ? "Remove from collection" : tooltipText}
    </Tooltip>
  );
};

export default SaveButton;
