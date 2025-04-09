import { ProBadge, SoonBadge } from "@/components/Badges";
import { useExamCreation } from "@/hooks/exam";
import { examSchema } from "@/schemas";
import { useFormik, useFormikContext } from "formik";
import { ChangeEvent } from "react";
import * as Yup from "yup";
import { Button } from "../../Button";
import { Field } from "../../Field";
import { FocusSpan, Paragraph, Span } from "../../FontFaces";
import { Icon } from "../../Icon";
import { Select } from "../../Select";
import { Separator } from "../../Separator";

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
  const { userPlan } = useExamCreation();

  const privacySetting = formik.values.advancedSettings.privacy
    .setting as keyof typeof PrivacySettingsNameMap;

  const handlePrivacySettingChange = (newPrivacySetting: PrivacySetting) => {
    if (
      ["INVITE_ONLY", "PASSWORD", "LINK"].includes(newPrivacySetting) &&
      userPlan === "BASIC"
    ) {
      return;
    }
    formik.setFieldValue("advancedSettings.privacy.setting", newPrivacySetting);
    if (newPrivacySetting === "INVITE_ONLY") {
      formik.setFieldValue("advancedSettings.privacy.invitees", []);
    }
  };

  const handleInvite = (
    users: {
      email: string;
      name: string;
    }[],
  ) => {
    const updatedInvitees = [
      ...new Set([
        ...(formik.values.advancedSettings.privacy.invitees || []),
        ...users,
      ]),
    ];
    formik.setFieldValue("advancedSettings.privacy.invitees", updatedInvitees);
  };

  const handleRemoveInvitee = (email: string) => {
    const updatedInvitees =
      formik.values.advancedSettings.privacy.invitees?.filter(
        (invitee) => invitee.email !== email,
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
            {formik.values.advancedSettings.privacy.invitees.map((invitee) => (
              <div
                key={invitee.email}
                className="flex w-full items-center justify-between"
              >
                <Span>{invitee.name || invitee.email}</Span>
                <Button.Icon
                  size={24}
                  type="button"
                  filled
                  theme="feedback-error"
                  onClick={() => handleRemoveInvitee(invitee.email)}
                >
                  person_remove
                </Button.Icon>
              </div>
            ))}
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
      <article className="flex items-center justify-between">
        <FocusSpan>Privacy</FocusSpan>
        <div>
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
              disabled={userPlan === "BASIC"}
            >
              Invite only {userPlan === "BASIC" && <ProBadge />}
            </Select.Option>
            <Select.Option
              disabled
              //onClick={() => handlePrivacySettingChange("PASSWORD")}
              onClick={() => null}
              checked={privacySetting === "PASSWORD"}
              //disabled={userPlan === "BASIC"}
            >
              Password {userPlan === "BASIC" && <ProBadge />}
              <SoonBadge />
            </Select.Option>
            <Select.Option
              onClick={() => handlePrivacySettingChange("LINK")}
              checked={privacySetting === "LINK"}
              disabled={userPlan === "BASIC"}
            >
              Everyone with link {userPlan === "BASIC" && <ProBadge />}
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
  onSubmit: (users: { email: string; name: string }[]) => void;
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
      onSubmit(values.emails.split(",").map((email) => ({ email, name: "" })));
      formik.resetForm();
    },
  });

  return (
    <section className="flex items-end gap-2">
      <Field
        label="Email"
        inputProps={{
          placeholder: "Email(s), separated by commas",
          className: "h-11 w-full",
          type: "email",
          ...formik.getFieldProps("emails"),
          error: formik.touched.emails && !!formik.errors.emails,
        }}
        error={
          Array.isArray(formik.errors.emails)
            ? formik.errors.emails.join(", ")
            : formik.errors.emails
        }
      />
      <Button
        theme="extra"
        type="button"
        onClick={async () => {
          await formik.submitForm();
        }}
      >
        <FocusSpan>Invite</FocusSpan>
      </Button>
    </section>
  );
};

interface IUploadCSV {
  handleInvite: (users: { email: string; name: string }[]) => void;
}

const UploadCSV = ({ handleInvite }: IUploadCSV) => {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const lines = text.split("\n").filter(Boolean);

        // Extract headers from the first line
        const headers = lines[0]
          .split(",")
          .map((header) => header.trim().toLowerCase());

        // Find the indices of the email and name columns
        const emailIndex = headers.findIndex((header) => header === "email");
        const nameIndex = headers.findIndex((header) => header === "name");

        // Process the remaining lines to extract emails
        const rows = lines.slice(1).map((line) => {
          const columns = line.split(",").map((col) => col.trim());
          return { email: columns[emailIndex], name: columns[nameIndex] };
        });

        // Assuming handleInvite is accessible here
        handleInvite(rows);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <Button rounded className="w-full p-0" type="button">
        <label
          htmlFor="upload-csv"
          className="flex cursor-pointer place-content-center gap-2 py-2"
        >
          <Icon name="upload_file" filled />
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
      <Paragraph>
        Upload a .csv file to invite multiple users at once. The file should
        have two columns: email and name.
      </Paragraph>
    </>
  );
};
