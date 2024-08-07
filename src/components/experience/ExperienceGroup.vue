<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';
import type { Experience } from './Experience.vue';

const props = defineProps<{ experiences: Experience[] }>();
</script>

<template>
    <div id="exp-timeline" class="experience-group">
        <ExperienceItem v-for="(experience, idx) of experiences" :key="idx" :experience="experience" :index="idx % 2" />
    </div>
</template>

<style lang="scss" scoped>
@import './experience.scss';
</style>
