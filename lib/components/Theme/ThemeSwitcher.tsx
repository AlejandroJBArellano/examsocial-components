"use client";

import { cn } from "@/utils";
import React, { useRef, useState } from "react";
import { Icon } from "../Icon";
import { useTheme } from "./ThemeProvider";
import { ThemeName } from "./types";

export interface ThemeSwitcherProps {
  /**
   * Layout variant:
   * - "pills": Segmented control bar with color swatches and keyboard arrows.
   * - "dropdown": Compact dropdown button ideal for headers and navigation bars.
   * @default "pills"
   */
  variant?: "pills" | "dropdown";

  /**
   * Whether to show color swatch dots next to each theme name
   * @default true
   */
  showColors?: boolean;

  /**
   * Custom className
   */
  className?: string;
}

export const ThemeSwitcher = ({
  variant = "pills",
  showColors = true,
  className,
}: ThemeSwitcherProps) => {
  const { theme, setTheme, availableThemes } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentThemeInfo =
    availableThemes.find((t) => t.name === theme) || availableThemes[0];

  const handleKeyDownPills = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % availableThemes.length;
      setTheme(availableThemes[nextIndex].name);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        (currentIndex - 1 + availableThemes.length) % availableThemes.length;
      setTheme(availableThemes[prevIndex].name);
    }
  };

  if (variant === "dropdown") {
    return (
      <div
        ref={containerRef}
        className={cn("relative inline-block text-left", className)}
        data-testid="theme-switcher-dropdown"
      >
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          data-testid="theme-dropdown-trigger"
          className="flex items-center gap-2 rounded-md border-2 border-black bg-light px-3 py-1.5 text-xs font-bold uppercase tracking-tight shadow-right-sm transition-all hover:bg-gray-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          {showColors && (
            <span className="flex items-center -space-x-1">
              <span
                className="size-2.5 rounded-full border border-black"
                style={{ backgroundColor: currentThemeInfo.primaryColor }}
              />
              <span
                className="size-2.5 rounded-full border border-black"
                style={{ backgroundColor: currentThemeInfo.secondaryColor }}
              />
              <span
                className="size-2.5 rounded-full border border-black"
                style={{ backgroundColor: currentThemeInfo.accentColor }}
              />
            </span>
          )}
          <span>{currentThemeInfo.label}</span>
          <Icon
            name={dropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            size={18}
          />
        </button>

        {dropdownOpen && (
          <div
            role="listbox"
            aria-label="Select theme"
            data-testid="theme-dropdown-menu"
            className="absolute right-0 top-full z-50 mt-1 min-w-[200px] rounded-md border-2 border-black bg-light p-1 shadow-right"
          >
            {availableThemes.map((t) => {
              const isSelected = t.name === theme;
              return (
                <button
                  key={t.name}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  data-testid={`theme-option-${t.name}`}
                  onClick={() => {
                    setTheme(t.name);
                    setDropdownOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-2 rounded px-2.5 py-1.5 text-left text-xs font-medium transition-colors",
                    isSelected
                      ? "bg-primary-tint font-bold text-black border border-black"
                      : "hover:bg-gray-100 text-gray-800",
                  )}
                >
                  <div className="flex items-center gap-2">
                    {showColors && (
                      <span className="flex items-center -space-x-1">
                        <span
                          className="size-2.5 rounded-full border border-black"
                          style={{ backgroundColor: t.primaryColor }}
                        />
                        <span
                          className="size-2.5 rounded-full border border-black"
                          style={{ backgroundColor: t.secondaryColor }}
                        />
                        <span
                          className="size-2.5 rounded-full border border-black"
                          style={{ backgroundColor: t.accentColor }}
                        />
                      </span>
                    )}
                    <span>{t.label}</span>
                  </div>
                  {isSelected && <Icon name="check" size={16} />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      data-testid="theme-switcher-pills"
      className={cn(
        "inline-flex flex-wrap items-center gap-1.5 rounded-lg border-2 border-black bg-light p-1.5 shadow-right-sm",
        className,
      )}
    >
      {availableThemes.map((t, idx) => {
        const isSelected = t.name === theme;
        return (
          <button
            key={t.name}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            data-testid={`theme-pill-${t.name}`}
            onClick={() => setTheme(t.name as ThemeName)}
            onKeyDown={(e) => handleKeyDownPills(e, idx)}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-1 text-xs font-bold transition-all outline-none",
              isSelected
                ? "border-2 border-black bg-primary text-light shadow-right-sm"
                : "border-2 border-transparent text-gray-700 hover:bg-gray-100 hover:text-black",
            )}
          >
            {showColors && (
              <span className="flex items-center -space-x-1">
                <span
                  className="size-2.5 rounded-full border border-black"
                  style={{ backgroundColor: t.primaryColor }}
                />
                <span
                  className="size-2.5 rounded-full border border-black"
                  style={{ backgroundColor: t.secondaryColor }}
                />
                <span
                  className="size-2.5 rounded-full border border-black"
                  style={{ backgroundColor: t.accentColor }}
                />
              </span>
            )}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
