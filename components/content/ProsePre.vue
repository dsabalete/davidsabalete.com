<script setup lang="ts">
const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
  class?: string
}>()

const language = computed(() => {
  const lang = (props.language || "").toLowerCase()
  if (lang === "vue") return "vue"
  if (lang === "ts" || lang === "typescript") return "ts"
  if (lang === "js" || lang === "javascript") return "js"
  if (lang === "bash" || lang === "shell" || lang === "sh") return "bash"
  return lang || "txt"
})

const displayName = computed(() => {
  if (props.filename) return props.filename
  const map: Record<string, string> = {
    vue: "Vue SFC",
    ts: "TypeScript",
    js: "JavaScript",
    bash: "Terminal",
    json: "JSON",
    yaml: "YAML",
    html: "HTML",
    css: "CSS"
  }
  return map[language.value] || language.value.toUpperCase()
})

const isTerminal = computed(() => language.value === "bash")

const copied = ref(false)
let timeout: ReturnType<typeof setTimeout> | null = null

async function copy() {
  const text = props.code || ""
  if (!text) return
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => (copied.value = false), 1800)
  } catch {
    copied.value = false
  }
}

onBeforeUnmount(() => {
  if (timeout) clearTimeout(timeout)
})
</script>

<template>
  <div class="my-7 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 not-prose group/code">
    <div
      class="flex items-center justify-between gap-3 px-3.5 py-2 border-b border-gray-200 dark:border-gray-800"
      :class="isTerminal ? 'bg-gray-900 dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-800/50'"
    >
      <span
        class="text-[11px] font-medium tracking-wide uppercase truncate"
        :class="isTerminal ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400'"
      >
        {{ displayName }}
      </span>

      <button
        type="button"
        class="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-100 focus-visible:ring-offset-1"
        :class="
          isTerminal
            ? 'bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700'
            : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
        "
        :aria-label="copied ? 'Copied' : 'Copy code'"
        @click="copy"
      >
        <svg
          v-if="!copied"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3" />
        </svg>
        <svg
          v-else
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <span>{{ copied ? "Copied" : "Copy" }}</span>
      </button>
    </div>

    <pre
      :class="[
        props.class,
        'm-0 overflow-x-auto px-4 py-4 text-[13.5px] leading-6 whitespace-pre-wrap break-words',
        isTerminal ? '!bg-gray-950 !text-gray-100 dark:!bg-black is-terminal' : ''
      ]"
    ><code><slot /></code></pre>
  </div>
</template>

<style scoped>
pre {
  scrollbar-width: thin;
  scrollbar-color: rgb(203 213 225) transparent;
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}

pre code {
  display: block;
  white-space: inherit;
}

:global(.dark) pre {
  scrollbar-color: rgb(71 85 105) transparent;
}

pre::-webkit-scrollbar {
  height: 6px;
}

pre::-webkit-scrollbar-thumb {
  background: rgb(203 213 225);
  border-radius: 999px;
}

:global(.dark) pre::-webkit-scrollbar-thumb {
  background: rgb(71 85 105);
}

pre :deep(code) {
  background: transparent !important;
  padding: 0 !important;
  border-radius: 0 !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  white-space: inherit;
}

/* keep shiki background when not terminal */
pre:not(.shiki) {
  background: #f8fafc;
}

:global(.dark) pre:not(.shiki) {
  background: #0f172a;
}

/* line highlight support from shiki transformer */
pre :deep(.highlight) {
  display: block;
  margin: 0 -1rem;
  padding: 0 1rem;
  background: rgb(254 249 195 / 0.6);
}

:global(.dark) pre :deep(.highlight) {
  background: rgb(161 98 7 / 0.18);
}

pre :deep([line]) {
  display: block;
  min-height: 1.5em;
}

/* Terminal: force readable light tokens in both light + dark mode.
   Shiki's github-light emits dark text (e.g. #24292e) which is unreadable
   on our dark terminal bg. Override token colors to light palette. */
pre.is-terminal {
  color: #f3f4f6 !important;
}

pre.is-terminal :deep(code),
pre.is-terminal :deep(span) {
  color: #f3f4f6 !important;
}

/* Keep prompt/command distinction readable without relying on theme */
pre.is-terminal :deep(.shiki),
pre.is-terminal :deep(code) {
  background: transparent !important;
}
</style>
