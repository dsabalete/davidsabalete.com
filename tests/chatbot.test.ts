import { describe, it, expect } from "vitest"
import { matchChatbotTopic } from "../data/chatbot"

describe("matchChatbotTopic", () => {
  it("returns null for empty messages", () => {
    expect(matchChatbotTopic("")).toBeNull()
    expect(matchChatbotTopic("   ")).toBeNull()
  })

  it("returns null for unknown messages", () => {
    expect(matchChatbotTopic("asdfgh qwerty")).toBeNull()
  })

  it("matches greetings", () => {
    expect(matchChatbotTopic("Hello!")).toBe("chatbot_reply_welcome")
    expect(matchChatbotTopic("Good morning")).toBe("chatbot_reply_welcome")
  })

  it("matches about intent", () => {
    expect(matchChatbotTopic("Who is David?")).toBe("chatbot_reply_about")
    expect(matchChatbotTopic("Tell me about yourself")).toBe("chatbot_reply_about")
    expect(matchChatbotTopic("Where is he based?")).toBe("chatbot_reply_about")
  })

  it("matches experience intent", () => {
    expect(matchChatbotTopic("What is your work experience?")).toBe("chatbot_reply_experience")
    expect(matchChatbotTopic("What companies have you worked at?")).toBe("chatbot_reply_experience")
  })

  it("matches skills intent", () => {
    expect(matchChatbotTopic("Which technologies do you use?")).toBe("chatbot_reply_skills")
    expect(matchChatbotTopic("What is your tech stack?")).toBe("chatbot_reply_skills")
  })

  it("matches projects intent", () => {
    expect(matchChatbotTopic("Tell me about your projects")).toBe("chatbot_reply_projects")
    expect(matchChatbotTopic("What have you built on GitHub?")).toBe("chatbot_reply_projects")
  })

  it("matches contact intent", () => {
    expect(matchChatbotTopic("How can I contact you?")).toBe("chatbot_reply_contact")
    expect(matchChatbotTopic("Is he available for hire?")).toBe("chatbot_reply_contact")
  })

  it("matches certificates intent", () => {
    expect(matchChatbotTopic("What certificates does he have?")).toBe("chatbot_reply_certificates")
  })

  it("matches cv intent", () => {
    expect(matchChatbotTopic("Can you send me his CV?")).toBe("chatbot_reply_cv")
  })

  it("matches blog intent", () => {
    expect(matchChatbotTopic("Do you write blog posts?")).toBe("chatbot_reply_blog")
  })

  it("matches salary intent", () => {
    expect(matchChatbotTopic("What is your hourly rate?")).toBe("chatbot_reply_salary")
  })

  it("is case insensitive", () => {
    expect(matchChatbotTopic("TELL ME ABOUT YOUR PROJECTS")).toBe("chatbot_reply_projects")
  })
})
