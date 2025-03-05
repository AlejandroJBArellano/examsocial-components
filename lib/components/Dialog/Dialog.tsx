import { DetailedHTMLProps, DialogHTMLAttributes, Ref } from "react";

const Dialog = ({
  innerRef,
  ...props
}: DetailedHTMLProps<
  DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & { innerRef: Ref<HTMLDialogElement> }) => {
  return (
    <dialog
      {...props}
      ref={innerRef}
      className={
        "backdrop:bg-black/50 rounded-lg backdrop:backdrop-blur-md shadow-right-sm shadow-black " +
        props.className
      }
    />
  );
};

export default Dialog;
