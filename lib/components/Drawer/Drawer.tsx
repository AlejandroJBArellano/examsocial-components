"use client";

import { forwardRef } from "react";
import { DialogProps, Drawer as VaulDrawer } from "vaul";
import { cn } from "../../utils";
import { Heading4 } from "../FontFaces/Headers";

// Define the Drawer object directly with all subcomponents
export const Drawer = {
  // Root component
  Root: forwardRef<HTMLDivElement, DialogProps>(({ ...props }) => (
    <VaulDrawer.Root {...props} />
  )),

  // Trigger component
  Trigger: forwardRef<
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
  )),

  // Overlay component
  Overlay: forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <VaulDrawer.Overlay
        ref={ref}
        className={cn("fixed inset-0 bg-black/40", className)}
        {...props}
      />
    ),
  ),

  // Content component
  Content: forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <VaulDrawer.Content
        ref={ref}
        className={cn(
          "fixed bottom-0 left-0 right-0 mt-24 flex h-fit flex-col rounded-t-3xl border-x border-y border-black bg-gray-100 outline-none",
          className,
        )}
        {...props}
      />
    ),
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
  Portal: VaulDrawer.Portal,

  // Close component
  Close: VaulDrawer.Close,

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
Drawer.Handle.displayName = "DrawerHandle";
