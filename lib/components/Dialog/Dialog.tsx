import { DetailedHTMLProps, DialogHTMLAttributes, Ref } from "react";

interface DialogProps
  extends DetailedHTMLProps<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {
  /** Reference to the dialog element. Required for controlling the dialog's open/close state */
  innerRef: Ref<HTMLDialogElement>;
}

/**
 * A modal dialog component that displays content in a layer above the page.
 *
 * @component
 * @example
 * ```tsx
 * const MyDialog = () => {
 *   const dialogRef = useRef<HTMLDialogElement>(null);
 *
 *   return (
 *     <>
 *       <button onClick={() => dialogRef.current?.showModal()}>Open Dialog</button>
 *       <Dialog innerRef={dialogRef} className="w-full max-w-md p-6">
 *         <div>
 *           <h2>Dialog Title</h2>
 *           <p>Dialog content goes here</p>
 *           <button onClick={() => dialogRef.current?.close()}>Close</button>
 *         </div>
 *       </Dialog>
 *     </>
 *   );
 * };
 * ```
 *
 * @param props - The component props
 * @param props.innerRef - Reference to the dialog element for controlling open/close state
 * @param props.className - Additional CSS classes to apply to the dialog
 * @param props.children - The content to display inside the dialog
 *
 * @remarks
 * The Dialog component uses the native HTML `<dialog>` element and provides a backdrop with blur effect.
 * To control the dialog, use the `innerRef` prop and call `showModal()` to open and `close()` to close.
 *
 * Default styling includes:
 * - Rounded corners
 * - Shadow
 * - Semi-transparent black backdrop with blur effect
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog MDN Dialog Element}
 */
const Dialog = ({ innerRef, ...props }: DialogProps) => {
  return (
    <dialog
      {...props}
      ref={innerRef}
      className={
        "rounded-lg bg-light shadow-right-sm shadow-black backdrop:bg-black/50 backdrop:backdrop-blur-md " +
        props.className
      }
    />
  );
};

export default Dialog;
