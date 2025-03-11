import type { Meta, StoryObj } from "@storybook/react";
import Comment from "./Comment";

export default {
  title: "Components/Comment",
  component: Comment,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Comment component displays user feedback with ratings from 0-5 stars and like functionality.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.5 },
      description: "Rating value from 0 to 5 stars (supports half stars)",
    },
    liked: {
      control: "boolean",
      description: "Whether the comment has been liked by the current user",
    },
    createdAt: {
      control: "date",
      description: "When the comment was created (displays as relative time)",
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: "Default comment with a 3-star rating and no avatar",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: "Comment with user avatar and 4-star rating",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: "Comment with maximum 5-star rating",
      },
    },
  },
};

export const HalfStarRating: Story = {
  args: {
    user: {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/300?img=33",
    },
    children:
      "The explanations were very clear. I appreciate the effort put into creating this resource.",
    rating: 4.5,
    createdAt: new Date("2023-07-10"),
  },
  parameters: {
    docs: {
      description: {
        story: "Comment with a 4.5-star rating showing half star functionality",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: "Comment that has been liked by the current user",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: "Comment with longer text content to show text wrapping",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          "Recently posted comment showing the relative time display (2 hours ago)",
      },
    },
  },
};
