import { useState } from "react";
import { FocusSpan } from "../FontFaces";
import { Select } from "../Select";

export type ThemeSetting = "WHITEBOARD";

const ThemeSettingsNameMap = {
  WHITEBOARD: "Whiteboard",
};

interface IThemeSettingsProps {
  onChange: (setting: ThemeSetting) => void;
}

const ThemeSettings = ({ onChange }: IThemeSettingsProps) => {
  const [themeSetting, setThemeSetting] = useState<ThemeSetting>("WHITEBOARD");
  return (
    <section className="space-y-4">
      <article className="flex justify-between items-center">
        <FocusSpan>Theme</FocusSpan>
        <div className="w-1/2">
          <Select text={ThemeSettingsNameMap[themeSetting]}>
            <Select.Option
              onClick={() => {
                setThemeSetting("WHITEBOARD");
                onChange("WHITEBOARD");
              }}
              checked={themeSetting === "WHITEBOARD"}
            >
              Whiteboard
            </Select.Option>
          </Select>
        </div>
      </article>
      <article className="flex items-center gap-4">
        <div className="rounded-md border border-black bg-primary size-[77.5px]" />
        <div className="rounded-md border border-black bg-secondary size-[77.5px]" />
        <div className="rounded-md border border-black bg-accent size-[77.5px]" />
        <div className="rounded-md border border-black bg-extra size-[77.5px]" />
      </article>
    </section>
  );
};

export default ThemeSettings;
