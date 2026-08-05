import type { ChatMessage, ChatApiRequest, ChatApiResponse } from "@/types/chat"
import { matchChatbotTopic, chatbotFallbackKeys } from "@/data/chatbot"

export const useChatbot = () => {
  const { t, locale } = useI18n()
  const config = useRuntimeConfig()

  const isOpen = ref(false)
  const isTyping = ref(false)
  const messages = ref<ChatMessage[]>([])
  const input = ref("")
  const error = ref("")
  const messagesContainer = ref<HTMLElement | null>(null)

  const apiUrl = config.public.chatbotApiUrl as string

  const sessionId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : String(Date.now())

  const addMessage = (role: ChatMessage["role"], content: string): void => {
    messages.value.push({
      id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      role,
      content,
      timestamp: Date.now()
    })
  }

  const scrollToBottom = async (): Promise<void> => {
    await nextTick()
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }

  const mockReply = (message: string): string => {
    const replyKey =
      matchChatbotTopic(message) ?? chatbotFallbackKeys[Math.floor(Math.random() * chatbotFallbackKeys.length)]
    return t(replyKey)
  }

  const simulateTyping = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 700))

  const fetchApiReply = async (message: string): Promise<ChatApiResponse> => {
    const body: ChatApiRequest = {
      message,
      sessionId,
      locale: locale.value
    }
    const response = await $fetch<ChatApiResponse>(apiUrl, {
      method: "POST",
      body
    })
    if (!response.response || !response.conversationHistory) {
      throw new Error("Chat API returned an invalid response")
    }
    return response
  }

  const sendMessage = async (): Promise<void> => {
    const text = input.value.trim()
    if (!text || isTyping.value) return

    addMessage("user", text)
    input.value = ""
    error.value = ""
    isTyping.value = true

    try {
      if (apiUrl) {
        try {
          const apiResponse = await fetchApiReply(text)
          messages.value = apiResponse.conversationHistory.map((item, index) => ({
            id: `${item.role}-${Date.now()}-${index}`,
            role: item.role,
            content: item.content,
            timestamp: Date.now()
          }))
        } catch {
          error.value = t("chatbot_error")
          const reply = mockReply(text)
          addMessage("assistant", reply)
        }
      } else {
        await simulateTyping()
        const reply = mockReply(text)
        addMessage("assistant", reply)
      }
    } finally {
      isTyping.value = false
      await scrollToBottom()
    }
  }

  const sendSuggestion = (suggestion: string): void => {
    input.value = suggestion
    void sendMessage()
  }

  const reset = (): void => {
    messages.value = []
    error.value = ""
    addMessage("assistant", t("chatbot_reply_welcome"))
  }

  const toggle = (): void => {
    isOpen.value = !isOpen.value
  }

  if (messages.value.length === 0) {
    addMessage("assistant", t("chatbot_reply_welcome"))
  }

  return {
    isOpen,
    isTyping,
    messages,
    input,
    error,
    apiUrl,
    toggle,
    sendMessage,
    sendSuggestion,
    reset
  }
}
