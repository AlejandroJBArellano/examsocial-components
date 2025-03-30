"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { OptionSelect } from "./Option.tsx";

interface SelectProps extends DropdownMenu.DropdownMenuProps {
  text: ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
}

const Select = (props: SelectProps) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger
        data-testid="trigger"
        className="group w-full data-[state=open]:border-accent-shadow data-[state]:outline-none"
        disabled={props.disabled}
      >
        <Button
          theme="light"
          className={
            "flex w-full items-center justify-between outline-none group-data-[state=open]:border-accent-shadow group-data-[state=open]:shadow-accent-shadow " +
            (props.disabled ? "cursor-not-allowed" : "")
          }
        >
          {props.text}
          <Icon
            name="keyboard_arrow_down"
            className="!hidden group-data-[state=closed]:!inline-block"
          />
          <Icon
            name="keyboard_arrow_up"
            className="!hidden group-data-[state=open]:!inline-block group-data-[state=open]:text-accent-shadow"
          />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal container={props.container}>
        <DropdownMenu.Content
          sideOffset={8}
          className="DropdownMenuContent w-full translate-x-0 rounded-md border border-accent-shadow bg-white py-2 shadow-right-sm shadow-accent-shadow"
        >
          {props.children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

Select.Option = OptionSelect;

export default Select;
