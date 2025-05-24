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

// Sample data for multiple ExamCards
const examCardsData = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    description:
      "Learn the basics of machine learning algorithms, data preprocessing, and model evaluation techniques.",
    imageSrc: "https://placehold.co/320x180",
    imageAlt: "Machine Learning",
    tags: [{ name: "Computer Science", href: "#" }],
    duration: "2h 15m",
  },
  {
    id: 2,
    title: "Calculus for Engineering",
    description:
      "Master differentiation, integration, and their applications in solving engineering problems.",
    imageSrc: "https://placehold.co/320x180",
    imageAlt: "Calculus",
    tags: [{ name: "Mathematics", href: "#" }],
    duration: "1h 45m",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description:
      "Explore fundamental data structures and algorithms used in computer science and software development.",
    imageSrc: "https://placehold.co/320x180",
    imageAlt: "Data Structures",
    tags: [{ name: "Programming", href: "#" }],
    duration: "3h 00m",
  },
  {
    id: 4,
    title: "Organic Chemistry",
    description:
      "Study the structure, properties, and reactions of organic compounds containing carbon atoms.",
    imageSrc: "https://placehold.co/320x180",
    imageAlt: "Chemistry",
    tags: [{ name: "Chemistry", href: "#" }],
    duration: "2h 30m",
  },
];

export const MultipleFromData: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how to render multiple ExamCard components by iterating through a data array.",
      },
    },
  },
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {examCardsData.map((exam) => (
        <ExamCard key={exam.id}>
          <ExamCard.Header>
            <ExamCard.Title>{exam.title}</ExamCard.Title>
            <ExamCard.Image src={exam.imageSrc} alt={exam.imageAlt} />
          </ExamCard.Header>
          <ExamCard.Description>{exam.description}</ExamCard.Description>
          <ExamCard.Footer>
            {exam.tags.map((tag, index) => (
              <ExamCard.Tag key={index} href={tag.href}>
                {tag.name}
              </ExamCard.Tag>
            ))}
            <ExamCard.Time>{exam.duration}</ExamCard.Time>
          </ExamCard.Footer>
          <ExamCard.Actions>
            <ExamCard.Action
              type="edit"
              onClick={() => console.log(`Edit clicked for ${exam.title}`)}
            />
            <ExamCard.Action
              type="delete"
              onClick={() => console.log(`Delete clicked for ${exam.title}`)}
            />
          </ExamCard.Actions>
        </ExamCard>
      ))}
    </div>
  ),
};

// Example of rendering different size cards from data
export const MultipleSizesFromData: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows how to render ExamCards in different sizes using the same data source.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-bold">Default Size Cards</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {examCardsData.slice(0, 2).map((exam) => (
            <ExamCard key={exam.id}>
              <ExamCard.Header>
                <ExamCard.Title>{exam.title}</ExamCard.Title>
                <ExamCard.Image src={exam.imageSrc} alt={exam.imageAlt} />
              </ExamCard.Header>
              <ExamCard.Description>{exam.description}</ExamCard.Description>
              <ExamCard.Footer>
                {exam.tags.map((tag, index) => (
                  <ExamCard.Tag key={index} href={tag.href}>
                    {tag.name}
                  </ExamCard.Tag>
                ))}
                <ExamCard.Time>{exam.duration}</ExamCard.Time>
              </ExamCard.Footer>
            </ExamCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold">Medium Size Cards</h3>
        <div className="flex flex-col gap-4">
          {examCardsData.slice(2, 4).map((exam) => (
            <ExamCard key={exam.id} size="md">
              <ExamCard.Image src={exam.imageSrc} alt={exam.imageAlt} />
              <ExamCard.Content>
                <ExamCard.Title>{exam.title}</ExamCard.Title>
                <ExamCard.Description>{exam.description}</ExamCard.Description>
                <ExamCard.Footer>
                  {exam.tags.map((tag, index) => (
                    <ExamCard.Tag key={index} href={tag.href}>
                      {tag.name}
                    </ExamCard.Tag>
                  ))}
                  <ExamCard.Time>{exam.duration}</ExamCard.Time>
                </ExamCard.Footer>
              </ExamCard.Content>
              <ExamCard.Actions>
                <ExamCard.Action
                  type="edit"
                  onClick={() => console.log(`Edit clicked for ${exam.title}`)}
                />
                <ExamCard.Action
                  type="delete"
                  onClick={() =>
                    console.log(`Delete clicked for ${exam.title}`)
                  }
                />
              </ExamCard.Actions>
            </ExamCard>
          ))}
        </div>
      </div>
    </div>
  ),
};
