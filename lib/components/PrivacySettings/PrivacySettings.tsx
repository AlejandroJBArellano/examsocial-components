import { useState } from "react";
import { FocusSpan } from "../FontFaces";
import { Select } from "../Select";

export type PrivacySetting =
  | "ONLY_ME"
  | "INVITE_ONLY"
  | "PASSWORD"
  | "LINK"
  | "PUBLIC";

const PrivacySettingsNameMap = {
  ONLY_ME: "Only Me",
  INVITE_ONLY: "Invite Only",
  PASSWORD: "Password",
  PUBLIC: "Public",
  LINK: "Everyone with link",
};

const PrivacySettings = () => {
  const [privacySetting, setPrivacySetting] =
    useState<PrivacySetting>("PUBLIC");
  const handlePrivacySettingChange = (newPrivacySetting: PrivacySetting) => {
    setPrivacySetting(newPrivacySetting);
  };

  return (
    <section className="space-y-4">
      <article className="flex justify-between items-center">
        <FocusSpan>Privacy</FocusSpan>
        <div className="w-1/2">
          <Select text={PrivacySettingsNameMap[privacySetting]}>
            <Select.Option
              onClick={() => handlePrivacySettingChange("PUBLIC")}
              checked={privacySetting === "PUBLIC"}
            >
              Public
            </Select.Option>
            <Select.Option
              onClick={() => handlePrivacySettingChange("INVITE_ONLY")}
              checked={privacySetting === "INVITE_ONLY"}
            >
              Invite only
            </Select.Option>
            <Select.Option
              onClick={() => handlePrivacySettingChange("PASSWORD")}
              checked={privacySetting === "PASSWORD"}
            >
              Password
            </Select.Option>
            <Select.Option
              onClick={() => handlePrivacySettingChange("LINK")}
              checked={privacySetting === "LINK"}
            >
              Everyone with link
            </Select.Option>
            <Select.Option
              onClick={() => handlePrivacySettingChange("ONLY_ME")}
              checked={privacySetting === "ONLY_ME"}
            >
              Only me
            </Select.Option>
          </Select>
        </div>
      </article>
    </section>
  );
};

export default PrivacySettings;
