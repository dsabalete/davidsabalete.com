<script setup lang="ts">
const { t } = useI18n()

const name = ref("")
const email = ref("")
const message = ref("")
const status = ref<"idle" | "sending" | "success" | "error">("idle")
const errorMessage = ref("")

interface EmailSendResponse {
  success: boolean
}

const submitForm = async () => {
  if (!name.value || !email.value || !message.value) {
    status.value = "error"
    errorMessage.value = t("contact_form_error_required")
    return
  }

  status.value = "sending"

  try {
    const res = await $fetch<EmailSendResponse>("/.netlify/functions/send-email", {
      method: "POST",
      body: { name: name.value, email: email.value, message: message.value }
    })

    if (res.success) {
      status.value = "success"
      name.value = ""
      email.value = ""
      message.value = ""
    }
  } catch (e: unknown) {
    status.value = "error"
    const unknownError = e as { data?: { statusMessage?: string } }
    errorMessage.value = unknownError?.data?.statusMessage || t("contact_form_error_generic")
  }
}
</script>

<template>
  <form class="w-full max-w-lg mx-auto mt-8 space-y-4" @submit.prevent="submitForm">
    <div>
      <label for="contact-name" class="block text-sm font-medium text-black dark:text-gray-200 mb-1">
        {{ t("contact_form_name") }}
      </label>
      <input
        id="contact-name"
        v-model="name"
        type="text"
        :placeholder="t('contact_form_name_placeholder')"
        class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
      />
    </div>

    <div>
      <label for="contact-email" class="block text-sm font-medium text-black dark:text-gray-200 mb-1">
        {{ t("contact_form_email") }}
      </label>
      <input
        id="contact-email"
        v-model="email"
        type="email"
        :placeholder="t('contact_form_email_placeholder')"
        class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
      />
    </div>

    <div>
      <label for="contact-message" class="block text-sm font-medium text-black dark:text-gray-200 mb-1">
        {{ t("contact_form_message") }}
      </label>
      <textarea
        id="contact-message"
        v-model="message"
        rows="5"
        :placeholder="t('contact_form_message_placeholder')"
        class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-y"
      />
    </div>

    <button
      type="submit"
      :disabled="status === 'sending'"
      class="w-full px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {{ status === "sending" ? t("contact_form_sending") : t("contact_form_submit") }}
    </button>

    <p v-if="status === 'success'" class="text-sm text-green-600 dark:text-green-400 text-center">
      {{ t("contact_form_success") }}
    </p>

    <p v-if="status === 'error'" class="text-sm text-red-600 dark:text-red-400 text-center">
      {{ errorMessage }}
    </p>
  </form>
</template>
