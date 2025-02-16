import { DetailedHTMLProps, DialogHTMLAttributes } from "react";

const Dialog = (
  props: DetailedHTMLProps<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  >,
) => {
  return (
    <dialog
      {...props}
      className="backdrop:bg-black/50 rounded-lg backdrop:backdrop-blur-md"
    />
  );
};

export default Dialog;
