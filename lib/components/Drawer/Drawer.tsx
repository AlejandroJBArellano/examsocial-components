"use client";

import { forwardRef } from "react";
import { Drawer as VaulDrawer } from "vaul";
import { cn } from "../../utils";
import { Heading4 } from "../FontFaces/Headers";

// Root component
const Root = VaulDrawer.Root;

// Trigger component
const Trigger = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Trigger
    ref={ref}
    className={cn(
      "relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]",
      className,
    )}
    {...props}
  />
));
Trigger.displayName = "DrawerTrigger";

// Overlay component
const Overlay = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Overlay
    ref={ref}
    className={cn("fixed inset-0 bg-black/40", className)}
    {...props}
  />
));
Overlay.displayName = "DrawerOverlay";

// Content component
const Content = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Content
    ref={ref}
    className={cn(
      "fixed bottom-0 left-0 right-0 mt-24 flex h-fit flex-col rounded-t-[10px] bg-gray-100 outline-none",
      className,
    )}
    {...props}
  />
));
Content.displayName = "DrawerContent";

// Custom Title component - Uses Heading4 and centers it
const Title = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <div className="text-center" ref={ref} {...props}>
    <Heading4 className={cn("font-medium text-gray-900", className)}>
      {children}
    </Heading4>
  </div>
));
Title.displayName = "DrawerTitle";

// Portal component
const Portal = VaulDrawer.Portal;

// Close component
const Close = VaulDrawer.Close;

// Handle component
const Handle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300",
        className,
      )}
      {...props}
    />
  ),
);
Handle.displayName = "DrawerHandle";

// Export all components
export const Drawer = {
  Root,
  Trigger,
  Overlay,
  Content,
  Title,
  Portal,
  Close,
  Handle,
};
