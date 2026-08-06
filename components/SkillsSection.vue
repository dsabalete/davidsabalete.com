<script setup lang="ts">
import { ref } from "vue"
import { skills } from "../data/skills"

const expandedCategory = ref<string | null>(null)

const toggleCategory = (category: string) => {
  expandedCategory.value = expandedCategory.value === category ? null : category
}

const isExpanded = (category: string) => expandedCategory.value === category
</script>

<template>
  <SectionApp id="skills" class="lg:pr-32">
    <template #title>{{ $t("skills_title") }}</template>

    <div class="space-y-2">
      <div
        v-for="group in skills"
        :key="group.category"
        class="border rounded-lg overflow-hidden border-gray-200 dark:border-gray-700"
      >
        <button
          class="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          @click="toggleCategory(group.category)"
        >
          <span class="font-semibold">{{ group.category }}</span>
          <svg
            class="w-5 h-5 transition-transform duration-200"
            :class="{ 'rotate-180': isExpanded(group.category) }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <Transition name="accordion">
          <div v-if="isExpanded(group.category)" class="px-4 py-4">
            <ul class="flex flex-wrap gap-4">
              <li v-for="skill in group.items" :key="skill.name" class="hover:scale-125 transition duration-300">
                <img
                  v-tooltip.bottom="skill.tooltip"
                  :src="skill.icon"
                  :alt="skill.name"
                  width="40"
                  height="40"
                  class="w-10 h-10"
                />
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>

    <h3 class="text-lg font-bold mt-8">{{ $t("skills_workflow") }}</h3>
    <ul class="workflow flex flex-col py-4">
      <li>{{ $t("skills_workflow_text_1") }}</li>
      <li>{{ $t("skills_workflow_text_2") }}</li>
      <li>{{ $t("skills_workflow_text_3") }}</li>
      <li>{{ $t("skills_workflow_text_4") }}</li>
      <li>{{ $t("skills_workflow_text_5") }}</li>
      <li>{{ $t("skills_workflow_text_6") }}</li>
    </ul>
  </SectionApp>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 200px;
}

.data-analysis li:before,
.workflow li:before {
  content: "✅";
  font-weight: bold;
  display: inline-block;
  width: 1.75em;
}

.tooltip {
  display: block !important;
  z-index: 100;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.15s,
    visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
