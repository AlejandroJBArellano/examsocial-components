import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { Dialog } from ".";
import { BannerInput } from "../BannerInput";
import { Button } from "../Button";
import { Field } from "../Field";
import { Icon } from "../Icon";
import { ImageInput } from "../ImageInput";
import { ImageUploader } from "../ImageUploader";
import { RadioGroup } from "../RadioGroup";
import { Select } from "../Select";
import { Separator } from "../Separator";
import { Tag } from "../Tag";
import { Tooltip } from "../Tooltip";

type CheckboxValue = boolean | "indeterminate";

const categories = ["General Knowledge", "Science", "History", "Programming"];
const languages = ["English", "Spanish", "Portuguese"];

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog/Compositions/Form",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Form-heavy dialog composition that combines fields, selectors, toggles, checkboxes, tooltips, uploads and action states.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const FormDialogWithAssetsStory = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [language, setLanguage] = useState(languages[0]);
  const [difficulty, setDifficulty] = useState("intermediate");
  const [visibility, setVisibility] = useState("private");
  const [timedMode, setTimedMode] = useState(true);
  const [randomizeQuestions, setRandomizeQuestions] = useState(true);
  const [proctoredMode, setProctoredMode] = useState(false);
  const [acceptPublishingTerms, setAcceptPublishingTerms] = useState(false);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const publishReady =
    title.trim().length >= 5 &&
    description.trim().length >= 20 &&
    Boolean(bannerFile) &&
    Boolean(coverFile) &&
    acceptPublishingTerms;

  const setupScore = useMemo(() => {
    const scoreParts = [
      timedMode ? 20 : 0,
      randomizeQuestions ? 20 : 0,
      proctoredMode ? 20 : 0,
      bannerFile ? 20 : 0,
      coverFile ? 20 : 0,
    ];

    return scoreParts.reduce((acc, value) => acc + value, 0);
  }, [timedMode, randomizeQuestions, proctoredMode, bannerFile, coverFile]);

  const resetForm = () => {
    dialogRef.current?.close();
    setTitle("");
    setSlug("");
    setDescription("");
    setCategory(categories[0]);
    setLanguage(languages[0]);
    setDifficulty("intermediate");
    setVisibility("private");
    setTimedMode(true);
    setRandomizeQuestions(true);
    setProctoredMode(false);
    setAcceptPublishingTerms(false);
    setBannerFile(null);
    setCoverFile(null);
  };

  const handleBannerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setBannerFile(file);
  };

  const handleCoverChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setCoverFile(file);
  };

  return (
    <>
      <Button theme="primary" onClick={() => dialogRef.current?.showModal()}>
        Open Full Form Dialog
      </Button>

      <Dialog
        innerRef={dialogRef}
        className="w-[min(96vw,1100px)] max-w-6xl p-0"
      >
        <div className="max-h-[86vh] space-y-6 overflow-y-auto p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-semibold">Create exam blueprint</h2>
              <p className="text-sm text-gray-700">
                Build settings, upload assets, and publish from one dialog.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Tag theme="primary">{category}</Tag>
              <Tag theme="secondary">{language}</Tag>
              <Tag theme={setupScore === 100 ? "feedback-success" : "extra"}>
                Setup score: {setupScore}%
              </Tag>
            </div>
          </div>

          <Separator>Configuration</Separator>

          <div className="grid gap-6 xl:grid-cols-[1.25fr_1fr]">
            <div className="space-y-4">
              <Field
                label="Exam title"
                helperText="Minimum 5 characters"
                error={
                  title.length > 0 && title.length < 5
                    ? "Title is too short"
                    : undefined
                }
                inputProps={{
                  value: title,
                  onChange: (event: ChangeEvent<HTMLInputElement>) =>
                    setTitle(event.target.value),
                  placeholder: "e.g. Advanced Physics Final",
                  LeftIcon: <Icon name="edit_note" size={20} />,
                }}
              />

              <Field
                label="Public slug"
                helperText="Used in exam URL"
                inputProps={{
                  value: slug,
                  onChange: (event: ChangeEvent<HTMLInputElement>) =>
                    setSlug(event.target.value),
                  placeholder: "advanced-physics-final",
                  LeftIcon: <Icon name="link" size={20} />,
                }}
              />

              <div className="grid gap-4 md:grid-cols-2">
                <Field.Select
                  label="Category"
                  helperText="Shown in discovery"
                  selectProps={{ text: category }}
                >
                  {categories.map((option) => (
                    <Select.Option
                      key={option}
                      checked={category === option}
                      onCheckedChange={() => setCategory(option)}
                    >
                      {option}
                    </Select.Option>
                  ))}
                </Field.Select>

                <Field.Select
                  label="Language"
                  helperText="Main language"
                  selectProps={{ text: language }}
                >
                  {languages.map((option) => (
                    <Select.Option
                      key={option}
                      checked={language === option}
                      onCheckedChange={() => setLanguage(option)}
                    >
                      {option}
                    </Select.Option>
                  ))}
                </Field.Select>
              </div>

              <Field.Textarea
                label="Description"
                helperText="At least 20 characters"
                error={
                  description.length > 0 && description.length < 20
                    ? "Describe the exam with more detail"
                    : undefined
                }
                textareaProps={{
                  rows: 4,
                  value: description,
                  placeholder:
                    "Summarize scope, target audience, and exam objectives...",
                  onChange: (event: ChangeEvent<HTMLTextAreaElement>) =>
                    setDescription(event.target.value),
                }}
              />

              <Field.Radio
                helperText="Affects score weighting"
                radioProps={{
                  value: difficulty,
                  onValueChange: setDifficulty,
                  items: [
                    { value: "beginner", label: "Beginner" },
                    { value: "intermediate", label: "Intermediate" },
                    { value: "advanced", label: "Advanced" },
                  ],
                }}
              >
                Difficulty
              </Field.Radio>

              <div className="space-y-3 rounded-md border border-black p-3">
                <p className="text-sm font-medium">Visibility</p>
                <RadioGroup
                  orientation="horizontal"
                  value={visibility}
                  onValueChange={setVisibility}
                  items={[
                    { value: "private", label: "Private" },
                    { value: "unlisted", label: "Unlisted" },
                    { value: "public", label: "Public" },
                  ]}
                />
              </div>

              <Field.Switch
                checked={timedMode}
                onCheckedChange={(checked: boolean) =>
                  setTimedMode(Boolean(checked))
                }
                helperText="Adds countdown and hard stop"
              >
                Timed mode
              </Field.Switch>

              <Field.Checkbox
                option="Randomize question order"
                helperText="Questions and options are shuffled"
                checkboxProps={{
                  id: "randomize-questions",
                  checked: randomizeQuestions,
                  onCheckedChange: (checked: CheckboxValue) =>
                    setRandomizeQuestions(checked === true),
                }}
              >
                Exam behavior
              </Field.Checkbox>

              <Field.Checkbox
                option="Enable webcam proctoring"
                helperText="Requires camera permission"
                checkboxProps={{
                  id: "proctored-mode",
                  checked: proctoredMode,
                  onCheckedChange: (checked: CheckboxValue) =>
                    setProctoredMode(checked === true),
                }}
              >
                Integrity controls
              </Field.Checkbox>
            </div>

            <div className="space-y-4 rounded-lg border border-black bg-light p-4">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">Visual assets</h3>
                <Tooltip
                  side="right"
                  trigger={
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full border border-black bg-light p-1"
                    >
                      <Icon name="help" size={18} filled />
                    </button>
                  }
                >
                  Upload a banner and a cover image. This tooltip renders inside
                  the dialog container.
                </Tooltip>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Banner image</p>
                <BannerInput onChange={handleBannerChange} />
                {bannerFile && (
                  <ImageUploader
                    image={bannerFile}
                    onDelete={() => setBannerFile(null)}
                  />
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Cover image</p>
                <ImageInput onChange={handleCoverChange} />
                {coverFile && (
                  <ImageUploader
                    image={coverFile}
                    onDelete={() => setCoverFile(null)}
                  />
                )}
              </div>

              <Field.Checkbox
                option="I verified copyright ownership"
                checkboxProps={{
                  id: "publishing-terms",
                  checked: acceptPublishingTerms,
                  onCheckedChange: (checked: CheckboxValue) =>
                    setAcceptPublishingTerms(checked === true),
                }}
              >
                Publishing terms
              </Field.Checkbox>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button.Action name="tips_and_updates">
              Publish is enabled after required content and assets are complete.
            </Button.Action>

            <div className="flex items-center gap-2">
              <Button theme="light" onClick={resetForm}>
                Cancel
              </Button>
              <Button theme="primary" onClick={resetForm}>
                Save draft
              </Button>
              <Button
                theme="extra"
                disabled={!publishReady}
                onClick={resetForm}
              >
                Publish exam
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const FormDialogWithAssets: Story = {
  render: () => <FormDialogWithAssetsStory />,
};
