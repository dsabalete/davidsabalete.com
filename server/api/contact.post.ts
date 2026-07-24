import sgMail from "@sendgrid/mail"
import { z } from "zod"

import { formatZodFieldErrors } from "../utils/formatZodFieldErrors"

const bodySchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(5000)
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const result = bodySchema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: formatZodFieldErrors(result.error)
    })
  }

  const { name, email, message } = result.data

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

  const msg = {
    to: "info@davidsabalete.com",
    from: "noreply@davidsabalete.com",
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`
  }

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error("[contact] SendGrid error:", error)
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send message"
    })
  }

  return { success: true }
})
