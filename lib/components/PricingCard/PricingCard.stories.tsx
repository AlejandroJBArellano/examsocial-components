import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import PricingCard from "./PricingCard";

const meta: Meta<typeof PricingCard> = {
  title: "Components/PricingCard",
  component: PricingCard,
  parameters: {
    layout: "centered",
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
      <PricingCard.Header>Basic Plan</PricingCard.Header>
      <PricingCard.Period>Free forever</PricingCard.Period>
      <PricingCard.Title>Start creating exams</PricingCard.Title>
      <PricingCard.Price>$0</PricingCard.Price>
      <PricingCard.Comparison>
        <PricingCard.ComparisonCell>Up to 5 exams</PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>Basic features</PricingCard.ComparisonCell>
        <PricingCard.ComparisonCell>
          Community support
        </PricingCard.ComparisonCell>
      </PricingCard.Comparison>
      <Button className="w-full">Get Started</Button>
    </PricingCard>
  </div>
);

export const Basic: Story = {
  render: () => <BasicPlan />,
};

const MonthlyPlan = () => (
  <div className="w-80">
    <PricingCard mode="monthly">
      <PricingCard.Header>Pro Plan</PricingCard.Header>
      <PricingCard.Period>Billed monthly</PricingCard.Period>
      <PricingCard.Title>For serious educators</PricingCard.Title>
      <PricingCard.Price>$9.99/month</PricingCard.Price>
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
      <Button theme="primary" className="w-full">
        Subscribe Now
      </Button>
    </PricingCard>
  </div>
);

export const Monthly: Story = {
  render: () => <MonthlyPlan />,
};

const YearlyPlan = () => (
  <div className="w-80">
    <PricingCard mode="yearly">
      <PricingCard.Header>Pro Plan</PricingCard.Header>
      <PricingCard.Period>Billed yearly (save 20%)</PricingCard.Period>
      <PricingCard.Title>Best value</PricingCard.Title>
      <PricingCard.Price>$95.88/year</PricingCard.Price>
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
      <Button theme="accent" className="w-full">
        Subscribe Yearly
      </Button>
    </PricingCard>
  </div>
);

export const Yearly: Story = {
  render: () => <YearlyPlan />,
};

const LifetimePlan = () => (
  <div className="w-80">
    <PricingCard mode="lifetime">
      <PricingCard.Header>Lifetime Access</PricingCard.Header>
      <PricingCard.Period>One-time payment</PricingCard.Period>
      <PricingCard.Title>Never pay again</PricingCard.Title>
      <PricingCard.Price>$299</PricingCard.Price>
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
      <Button theme="extra" className="w-full">
        Buy Lifetime
      </Button>
    </PricingCard>
  </div>
);

export const Lifetime: Story = {
  render: () => <LifetimePlan />,
};

export const AllPlans: Story = {
  render: () => (
    <div className="flex flex-col gap-8 md:flex-row">
      <BasicPlan />
      <MonthlyPlan />
      <YearlyPlan />
      <LifetimePlan />
    </div>
  ),
};
