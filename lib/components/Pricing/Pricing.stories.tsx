import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { FocusSpan, Heading5 } from "../FontFaces";
import Pricing from "./Pricing";

const meta: Meta<typeof Pricing> = {
  title: "Components/Pricing",
  component: Pricing,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Pricing is a compound component that displays pricing information with different modes (basic, monthly, yearly, lifetime). It includes sections for header, period, title, price, and comparison.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pricing>;

const BasicPlan = () => (
  <div className="h-full w-80">
    <Pricing>
      <Pricing.Header>
        <Pricing.Title>Hobby</Pricing.Title>
        <Pricing.Price>Free</Pricing.Price>
        <Button theme="light" className="w-full">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </Pricing.Header>
      <Pricing.Comparison>
        <Pricing.Feature>Up to 5 exams</Pricing.Feature>
        <Pricing.Feature>Basic features</Pricing.Feature>
        <Pricing.Feature>Community support</Pricing.Feature>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Basic: Story = {
  render: () => <BasicPlan />,
};

const MonthlyPlan = () => (
  <div className="h-full w-full">
    <Pricing mode="monthly">
      <Pricing.Header>
        <Pricing.Title>Pro</Pricing.Title>
        <Pricing.Container>
          <Pricing.Price>$10</Pricing.Price>
          <Pricing.Period>/month</Pricing.Period>
        </Pricing.Container>
        <Pricing.Explanation>Billed monthly</Pricing.Explanation>
        <Button theme="accent" className="w-full text-black">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </Pricing.Header>
      <Pricing.Comparison>
        <Pricing.Feature>Unlimited exams</Pricing.Feature>
        <Pricing.Feature>Advanced features</Pricing.Feature>
        <Pricing.Feature>Priority support</Pricing.Feature>
        <Pricing.Feature special>Analytics dashboard</Pricing.Feature>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Monthly: Story = {
  render: () => <MonthlyPlan />,
};

const YearlyPlan = () => (
  <div className="h-full w-full">
    <Pricing mode="yearly">
      <Pricing.Header>
        <Pricing.Title>Pro Yearly</Pricing.Title>
        <Pricing.Container>
          <Pricing.Price>$10</Pricing.Price>
          <Pricing.Period>/month</Pricing.Period>
        </Pricing.Container>
        <Pricing.Explanation>Save 20% compared to monthly</Pricing.Explanation>
        <Button theme="accent" className="w-full text-black">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </Pricing.Header>
      <Pricing.Comparison>
        <Pricing.Feature>Unlimited exams</Pricing.Feature>
        <Pricing.Feature>Advanced features</Pricing.Feature>
        <Pricing.Feature>Priority support</Pricing.Feature>
        <Pricing.Feature special>Analytics dashboard</Pricing.Feature>
        <Pricing.Feature special>Bulk student import</Pricing.Feature>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Yearly: Story = {
  render: () => <YearlyPlan />,
};

const LifetimePlan = () => (
  <div className="h-full w-80">
    <Pricing mode="lifetime">
      <Pricing.Header>
        <Pricing.Title>Pro Lifetime</Pricing.Title>
        <Pricing.Price>$500</Pricing.Price>
        <Pricing.Explanation>One-time payment</Pricing.Explanation>
        <Button theme="extra" className="w-full">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </Pricing.Header>
      <Pricing.Comparison>
        <Pricing.Feature>All Pro features</Pricing.Feature>
        <Pricing.Feature>Lifetime updates</Pricing.Feature>
        <Pricing.Feature special>VIP support</Pricing.Feature>
        <Pricing.Feature special>Early access to new features</Pricing.Feature>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Lifetime: Story = {
  render: () => <LifetimePlan />,
};

export const AllPlans: Story = {
  render: () => (
    <div className="flex grid-cols-4 flex-col place-items-center md:grid md:flex-row md:gap-5">
      <BasicPlan />
      <MonthlyPlan />
      <YearlyPlan />
      <LifetimePlan />
    </div>
  ),
};

// Individual component stories
export const PricingExplanationComponent: Story = {
  name: "PricingExplanation",
  render: () => (
    <div className="p-4">
      <Pricing.Explanation>Save 20% with annual billing</Pricing.Explanation>
    </div>
  ),
};

export const PricingContainerComponent: Story = {
  name: "PricingContainer",
  render: () => (
    <div className="p-4">
      <Pricing.Container>
        <Pricing.Price>$19</Pricing.Price>
        <Pricing.Period>/month</Pricing.Period>
      </Pricing.Container>
    </div>
  ),
};

export const PricingComparisonCellWrapperComponent: Story = {
  name: "PricingComparisonCellWrapper",
  render: () => (
    <div className="flex gap-4 p-4">
      <Pricing.ComparisonCellWrapper includes={true} />
      <Pricing.ComparisonCellWrapper includes={false} />
    </div>
  ),
};

export const PricingFeatureRowComponent: Story = {
  name: "PricingFeatureRow",
  render: () => (
    <div className="w-full max-w-2xl p-4">
      <Pricing.FeatureRow
        feature="AI-Assisted Exam Creation"
        includes={[true, true, false]}
      >
        Create exams with AI assistance
      </Pricing.FeatureRow>
      <Pricing.FeatureRow
        feature="Unlimited Students"
        includes={[false, true, true]}
      >
        No limit on the number of students
      </Pricing.FeatureRow>
      <Pricing.FeatureRow
        feature="Advanced Analytics"
        includes={[false, false, true]}
      >
        Detailed performance analytics and insights
      </Pricing.FeatureRow>
    </div>
  ),
};

// Comparison table example with FeatureRows
export const PricingComparisonTable: Story = {
  render: () => (
    <div className="w-full max-w-3xl overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="flex w-full gap-6 px-4 py-2 md:px-5 xl:px-6">
            <th className="flex w-1/2 items-center justify-start">
              <Heading5>Features</Heading5>
            </th>
            <th className="flex flex-1 items-center justify-center">
              <Heading5>Basic</Heading5>
            </th>
            <th className="flex flex-1 items-center justify-center">
              <Heading5>Pro</Heading5>
            </th>
            <th className="flex flex-1 items-center justify-center">
              <Heading5>Enterprise</Heading5>
            </th>
          </tr>
        </thead>

        <tbody>
          <Pricing.FeatureRow
            feature="Up to 5 exams"
            includes={[true, true, true]}
          >
            Create up to 5 exams for free
          </Pricing.FeatureRow>
          <Pricing.FeatureRow
            feature="Unlimited exams"
            includes={[false, true, true]}
          >
            Create as many exams as you need
          </Pricing.FeatureRow>
          <Pricing.FeatureRow
            feature="AI Question Generation"
            includes={[false, true, true]}
          >
            Generate questions with AI
          </Pricing.FeatureRow>
          <Pricing.FeatureRow
            feature="Advanced Analytics"
            includes={[false, false, true]}
          >
            Detailed performance analytics
          </Pricing.FeatureRow>
          <Pricing.FeatureRow
            feature="Custom Branding"
            includes={[false, false, true]}
          >
            Add your logo and brand colors
          </Pricing.FeatureRow>
        </tbody>
      </table>
    </div>
  ),
};
