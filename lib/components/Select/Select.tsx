"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { Button } from "../Button";
import { Span } from "../FontFaces/Spans.tsx";
import { Icon } from "../Icon";
import { OptionSelect } from "./Option.tsx";

export interface SelectProps extends DropdownMenu.DropdownMenuProps {
  text: ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
  error?: boolean;
}

const Select = (props: SelectProps) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger
        data-testid="trigger"
        data-error={props.error}
        disabled={props.disabled}
        asChild
      >
        <Button
          theme="light"
          className={
            "group flex w-full items-center justify-between outline-none data-[error=true]:!border-feedback-error data-[state=open]:border-primary data-[error=true]:!bg-feedback-error-tint data-[error=true]:!text-feedback-error data-[error=true]:!shadow-feedback-error data-[state=open]:shadow-primary" +
            (props.disabled ? "cursor-not-allowed" : "")
          }
        >
          <Span>{props.text}</Span>
          <Icon
            name="keyboard_arrow_down"
            className="!hidden group-data-[state=closed]:!inline-block"
          />
          <Icon
            name="keyboard_arrow_up"
            className="!hidden group-data-[state=open]:!inline-block group-data-[state=open]:text-primary"
          />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal container={props.container}>
        <DropdownMenu.Content
          sideOffset={8}
          className="DropdownMenuContent max-h-[300px] w-full translate-x-0 overflow-y-auto rounded-md border border-primary bg-light py-2 shadow-right-sm shadow-primary"
        >
          {props.children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

Select.Option = OptionSelect;

export default Select;
