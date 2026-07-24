import { describe, it, expect, vi, beforeEach } from "vitest"

const mockSend = vi.fn()

vi.mock("@sendgrid/mail", () => ({
  default: {
    setApiKey: vi.fn(),
    send: (...args: unknown[]) => mockSend(...args)
  }
}))

import contactHandler from "./contact.post"

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    process.env.SENDGRID_API_KEY = "test-key"
  })

  const callHandler = async (body: Record<string, unknown>) => {
    const mockEvent = {}
    vi.mocked(readBody).mockResolvedValue(body)
    return contactHandler(mockEvent)
  }

  it("returns success when sending an email with valid data", async () => {
    mockSend.mockResolvedValueOnce([{ statusCode: 202 }])

    const result = await callHandler({
      name: "John",
      email: "john@example.com",
      message: "Hello there"
    })

    expect(result).toEqual({ success: true })
    expect(mockSend).toHaveBeenCalledTimes(1)
    expect(mockSend).toHaveBeenCalledWith({
      to: "info@davidsabalete.com",
      from: "noreply@davidsabalete.com",
      subject: "New contact from John",
      text: "Name: John\nEmail: john@example.com\n\nMessage:\nHello there",
      html: "<p><strong>Name:</strong> John</p><p><strong>Email:</strong> john@example.com</p><p><strong>Message:</strong></p><p>Hello there</p>"
    })
  })

  it("throws 400 when name is empty", async () => {
    await expect(callHandler({
      name: "",
      email: "john@example.com",
      message: "Hello"
    })).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: { name: ["Name is required"] }
    })
    expect(mockSend).not.toHaveBeenCalled()
  })

  it("throws 400 when email is invalid", async () => {
    await expect(callHandler({
      name: "John",
      email: "not-an-email",
      message: "Hello"
    })).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: { email: ["Invalid email address"] }
    })
    expect(mockSend).not.toHaveBeenCalled()
  })

  it("throws 400 when message is empty", async () => {
    await expect(callHandler({
      name: "John",
      email: "john@example.com",
      message: ""
    })).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: { message: ["Message is required"] }
    })
    expect(mockSend).not.toHaveBeenCalled()
  })

  it("throws 400 when body is missing entirely", async () => {
    await expect(callHandler({})).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: {
        name: [expect.stringContaining("expected string")],
        email: [expect.stringContaining("expected string")],
        message: [expect.stringContaining("expected string")]
      }
    })
    expect(mockSend).not.toHaveBeenCalled()
  })

  it("throws 500 when SendGrid fails", async () => {
    mockSend.mockRejectedValueOnce(new Error("SendGrid error"))

    await expect(callHandler({
      name: "John",
      email: "john@example.com",
      message: "Hello"
    })).rejects.toMatchObject({
      statusCode: 500,
      statusMessage: "Failed to send message"
    })
    expect(mockSend).toHaveBeenCalledTimes(1)
  })

  it("calls setApiKey with the environment variable", async () => {
    const sgMail = await import("@sendgrid/mail")
    mockSend.mockResolvedValueOnce([{ statusCode: 202 }])

    await callHandler({
      name: "John",
      email: "john@example.com",
      message: "Hello"
    })

    expect(sgMail.default.setApiKey).toHaveBeenCalledWith("test-key")
  })

  it("escapes newlines in the HTML body", async () => {
    mockSend.mockResolvedValueOnce([{ statusCode: 202 }])

    await callHandler({
      name: "Jane",
      email: "jane@example.com",
      message: "Line one\nLine two\nLine three"
    })

    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        html: "<p><strong>Name:</strong> Jane</p><p><strong>Email:</strong> jane@example.com</p><p><strong>Message:</strong></p><p>Line one<br>Line two<br>Line three</p>"
      })
    )
  })
})
