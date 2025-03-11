import type { Meta, StoryObj } from "@storybook/react";
import Comment from "./Comment";

export default {
  title: "Components/Comment",
  component: Comment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Comment>;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  args: {
    user: {
      name: "Lana Del Rey",
      avatar: "",
    },
    children: "This is a comment",
    rating: 3,
    createdAt: new Date("2021-09-01"),
  },
};

export const WithAvatar: Story = {
  args: {
    user: {
      name: "John Smith",
      avatar: "https://i.pravatar.cc/300?img=11",
    },
    children: "This exam was really helpful for my studies!",
    rating: 4,
    createdAt: new Date("2023-05-15"),
  },
};

export const HighRating: Story = {
  args: {
    user: {
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/300?img=5",
    },
    children:
      "Excellent content and well-structured questions. Helped me prepare for my finals.",
    rating: 5,
    createdAt: new Date("2023-08-22"),
  },
};

export const LikedComment: Story = {
  args: {
    user: {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/300?img=33",
    },
    children:
      "The explanations were very clear. I appreciate the effort put into creating this resource.",
    rating: 4.5,
    createdAt: new Date("2023-07-10"),
    liked: true,
  },
};

export const LongComment: Story = {
  args: {
    user: {
      name: "Sophia Martinez",
      avatar: "",
    },
    children:
      "This exam was challenging but fair. I found the questions to be thought-provoking and relevant to the course material. The variety of question types helped me understand different aspects of the subject. I'd recommend this to anyone preparing for similar exams.",
    rating: 4,
    createdAt: new Date("2023-09-05"),
  },
};

export const RecentComment: Story = {
  args: {
    user: {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/300?img=53",
    },
    children: "Just finished this exam today. Very up-to-date content!",
    rating: 4.5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
};
