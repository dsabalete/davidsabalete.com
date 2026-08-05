<script setup lang="ts">
const { t } = useI18n()
const { isOpen, isTyping, messages, input, error, toggle, sendMessage, reset } = useChatbot()
</script>

<template>
  <div class="chatbot fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
    <Transition name="chatbot-fade">
      <div v-if="isOpen" class="chatbot-panel flex flex-col overflow-hidden">
        <header class="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
          <div>
            <p class="text-sm font-semibold">{{ t("chatbot_title") }}</p>
            <p class="flex items-center gap-1.5 text-xs text-blue-100">
              <span class="chatbot-status-dot" />
              {{ t("chatbot_status") }}
            </p>
          </div>
          <div class="flex items-center gap-1">
            <button
              type="button"
              class="flex items-center justify-center w-8 h-8 rounded-md hover:bg-blue-500 transition-colors duration-200"
              :aria-label="t('chatbot_reset')"
              @click="reset"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                <path d="M21 3v6h-6" />
              </svg>
            </button>
            <button
              type="button"
              class="flex items-center justify-center w-8 h-8 rounded-md hover:bg-blue-500 transition-colors duration-200"
              :aria-label="t('chatbot_close')"
              @click="toggle"
            >
              <IconClose />
            </button>
          </div>
        </header>

        <div ref="messagesContainer" class="chatbot-messages flex-1 overflow-y-auto px-4 py-4 space-y-3">
          <div
            v-for="message in messages"
            :key="message.id"
            class="chatbot-message"
            :class="message.role === 'user' ? 'chatbot-message--user' : 'chatbot-message--assistant'"
          >
            <div class="chatbot-bubble">
              <MDC v-if="message.role === 'assistant'" :value="message.content" />
              <p v-else>{{ message.content }}</p>
            </div>
          </div>

          <div v-if="isTyping" class="chatbot-message chatbot-message--assistant">
            <div class="chatbot-bubble chatbot-typing" role="status" :aria-label="t('chatbot_typing')">
              <span class="chatbot-typing-dot" />
              <span class="chatbot-typing-dot" />
              <span class="chatbot-typing-dot" />
            </div>
          </div>
        </div>

        <p v-if="error" class="px-4 pb-1 text-xs text-amber-600 dark:text-amber-400">{{ error }}</p>

        <form class="flex items-center gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700" @submit.prevent="sendMessage">
          <input
            v-model="input"
            type="text"
            class="chatbot-input"
            :placeholder="t('chatbot_placeholder')"
            :aria-label="t('chatbot_placeholder')"
            autocomplete="off"
          />
          <button
            type="submit"
            class="chatbot-send"
            :disabled="isTyping || !input.trim()"
            :aria-label="t('chatbot_send')"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </Transition>

    <button
      type="button"
      class="chatbot-toggle"
      :class="{ 'chatbot-toggle--active': isOpen }"
      :aria-label="isOpen ? t('chatbot_close') : t('chatbot_open')"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <svg v-if="!isOpen" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V6a2 2 0 012-2z"
        />
        <path d="M7 9h10M7 12h10" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      <IconClose v-else class="w-5 h-5" />
    </button>
  </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.chatbot-panel {
  @apply w-[22rem] max-w-[calc(100vw-2rem)] h-[30rem] max-h-[calc(100vh-8rem)] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700;
}

.chatbot-status-dot {
  @apply w-2 h-2 rounded-full bg-green-300 animate-pulse;
}

.chatbot-message {
  @apply flex;
}

.chatbot-message--user {
  @apply justify-end;
}

.chatbot-message--assistant {
  @apply justify-start;
}

.chatbot-bubble {
  @apply max-w-[85%] px-3 py-2 text-sm leading-relaxed rounded-lg;
}

.chatbot-message--user .chatbot-bubble {
  @apply bg-blue-600 text-white rounded-br-sm;
}

.chatbot-message--assistant .chatbot-bubble {
  @apply bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-100 rounded-bl-sm;
}

.chatbot-bubble :deep(p) {
  @apply mb-2 last:mb-0;
}

.chatbot-bubble :deep(ul) {
  @apply list-disc pl-5 mb-2;
}

.chatbot-bubble :deep(ol) {
  @apply list-decimal pl-5 mb-2;
}

.chatbot-bubble :deep(li) {
  @apply mb-1;
}

.chatbot-bubble :deep(code) {
  @apply bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded text-xs font-mono;
}

.chatbot-bubble :deep(pre) {
  @apply bg-gray-900 dark:bg-gray-950 p-2 rounded overflow-x-auto text-xs mb-2;
}

.chatbot-bubble :deep(pre code) {
  @apply bg-transparent p-0 text-inherit;
}

.chatbot-bubble :deep(a) {
  @apply text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300;
}

.chatbot-bubble :deep(strong) {
  @apply font-semibold;
}

.chatbot-bubble :deep(em) {
  @apply italic;
}

.chatbot-bubble :deep(blockquote) {
  @apply border-l-4 border-blue-500 pl-3 italic text-gray-600 dark:text-gray-300 my-2;
}

.chatbot-bubble :deep(h1, h2, h3, h4, h5, h6) {
  @apply font-semibold mb-1 mt-2;
}

.chatbot-bubble :deep(hr) {
  @apply border-t border-gray-300 dark:border-gray-600 my-3;
}

.chatbot-typing {
  @apply inline-flex items-center gap-1;
}

.chatbot-typing-dot {
  @apply w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-300;
  animation: chatbot-bounce 1.2s infinite ease-in-out;
}

.chatbot-typing-dot:nth-child(2) {
  animation-delay: 0.15s;
}

.chatbot-typing-dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes chatbot-bounce {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
}

.chatbot-input {
  @apply flex-1 px-3 py-2 text-sm text-black dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors;
}

.chatbot-send {
  @apply flex items-center justify-center w-9 h-9 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200;
}

.chatbot-toggle {
  @apply flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-colors duration-200;
}

.chatbot-toggle--active {
  @apply bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300;
}

.chatbot-fade-enter-active,
.chatbot-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.chatbot-fade-enter-from,
.chatbot-fade-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
</style>
