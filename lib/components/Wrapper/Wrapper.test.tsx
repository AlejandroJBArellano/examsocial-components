import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ComingSoonWrapper from "./ComingSoonWrapper";
import PremiumWrapper from "./PremiumWrapper";
import ProWrapper from "./ProWrapper";

describe("Wrappers", () => {
  describe("ComingSoonWrapper", () => {
    it("renders children with badge", () => {
      render(
        <ComingSoonWrapper>
          <div>Protected Content</div>
        </ComingSoonWrapper>,
      );
      expect(screen.getByText("Protected Content")).toBeInTheDocument();
      expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    });
  });

  describe("PremiumWrapper", () => {
    it("renders badge and blurred children when show is true", () => {
      render(
        <PremiumWrapper show={true}>
          <div>Premium Content</div>
        </PremiumWrapper>,
      );
      expect(screen.getByText("Premium Content")).toBeInTheDocument();
      expect(screen.getByText("Get With Premium")).toBeInTheDocument();
    });

    it("renders only children when show is false", () => {
      render(
        <PremiumWrapper show={false}>
          <div>Premium Content</div>
        </PremiumWrapper>,
      );
      expect(screen.getByText("Premium Content")).toBeInTheDocument();
      expect(screen.queryByText("Get With Premium")).not.toBeInTheDocument();
    });
  });

  describe("ProWrapper", () => {
    it("renders badge and blurred children when show is true", () => {
      render(
        <ProWrapper show={true}>
          <div>Pro Content</div>
        </ProWrapper>,
      );
      expect(screen.getByText("Pro Content")).toBeInTheDocument();
      expect(screen.getByText("Get With Pro")).toBeInTheDocument();
    });

    it("renders only children when show is false", () => {
      render(
        <ProWrapper show={false}>
          <div>Pro Content</div>
        </ProWrapper>,
      );
      expect(screen.getByText("Pro Content")).toBeInTheDocument();
      expect(screen.queryByText("Get With Pro")).not.toBeInTheDocument();
    });
  });
});
