<script setup lang="ts">
import { ref } from 'vue';
import Heading from '../Heading.vue';
import ExperienceGroup from './ExperienceGroup.vue';

export type Experience = {
        logo: string;
        organization: string;
        position: string;
        date: string;
        info: string[];
};

interface Props {
        subtleText: string;
        emphasizedText: string;
        section: string;
        experiences: Experience[];
}

const props = defineProps<Props>();

const isVisible = ref(false);

const toggleVisibility = () => {
        isVisible.value = !isVisible.value;
};
</script>

<template>
        <div class="experience-container heading roboto light" data-aos="fade-right">
                <Heading :subtle-text="subtleText" :emphasized-text="emphasizedText" />
                <button class="toggle-btn" @click="toggleVisibility(section)">
                        <svg class="toggle-icon" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1"
                                width="16">
                                <path
                                        d="m8.177.677 2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25a.75.75 0 0 1-1.5 0V4H5.104a.25.25 0 0 1-.177-.427L7.823.677a.25.25 0 0 1 .354 0ZM7.25 10.75a.75.75 0 0 1 1.5 0V12h2.146a.25.25 0 0 1 .177.427l-2.896 2.896a.25.25 0 0 1-.354 0l-2.896-2.896A.25.25 0 0 1 5.104 12H7.25v-1.25Zm-5-2a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z">
                                </path>
                        </svg>
                        {{ isVisible ? 'Hide' : 'Show' }}
                </button>
        </div>
        <transition name="fade">
                <div v-if="isVisible">
                        <ExperienceGroup :experiences="experiences" />
                </div>
        </transition>
</template>

<style scoped>
@import url('/assets/styles/utils.css');
.experience-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        h2 {
                margin: 0;
                font-size: 24px;
                font-weight: bold;
        }

        .toggle-btn {
                display: flex;
                align-items: center;
                background: none;
                border: none;
                font-size: 16px;
                cursor: pointer;
                color: #000;
                svg {
                        margin-right: 5px;
                }
        }
}

.toggle-icon {
        width: 16px;
        height: 16px;
        fill: currentColor;
}
</style>
