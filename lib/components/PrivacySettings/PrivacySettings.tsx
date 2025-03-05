import { PersonRemove, UploadFile } from "@mui/icons-material";
import { useFormik, useFormikContext } from "formik";
import { ChangeEvent } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Button } from "../Button";
import { FocusSpan, Paragraph, Span } from "../FontFaces";
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
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();

  const privacySetting = formik.values.advancedSettings.privacy
    .setting as keyof typeof PrivacySettingsNameMap;

  const handlePrivacySettingChange = (newPrivacySetting: PrivacySetting) => {
    formik.setFieldValue("advancedSettings.privacy.setting", newPrivacySetting);
    if (newPrivacySetting === "INVITE_ONLY") {
      formik.setFieldValue("advancedSettings.privacy.invitees", []);
    }
  };

  const handleInvite = (emails: string) => {
    const newInvitees = emails.split(",").map((email) => email.trim());
    const updatedInvitees = [
      ...new Set([
        ...(formik.values.advancedSettings.privacy.invitees || []),
        ...newInvitees,
      ]),
    ];
    formik.setFieldValue("advancedSettings.privacy.invitees", updatedInvitees);
  };

  const handleRemoveInvitee = (email: string) => {
    const updatedInvitees =
      formik.values.advancedSettings.privacy.invitees?.filter(
        (invitee) => invitee !== email,
      );
    formik.setFieldValue("advancedSettings.privacy.invitees", updatedInvitees);
  };

  const PrivacyControls = {
    PUBLIC: null,
    INVITE_ONLY: (
      <>
        <article>
          <NewInvitee onSubmit={handleInvite} />
        </article>
        <article>
          <UploadCSV handleInvite={handleInvite} />
        </article>
        {formik.values.advancedSettings.privacy.invitees?.length ? (
          <article className="space-y-3">
            <Separator>Invitees</Separator>
            {formik.values.advancedSettings.privacy.invitees.map(
              (invitee, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full"
                >
                  <Span>{invitee}</Span>
                  <Button
                    type="button"
                    theme="feedback-error"
                    className="p-2"
                    onClick={() => handleRemoveInvitee(invitee)}
                  >
                    <PersonRemove />
                  </Button>
                </div>
              ),
            )}
          </article>
        ) : null}
      </>
    ),
    PASSWORD: (
      <Paragraph>The password will generate after you save the exam.</Paragraph>
    ),
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

interface IUploadCSV {
  handleInvite: (emails: string) => void;
}

const UploadCSV = ({ handleInvite }: IUploadCSV) => {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const emails = text
          .split("\n")
          .map((email) => email.trim())
          .filter(Boolean);
        // Assuming handleInvite is accessible here
        handleInvite(emails.join(","));
      };
      reader.readAsText(file);
    }
  };

  return (
    <Button rounded className="w-full p-0" type="button">
      <label
        htmlFor="upload-csv"
        className="flex items-center gap-2 justify-center cursor-pointer py-2"
      >
        <UploadFile />
        <FocusSpan>Upload .csv</FocusSpan>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
          id="upload-csv"
        />
      </label>
    </Button>
  );
};
