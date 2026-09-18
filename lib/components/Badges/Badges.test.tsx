import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PremiumBadge from "./PremiumBadge";
import ProBadge from "./ProBadge";
import SoonBadge from "./SoonBadge";

describe("Badges", () => {
  describe("PremiumBadge", () => {
    it("renders with default (small) size", () => {
      render(<PremiumBadge />);
      expect(screen.getByText("Get With Premium")).toBeInTheDocument();
      expect(screen.getByText("workspace_premium")).toBeInTheDocument();
    });

    it("renders with big size", () => {
      render(<PremiumBadge size="big" />);
      expect(screen.getByText("Get With Premium")).toBeInTheDocument();
    });
  });

  describe("ProBadge", () => {
    it("renders with default (small) size", () => {
      render(<ProBadge />);
      expect(screen.getByText("Get With Pro")).toBeInTheDocument();
      expect(screen.getByText("workspace_premium")).toBeInTheDocument();
    });

    it("renders with big size", () => {
      render(<ProBadge size="big" />);
      expect(screen.getByText("Get With Pro")).toBeInTheDocument();
    });
  });

  describe("SoonBadge", () => {
    it("renders with default (small) size", () => {
      render(<SoonBadge />);
      expect(screen.getByText("Coming Soon")).toBeInTheDocument();
      expect(screen.getByText("update")).toBeInTheDocument();
    });

    it("renders with big size", () => {
      render(<SoonBadge size="big" />);
      expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    });
  });
});
