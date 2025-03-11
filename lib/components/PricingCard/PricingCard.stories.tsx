import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { FocusSpan } from "../FontFaces";
import PricingCard from "./PricingCard";

const meta: Meta<typeof PricingCard> = {
  title: "Components/PricingCard",
  component: PricingCard,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "PricingCard is a compound component that displays pricing information with different modes (basic, monthly, yearly, lifetime). It includes sections for header, period, title, price, and comparison.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

const BasicPlan = () => (
  <div className="w-80">
    <PricingCard>
      <PricingCard.Header>
        <PricingCard.Title>Hobby</PricingCard.Title>
        <PricingCard.Price>Free</PricingCard.Price>
        <Button theme="light" className="w-full">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </PricingCard.Header>
      <PricingCard.Comparison>
        <PricingCard.ComparisonCell>Up to 5 exams</PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>Basic features</PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>
          Community support
        </PricingCard.ComparisonCell>
      </PricingCard.Comparison>
    </PricingCard>
  </div>
);

export const Basic: Story = {
  render: () => <BasicPlan />,
};

const MonthlyPlan = () => (
  <div className="w-full">
    <PricingCard mode="monthly">
      <PricingCard.Header>
        <PricingCard.Title>Pro</PricingCard.Title>
        <PricingCard.Container>
          <PricingCard.Price>$10</PricingCard.Price>
          <PricingCard.Period>/month</PricingCard.Period>
        </PricingCard.Container>
        <PricingCard.Explanation>Billed monthly</PricingCard.Explanation>
        <Button theme="accent" className="w-full text-black">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </PricingCard.Header>
      <PricingCard.Comparison>
        <PricingCard.ComparisonCell>Unlimited exams</PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>
          Advanced features
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>
          Priority support
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell special>
          Analytics dashboard
        </PricingCard.ComparisonCell>
      </PricingCard.Comparison>
    </PricingCard>
  </div>
);

export const Monthly: Story = {
  render: () => <MonthlyPlan />,
};

const YearlyPlan = () => (
  <div className="w-full">
    <PricingCard mode="yearly">
      <PricingCard.Header>
        <PricingCard.Title>Pro Yearly</PricingCard.Title>
        <PricingCard.Container>
          <PricingCard.Price>$10</PricingCard.Price>
          <PricingCard.Period>/month</PricingCard.Period>
        </PricingCard.Container>
        <PricingCard.Explanation>
          Save 20% compared to monthly
        </PricingCard.Explanation>
        <Button theme="accent" className="w-full text-black">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </PricingCard.Header>
      <PricingCard.Comparison>
        <PricingCard.ComparisonCell>Unlimited exams</PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>
          Advanced features
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>
          Priority support
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell special>
          Analytics dashboard
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell special>
          Bulk student import
        </PricingCard.ComparisonCell>
      </PricingCard.Comparison>
    </PricingCard>
  </div>
);

export const Yearly: Story = {
  render: () => <YearlyPlan />,
};

const LifetimePlan = () => (
  <div className="w-80">
    <PricingCard mode="lifetime">
      <PricingCard.Header>
        <PricingCard.Title>Pro Lifetime</PricingCard.Title>
        <PricingCard.Price>$500</PricingCard.Price>
        <PricingCard.Explanation>One-time payment</PricingCard.Explanation>
        <Button theme="extra" className="w-full">
          <FocusSpan>Get Started</FocusSpan>
        </Button>
      </PricingCard.Header>
      <PricingCard.Comparison>
        <PricingCard.ComparisonCell>
          All Pro features
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>
          Lifetime updates
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell special>
          VIP support
        </PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell special>
          Early access to new features
        </PricingCard.ComparisonCell>
      </PricingCard.Comparison>
    </PricingCard>
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
