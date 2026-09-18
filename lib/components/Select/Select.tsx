"use client";

import { cn } from "@/utils";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../Button";
import { Span } from "../FontFaces/Spans";
import { Icon } from "../Icon";
import { OptionSelect } from "./Option";

interface SelectContextType {
  close: () => void;
}

export const SelectContext = createContext<SelectContextType>({
  close: () => {},
});

export const useSelectContext = () => useContext(SelectContext);

export interface SelectProps {
  text: ReactNode;
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  container?: HTMLElement;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

const Select = ({
  text,
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  error = false,
  className,
}: SelectProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const isOpen = disabled ? false : isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const handleToggle = () => {
    if (disabled) return;
    setOpen(!isOpen);
  };

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // Close on click outside and escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  return (
    <SelectContext.Provider value={{ close }}>
      <div ref={containerRef} className={cn("relative w-full", className)}>
        <Button
          type="button"
          theme="light"
          data-testid="trigger"
          data-state={isOpen ? "open" : "closed"}
          data-error={error}
          disabled={disabled}
          onClick={handleToggle}
          className={cn(
            "group flex w-full items-center justify-between outline-none",
            "data-[state=open]:border-primary data-[state=open]:shadow-primary",
            "data-[error=true]:!border-feedback-error data-[error=true]:!bg-feedback-error-tint data-[error=true]:!text-feedback-error data-[error=true]:!shadow-feedback-error",
            disabled && "cursor-not-allowed",
          )}
        >
          <Span>{text}</Span>
          <Icon
            name="keyboard_arrow_down"
            className={cn(isOpen ? "!hidden" : "!inline-block")}
          />
          <Icon
            name="keyboard_arrow_up"
            className={cn(
              !isOpen
                ? "!hidden"
                : "!inline-block group-data-[state=open]:text-primary",
            )}
          />
        </Button>

        {isOpen && (
          <div
            role="menu"
            className="DropdownMenuContent absolute left-0 right-0 top-full z-50 mt-2 max-h-[300px] w-full overflow-y-auto rounded-md border border-primary bg-light py-2 shadow-right-sm shadow-primary"
          >
            {children}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
};

Select.Option = OptionSelect;

export default Select;

