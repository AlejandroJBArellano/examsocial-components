"use client";

import { cn } from "@/utils";
import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { Heading4 } from "../FontFaces/Headers";

interface DrawerContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextType>({
  open: true,
  setOpen: () => {},
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

    const setOpen = (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    };

    useEffect(() => {
      if (!open) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    return (
      <DrawerContext.Provider value={{ open, setOpen }}>
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
    ({ className, onClick, ...props }, ref) => {
      const { open, setOpen } = useDrawer();
      return (
        <div
          ref={ref}
          data-testid="drawer-overlay"
          onClick={(e) => {
            setOpen(false);
            onClick?.(e);
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
    ({ className, ...props }, ref) => {
      const { open } = useDrawer();
      return (
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          data-testid="drawer-content"
          className={cn(
            "fixed bottom-0 left-0 right-0 mt-24 flex h-fit flex-col rounded-t-3xl border-x border-y border-black bg-gray-100 outline-none transition-transform duration-300 ease-out",
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
    ({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "mx-auto mb-8 h-2 w-24 flex-shrink-0 cursor-pointer rounded-full bg-black",
          className,
        )}
        {...props}
      />
    ),
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

