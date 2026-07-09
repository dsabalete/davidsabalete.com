<template>
  <SectionApp id="experience">
    <template #title>{{ $t("experience_title") }}</template>

    <ResumeItem
      v-for="job in experienceData"
      :key="job.id"
      :position="$t(`experience_job_${job.id}`)"
      :company="job.company"
      :description="getDescription(job)"
      :period="job.period"
    />
  </SectionApp>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import experienceData from "~/data/experience.json"

interface ExperienceItem {
  id: string
  company: string
  period: string
  descriptionKeys?: string[]
}

const { t } = useI18n()

function getDescription(job: ExperienceItem): string {
  if ("descriptionKeys" in job) {
    return job.descriptionKeys?.map((key) => t(key)).join("<br/>") || ""
  }
  return t(`experience_job_text_${job.id}`)
}
</script>
