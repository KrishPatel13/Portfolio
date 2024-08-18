<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import type { Experience } from './Experience.vue';
const { index } = defineProps<{ experience: Experience; index: number }>();
const windowSize = ref(
    window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
);
const fadeSelector = computed(
    () => 'zoom-in-' + (index % 2 || windowSize.value <= 716 ? 'right' : 'left')
);

onMounted(() => {
    let flag: any;
    const debouncedUpdate = () => {
        clearTimeout(flag);
        flag = setTimeout(() => {
            windowSize.value =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
        }, 50);
    };
    window.addEventListener('resize', debouncedUpdate);
});
</script>

<template>
    <div class="timeline-item">
        <div class="timeline-bullet"></div>
        <div class="timeline-content" :data-aos="fadeSelector">
            <div class="header">
                <div class="logo">
                    <img :src="`/assets/images/logos/${experience.logo}`" alt="Experience logo" loading="lazy" />
                </div>
                <div class="position-info">
                    <div class="company">{{ experience.organization }}</div>
                    <div class="position-title bold">
                        {{ experience.position }}
                    </div>
                    <div class="position-date">{{ experience.date }}</div>
                </div>
            </div>
            <ul class="body">
                <li v-for="bullet in experience.info">
                    <span> {{ bullet }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
@import './experience.scss';
</style>
