import * as SwitchReact from "@radix-ui/react-switch";
import { PropsWithChildren, RefAttributes } from "react";
import { FocusSpan } from "../FontFaces";
import { Switch } from "../Switch";

export const SwitchField = ({
  children,
  ...props
}: PropsWithChildren<
  Partial<SwitchReact.SwitchProps & RefAttributes<HTMLButtonElement>>
>) => {
  return (
    <div className="flex items-center justify-between xl:text-lg">
      <FocusSpan>{children}</FocusSpan>
      <Switch {...props} />
    </div>
  );
};
