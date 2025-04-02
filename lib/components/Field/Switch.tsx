import * as SwitchReact from "@radix-ui/react-switch";
import { PropsWithChildren, RefAttributes } from "react";
import { FocusSpan } from "../FontFaces";
import { Helper } from "../Helper";
import { Switch } from "../Switch";

export const SwitchField = ({
  children,
  helperText,
  ...props
}: PropsWithChildren<
  Partial<SwitchReact.SwitchProps & RefAttributes<HTMLButtonElement>> & {
    helperText?: string;
  }
>) => {
  return (
    <div className="flex items-center justify-between xl:text-lg">
      <label className="flex items-center justify-between gap-2">
        <FocusSpan>{children}</FocusSpan>
        <Helper side="top" align="center">
          {helperText}
        </Helper>
      </label>
      <Switch {...props} />
    </div>
  );
};
