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
        "rounded-lg shadow-right-sm shadow-black backdrop:bg-black/50 backdrop:backdrop-blur-md " +
        props.className
      }
    />
  );
};

export default Dialog;
