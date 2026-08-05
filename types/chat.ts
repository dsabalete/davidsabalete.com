export type ChatRole = "user" | "assistant"

export interface ChatMessage {
  id: string
  role: ChatRole
  content: string
  timestamp: number
}

export interface ChatApiRequest {
  message: string
  sessionId: string
  locale: string
}

export interface ConversationHistoryItem {
  role: ChatRole
  content: string
}

export interface ChatApiResponse {
  response: string
  conversationHistory: ConversationHistoryItem[]
}
