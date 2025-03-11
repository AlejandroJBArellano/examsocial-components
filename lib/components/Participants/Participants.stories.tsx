import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import Participants, { Participant } from "./Participants";

export default {
  title: "Components/Participants",
  component: Participants,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Participants component displays a list of exam participants with their scores and optional actions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Title for the participants section",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
    children: {
      description: "Participant components to render",
      control: { disable: true },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "700px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Participants>;

type Story = StoryObj<typeof Participants>;

// Define a set of participants for our stories
const participantsList = [
  {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    score: "15/25",
  },
  {
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=5",
    score: "21/25",
  },
  {
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=8",
    score: "19/25",
  },
  {
    name: "Maria Garcia",
    avatar: "https://i.pravatar.cc/150?img=9",
    score: "25/25",
  },
  {
    name: "Robert Wilson",
    avatar: "https://i.pravatar.cc/150?img=12",
    score: "12/25",
  },
];

export const Default: Story = {
  args: {
    title: "Participants",
  },
  render: (args) => (
    <Participants {...args}>
      {participantsList.map((participant, index) => (
        <Participants.Participant
          key={index}
          name={participant.name}
          avatar={participant.avatar}
          score={participant.score}
          onClick={action(`Clicked on ${participant.name}`)}
        />
      ))}
    </Participants>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default view showing a list of participants with their scores",
      },
    },
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: "Top Performers",
  },
  render: (args) => (
    <Participants {...args}>
      {participantsList
        .sort((a, b) => {
          const aScore = parseInt(a.score.split("/")[0]);
          const bScore = parseInt(b.score.split("/")[0]);
          return bScore - aScore;
        })
        .slice(0, 3)
        .map((participant, index) => (
          <Participants.Participant
            key={index}
            name={participant.name}
            avatar={participant.avatar}
            score={participant.score}
          />
        ))}
    </Participants>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows how to customize the title and display only top performers",
      },
    },
  },
};

export const WithActions: Story = {
  render: () => (
    <Participants title="Exam Participants">
      {participantsList.map((participant, index) => (
        <Participants.Participant
          key={index}
          name={participant.name}
          avatar={participant.avatar}
          score={participant.score}
        >
          <Button.Icon
            theme="extra"
            rounded
            className="flex items-center justify-center p-2"
            onClick={action(`View results for ${participant.name}`)}
            size={24}
            filled
          >
            description
          </Button.Icon>
        </Participants.Participant>
      ))}
    </Participants>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates adding action buttons to each participant",
      },
    },
  },
};

export const WithoutScores: Story = {
  render: () => (
    <Participants title="Invited Participants">
      {participantsList.map((participant, index) => (
        <Participants.Participant
          key={index}
          name={participant.name}
          avatar={participant.avatar}
        >
          <Button.Icon
            theme="light"
            rounded
            className="flex items-center justify-center p-2"
            onClick={action(`Send reminder to ${participant.name}`)}
            size={24}
            filled
          >
            mail
          </Button.Icon>
        </Participants.Participant>
      ))}
    </Participants>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows participants without scores, useful for invitation lists",
      },
    },
  },
};

export const StandaloneParticipant: StoryObj<typeof Participant> = {
  render: () => (
    <div className="rounded-md border p-4">
      <Participant
        name="Emily Johnson"
        avatar="https://i.pravatar.cc/150?img=23"
        score="24/25"
        onClick={action("Participant clicked")}
      >
        <Button.Icon
          theme="accent"
          rounded
          className="flex items-center justify-center p-2"
          onClick={action("View profile")}
          size={24}
          filled
        >
          person
        </Button.Icon>
      </Participant>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates using the Participant component directly outside of Participants",
      },
    },
  },
};
