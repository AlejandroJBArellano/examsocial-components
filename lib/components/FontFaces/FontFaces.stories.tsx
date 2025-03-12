import type { Meta, StoryObj } from "@storybook/react";
import Anchor from "./Anchor";
import Answer from "./Answer";
import Display from "./Display";
import FocusDisplay from "./FocusDisplay";
import {
  FocusParagraph,
  FocusQuote,
  FocusSmoll,
  FocusSpan,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Quote,
  Smoll,
  Span,
} from "./index";

const FontFacesDemo = () => {
  return (
    <div className="space-y-8 p-4">
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Headers</h2>
        <div className="space-y-4 rounded-md border p-4">
          <Heading1>Heading 1</Heading1>
          <Heading2>Heading 2</Heading2>
          <Heading3>Heading 3</Heading3>
          <Heading4>Heading 4</Heading4>
          <Heading5>Heading 5</Heading5>
          <Heading6>Heading 6</Heading6>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Paragraphs</h2>
        <div className="space-y-4 rounded-md border p-4">
          <Paragraph>
            This is a regular paragraph with standard styling. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Paragraph>
          <FocusParagraph>
            This is a focus paragraph with emphasized styling. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </FocusParagraph>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Spans</h2>
        <div className="space-y-4 rounded-md border p-4">
          <div>
            <Paragraph>
              This paragraph contains a <Span>regular span</Span> within the
              text.
            </Paragraph>
          </div>
          <div>
            <Paragraph>
              This paragraph contains a <FocusSpan>focused span</FocusSpan> that
              stands out.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Quotes</h2>
        <div className="space-y-4 rounded-md border p-4">
          <Quote>This is an inline quote that might appear in a text.</Quote>
          <FocusQuote>
            This is a emphasized quote that stands out from regular text.
          </FocusQuote>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Small Text</h2>
        <div className="space-y-4 rounded-md border p-4">
          <Smoll>
            This is smaller text used for captions, footnotes, or less important
            information.
          </Smoll>
          <FocusSmoll>
            This is smaller bold text for emphasis in captions or footnotes.
          </FocusSmoll>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Display Text</h2>
        <div className="space-y-4 rounded-md border p-4">
          <Display>Large display text for hero sections</Display>
          <FocusDisplay>
            Emphasized display text for important sections
          </FocusDisplay>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Links</h2>
        <div className="space-y-4 rounded-md border p-4">
          <Paragraph>
            Here is some text with an <Anchor href="#">anchor link</Anchor>{" "}
            embedded in it.
          </Paragraph>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Answer Text</h2>
        <div className="space-y-4 rounded-md border p-4">
          <Answer>This is formatted as an answer in a Q&A context</Answer>
        </div>
      </section>
    </div>
  );
};

// Defining the meta for all FontFaces components
export default {
  title: "Components/FontFaces",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Typography components for consistent text styling across the application.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "800px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} as Meta;

// Individual Stories
export const AllFontFaces: StoryObj = {
  name: "All Typography Components",
  render: () => <FontFacesDemo />,
  parameters: {
    docs: {
      description: {
        story: "Showcase of all typography components in one view",
      },
    },
  },
};

// Individual component stories
export const Headers: StoryObj = {
  name: "Headers",
  render: () => (
    <div className="space-y-4">
      <Heading1>Heading 1 - Large Titles</Heading1>
      <Heading2>Heading 2 - Section Titles</Heading2>
      <Heading3>Heading 3 - Subsection Titles</Heading3>
      <Heading4>Heading 4 - Card Titles</Heading4>
      <Heading5>Heading 5 - Small Titles</Heading5>
      <Heading6>Heading 6 - Smallest Titles</Heading6>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Various header styles for different heading levels",
      },
    },
  },
};

export const Paragraphs: StoryObj = {
  name: "Paragraphs",
  render: () => (
    <div className="space-y-4">
      <Paragraph>
        Standard paragraph text for general content. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <FocusParagraph>
        Focus paragraph for emphasized content. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </FocusParagraph>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Paragraph styles for regular and emphasized text blocks",
      },
    },
  },
};

export const TextSpans: StoryObj = {
  name: "Spans",
  render: () => (
    <div className="space-y-4">
      <div>
        <Paragraph>
          Regular text with a <Span>standard span</Span> inside it.
        </Paragraph>
      </div>
      <div>
        <Paragraph>
          Regular text with a <FocusSpan>focused span</FocusSpan> for emphasis.
        </Paragraph>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Span components for inline text styling",
      },
    },
  },
};

export const Quotes: StoryObj = {
  name: "Quotes",
  render: () => (
    <div className="space-y-4">
      <Paragraph>
        The author wrote, <Quote>"This is a beautiful day"</Quote> in his
        memoir.
      </Paragraph>
      <Paragraph>
        She emphasized, <FocusQuote>"This moment is crucial"</FocusQuote> during
        her speech.
      </Paragraph>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Quote components for citations and emphasized text",
      },
    },
  },
};

export const SmallText: StoryObj = {
  name: "Small Text",
  render: () => (
    <div className="space-y-4">
      <Smoll>
        Small text for captions, footnotes, or secondary information. This style
        is used when the text is supportive but not the main focus.
      </Smoll>
      <FocusSmoll>
        Bold small text for emphasis within footnotes or to highlight important
        small print.
      </FocusSmoll>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Small text components for captions and footnotes",
      },
    },
  },
};

export const DisplayText: StoryObj = {
  name: "Display Text",
  render: () => (
    <div className="space-y-4">
      <Display>Display Text for Hero Sections</Display>
      <FocusDisplay>Emphasized Display Text</FocusDisplay>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Large display text for hero sections and important content",
      },
    },
  },
};

export const Links: StoryObj = {
  name: "Anchor Links",
  render: () => (
    <div className="space-y-4">
      <Paragraph>
        Click <Anchor href="#">this link</Anchor> to navigate to another page.
      </Paragraph>
      <Paragraph>
        Learn more about our <Anchor href="#">terms and conditions</Anchor>{" "}
        before proceeding.
      </Paragraph>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Anchor components for hyperlinks",
      },
    },
  },
};

export const AnswerText: StoryObj = {
  name: "Answer Text",
  render: () => (
    <div className="space-y-4">
      <Heading4>Q: What is the capital of France?</Heading4>
      <Answer>Paris is the capital of France.</Answer>
      <Heading4>Q: What is the largest planet in our solar system?</Heading4>
      <Answer>Jupiter is the largest planet in our solar system.</Answer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Answer component for Q&A sections",
      },
    },
  },
};
