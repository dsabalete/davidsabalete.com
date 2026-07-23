import type { z } from "zod"

export function formatZodFieldErrors(error: z.ZodError): Record<string, string[]> {
  return error.issues.reduce<Record<string, string[]>>((acc, issue) => {
    if (issue.path.length === 0) {
      return acc
    }

    const [field] = issue.path
    const fieldName = String(field)

    if (!acc[fieldName]) {
      acc[fieldName] = []
    }

    acc[fieldName].push(issue.message)

    return acc
  }, {})
}
