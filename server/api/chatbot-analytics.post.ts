import { defineEventHandler, readBody, createError, getRequestIP, getRequestHeader } from "h3"
import { appendFile } from "node:fs/promises"
import { join } from "node:path"

const LOG_FILE = join(process.cwd(), "logs", "chatbot-analytics.log")

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.event) {
    throw createError({ statusCode: 400, statusMessage: "Missing event" })
  }

  const logEntry = {
    ...body,
    ip: getRequestIP(event, { xForwardedFor: true }),
    userAgent: getRequestHeader(event, "user-agent"),
    receivedAt: new Date().toISOString()
  }

  try {
    await appendFile(LOG_FILE, JSON.stringify(logEntry) + "\n")
  } catch {
    // If log dir doesn't exist, create it and retry once
    try {
      const { mkdir } = await import("node:fs/promises")
      await mkdir(join(process.cwd(), "logs"), { recursive: true })
      await appendFile(LOG_FILE, JSON.stringify(logEntry) + "\n")
    } catch {
      // Silently fail - analytics shouldn't break the app
    }
  }

  return { success: true }
})