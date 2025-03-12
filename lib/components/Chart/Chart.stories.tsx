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
      options: ["primary", "secondary", "accent", "extra", "light"],
      defaultValue: "primary",
    },
    showTooltip: {
      control: "boolean",
      defaultValue: true,
    },
    showLegend: {
      control: "boolean",
      defaultValue: false,
    },
    animated: {
      control: "boolean",
      defaultValue: true,
    },
    valueLabel: {
      control: "text",
      defaultValue: "Value",
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
 * Light variant stories
 */

export const LightVariant: Story = {
  args: {
    title: "Light Variant Chart",
    variant: "light",
    data: [
      { label: "Q1", value: 78 },
      { label: "Q2", value: 85 },
      { label: "Q3", value: 92 },
      { label: "Q4", value: 88 },
    ],
    maxY: 100,
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the new light variant of the chart component with a clean white and gray color scheme.",
      },
    },
  },
};

export const LightVariantWithFeatures: Story = {
  args: {
    title: "Light Variant with All Features",
    variant: "light",
    data: [
      { label: "Student A", value: 82 },
      { label: "Student B", value: 67 },
      { label: "Student C", value: 91 },
      { label: "Student D", value: 75 },
      { label: "Student E", value: 88 },
    ],
    maxY: 100,
    showTooltip: true,
    showLegend: true,
    animated: true,
    valueLabel: "Test Score",
    className: "shadow-md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases the minimalist light variant with all available features enabled. Perfect for a clean, professional presentation.",
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
        <Chart
          title="Light Variant"
          data={testData}
          variant="light"
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

/**
 * New stories to showcase enhanced features
 */

export const WithTooltip: Story = {
  args: {
    title: "Chart with Tooltip",
    variant: "primary",
    data: [
      { label: "Math", value: 85 },
      { label: "Science", value: 72 },
      { label: "Language", value: 90 },
      { label: "History", value: 68 },
      { label: "Arts", value: 95 },
    ],
    maxY: 100,
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the tooltip feature when hovering over chart bars.",
      },
    },
  },
};

export const WithLegend: Story = {
  args: {
    title: "Chart with Legend",
    variant: "secondary",
    data: [
      { label: "Quizzes", value: 75 },
      { label: "Midterm", value: 68 },
      { label: "Projects", value: 90 },
      { label: "Final Exam", value: 82 },
    ],
    maxY: 100,
    showLegend: true,
    valueLabel: "Score",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story shows how to display a legend at the top of the chart.",
      },
    },
  },
};

export const WithAnimations: Story = {
  args: {
    title: "Animated Chart",
    variant: "accent",
    data: [
      { label: "Week 1", value: 45 },
      { label: "Week 2", value: 55 },
      { label: "Week 3", value: 35 },
      { label: "Week 4", value: 75 },
      { label: "Week 5", value: 85 },
    ],
    maxY: 100,
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the animation capabilities of the chart.",
      },
    },
  },
};

export const CustomValueLabel: Story = {
  args: {
    title: "Custom Value Label",
    variant: "extra",
    data: [
      { label: "Q1", value: 2.5 },
      { label: "Q2", value: 3.8 },
      { label: "Q3", value: 4.2 },
      { label: "Q4", value: 3.1 },
    ],
    maxY: 5,
    valueLabel: "GPA",
    showTooltip: true,
    showLegend: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story shows how to customize the value label in both tooltips and legend.",
      },
    },
  },
};

export const FullFeatured: Story = {
  args: {
    title: "Full Featured Chart",
    variant: "accent",
    data: [
      { label: "Module 1", value: 92 },
      { label: "Module 2", value: 85 },
      { label: "Module 3", value: 78 },
      { label: "Module 4", value: 95 },
      { label: "Module 5", value: 88 },
    ],
    maxY: 100,
    showTooltip: true,
    showLegend: true,
    animated: true,
    valueLabel: "Completion %",
    className: "shadow-lg",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases all available features of the chart component used together.",
      },
    },
  },
};

export const NonAnimated: Story = {
  args: {
    title: "Non-Animated Chart",
    variant: "primary",
    data: [
      { label: "Section A", value: 65 },
      { label: "Section B", value: 72 },
      { label: "Section C", value: 58 },
      { label: "Section D", value: 80 },
    ],
    maxY: 100,
    animated: false,
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how the chart looks without animations.",
      },
    },
  },
};

/**
 * This story shows an interactive demo of all features.
 */
export const InteractiveDemo: StoryObj = {
  render: () => {
    const demoData = [
      { label: "Mon", value: 65 },
      { label: "Tue", value: 72 },
      { label: "Wed", value: 45 },
      { label: "Thu", value: 85 },
      { label: "Fri", value: 55 },
    ];

    return (
      <div className="space-y-8">
        <Chart
          title="Interactive Demo - Try the controls!"
          data={demoData}
          variant="primary"
          maxY={100}
          showTooltip={true}
          showLegend={true}
          animated={true}
          valueLabel="Daily Score"
        />
        <div className="rounded-lg bg-gray-100 p-4">
          <p className="text-sm">
            This demo showcases all the interactive features of the Chart
            component. You can use the controls in the Storybook panel to toggle
            features on and off.
          </p>
          <ul className="mt-2 list-inside list-disc text-sm">
            <li>
              Toggle tooltips with the <code>showTooltip</code> control
            </li>
            <li>
              Show/hide the legend with the <code>showLegend</code> control
            </li>
            <li>
              Enable/disable animations with the <code>animated</code> control
            </li>
            <li>
              Customize the value label with the <code>valueLabel</code> control
            </li>
            <li>
              Change the visual style with the <code>variant</code> control
            </li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "An interactive demo showcasing all the features of the Chart component.",
      },
    },
  },
};
