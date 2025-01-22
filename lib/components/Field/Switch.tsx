import * as SwitchReact from "@radix-ui/react-switch";
import { PropsWithChildren, RefAttributes } from "react";
import { Switch } from "../Switch";

export const SwitchField = ({
  children,
  ...props
}: PropsWithChildren<
  Partial<SwitchReact.SwitchProps & RefAttributes<HTMLButtonElement>>
>) => {
  return (
    <div className="flex justify-between xl:text-lg">
      {children}
      <Switch {...props} />
    </div>
  );
};
