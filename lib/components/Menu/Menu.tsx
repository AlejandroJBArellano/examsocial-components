"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon";
import { MenuItem, MenuItemProps } from "../MenuItem";

export interface MenuProps {
  items: MenuItemProps[];
}

const Menu = ({ items }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative inline-block">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-1 focus:outline-none"
      >
        <Icon name="menu" className="cursor-pointer" />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="w-50 absolute right-0 top-full z-50 border border-black bg-light shadow-right-sm shadow-black"
        >
          {items.map((item) => (
            <div key={item.href} onClick={() => setIsOpen(false)}>
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

