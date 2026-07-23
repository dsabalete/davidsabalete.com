import { describe, expect, it } from "vitest"
import { z } from "zod"

import { formatZodFieldErrors } from "../../../server/utils/formatZodFieldErrors"

describe("formatZodFieldErrors", () => {
  it("groups validation errors by field name", () => {
    const schema = z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address")
    })

    const result = schema.safeParse({ name: "", email: "invalid" })

    expect(result.success).toBe(false)

    if (!result.success) {
      expect(formatZodFieldErrors(result.error)).toEqual({
        name: ["Name is required"],
        email: ["Invalid email address"]
      })
    }
  })
})
