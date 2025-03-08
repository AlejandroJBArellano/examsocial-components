import { useState } from "react";
import { ThemeSetting } from "../../types";
import { FocusSpan } from "../FontFaces";
import { Select } from "../Select";

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
    <section className="space-y-4">
      <article className="flex items-center justify-between">
        <FocusSpan>Theme</FocusSpan>
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
          "flex items-center gap-4 " +
          (themeSetting === "WHITEBOARD" ? "" : themeSetting)
        }
      >
        <div className="size-[77.5px] rounded-md border border-black bg-primary" />
        <div className="size-[77.5px] rounded-md border border-black bg-secondary" />
        <div className="size-[77.5px] rounded-md border border-black bg-accent" />
        <div className="size-[77.5px] rounded-md border border-black bg-extra" />
      </article>
    </section>
  );
};

export default ThemeSettings;
