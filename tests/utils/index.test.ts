import { describe, it, expect } from "vitest"
import { formatDate } from "@/utils/index"

describe("formatDate", () => {
  it("should format a valid date string correctly", () => {
    const date = "2024-01-15"
    const result = formatDate(date)
    // The function uses Spanish locale, so it should format in Spanish
    expect(result).toBeTruthy()
    expect(typeof result).toBe("string")
    // Should contain the year
    expect(result).toContain("2024")
  })

  it("should format a date with time correctly", () => {
    const date = "2024-12-25T10:30:00Z"
    const result = formatDate(date)
    expect(result).toBeTruthy()
    expect(typeof result).toBe("string")
    expect(result).toContain("2024")
  })

  it("should handle different date formats", () => {
    const date = "2023-06-01"
    const result = formatDate(date)
    expect(result).toBeTruthy()
    expect(result).toContain("2023")
  })

  it("should return a formatted string for valid ISO date", () => {
    const date = "2024-03-20"
    const result = formatDate(date)
    // Should be in format like "20 mar 2024" (Spanish locale)
    expect(result).toMatch(/\d{1,2}\s+\w+\s+\d{4}/)
  })
})
