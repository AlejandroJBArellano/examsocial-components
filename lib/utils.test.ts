import { describe, expect, it } from "vitest";
import { cn, regexYouTubeURL, toTitleCase } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names correctly", () => {
      expect(cn("px-2 py-1", "bg-primary")).toBe("px-2 py-1 bg-primary");
    });

    it("handles conditional classes", () => {
      expect(cn("px-2", false && "hidden", true && "block")).toBe("px-2 block");
    });

    it("handles custom shadow tokens without stripping", () => {
      expect(cn("shadow-right-sm", "shadow-black")).toContain("shadow-right-sm");
      expect(cn("shadow-right-sm", "shadow-black")).toContain("shadow-black");
    });
  });

  describe("regexYouTubeURL", () => {
    it("matches valid YouTube URLs", () => {
      expect(regexYouTubeURL.test("https://www.youtube.com/watch?v=123")).toBe(true);
      expect(regexYouTubeURL.test("https://youtu.be/123")).toBe(true);
    });

    it("rejects non-YouTube URLs", () => {
      expect(regexYouTubeURL.test("https://google.com")).toBe(false);
    });
  });

  describe("toTitleCase", () => {
    it("converts words to title case", () => {
      expect(toTitleCase("hello world")).toBe("Hello World");
      expect(toTitleCase("TEST STRING")).toBe("Test String");
    });
  });
});
