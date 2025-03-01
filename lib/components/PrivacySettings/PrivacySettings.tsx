import { PersonRemove, UploadFile } from "@mui/icons-material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
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

interface PrivacySettingsProps {
  onChange: (setting: PrivacySetting, invitees?: string[]) => void;
}

const PrivacySettings = ({ onChange }: PrivacySettingsProps) => {
  const [privacySetting, setPrivacySetting] =
    useState<PrivacySetting>("PUBLIC");
  const [invitees, setInvitees] = useState<string[]>([]);

  const handlePrivacySettingChange = (newPrivacySetting: PrivacySetting) => {
    setPrivacySetting(newPrivacySetting);
    onChange(newPrivacySetting, invitees);
  };

  const handleInvite = (emails: string) => {
    const newInvitees = emails.split(",").map((email) => email.trim());
    setInvitees([...invitees, ...newInvitees]);
    onChange(privacySetting, [...invitees, ...newInvitees]);
  };

  const handleRemoveInvitee = (email: string) => {
    const updatedInvitees = invitees.filter((invitee) => invitee !== email);
    setInvitees(updatedInvitees);
    onChange(privacySetting, updatedInvitees);
  };

  const PrivacyControls = {
    PUBLIC: null,
    INVITE_ONLY: (
      <>
        <NewInvitee onSubmit={handleInvite} />
        <UploadCSV />
        <article className="space-y-3">
          <Separator>Invitees</Separator>
          {invitees.map((invitee, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <Span>{invitee}</Span>
              <Button
                theme="feedback-error"
                className="p-2"
                onClick={() => handleRemoveInvitee(invitee)}
              >
                <PersonRemove />
              </Button>
            </div>
          ))}
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

interface INewInvitee {
  onSubmit: (emails: string) => void;
}

const NewInvitee = ({ onSubmit }: INewInvitee) => {
  const formik = useFormik({
    initialValues: {
      emails: "",
    },
    validationSchema: Yup.object({
      emails: Yup.string().required("Email(s) are required"),
    }),
    onSubmit: (values) => {
      onSubmit(values.emails);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex gap-2 items-center">
      <Input
        placeholder="Email(s), separated by commas"
        className="w-full h-11"
        type="email"
        {...formik.getFieldProps("emails")}
      />
      <Button theme="extra" type="submit">
        <FocusSpan>Invite</FocusSpan>
      </Button>
    </form>
  );
};

const UploadCSV = () => {
  return (
    <Button className="flex items-center gap-2 justify-center w-full" rounded>
      <UploadFile />
      <FocusSpan>Upload .csv</FocusSpan>
    </Button>
  );
};
