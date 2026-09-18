import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  THEMES,
  ThemeProvider,
  ThemeSwitcher,
  useTheme,
} from "./index";

describe("Theme System", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("exports correct THEMES constants with 4 defined themes", () => {
    expect(THEMES).toHaveLength(4);
    expect(THEMES.map((t) => t.name)).toEqual([
      "DEFAULT",
      "INDUSTRIAL_EDGE",
      "EARTHY_TONES",
      "VIBRANT_ORCHID",
    ]);
  });

  it("provides default theme and allows switching via useTheme hook", () => {
    const Consumer = () => {
      const { theme, setTheme } = useTheme();
      return (
        <div>
          <span data-testid="current-theme">{theme}</span>
          <button
            data-testid="set-industrial"
            onClick={() => setTheme("INDUSTRIAL_EDGE")}
          >
            Industrial
          </button>
          <button
            data-testid="set-default"
            onClick={() => setTheme("DEFAULT")}
          >
            Default
          </button>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent("DEFAULT");
    expect(document.documentElement.classList.contains("INDUSTRIAL_EDGE")).toBe(
      false,
    );

    fireEvent.click(screen.getByTestId("set-industrial"));
    expect(screen.getByTestId("current-theme")).toHaveTextContent(
      "INDUSTRIAL_EDGE",
    );
    expect(document.documentElement.classList.contains("INDUSTRIAL_EDGE")).toBe(
      true,
    );
    expect(localStorage.getItem("examsocial-theme")).toBe("INDUSTRIAL_EDGE");

    fireEvent.click(screen.getByTestId("set-default"));
    expect(screen.getByTestId("current-theme")).toHaveTextContent("DEFAULT");
    expect(document.documentElement.classList.contains("INDUSTRIAL_EDGE")).toBe(
      false,
    );
    expect(localStorage.getItem("examsocial-theme")).toBe("DEFAULT");
  });

  it("restores saved theme from localStorage on initial render", () => {
    localStorage.setItem("examsocial-theme", "VIBRANT_ORCHID");

    const Consumer = () => {
      const { theme } = useTheme();
      return <span data-testid="restored-theme">{theme}</span>;
    };

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("restored-theme")).toHaveTextContent(
      "VIBRANT_ORCHID",
    );
    expect(document.documentElement.classList.contains("VIBRANT_ORCHID")).toBe(
      true,
    );
  });

  it("applies theme classes to a custom targetElement if provided", () => {
    const customContainer = document.createElement("div");

    render(
      <ThemeProvider defaultTheme="EARTHY_TONES" targetElement={customContainer}>
        <div>Container Child</div>
      </ThemeProvider>,
    );

    expect(customContainer.classList.contains("EARTHY_TONES")).toBe(true);
  });

  it("catches error when localStorage.getItem throws during initialization", () => {
    const getItemSpy = vi.spyOn(window.localStorage, "getItem").mockImplementation(() => {
      throw new Error("SecurityError");
    });

    const Consumer = () => {
      const { theme } = useTheme();
      return <span data-testid="error-init-theme">{theme}</span>;
    };

    render(
      <ThemeProvider defaultTheme="EARTHY_TONES">
        <Consumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("error-init-theme")).toHaveTextContent("EARTHY_TONES");
    getItemSpy.mockRestore();
  });

  it("catches error when localStorage.setItem throws during setTheme", () => {
    const setItemSpy = vi.spyOn(window.localStorage, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });

    const Consumer = () => {
      const { theme, setTheme } = useTheme();
      return (
        <div>
          <span data-testid="error-set-theme">{theme}</span>
          <button data-testid="change-btn" onClick={() => setTheme("INDUSTRIAL_EDGE")}>
            Change
          </button>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId("change-btn"));
    expect(screen.getByTestId("error-set-theme")).toHaveTextContent("INDUSTRIAL_EDGE");

    setItemSpy.mockRestore();
  });

  it("works without storageKey (does not interact with localStorage)", () => {
    const Consumer = () => {
      const { theme, setTheme } = useTheme();
      return (
        <div>
          <span data-testid="no-storage-theme">{theme}</span>
          <button data-testid="no-storage-btn" onClick={() => setTheme("EARTHY_TONES")}>
            Set
          </button>
        </div>
      );
    };

    render(
      <ThemeProvider storageKey="" defaultTheme="VIBRANT_ORCHID">
        <Consumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("no-storage-theme")).toHaveTextContent("VIBRANT_ORCHID");
    fireEvent.click(screen.getByTestId("no-storage-btn"));
    expect(screen.getByTestId("no-storage-theme")).toHaveTextContent("EARTHY_TONES");
    expect(localStorage.getItem("examsocial-theme")).toBeNull();
  });

  it("provides fallback default context values if useTheme is used without provider", () => {
    const Consumer = () => {
      const { theme, setTheme, availableThemes } = useTheme();
      return (
        <div>
          <span data-testid="orphan-theme">{theme}</span>
          <span data-testid="orphan-count">{availableThemes.length}</span>
          <button data-testid="orphan-btn" onClick={() => setTheme("DEFAULT")}>
            Click
          </button>
        </div>
      );
    };

    render(<Consumer />);
    expect(screen.getByTestId("orphan-theme")).toHaveTextContent("DEFAULT");
    expect(screen.getByTestId("orphan-count")).toHaveTextContent("4");
    // Does not throw when calling fallback setTheme
    fireEvent.click(screen.getByTestId("orphan-btn"));
  });

  describe("ThemeSwitcher Component", () => {
    it("renders pills variant by default with radio accessibility attributes", () => {
      render(
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>,
      );

      const radiogroup = screen.getByTestId("theme-switcher-pills");
      expect(radiogroup).toHaveAttribute("role", "radiogroup");

      const defaultPill = screen.getByTestId("theme-pill-DEFAULT");
      expect(defaultPill).toHaveAttribute("role", "radio");
      expect(defaultPill).toHaveAttribute("aria-checked", "true");
      expect(defaultPill).toHaveAttribute("tabindex", "0");

      const industrialPill = screen.getByTestId("theme-pill-INDUSTRIAL_EDGE");
      expect(industrialPill).toHaveAttribute("aria-checked", "false");
      expect(industrialPill).toHaveAttribute("tabindex", "-1");

      fireEvent.click(industrialPill);
      expect(industrialPill).toHaveAttribute("aria-checked", "true");
      expect(defaultPill).toHaveAttribute("aria-checked", "false");
    });

    it("supports keyboard navigation with ArrowRight and ArrowLeft in pills variant", () => {
      render(
        <ThemeProvider defaultTheme="DEFAULT">
          <ThemeSwitcher />
        </ThemeProvider>,
      );

      const defaultPill = screen.getByTestId("theme-pill-DEFAULT");

      // ArrowRight moves to next theme (INDUSTRIAL_EDGE)
      fireEvent.keyDown(defaultPill, { key: "ArrowRight" });
      expect(screen.getByTestId("theme-pill-INDUSTRIAL_EDGE")).toHaveAttribute(
        "aria-checked",
        "true",
      );

      // ArrowRight again moves to EARTHY_TONES
      const industrialPill = screen.getByTestId("theme-pill-INDUSTRIAL_EDGE");
      fireEvent.keyDown(industrialPill, { key: "ArrowRight" });
      expect(screen.getByTestId("theme-pill-EARTHY_TONES")).toHaveAttribute(
        "aria-checked",
        "true",
      );

      // ArrowLeft moves back to INDUSTRIAL_EDGE
      const earthyPill = screen.getByTestId("theme-pill-EARTHY_TONES");
      fireEvent.keyDown(earthyPill, { key: "ArrowLeft" });
      expect(screen.getByTestId("theme-pill-INDUSTRIAL_EDGE")).toHaveAttribute(
        "aria-checked",
        "true",
      );
    });

    it("renders dropdown variant and allows selecting options", () => {
      render(
        <ThemeProvider defaultTheme="DEFAULT">
          <ThemeSwitcher variant="dropdown" />
        </ThemeProvider>,
      );

      const trigger = screen.getByTestId("theme-dropdown-trigger");
      expect(trigger).toHaveAttribute("role", "combobox");
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByTestId("theme-dropdown-menu")).not.toBeInTheDocument();

      // Open dropdown
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByTestId("theme-dropdown-menu")).toBeInTheDocument();

      // Select an option
      const option = screen.getByTestId("theme-option-VIBRANT_ORCHID");
      fireEvent.click(option);

      expect(screen.queryByTestId("theme-dropdown-menu")).not.toBeInTheDocument();
      expect(trigger).toHaveTextContent(/Vibrant Orchid/i);
      expect(document.documentElement.classList.contains("VIBRANT_ORCHID")).toBe(
        true,
      );
    });

    it("renders without color swatches when showColors is false", () => {
      const { container } = render(
        <ThemeProvider>
          <ThemeSwitcher showColors={false} />
        </ThemeProvider>,
      );

      // No color dots
      expect(container.querySelectorAll(".rounded-full.border.border-black")).toHaveLength(0);
    });
  });
});
