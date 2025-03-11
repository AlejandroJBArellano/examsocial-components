import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AnswerOptionType, QuestionDetail } from "./index";

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
    showCorrectAnswer: {
      control: "boolean",
      description: "Whether to show which answer is correct",
      defaultValue: true,
    },
    correctPercentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Percentage of users who got the answer correct",
      defaultValue: 25,
    },
    onEdit: { action: "edit clicked" },
    onDelete: { action: "delete clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof QuestionDetail>;

// Sample options for all stories
const sampleOptions: AnswerOptionType[] = [
  {
    id: "1",
    content:
      'import {"{writable}"} from \'svelte/store\'; {"\n"} const store = writable([]);',
    correct: true,
    percentage: 42,
  },
  {
    id: "2",
    content:
      "import { useState } from 'react'; {\"\\n\"} const [state, setState] = useState([]);",
    correct: false,
    percentage: 30,
  },
  {
    id: "3",
    content:
      "import { reactive } from 'vue'; {\"\\n\"} const state = reactive([]);",
    correct: false,
    percentage: 28,
  },
];

// Basic story with props
export const Default: Story = {
  args: {
    children: "Which code snippet creates a store in Svelte?",
    showCorrectAnswer: true,
    correctPercentage: 42,
    options: sampleOptions,
  },
};

// With correct answer hidden
export const HiddenAnswer: Story = {
  args: {
    children: "Which code snippet creates a store in Svelte?",
    showCorrectAnswer: false,
    correctPercentage: 42,
    options: sampleOptions,
  },
};

// With interactive toggle for showing answers
const InteractiveTemplate = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="space-y-4">
      <div>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Hide" : "Show"} Correct Answer
        </button>
      </div>
      <QuestionDetail
        options={sampleOptions}
        showCorrectAnswer={showAnswer}
        correctPercentage={42}
      >
        Which code snippet creates a store in Svelte?
      </QuestionDetail>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
};

// Using compound component pattern
const CompoundPatternTemplate = () => (
  <QuestionDetail>
    <QuestionDetail.Header
      onEdit={() => console.log("Edit")}
      onDelete={() => console.log("Delete")}
    >
      Which code snippet creates a store in Svelte?
    </QuestionDetail.Header>
    <QuestionDetail.Options>
      {sampleOptions.map((option) => (
        <QuestionDetail.Option key={option.id} id={option.id} />
      ))}
    </QuestionDetail.Options>
  </QuestionDetail>
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
  const customOptions: AnswerOptionType[] = [
    {
      id: "1",
      content: (
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-blue-500" />
          <span>Option with custom styling</span>
        </div>
      ),
      correct: true,
      percentage: 55,
    },
    {
      id: "2",
      content: (
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500" />
          <span>Another custom option</span>
        </div>
      ),
      correct: false,
      percentage: 45,
    },
  ];

  return (
    <QuestionDetail
      options={customOptions}
      showCorrectAnswer={true}
      correctPercentage={55}
    >
      <span className="flex items-center gap-2">
        <span className="text-blue-500">●</span> Question with custom content
      </span>
    </QuestionDetail>
  );
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
  const programmingOptions: AnswerOptionType[] = [
    {
      id: "p1",
      content: "JavaScript",
      correct: true,
      percentage: 60,
    },
    {
      id: "p2",
      content: "Java",
      correct: false,
      percentage: 25,
    },
    {
      id: "p3",
      content: "Python",
      correct: false,
      percentage: 15,
    },
  ];

  const mathOptions: AnswerOptionType[] = [
    {
      id: "m1",
      content: "9",
      correct: false,
      percentage: 15,
    },
    {
      id: "m2",
      content: "6",
      correct: true,
      percentage: 75,
    },
    {
      id: "m3",
      content: "3",
      correct: false,
      percentage: 10,
    },
  ];

  return (
    <div className="space-y-8">
      <QuestionDetail
        options={programmingOptions}
        showCorrectAnswer={true}
        correctPercentage={60}
      >
        Which language is primarily used for web development?
      </QuestionDetail>

      <QuestionDetail
        options={mathOptions}
        showCorrectAnswer={true}
        correctPercentage={75}
      >
        What is 2 × 3?
      </QuestionDetail>
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
  const [options] = useState<AnswerOptionType[]>([
    {
      id: "1",
      content: "This is the only option",
      correct: true,
      percentage: 100,
    },
  ]);

  return (
    <QuestionDetail options={options} showCorrectAnswer={true}>
      Question with missing selected option
    </QuestionDetail>
  );
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
    <QuestionDetail
      options={sampleOptions}
      showCorrectAnswer={true}
      correctPercentage={42}
    >
      Which code snippet creates a store in Svelte?
    </QuestionDetail>
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
