import SoonBadge from "@/components/Badges/SoonBadge";
import { Helper } from "@/components/Helper";
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
  theme: ThemeSetting;
}

const ThemeSettings = ({ onChange, theme }: IThemeSettingsProps) => {
  return (
    <div className="space-y-4">
      <article className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heading5>Theme</Heading5>
          <Helper align="center" side="top">
            Choose a theme for your exam to customize the overall look and feel.
            Each theme offers a unique color palette and design elements to
            enhance the exam experience.
          </Helper>
        </div>
        <div className="w-1/2">
          <Select text={ThemeSettingsNameMap[theme]}>
            {Object.entries(ThemeSettingsNameMap).map(([key, value]) => (
              <Select.Option
                key={key}
                onClick={() => {
                  onChange(key as ThemeSetting);
                }}
                checked={theme === key}
              >
                {value}
              </Select.Option>
            ))}
            <Select.Option>
              Custom!
              <SoonBadge />
            </Select.Option>
          </Select>
        </div>
      </article>
      <article
        className={
          (theme === "WHITEBOARD" ? "" : theme) +
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
