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
    <div className="flex flex-col place-items-center md:flex-row">
      <BasicPlan />
      <MonthlyPlan />
      <YearlyPlan />
      <LifetimePlan />
    </div>
  ),
};
