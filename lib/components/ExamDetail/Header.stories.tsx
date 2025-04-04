import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Components/ExamDetail/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header is a component used in the ExamDetail section to display exam information including title, author, category, participants, timing, and rating.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    rating: 4.8,
    author: {
      name: "John Doe",
      href: "/profile",
    },
    category: {
      name: "Math",
      href: "/category/math",
    },
    timing: { hours: 1, minutes: 30, seconds: 0, setting: "TOTAL" },
    imageUrl: "https://placebear.com/150/150",
    participants: 100,
    title: "Math Exam",
  },
};

export const ShortExam: Story = {
  args: {
    rating: 4.5,
    author: {
      name: "Jane Smith",
      href: "/profile/jane-smith",
    },
    category: {
      name: "Computer Science",
      href: "/category/computer-science",
    },
    timing: { hours: 0, minutes: 45, seconds: 0, setting: "TOTAL" },
    imageUrl: "https://placebear.com/300/200",
    participants: 250,
    title: "Introduction to Programming",
  },
};

export const LongExam: Story = {
  args: {
    rating: 4.2,
    author: {
      name: "Professor Williams",
      href: "/profile/prof-williams",
    },
    category: {
      name: "Biology",
      href: "/category/biology",
    },
    timing: { hours: 3, minutes: 0, seconds: 0, setting: "TOTAL" },
    imageUrl: "https://placebear.com/300/300",
    participants: 75,
    title: "Advanced Human Anatomy",
  },
};

export const NoParticipants: Story = {
  args: {
    rating: 5.0,
    author: {
      name: "New Instructor",
      href: "/profile/new-instructor",
    },
    category: {
      name: "Physics",
      href: "/category/physics",
    },
    timing: { hours: 1, minutes: 0, seconds: 0, setting: "TOTAL" },
    imageUrl: "https://placebear.com/400/300",
    participants: 0,
    title: "Quantum Mechanics Basics",
  },
};

export const HighlyRated: Story = {
  args: {
    rating: 5.0,
    author: {
      name: "Expert Teacher",
      href: "/profile/expert-teacher",
    },
    category: {
      name: "Chemistry",
      href: "/category/chemistry",
    },
    timing: { hours: 2, minutes: 15, seconds: 0, setting: "TOTAL" },
    imageUrl: "https://placebear.com/500/300",
    participants: 1250,
    title: "Organic Chemistry Fundamentals",
  },
};
