<script setup lang="ts">
    import { certificates } from "../data/certificates.js"

    const showAll = ref(false)
    const displayedCertificates = computed(() => {
      return showAll.value ? certificates : certificates.slice(0, 6)
    })
</script>
    
<template>
  <SectionApp id="certificates">
    <template #title>{{ $t("certificates_title") }}</template>

    <div class="grid md:grid-cols-3 gap-10">
      <CertificateCard
        v-for="certificate in displayedCertificates"
        :key="certificate.name"
        :certificate="certificate"
      />
    </div>

    <div v-if="certificates.length > 6" class="mt-12 flex justify-center">
      <button
        class="inline-flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        @click="showAll = !showAll"
      >
        {{ showAll ? $t("show_less") : $t("show_more") }}
      </button>
    </div>
  </SectionApp>
</template>


