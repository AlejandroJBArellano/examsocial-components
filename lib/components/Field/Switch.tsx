import { PropsWithChildren } from "react";
import { FocusSpan } from "../FontFaces";
import { Helper } from "../Helper";
import { Switch, SwitchProps } from "../Switch";

export const SwitchField = ({
  children,
  helperText,
  ...props
}: PropsWithChildren<
  SwitchProps & {
    helperText?: string;
  }
>) => {
  return (
    <div className="flex items-center justify-between xl:text-lg">
      <label className="flex items-center justify-between gap-2">
        <FocusSpan>{children}</FocusSpan>
        {helperText && (
          <Helper side="top" align="center">
            {helperText}
          </Helper>
        )}
      </label>
      <Switch {...props} />
    </div>
  );
};
