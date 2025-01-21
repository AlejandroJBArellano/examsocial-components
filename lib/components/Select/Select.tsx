"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../Button";
import { OptionSelect } from "./Option.tsx";

interface SelectProps extends DropdownMenu.DropdownMenuProps {
  text: string;
}

const Select = (props: SelectProps) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger className="group w-full data-[state=open]:border-accent-shadow data-[state]:outline-none">
        <Button
          theme="light"
          className="flex w-full items-center justify-between outline-none group-data-[state=open]:border-accent-shadow group-data-[state=open]:shadow-accent-shadow"
        >
          {props.text}
          <KeyboardArrowDownIcon className="hidden group-data-[state=closed]:inline-block" />
          <KeyboardArrowUpIcon className="hidden group-data-[state=open]:inline-block group-data-[state=open]:text-accent-shadow" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
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