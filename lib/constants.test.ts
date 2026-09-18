import { describe, expect, it } from "vitest";
import { Currency, FeedbackCondition } from "./constants";

describe("constants", () => {
  it("exports FeedbackCondition with expected values", () => {
    expect(FeedbackCondition.ALL).toBe("All");
    expect(FeedbackCondition.BETWEEN).toBe("Between");
    expect(FeedbackCondition.EQUAL_TO).toBe("Equal to");
    expect(FeedbackCondition.GREATER_THAN).toBe("Greater than");
    expect(FeedbackCondition.LESS_THAN).toBe("Less than");
  });

  it("exports Currency with expected values", () => {
    expect(Currency.USD).toBe("USD");
    expect(Currency.EUR).toBe("EUR");
    expect(Currency.MXN).toBe("MXN");
    expect(Currency.CAD).toBe("CAD");
    expect(Currency.AUD).toBe("AUD");
    expect(Currency.NZD).toBe("NZD");
  });
});
