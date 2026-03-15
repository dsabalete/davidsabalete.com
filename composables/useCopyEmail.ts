export const useCopyEmail = () => {
  const emailCopied = ref(false)
  const copiedLink = ref<string | null>(null)

  const copyEmailToClipboard = async (email: string = 'info@davidsabalete.com', linkName?: string) => {
    try {
      await navigator.clipboard.writeText(email)
      
      if (linkName) {
        copiedLink.value = linkName
        setTimeout(() => {
          copiedLink.value = null
        }, 2000)
      } else {
        emailCopied.value = true
        setTimeout(() => {
          emailCopied.value = false
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return {
    emailCopied,
    copiedLink,
    copyEmailToClipboard
  }
}