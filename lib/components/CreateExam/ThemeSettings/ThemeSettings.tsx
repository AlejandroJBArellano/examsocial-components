import { useState } from "react";
import { ThemeSetting } from "../../../types";
import { Heading5 } from "../../FontFaces";
import { Select } from "../../Select";

const ThemeSettingsNameMap = {
  WHITEBOARD: "Whiteboard",
  INDUSTRIAL_EDGE: "Industrial Edge",
  EARTHY_TONES: "Earthy Tones",
  VIBRANT_ORCHID: "Vibrant Orchid",
};

interface IThemeSettingsProps {
  onChange: (setting: ThemeSetting) => void;
}

const ThemeSettings = ({ onChange }: IThemeSettingsProps) => {
  const [themeSetting, setThemeSetting] = useState<ThemeSetting>("WHITEBOARD");
  return (
    <div className="space-y-4">
      <article className="flex items-center justify-between">
        <Heading5>Theme</Heading5>
        <div className="w-1/2">
          <Select text={ThemeSettingsNameMap[themeSetting]}>
            {Object.entries(ThemeSettingsNameMap).map(([key, value]) => (
              <Select.Option
                key={key}
                onClick={() => {
                  setThemeSetting(key as ThemeSetting);
                  onChange(key as ThemeSetting);
                }}
                checked={themeSetting === key}
              >
                {value}
              </Select.Option>
            ))}
          </Select>
        </div>
      </article>
      <article
        className={
          (themeSetting === "WHITEBOARD" ? "" : themeSetting) +
          " ml-auto grid w-full max-w-80 grid-cols-4 items-center gap-4 overflow-x-auto"
        }
      >
        <div className="aspect-square rounded-md border border-black bg-primary" />
        <div className="aspect-square rounded-md border border-black bg-secondary" />
        <div className="aspect-square rounded-md border border-black bg-accent" />
        <div className="aspect-square rounded-md border border-black bg-extra" />
      </article>
    </div>
  );
};

export default ThemeSettings;
