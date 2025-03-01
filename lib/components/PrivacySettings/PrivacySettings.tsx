import { PersonRemove, UploadFile } from "@mui/icons-material";
import { useState } from "react";
import { Button } from "../Button";
import { FocusSpan, Span } from "../FontFaces";
import { Input } from "../Input";
import { Select } from "../Select";
import { Separator } from "../Separator";

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

  const PrivacyControls = {
    PUBLIC: null,
    INVITE_ONLY: (
      <>
        <article className="space-y-4">
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Email(s), separated by commas"
              className="w-full h-11"
            />
            <Button theme="extra">
              <FocusSpan>Invite</FocusSpan>
            </Button>
          </div>
        </article>
        <article>
          <Button
            className="flex items-center gap-2 justify-center w-full"
            rounded
          >
            <UploadFile />
            <FocusSpan>Upload .csv</FocusSpan>
          </Button>
        </article>
        <article className="space-y-3">
          <Separator>Invitees</Separator>
          <div className="flex items-center justify-between w-full">
            <Span>Invitee 1</Span>
            <Button theme="feedback-error" className="p-2">
              <PersonRemove />
            </Button>
          </div>
        </article>
      </>
    ),
    PASSWORD: null,
    LINK: null,
    ONLY_ME: null,
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
      {PrivacyControls[privacySetting]}
    </section>
  );
};

export default PrivacySettings;
