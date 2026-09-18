"use client";

import { cn } from "@/utils";
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Heading4 } from "../FontFaces/Headers";

interface DrawerContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  dragY: number;
  isDragging: boolean;
  onHandlePointerDown: (e: React.PointerEvent) => void;
}

const DrawerContext = createContext<DrawerContextType>({
  open: true,
  setOpen: () => {},
  dragY: 0,
  isDragging: false,
  onHandlePointerDown: () => {},
});

export const useDrawer = () => useContext(DrawerContext);

export interface DrawerRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

// Define the Drawer object directly with all subcomponents
export const Drawer = {
  // Root component
  Root: ({
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    children,
  }: DrawerRootProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartY = React.useRef(0);
    const currentDragY = React.useRef(0);

    const setOpen = useCallback(
      (nextOpen: boolean) => {
        if (!isControlled) {
          setUncontrolledOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
      },
      [isControlled, onOpenChange],
    );

    const onHandlePointerDown = useCallback(
      (e: React.PointerEvent) => {
        if (!open) return;
        dragStartY.current = e.clientY;
        currentDragY.current = 0;
        setIsDragging(true);
        setDragY(0);

        const handlePointerMove = (moveEvent: PointerEvent) => {
          const deltaY = moveEvent.clientY - dragStartY.current;
          const newY = deltaY > 0 ? deltaY : deltaY * 0.2;
          currentDragY.current = newY;
          setDragY(newY);
        };

        const handlePointerUp = () => {
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp);
          document.removeEventListener("pointercancel", handlePointerUp);
          setIsDragging(false);

          if (currentDragY.current > 100) {
            setOpen(false);
          }
          setDragY(0);
        };

        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp);
        document.addEventListener("pointercancel", handlePointerUp);
      },
      [open, setOpen],
    );

    useEffect(() => {
      if (!open) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, setOpen]);

    return (
      <DrawerContext.Provider
        value={{ open, setOpen, dragY, isDragging, onHandlePointerDown }}
      >
        <div data-testid="drawer-root">{children}</div>
      </DrawerContext.Provider>
    );
  },

  // Trigger component
  Trigger: forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >(({ className, onClick, ...props }, ref) => {
    const { setOpen, open } = useDrawer();
    return (
      <button
        ref={ref}
        type="button"
        data-testid="drawer-trigger"
        onClick={(e) => {
          setOpen(!open);
          onClick?.(e);
        }}
        className={cn(
          "relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-light px-4 text-sm font-medium shadow-sm transition-all hover:bg-gray-50 dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]",
          className,
        )}
        {...props}
      />
    );
  }),

  // Overlay component
  Overlay: forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, onClick, style, ...props }, ref) => {
      const { open, setOpen, dragY, isDragging } = useDrawer();
      const dragOpacity = isDragging && dragY > 0 ? Math.max(0, 1 - dragY / 350) : undefined;
      return (
        <div
          ref={ref}
          data-testid="drawer-overlay"
          onClick={(e) => {
            setOpen(false);
            onClick?.(e);
          }}
          style={{
            opacity: dragOpacity,
            transition: isDragging ? "none" : undefined,
            ...style,
          }}
          className={cn(
            "fixed inset-0 bg-black/40 transition-opacity duration-300",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            className,
          )}
          {...props}
        />
      );
    },
  ),

  // Content component
  Content: forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, style, ...props }, ref) => {
      const { open, dragY, isDragging } = useDrawer();
      const dragTransform =
        open && (isDragging || dragY > 0)
          ? `translate3d(0, ${Math.max(0, dragY)}px, 0)`
          : undefined;

      return (
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          data-testid="drawer-content"
          style={{
            transform: dragTransform,
            transition: isDragging ? "none" : undefined,
            ...style,
          }}
          className={cn(
            "fixed bottom-0 left-0 right-0 mt-24 flex h-fit flex-col rounded-t-3xl border-x border-y border-black bg-gray-100 outline-none",
            isDragging ? "" : "transition-transform duration-300 ease-out",
            open
              ? "translate-y-0 pointer-events-auto"
              : "translate-y-full pointer-events-none invisible",
            className,
          )}
          {...props}
        />
      );
    },
  ),

  // Custom Title component - Uses Heading4 and centers it
  Title: forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, children, ...props }, ref) => (
    <div className="text-center" ref={ref} {...props}>
      <Heading4 className={cn("font-medium text-gray-900", className)}>
        {children}
      </Heading4>
    </div>
  )),

  // Portal component
  Portal: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="drawer-portal">{children}</div>
  ),

  // Close component
  Close: forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >(({ children, onClick, ...props }, ref) => {
    const { setOpen } = useDrawer();
    return (
      <button
        ref={ref}
        type="button"
        data-testid="drawer-close"
        onClick={(e) => {
          setOpen(false);
          onClick?.(e);
        }}
        {...props}
      >
        {children || "Close"}
      </button>
    );
  }),

  // Handle component
  Handle: forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, onPointerDown, ...props }, ref) => {
      const { onHandlePointerDown } = useDrawer();
      return (
        <div
          ref={ref}
          data-testid="drawer-handle"
          onPointerDown={(e) => {
            onHandlePointerDown(e);
            onPointerDown?.(e);
          }}
          className={cn(
            "mx-auto mb-8 h-2 w-24 flex-shrink-0 cursor-grab active:cursor-grabbing rounded-full bg-black touch-none select-none",
            className,
          )}
          {...props}
        />
      );
    },
  ),
};

// Add displayNames
Drawer.Trigger.displayName = "DrawerTrigger";
Drawer.Overlay.displayName = "DrawerOverlay";
Drawer.Content.displayName = "DrawerContent";
Drawer.Title.displayName = "DrawerTitle";
Drawer.Close.displayName = "DrawerClose";
Drawer.Handle.displayName = "DrawerHandle";

export default Drawer;

