import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { FocusSpan } from "../FontFaces";
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
  <div className="w-80">
    <Pricing>
      <Pricing.Header>
        <Pricing.Title>Hobby</Pricing.Title>
        <Pricing.Price>Free</Pricing.Price>
        <Button theme="light" className="w-full">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </Pricing.Header>
      <Pricing.Comparison>
        <Pricing.ComparisonCell>Up to 5 exams</Pricing.ComparisonCell>
        <Pricing.ComparisonCell>Basic features</Pricing.ComparisonCell>
        <Pricing.ComparisonCell>Community support</Pricing.ComparisonCell>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Basic: Story = {
  render: () => <BasicPlan />,
};

const MonthlyPlan = () => (
  <div className="w-full">
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
        <Pricing.ComparisonCell>Unlimited exams</Pricing.ComparisonCell>
        <Pricing.ComparisonCell>Advanced features</Pricing.ComparisonCell>
        <Pricing.ComparisonCell>Priority support</Pricing.ComparisonCell>
        <Pricing.ComparisonCell special>
          Analytics dashboard
        </Pricing.ComparisonCell>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Monthly: Story = {
  render: () => <MonthlyPlan />,
};

const YearlyPlan = () => (
  <div className="w-full">
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
        <Pricing.ComparisonCell>Unlimited exams</Pricing.ComparisonCell>
        <Pricing.ComparisonCell>Advanced features</Pricing.ComparisonCell>
        <Pricing.ComparisonCell>Priority support</Pricing.ComparisonCell>
        <Pricing.ComparisonCell special>
          Analytics dashboard
        </Pricing.ComparisonCell>
        <Pricing.ComparisonCell special>
          Bulk student import
        </Pricing.ComparisonCell>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Yearly: Story = {
  render: () => <YearlyPlan />,
};

const LifetimePlan = () => (
  <div className="w-80">
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
        <Pricing.ComparisonCell>All Pro features</Pricing.ComparisonCell>
        <Pricing.ComparisonCell>Lifetime updates</Pricing.ComparisonCell>
        <Pricing.ComparisonCell special>VIP support</Pricing.ComparisonCell>
        <Pricing.ComparisonCell special>
          Early access to new features
        </Pricing.ComparisonCell>
      </Pricing.Comparison>
    </Pricing>
  </div>
);

export const Lifetime: Story = {
  render: () => <LifetimePlan />,
};

export const AllPlans: Story = {
  render: () => (
    <div className="flex flex-col place-items-center md:flex-row">
      <BasicPlan />
      <MonthlyPlan />
      <YearlyPlan />
      <LifetimePlan />
    </div>
  ),
};
