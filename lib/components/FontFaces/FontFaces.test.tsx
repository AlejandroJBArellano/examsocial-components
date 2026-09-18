import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Anchor from "./Anchor";
import Answer from "./Answer";
import Display from "./Display";
import FocusDisplay from "./FocusDisplay";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Headers";
import { FocusParagraph, Paragraph } from "./Paragraph";
import { FocusQuote, Quote } from "./Quotes";
import { FocusSmoll, Smoll } from "./Smoll";
import { FocusSpan, Span } from "./Spans";

describe("FontFaces", () => {
  it("renders Anchor", () => {
    render(<Anchor href="/test">Link Text</Anchor>);
    expect(screen.getByText("Link Text")).toBeInTheDocument();
  });

  it("renders Answer", () => {
    render(<Answer>Answer Text</Answer>);
    expect(screen.getByText("Answer Text")).toBeInTheDocument();
  });

  it("renders Display and FocusDisplay", () => {
    render(
      <>
        <Display>Display Text</Display>
        <FocusDisplay>Focus Display Text</FocusDisplay>
      </>,
    );
    expect(screen.getByText("Display Text")).toBeInTheDocument();
    expect(screen.getByText("Focus Display Text")).toBeInTheDocument();
  });

  it("renders all Headings", () => {
    render(
      <>
        <Heading1>H1</Heading1>
        <Heading2>H2</Heading2>
        <Heading3>H3</Heading3>
        <Heading4>H4</Heading4>
        <Heading5>H5</Heading5>
        <Heading6>H6</Heading6>
      </>,
    );
    expect(screen.getByText("H1")).toBeInTheDocument();
    expect(screen.getByText("H2")).toBeInTheDocument();
    expect(screen.getByText("H3")).toBeInTheDocument();
    expect(screen.getByText("H4")).toBeInTheDocument();
    expect(screen.getByText("H5")).toBeInTheDocument();
    expect(screen.getByText("H6")).toBeInTheDocument();
  });

  it("renders Paragraph and FocusParagraph", () => {
    render(
      <>
        <Paragraph>Paragraph Text</Paragraph>
        <FocusParagraph>Focus Paragraph Text</FocusParagraph>
      </>,
    );
    expect(screen.getByText("Paragraph Text")).toBeInTheDocument();
    expect(screen.getByText("Focus Paragraph Text")).toBeInTheDocument();
  });

  it("renders Quote and FocusQuote", () => {
    render(
      <>
        <Quote>Quote Text</Quote>
        <FocusQuote>Focus Quote Text</FocusQuote>
      </>,
    );
    expect(screen.getByText("Quote Text")).toBeInTheDocument();
    expect(screen.getByText("Focus Quote Text")).toBeInTheDocument();
  });

  it("renders Smoll and FocusSmoll", () => {
    render(
      <>
        <Smoll>Smoll Text</Smoll>
        <FocusSmoll>Focus Smoll Text</FocusSmoll>
      </>,
    );
    expect(screen.getByText("Smoll Text")).toBeInTheDocument();
    expect(screen.getByText("Focus Smoll Text")).toBeInTheDocument();
  });

  it("renders Span and FocusSpan", () => {
    render(
      <>
        <Span>Span Text</Span>
        <FocusSpan>Focus Span Text</FocusSpan>
      </>,
    );
    expect(screen.getByText("Span Text")).toBeInTheDocument();
    expect(screen.getByText("Focus Span Text")).toBeInTheDocument();
  });
});
