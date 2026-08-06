<script setup lang="ts">
import { skills } from "../data/skills.js"
</script>

<template>
  <SectionApp id="skills" class="lg:pr-32">
    <template #title>{{ $t("skills_title") }}</template>

    <div v-for="group in skills" :key="group.category" class="mb-12">
      <h3 class="text-lg font-bold mb-4">{{ group.category }}</h3>
      <ul class="flex flex-wrap py-4">
        <li v-for="skill in group.items" :key="skill.name" class="mx-4 my-8 hover:scale-150 duration-500">
          <img v-tooltip.bottom="skill.tooltip" :src="skill.icon" :alt="skill.name" width="48" height="48" class="w-12 h-12" />
        </li>
      </ul>
    </div>

    <h3 class="text-lg font-bold">{{ $t("skills_workflow") }}</h3>
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
