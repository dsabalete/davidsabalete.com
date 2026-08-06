import { describe, it, expect, vi, beforeEach } from "vitest"
import handler from "../server/api/chatbot-analytics.post"
import { readBody } from "h3"

const appendFileMock = vi.fn()

vi.mock("h3", () => ({
  defineEventHandler: (handler: unknown) => handler,
  readBody: vi.fn(),
  createError: (opts: { statusCode: number; statusMessage: string }) => {
    const err = new Error(opts.statusMessage) as Error & { statusCode: number; statusMessage: string }
    err.statusCode = opts.statusCode || 500
    err.statusMessage = opts.statusMessage
    throw err
  },
  getRequestIP: () => "127.0.0.1",
  getRequestHeader: () => "test-agent"
}))

vi.mock("node:fs/promises", () => {
  const append = (...args: unknown[]) => appendFileMock(...args)
  const mkdir = vi.fn()
  return {
    default: { appendFile: append, mkdir },
    appendFile: append,
    mkdir
  }
})

describe("chatbot-analytics endpoint", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    appendFileMock.mockReset()
    appendFileMock.mockResolvedValue(undefined)
  })

  it("logs a validated event and returns { success: true }", async () => {
    vi.mocked(readBody).mockResolvedValue({ event: "chatbot_open", sessionId: "abc" })

    const result = await handler({})

    expect(result).toEqual({ success: true })
    expect(appendFileMock).toHaveBeenCalledTimes(1)
    expect(appendFileMock.mock.calls[0][0]?.toString().endsWith("logs/chatbot-analytics.log")).toBe(true)
  })

  it("throws a 400 error when event is missing", async () => {
    vi.mocked(readBody).mockResolvedValue({})

    await expect(handler({})).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: "Missing event"
    })
    expect(appendFileMock).not.toHaveBeenCalled()
  })
})