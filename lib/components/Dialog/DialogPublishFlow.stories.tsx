import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useRef, useState } from "react";
import { Dialog } from ".";
import { Button } from "../Button";
import { Field } from "../Field";
import { Icon } from "../Icon";
import { RadioGroup } from "../RadioGroup";
import { Select } from "../Select";
import { Separator } from "../Separator";
import { Tab } from "../Tab";
import { Tag } from "../Tag";
import { Tooltip } from "../Tooltip";

type TabKey = "content" | "launch" | "review";
type CheckboxValue = boolean | "indeterminate";

const channels = ["Internal", "Classroom", "Marketplace", "Private Link"];
const tabConfig: { key: TabKey; label: string }[] = [
  { key: "content", label: "Content" },
  { key: "launch", label: "Launch" },
  { key: "review", label: "Review" },
];

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog/Compositions/PublishFlow",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Multi-step publish workflow inside a dialog with tabs, planning controls and launch gating.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const PublishFlowDialogStory = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [activeTab, setActiveTab] = useState<TabKey>("content");
  const [distribution, setDistribution] = useState(channels[0]);
  const [publishMode, setPublishMode] = useState("scheduled");
  const [showLeaderboard, setShowLeaderboard] = useState(true);
  const [sendEmails, setSendEmails] = useState(true);
  const [announceSocial, setAnnounceSocial] = useState(false);
  const [allowRetakes, setAllowRetakes] = useState(false);

  const readiness = useMemo(() => {
    const base = activeTab === "review" ? 50 : 20;
    const flags = [showLeaderboard, sendEmails, announceSocial, allowRetakes];
    const extra = flags.filter(Boolean).length * 12;
    return Math.min(base + extra, 100);
  }, [activeTab, showLeaderboard, sendEmails, announceSocial, allowRetakes]);

  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <Button theme="primary" onClick={() => dialogRef.current?.showModal()}>
        Open Publish Flow
      </Button>

      <Dialog
        innerRef={dialogRef}
        className="w-[min(95vw,1040px)] max-w-5xl p-0"
      >
        <div className="max-h-[86vh] space-y-6 overflow-y-auto p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold">Publish workflow</h2>
              <p className="text-sm text-gray-700">
                Review content, configure launch, and publish with confidence.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Tag theme="extra">Readiness {readiness}%</Tag>
              <Tooltip
                side="left"
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-black bg-light p-1"
                  >
                    <Icon name="help" size={18} filled />
                  </button>
                }
              >
                This help tooltip is rendered in the dialog portal container.
              </Tooltip>
            </div>
          </div>

          <div className="inline-flex items-stretch overflow-hidden rounded-md border border-black">
            {tabConfig.map((tab, index) => (
              <button
                key={tab.key}
                type="button"
                className={index > 0 ? "border-l border-black" : ""}
                onClick={() => setActiveTab(tab.key)}
              >
                <Tab selected={activeTab === tab.key}>{tab.label}</Tab>
              </button>
            ))}
          </div>

          {activeTab === "content" && (
            <div className="mt-4 space-y-4">
              <Separator>Content Checklist</Separator>

              <div className="grid gap-4 md:grid-cols-2">
                <Field.Select
                  label="Distribution channel"
                  helperText="Where this exam will be visible"
                  selectProps={{ text: distribution }}
                >
                  {channels.map((option) => (
                    <Select.Option
                      key={option}
                      checked={distribution === option}
                      onCheckedChange={() => setDistribution(option)}
                    >
                      {option}
                    </Select.Option>
                  ))}
                </Field.Select>

                <Field.Radio
                  helperText="Choose when students can access"
                  radioProps={{
                    orientation: "horizontal",
                    value: publishMode,
                    onValueChange: setPublishMode,
                    items: [
                      { value: "draft", label: "Draft" },
                      { value: "scheduled", label: "Scheduled" },
                      { value: "instant", label: "Instant" },
                    ],
                  }}
                >
                  Publish mode
                </Field.Radio>
              </div>

              <div className="space-y-3 rounded-md border border-black p-4">
                <p className="text-sm font-medium">Quality gates</p>
                <Field.Checkbox
                  option="Enable leaderboard"
                  checkboxProps={{
                    id: "leaderboard",
                    checked: showLeaderboard,
                    onCheckedChange: (checked: CheckboxValue) =>
                      setShowLeaderboard(checked === true),
                  }}
                >
                  Motivation
                </Field.Checkbox>

                <Field.Checkbox
                  option="Send launch emails"
                  checkboxProps={{
                    id: "launch-emails",
                    checked: sendEmails,
                    onCheckedChange: (checked: CheckboxValue) =>
                      setSendEmails(checked === true),
                  }}
                >
                  Communication
                </Field.Checkbox>

                <Field.Checkbox
                  option="Announce on social channels"
                  checkboxProps={{
                    id: "social-announcement",
                    checked: announceSocial,
                    onCheckedChange: (checked: CheckboxValue) =>
                      setAnnounceSocial(checked === true),
                  }}
                >
                  Marketing
                </Field.Checkbox>

                <Field.Checkbox
                  option="Allow retakes"
                  checkboxProps={{
                    id: "allow-retakes",
                    checked: allowRetakes,
                    onCheckedChange: (checked: CheckboxValue) =>
                      setAllowRetakes(checked === true),
                  }}
                >
                  Policy
                </Field.Checkbox>
              </div>
            </div>
          )}

          {activeTab === "launch" && (
            <div className="mt-4 space-y-4">
              <Separator>Launch Plan</Separator>

              <div className="rounded-md border border-black bg-light p-4">
                <p className="text-sm font-medium">Distribution strategy</p>
                <p className="mt-2 text-sm text-gray-700">
                  Selected channel:{" "}
                  <span className="font-semibold">{distribution}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Publish mode:{" "}
                  <span className="font-semibold">{publishMode}</span>
                </p>
              </div>

              <div className="rounded-md border border-black p-4">
                <p className="text-sm font-medium">Audience segmentation</p>
                <RadioGroup
                  className="mt-3"
                  orientation="horizontal"
                  value={distribution}
                  onValueChange={setDistribution}
                  items={channels.map((value) => ({ value, label: value }))}
                />
              </div>
            </div>
          )}

          {activeTab === "review" && (
            <div className="mt-4 space-y-4">
              <Separator>Final Review</Separator>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-black p-3">
                  <p className="text-xs uppercase text-gray-600">Channel</p>
                  <p className="text-sm font-semibold">{distribution}</p>
                </div>
                <div className="rounded-md border border-black p-3">
                  <p className="text-xs uppercase text-gray-600">Mode</p>
                  <p className="text-sm font-semibold">{publishMode}</p>
                </div>
                <div className="rounded-md border border-black p-3">
                  <p className="text-xs uppercase text-gray-600">Leaderboard</p>
                  <p className="text-sm font-semibold">
                    {showLeaderboard ? "Enabled" : "Disabled"}
                  </p>
                </div>
                <div className="rounded-md border border-black p-3">
                  <p className="text-xs uppercase text-gray-600">Email Blast</p>
                  <p className="text-sm font-semibold">
                    {sendEmails ? "Enabled" : "Disabled"}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-end gap-2">
            <Button theme="light" onClick={closeDialog}>
              Close
            </Button>
            <Button theme="accent" onClick={() => setActiveTab("launch")}>
              Save and Continue
            </Button>
            <Button
              theme="extra"
              disabled={readiness < 70}
              onClick={closeDialog}
            >
              Publish Now
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const DialogPublishFlow: Story = {
  render: () => <PublishFlowDialogStory />,
};
