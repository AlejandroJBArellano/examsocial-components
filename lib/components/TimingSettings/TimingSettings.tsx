import { useState } from "react";
import { FocusSpan, Smoll } from "../FontFaces";
import { Input } from "../Input";
import { Select } from "../Select";

export type TimingSetting = "NONE" | "TOTAL" | "PER_QUESTION" | "CUSTOM";

const TimingSettingsDescriptionMap = {
  NONE: "The exam won’t have a time limit.",
  TOTAL: "Sets a limit time for the whole exam.",
  PER_QUESTION: "Set an equal amount of time for each individual question.",
  CUSTOM: "Sets a custom of time for each individual question.",
};

const TimingSettingsNameMap = {
  NONE: "None",
  TOTAL: "Total",
  PER_QUESTION: "Per Question",
  CUSTOM: "Custom",
};

interface ITimingSettingsProps {
  onChange?: (
    timingSetting: TimingSetting,
    values?: { hours?: number; minutes?: number; seconds?: number },
  ) => void;
}

const TimingSettings = (props: ITimingSettingsProps) => {
  const [timingSetting, setTimingSetting] = useState<TimingSetting>("NONE");
  const [timeValues, setTimeValues] = useState<{
    hours?: number;
    minutes?: number;
    seconds?: number;
  }>({});

  const handleTimingSettingChange = (newSetting: TimingSetting) => {
    setTimingSetting(newSetting);
    setTimeValues({});
    if (props.onChange) {
      props.onChange(newSetting);
    }
  };

  const handleInputChange = (field: string, value: number) => {
    const newValues = { ...timeValues, [field]: value };
    setTimeValues(newValues);
    if (props.onChange) {
      props.onChange(timingSetting, newValues);
    }
  };

  const TotalTimeControls = {
    NONE: null,
    CUSTOM: null,
    TOTAL: (
      <article className="flex items-center gap-4 w-full">
        <div className="space-y-1 w-1/2">
          <FocusSpan>Hours</FocusSpan>
          <Input
            type="number"
            placeholder="0"
            className="w-full"
            onChange={(e) =>
              handleInputChange("hours", parseInt(e.target.value))
            }
          />
        </div>
        <div className="space-y-1 w-1/2">
          <FocusSpan>Minutes</FocusSpan>
          <Input
            type="number"
            placeholder="0"
            className="w-full"
            onChange={(e) =>
              handleInputChange("minutes", parseInt(e.target.value))
            }
          />
        </div>
      </article>
    ),
    PER_QUESTION: (
      <article className="flex items-center gap-4 w-full">
        <div className="space-y-1 w-1/2">
          <FocusSpan>Minutes</FocusSpan>
          <Input
            type="number"
            placeholder="0"
            className="w-full"
            onChange={(e) =>
              handleInputChange("minutes", parseInt(e.target.value))
            }
          />
        </div>
        <div className="space-y-1 w-1/2">
          <FocusSpan>Seconds</FocusSpan>
          <Input
            type="number"
            placeholder="0"
            className="w-full"
            onChange={(e) =>
              handleInputChange("seconds", parseInt(e.target.value))
            }
          />
        </div>
      </article>
    ),
  };

  return (
    <section className="space-y-4">
      <article className="space-y-1">
        <div className="flex justify-between items-center">
          <FocusSpan>Timing</FocusSpan>
          <div className="w-1/2">
            <Select text={TimingSettingsNameMap[timingSetting]}>
              <Select.Option onClick={() => handleTimingSettingChange("NONE")}>
                None
              </Select.Option>
              <Select.Option onClick={() => handleTimingSettingChange("TOTAL")}>
                Total
              </Select.Option>
              <Select.Option
                onClick={() => handleTimingSettingChange("PER_QUESTION")}
              >
                Per Question
              </Select.Option>
              <Select.Option
                onClick={() => handleTimingSettingChange("CUSTOM")}
              >
                Custom
              </Select.Option>
            </Select>
          </div>
        </div>
        <Smoll className="text-end block">
          {TimingSettingsDescriptionMap[timingSetting]}
        </Smoll>
      </article>
      {TotalTimeControls[timingSetting]}
    </section>
  );
};

export default TimingSettings;
