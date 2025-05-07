import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Exam } from "../../types";
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
  render: function AIGenerationRender(args) {
    const [loadingGeneration, setLoadingGeneration] = React.useState(false);
    const [initialValues, setInitialValues] = React.useState<Partial<Exam>>({});

    const handleClickGenerate = () => {
      console.log("AI Generation requested");

      // Show loading state
      setLoadingGeneration(true);

      // After a delay, update with "generated" content
      setTimeout(() => {
        setLoadingGeneration(false);
        setInitialValues({
          title: "Introduction to Computer Science",
          description:
            "A comprehensive exam covering fundamental concepts in computer science, including algorithms, data structures, and programming basics.",
          image: undefined,
          categories: ["COMPUTER_SCIENCE", "PHYSICAL_EDUCATION"],
          questions: [
            {
              id: "q1",
              title:
                "What is the time complexity of a binary search algorithm?",
              options: [
                { id: "a", text: "O(n)", correct: false },
                { id: "b", text: "O(n²)", correct: false },
                { id: "c", text: "O(log n)", correct: true },
                { id: "d", text: "O(n log n)", correct: false },
              ],
              helperText:
                "Binary search has a logarithmic time complexity because it divides the search interval in half with each iteration.",
            },
            {
              id: "q2",
              title:
                "Which data structure operates on a LIFO (Last In, First Out) principle?",
              options: [
                { id: "a", text: "Queue", correct: false },
                { id: "b", text: "Stack", correct: true },
                { id: "c", text: "Linked List", correct: false },
                { id: "d", text: "Tree", correct: false },
              ],
              helperText:
                "A stack follows the Last In, First Out principle, where the last element added is the first one to be removed.",
            },
            {
              id: "q3",
              title: "What is encapsulation in object-oriented programming?",
              options: [
                {
                  id: "a",
                  text: "The ability of a class to inherit from multiple parent classes",
                  correct: false,
                },
                {
                  id: "b",
                  text: "The process of hiding implementation details and exposing only necessary functionality",
                  correct: true,
                },
                {
                  id: "c",
                  text: "The ability of different objects to respond differently to the same method call",
                  correct: false,
                },
                {
                  id: "d",
                  text: "The process of creating an instance of a class",
                  correct: false,
                },
              ],
              helperText:
                "Encapsulation is the bundling of data and methods that operate on that data, restricting direct access to some of the object's components and protecting data integrity.",
            },
          ],
          contents: [
            {
              type: "TEXT",
              text: "For further study on computer science fundamentals, check these resources:\n- Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein\n- Structure and Interpretation of Computer Programs by Abelson and Sussman\n- Online platforms like Coursera, edX, and Khan Academy for interactive tutorials",
            },
          ],
          theme: "WHITEBOARD",
          marketplaceSettings: {
            currency: "USD",
            price: 0,
          },
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
              setting: "TOTAL",
              hours: 0,
              minutes: 30,
              seconds: 0,
            },
          },
        });
      }, 2000);
    };

    return (
      <CreateExam
        {...args}
        loadingGeneration={loadingGeneration}
        initialValues={initialValues}
        onClickGenerate={handleClickGenerate}
      />
    );
  },
  args: {
    onSubmit: (values) => {
      console.log("Submitted AI-generated exam:", values);
    },
    onCancel: () => {},
    userPlan: "PREMIUM",
    canSellExams: true,
    validatePathname: async () => true,
    isSubmitting: false,
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
