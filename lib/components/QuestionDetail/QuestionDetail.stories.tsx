import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { QuestionDetail } from "./index";

const meta: Meta<typeof QuestionDetail> = {
  title: "Components/QuestionDetail",
  component: QuestionDetail,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible component for displaying quiz questions with answer options, implementing the compound component pattern.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onEdit: { action: "edit clicked" },
    onDelete: { action: "delete clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof QuestionDetail>;

// Sample detail for all stories
const sampleDetail = {
  id: "1",
  title: "Which code snippet creates a store in Svelte?",
  options: [
    {
      id: "1",
      text: 'import {"{writable}"} from \'svelte/store\'; {"\n"} const store = writable([]);',
      correct: true,
      percentage: 42,
    },
    {
      id: "2",
      text: "import { useState } from 'react'; {\"\\n\"} const [state, setState] = useState([]);",
      correct: false,
      percentage: 30,
    },
    {
      id: "3",
      text: "import { reactive } from 'vue'; {\"\\n\"} const state = reactive([]);",
      correct: false,
      percentage: 28,
    },
  ],
};

// Basic story with props
export const Default: Story = {
  args: {
    detail: sampleDetail,
  },
};

// Using compound component pattern
const CompoundPatternTemplate = () => (
  <QuestionDetail
    detail={sampleDetail}
    onEdit={() => console.log("Edit")}
    onDelete={() => console.log("Delete")}
  />
);

export const CompoundPattern: Story = {
  render: () => <CompoundPatternTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates using the compound component pattern for more flexibility and control over the component structure.",
      },
    },
  },
};

// With custom question and options
const CustomContentTemplate = () => {
  const customDetail = {
    id: "2",
    title: "Question with custom content",
    options: [
      {
        id: "1",
        text: "Option with custom styling",
        correct: true,
        percentage: 55,
      },
      {
        id: "2",
        text: "Another custom option",
        correct: false,
        percentage: 45,
      },
    ],
  };

  return <QuestionDetail detail={customDetail} />;
};

export const CustomContent: Story = {
  render: () => <CustomContentTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          "The component supports rich content using React nodes for both questions and answer options.",
      },
    },
  },
};

// Multiple questions comparison
const MultipleQuestionsTemplate = () => {
  const programmingDetail = {
    id: "3",
    title: "Which language is primarily used for web development?",
    options: [
      {
        id: "p1",
        text: "JavaScript",
        correct: true,
        percentage: 60,
      },
      {
        id: "p2",
        text: "Java",
        correct: false,
        percentage: 25,
      },
      {
        id: "p3",
        text: "Python",
        correct: false,
        percentage: 15,
      },
    ],
  };

  const mathDetail = {
    id: "4",
    title: "What is 2 × 3?",
    options: [
      {
        id: "m1",
        text: "9",
        correct: false,
        percentage: 15,
      },
      {
        id: "m2",
        text: "6",
        correct: true,
        percentage: 75,
      },
      {
        id: "m3",
        text: "3",
        correct: false,
        percentage: 10,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <QuestionDetail detail={programmingDetail} />
      <QuestionDetail detail={mathDetail} />
    </div>
  );
};

export const MultipleQuestions: Story = {
  render: () => <MultipleQuestionsTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          "Multiple questions can be displayed together to create a quiz or assessment interface.",
      },
    },
  },
};

// Error state
const MissingOptionTemplate = () => {
  const [detail] = useState({
    id: "5",
    title: "Question with missing selected option",
    options: [
      {
        id: "1",
        text: "This is the only option",
        correct: true,
        percentage: 100,
      },
    ],
  });

  return <QuestionDetail detail={detail} />;
};

export const MissingOption: Story = {
  render: () => <MissingOptionTemplate />,
  parameters: {
    docs: {
      description: {
        story: "The component gracefully handles missing options.",
      },
    },
  },
};

// Mobile view (narrow container)
const MobileViewTemplate = () => (
  <div className="w-80">
    <QuestionDetail detail={sampleDetail} />
  </div>
);

export const MobileView: Story = {
  render: () => <MobileViewTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          "Example of how the component looks on mobile devices with limited width.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
