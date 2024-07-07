<script setup lang="ts">
import { computed } from '@vue/reactivity';
import type { Project } from './Portfolio.vue';
const sides = ['lhs', 'rhs'];
const props = defineProps<{ project: Project }>();
const tools = computed(() => props.project.tools.join(', '));
</script>

<template>
    <div
        class="portfolio-card"
        style="--animation-order: 1"
        data-aos="zoom-in-up"
    >
        <a class="link" target="_blank" :href="project.link">
            <div v-for="side in sides" :class="`content content-${side}`">
                <h2 class="title">{{ project.title }}</h2>
                <div class="description">
                    {{ project.description }}
                </div>
                <div class="footer bold">
                    <p>{{ tools }}</p>
                    <time>{{ project.date }}</time>
                </div>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
@import './portfolio.scss';
</style>
