import type { Meta, StoryObj } from "@storybook/react";
import Chart from "./Chart";

const meta: Meta<typeof Chart> = {
  title: "Components/Chart",
  component: Chart,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Chart is a component for visualizing data in a bar chart format. It supports different color themes and can be used to display various types of data like exam results by grade, results by question, etc.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent", "extra"],
      defaultValue: "primary",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const ResultsByGrade: Story = {
  args: {
    title: "Results by grade",
    variant: "primary",
    data: [
      { label: "A", value: 80 },
      { label: "B", value: 65 },
      { label: "C", value: 40 },
      { label: "D", value: 30 },
      { label: "E", value: 20 },
      { label: "F", value: 10 },
    ],
    maxY: 100,
  },
};

export const ResultsByQuestion: Story = {
  args: {
    title: "Results by question",
    variant: "secondary",
    data: [
      { label: "Q1", value: 90 },
      { label: "Q2", value: 45 },
      { label: "Q3", value: 75 },
      { label: "Q4", value: 60 },
      { label: "Q5", value: 35 },
      { label: "Q6", value: 80 },
      { label: "Q7", value: 55 },
      { label: "Q8", value: 65 },
    ],
    maxY: 100,
  },
};

export const ExamScores: Story = {
  args: {
    title: "Exam Scores Distribution",
    variant: "accent",
    data: [
      { label: "0-10", value: 5 },
      { label: "11-20", value: 8 },
      { label: "21-30", value: 12 },
      { label: "31-40", value: 15 },
      { label: "41-50", value: 22 },
      { label: "51-60", value: 30 },
      { label: "61-70", value: 40 },
      { label: "71-80", value: 35 },
      { label: "81-90", value: 25 },
      { label: "91-100", value: 15 },
    ],
    maxY: 50,
  },
};

export const MonthlyProgress: Story = {
  args: {
    title: "Monthly Progress",
    variant: "extra",
    data: [
      { label: "Jan", value: 45 },
      { label: "Feb", value: 52 },
      { label: "Mar", value: 60 },
      { label: "Apr", value: 58 },
      { label: "May", value: 65 },
      { label: "Jun", value: 72 },
    ],
    maxY: 100,
  },
};

// New stories

export const FewDataPoints: Story = {
  args: {
    title: "Minimal Dataset",
    variant: "primary",
    data: [
      { label: "A", value: 90 },
      { label: "B", value: 30 },
    ],
    maxY: 100,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A chart with only two data points to demonstrate minimum viable dataset.",
      },
    },
  },
};

export const CustomMaximumValue: Story = {
  args: {
    title: "Custom Maximum Y-Axis",
    variant: "secondary",
    data: [
      { label: "A", value: 150 },
      { label: "B", value: 220 },
      { label: "C", value: 180 },
      { label: "D", value: 280 },
    ],
    maxY: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the flexibility of the chart by using a custom maximum Y-axis value.",
      },
    },
  },
};

export const LongLabels: Story = {
  args: {
    title: "Chart with Long Labels",
    variant: "accent",
    data: [
      { label: "Question 1: Multiple Choice", value: 75 },
      { label: "Question 2: Short Answer", value: 45 },
      { label: "Question 3: Essay Response", value: 60 },
      { label: "Question 4: Matching Items", value: 80 },
    ],
    maxY: 100,
  },
  parameters: {
    docs: {
      description: {
        story: "This story shows how the chart handles long text labels.",
      },
    },
  },
};

export const ZeroValues: Story = {
  args: {
    title: "Chart with Zero Values",
    variant: "primary",
    data: [
      { label: "A", value: 60 },
      { label: "B", value: 0 },
      { label: "C", value: 45 },
      { label: "D", value: 0 },
      { label: "E", value: 70 },
    ],
    maxY: 100,
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates how the chart displays zero values.",
      },
    },
  },
};

export const ManyDataPoints: Story = {
  args: {
    title: "Chart with Many Data Points",
    variant: "extra",
    data: Array.from({ length: 20 }, (_, i) => ({
      label: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 100),
    })),
    maxY: 100,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how the chart handles a large number of data points.",
      },
    },
  },
};

export const CustomClassNames: Story = {
  args: {
    title: "Chart with Custom CSS Classes",
    variant: "secondary",
    data: [
      { label: "A", value: 80 },
      { label: "B", value: 65 },
      { label: "C", value: 40 },
    ],
    maxY: 100,
    className: "shadow-xl border-2 border-secondary",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story shows how to apply custom CSS classes to the chart container.",
      },
    },
  },
};

/**
 * This story is intended for visual regression testing.
 * It displays all variants of the Chart component in a single view.
 */
export const VisualRegressionTest: StoryObj = {
  render: () => {
    const testData = [
      { label: "A", value: 80 },
      { label: "B", value: 60 },
      { label: "C", value: 40 },
    ];

    return (
      <div className="space-y-8">
        <Chart
          title="Primary Variant"
          data={testData}
          variant="primary"
          maxY={100}
        />
        <Chart
          title="Secondary Variant"
          data={testData}
          variant="secondary"
          maxY={100}
        />
        <Chart
          title="Accent Variant"
          data={testData}
          variant="accent"
          maxY={100}
        />
        <Chart
          title="Extra Variant"
          data={testData}
          variant="extra"
          maxY={100}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story displays all variants of the Chart component in a single view for visual regression testing purposes.",
      },
    },
  },
};
