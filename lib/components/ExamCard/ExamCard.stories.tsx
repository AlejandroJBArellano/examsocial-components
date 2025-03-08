import type { Meta, StoryObj } from "@storybook/react";
import ExamCard from "./ExamCard";

export default {
  title: "Components/ExamCard",
  component: ExamCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A responsive exam card component that uses the Compound Components pattern for greater flexibility. Action buttons are always visible if included as children.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof ExamCard>;

type Story = StoryObj<typeof ExamCard>;

export const Default: Story = {
  render: () => (
    <ExamCard>
      <ExamCard.Header>
        <ExamCard.Title>Machine Learning</ExamCard.Title>
        <ExamCard.Image
          src="https://placehold.co/320x180"
          alt="Machine Learning"
        />
      </ExamCard.Header>
      <ExamCard.Description>
        This quiz aims to assess students' understanding of key mathematical
        concepts and their ability to apply these concepts in solving problems.
      </ExamCard.Description>
      <ExamCard.Footer>
        <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
        <ExamCard.Time>1h 30m</ExamCard.Time>
      </ExamCard.Footer>
    </ExamCard>
  ),
};

export const WithActions: Story = {
  render: () => (
    <ExamCard>
      <ExamCard.Header>
        <ExamCard.Title>Machine Learning</ExamCard.Title>
        <ExamCard.Image
          src="https://placehold.co/320x180"
          alt="Machine Learning"
        />
      </ExamCard.Header>
      <ExamCard.Description>
        This quiz aims to assess students' understanding of key mathematical
        concepts and their ability to apply these concepts in solving problems.
      </ExamCard.Description>
      <ExamCard.Footer>
        <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
        <ExamCard.Time>1h 30m</ExamCard.Time>
      </ExamCard.Footer>
      <ExamCard.Actions>
        <ExamCard.Action
          type="edit"
          onClick={() => console.log("Edit clicked")}
        />
        <ExamCard.Action
          type="delete"
          onClick={() => console.log("Delete clicked")}
        />
      </ExamCard.Actions>
    </ExamCard>
  ),
};

export const Medium: Story = {
  render: () => (
    <ExamCard size="md">
      <ExamCard.Image
        src="https://placehold.co/128x72"
        alt="Machine Learning"
      />
      <ExamCard.Content>
        <ExamCard.Title>Machine Learning</ExamCard.Title>
        <ExamCard.Description>
          This quiz aims to assess students' understanding of key mathematical
          concepts and their ability to apply these concepts in solving
          problems.
        </ExamCard.Description>
        <ExamCard.Footer>
          <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
          <ExamCard.Time>1h 30m</ExamCard.Time>
        </ExamCard.Footer>
      </ExamCard.Content>
      <ExamCard.Actions>
        <ExamCard.Action
          type="edit"
          onClick={() => console.log("Edit clicked")}
        />
        <ExamCard.Action
          type="delete"
          onClick={() => console.log("Delete clicked")}
        />
      </ExamCard.Actions>
    </ExamCard>
  ),
};

export const Small: Story = {
  render: () => (
    <ExamCard size="sm">
      <ExamCard.Image
        src="https://placehold.co/133x75"
        alt="Machine Learning"
      />
      <ExamCard.Content>
        <ExamCard.Title>Machine Learning</ExamCard.Title>
        <ExamCard.Description>
          This quiz aims to assess students' understanding of key mathematical
          concepts.
        </ExamCard.Description>
        <ExamCard.Footer>
          <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
          <ExamCard.Time>1h 30m</ExamCard.Time>
        </ExamCard.Footer>
      </ExamCard.Content>
      <ExamCard.Actions>
        <ExamCard.Action
          type="edit"
          onClick={() => console.log("Edit clicked")}
        />
        <ExamCard.Action
          type="delete"
          onClick={() => console.log("Delete clicked")}
        />
      </ExamCard.Actions>
    </ExamCard>
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <ExamCard>
      <ExamCard.Header>
        <ExamCard.Title>Machine Learning</ExamCard.Title>
      </ExamCard.Header>
      <ExamCard.Description>
        This quiz aims to assess students' understanding of key mathematical
        concepts and their ability to apply these concepts in solving problems.
      </ExamCard.Description>
      <ExamCard.Footer>
        <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
        <ExamCard.Time>1h 30m</ExamCard.Time>
      </ExamCard.Footer>
    </ExamCard>
  ),
};

export const WithoutDescription: Story = {
  render: () => (
    <ExamCard>
      <ExamCard.Header>
        <ExamCard.Title>Machine Learning</ExamCard.Title>
        <ExamCard.Image
          src="https://placehold.co/320x180"
          alt="Machine Learning"
        />
      </ExamCard.Header>
      <ExamCard.Footer>
        <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
        <ExamCard.Time>1h 30m</ExamCard.Time>
      </ExamCard.Footer>
    </ExamCard>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-bold">Default Size</h3>
        <ExamCard>
          <ExamCard.Header>
            <ExamCard.Title>Machine Learning</ExamCard.Title>
            <ExamCard.Image
              src="https://placehold.co/320x180"
              alt="Machine Learning"
            />
          </ExamCard.Header>
          <ExamCard.Description>
            This quiz aims to assess students' understanding of key mathematical
            concepts and their ability to apply these concepts in solving
            problems.
          </ExamCard.Description>
          <ExamCard.Footer>
            <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
            <ExamCard.Time>1h 30m</ExamCard.Time>
          </ExamCard.Footer>
          <ExamCard.Actions>
            <ExamCard.Action
              type="edit"
              onClick={() => console.log("Edit clicked")}
            />
            <ExamCard.Action
              type="delete"
              onClick={() => console.log("Delete clicked")}
            />
          </ExamCard.Actions>
        </ExamCard>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold">Medium Size</h3>
        <ExamCard size="md">
          <ExamCard.Image
            src="https://placehold.co/128x72"
            alt="Machine Learning"
          />
          <ExamCard.Content>
            <ExamCard.Title>Machine Learning</ExamCard.Title>
            <ExamCard.Description>
              This quiz aims to assess students' understanding of key
              mathematical concepts and their ability to apply these concepts in
              solving problems.
            </ExamCard.Description>
            <ExamCard.Footer>
              <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
              <ExamCard.Time>1h 30m</ExamCard.Time>
            </ExamCard.Footer>
          </ExamCard.Content>
          <ExamCard.Actions>
            <ExamCard.Action
              type="edit"
              onClick={() => console.log("Edit clicked")}
            />
            <ExamCard.Action
              type="delete"
              onClick={() => console.log("Delete clicked")}
            />
          </ExamCard.Actions>
        </ExamCard>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold">Small Size</h3>
        <ExamCard size="sm">
          <ExamCard.Image
            src="https://placehold.co/133x75"
            alt="Machine Learning"
          />
          <ExamCard.Content>
            <ExamCard.Title>Machine Learning</ExamCard.Title>
            <ExamCard.Description>
              This quiz aims to assess students' understanding of key
              mathematical concepts.
            </ExamCard.Description>
            <ExamCard.Footer>
              <ExamCard.Tag href="#">Mathematics</ExamCard.Tag>
              <ExamCard.Time>1h 30m</ExamCard.Time>
            </ExamCard.Footer>
          </ExamCard.Content>
          <ExamCard.Actions>
            <ExamCard.Action
              type="edit"
              onClick={() => console.log("Edit clicked")}
            />
            <ExamCard.Action
              type="delete"
              onClick={() => console.log("Delete clicked")}
            />
          </ExamCard.Actions>
        </ExamCard>
      </div>
    </div>
  ),
};
