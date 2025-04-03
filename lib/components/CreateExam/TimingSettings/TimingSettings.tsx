import SoonBadge from "@/components/Badges/SoonBadge";
import { Helper } from "@/components/Helper";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import { examSchema } from "../../../schemas";
import { Field } from "../../Field";
import { Heading5, Smoll } from "../../FontFaces";
import { Select } from "../../Select";

export type TimingSetting = "NONE" | "TOTAL" | "PER_QUESTION" | "CUSTOM";

const TimingSettingsDescriptionMap = {
  NONE: "The exam won't have a time limit.",
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

const TimingSettings = () => {
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  const timingSetting = formik.values.advancedSettings.timing
    .setting as keyof typeof TimingSettingsNameMap;

  const handleTimingSettingChange = (newSetting: TimingSetting) => {
    formik.setFieldValue("advancedSettings.timing.setting", newSetting);
    if (newSetting === "NONE") {
      formik.setFieldValue("advancedSettings.timing.hours", 0);
      formik.setFieldValue("advancedSettings.timing.minutes", 0);
      formik.setFieldValue("advancedSettings.timing.seconds", 0);
    }
  };

  const handleInputChange = (field: string, value: number) => {
    formik.setFieldValue(`advancedSettings.timing.${field}`, value);
  };

  const TotalTimeControls = {
    NONE: null,
    CUSTOM: null,
    TOTAL: (
      <article className="flex w-full items-center gap-4">
        <div className="w-1/2">
          <Field
            label="Hours"
            inputProps={{
              type: "number",
              placeholder: "0",
              className: "w-full",
              onChange: (e) =>
                handleInputChange("hours", parseInt(e.target.value)),
              value: formik.values.advancedSettings.timing.hours || "",
            }}
          />
        </div>
        <div className="w-1/2">
          <Field
            label="Minutes"
            inputProps={{
              type: "number",
              placeholder: "0",
              className: "w-full",
              onChange: (e) =>
                handleInputChange("minutes", parseInt(e.target.value)),
              value: formik.values.advancedSettings.timing.minutes || "",
            }}
          />
        </div>
      </article>
    ),
    PER_QUESTION: (
      <article className="flex w-full items-center gap-4">
        <div className="w-1/2">
          <Field
            label="Minutes"
            inputProps={{
              type: "number",
              placeholder: "0",
              className: "w-full",
              onChange: (e) =>
                handleInputChange("minutes", parseInt(e.target.value)),
              value: formik.values.advancedSettings.timing.minutes || "",
            }}
          />
        </div>
        <div className="w-1/2">
          <Field
            label="Seconds"
            inputProps={{
              type: "number",
              placeholder: "0",
              className: "w-full",
              onChange: (e) =>
                handleInputChange("seconds", parseInt(e.target.value)),
              value: formik.values.advancedSettings.timing.seconds || "",
            }}
          />
        </div>
      </article>
    ),
  };

  return (
    <div className="space-y-4">
      <article className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Heading5>Timing</Heading5>
            <Helper align="center" side="top">
              Configure time limits for your exam, either for the entire exam or
              per question.
            </Helper>
          </div>
          <div className="w-1/2">
            <Select text={TimingSettingsNameMap[timingSetting]}>
              <Select.Option
                onClick={() => handleTimingSettingChange("NONE")}
                checked={timingSetting === "NONE"}
              >
                None
              </Select.Option>
              <Select.Option
                onClick={() => handleTimingSettingChange("TOTAL")}
                checked={timingSetting === "TOTAL"}
              >
                Total
              </Select.Option>
              <Select.Option
                //onClick={() => handleTimingSettingChange("PER_QUESTION")}
                checked={timingSetting === "PER_QUESTION"}
                disabled
              >
                Per Question
                <SoonBadge />
              </Select.Option>
              <Select.Option
                //onClick={() => handleTimingSettingChange("CUSTOM")}
                disabled
                checked={timingSetting === "CUSTOM"}
              >
                Custom <SoonBadge />
              </Select.Option>
            </Select>
          </div>
        </div>
        <Smoll className="block text-end">
          {TimingSettingsDescriptionMap[timingSetting]}
        </Smoll>
      </article>
      {TotalTimeControls[timingSetting]}
    </div>
  );
};

export default TimingSettings;
