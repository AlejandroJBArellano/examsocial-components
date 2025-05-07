import type { Meta, StoryObj } from "@storybook/react";
import CreateExam from "./CreateExam";

export default {
  title: "Components/CreateExam",
  component: CreateExam,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "CreateExam is a component that provides a user interface for creating new exams. It includes form fields and validation for exam creation.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof CreateExam>;

type Story = StoryObj<typeof CreateExam>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "BASIC",
    canSellExams: false,
    validatePathname: async () => true,
  },
};

export const ProPlan: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "PRO",
    canSellExams: false,
    validatePathname: async () => true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with Pro plan features unlocked but selling capability disabled.",
      },
    },
  },
};

export const PremiumPlan: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: false,
    validatePathname: async () => false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with Premium plan features unlocked but selling capability disabled.",
      },
    },
  },
};

export const WithSellingEnabled: Story = {
  args: {
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with Premium plan and selling capability enabled, allowing the user to set a price for their exam.",
      },
    },
  },
};

export const WithConsoleLogger: Story = {
  args: {
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
    onCancel: () => {
      console.log("Exam creation cancelled");
    },
    userPlan: "BASIC",
    canSellExams: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with console logging for form submission and cancel actions.",
      },
    },
  },
};

export const WithPrefilledValues: Story = {
  args: {
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
    onCancel: () => {},
    userPlan: "PRO",
    canSellExams: false,
    initialValues: {
      title: "Sample Exam Title",
      description:
        "This is a sample exam description with some pre-filled values.",
      image: "https://placekitten.com/800/400",
      categories: ["COMPUTER_SCIENCE"],
      questions: [],
      contents: [],
      marketplaceSettings: {
        currency: "USD",
        price: 0,
      },
      advancedSettings: {
        privacy: {
          setting: "PRIVATE",
        },
        randomizeQuestionOrder: false,
        showCorrectAnswers: true,
        sendEmailReport: true,
        leaderboard: true,
        feedback: [],

        timing: {
          setting: "TIMED",
          hours: 1,
          minutes: 30,
          seconds: 0,
        },
        passingScore: 80,
      },
      theme: "INDUSTRIAL_EDGE",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with pre-filled values to demonstrate form initialization.",
      },
    },
  },
};

export const CustomStepInteractions: Story = {
  args: {
    onSubmit: () => {},
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "CreateExam with custom step change callbacks to demonstrate interaction handling.",
      },
    },
    playFunction: () => {
      console.log("Demonstrating custom step interactions");
    },
  },
};

export const WithAIGenerationFlow: Story = {
  args: {
    onSubmit: (values) => {
      console.log("Submitted AI-generated exam:", values);
    },
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: true,
    validatePathname: async () => true,
    isSubmitting: false,
    initialValues: {},
    loadingGeneration: false,
    onClickGenerate: () => {
      // This function would be called when the user clicks "Generate with AI"
      console.log("AI Generation requested");

      // In a real implementation, this would be an API call
      // Here we'll just simulate the behavior by updating the args after a delay

      // Get the current story context
      // @ts-expect-error - Accessing Storybook API
      const storyStore = window?.__STORYBOOK_STORY_STORE__;
      console.log("Story store:", storyStore);

      if (storyStore) {
        // First set loading state
        const currentStory = storyStore.args || {};

        // Update loadingGeneration to true
        storyStore.args = {
          ...currentStory,
          loadingGeneration: true,
        };

        // After a delay, update with "generated" content
        setTimeout(() => {
          storyStore.args = {
            ...storyStore.args,
            loadingGeneration: false,
            initialValues: {
              title: "Introduction to Computer Science",
              description:
                "A comprehensive exam covering fundamental concepts in computer science, including algorithms, data structures, and programming basics.",
              image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
              categories: ["COMPUTER_SCIENCE", "EDUCATION"],
              questions: [
                {
                  id: "q1",
                  prompt:
                    "What is the time complexity of a binary search algorithm?",
                  type: "MULTIPLE_CHOICE",
                  options: [
                    { id: "a", text: "O(n)" },
                    { id: "b", text: "O(n²)" },
                    { id: "c", text: "O(log n)" },
                    { id: "d", text: "O(n log n)" },
                  ],
                  correctOptionId: "c",
                  explanation:
                    "Binary search has a logarithmic time complexity because it divides the search interval in half with each iteration.",
                },
                {
                  id: "q2",
                  prompt:
                    "Which data structure operates on a LIFO (Last In, First Out) principle?",
                  type: "MULTIPLE_CHOICE",
                  options: [
                    { id: "a", text: "Queue" },
                    { id: "b", text: "Stack" },
                    { id: "c", text: "Linked List" },
                    { id: "d", text: "Tree" },
                  ],
                  correctOptionId: "b",
                  explanation:
                    "A stack follows the Last In, First Out principle, where the last element added is the first one to be removed.",
                },
                {
                  id: "q3",
                  prompt:
                    "What is encapsulation in object-oriented programming?",
                  type: "MULTIPLE_CHOICE",
                  options: [
                    {
                      id: "a",
                      text: "The ability of a class to inherit from multiple parent classes",
                    },
                    {
                      id: "b",
                      text: "The process of hiding implementation details and exposing only necessary functionality",
                    },
                    {
                      id: "c",
                      text: "The ability of different objects to respond differently to the same method call",
                    },
                    {
                      id: "d",
                      text: "The process of creating an instance of a class",
                    },
                  ],
                  correctOptionId: "b",
                  explanation:
                    "Encapsulation is the bundling of data and methods that operate on that data, restricting direct access to some of the object's components and protecting data integrity.",
                },
              ],
              contents: [
                {
                  id: "c1",
                  title: "Additional Resources",
                  content:
                    "For further study on computer science fundamentals, check these resources:\n- Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein\n- Structure and Interpretation of Computer Programs by Abelson and Sussman\n- Online platforms like Coursera, edX, and Khan Academy for interactive tutorials",
                },
              ],
              theme: "WHITEBOARD",
              advancedSettings: {
                privacy: {
                  setting: "PUBLIC",
                },
                randomizeQuestionOrder: true,
                showCorrectAnswers: true,
                sendEmailReport: false,
                leaderboard: true,
                maxAttempts: 3,
                feedback: [],
                passingScore: 70,
                timing: {
                  setting: "TIMED",
                  hours: 0,
                  minutes: 30,
                  seconds: 0,
                },
              },
            },
          };
        }, 2000);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story simulates the AI exam generation flow. Click the 'Generate with AI' button to see the AI generating an exam based on a prompt and updating the form with the generated content.",
      },
    },
  },
};
