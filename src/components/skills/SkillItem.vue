<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import type { SkillItem } from './Skill.vue';

const props = defineProps<{ skill: SkillItem }>();
const skillLevel: Ref<HTMLElement | null> = ref(null);
const updateViewState = () => {
    const rect = skillLevel.value!.getBoundingClientRect();
    const isItemInView =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

    skillLevel.value!.style.width = isItemInView ? `${props.skill.level}%` : '';
};

onMounted(() => {
    let flag: any;
    const debouncedUpdate = () => {
        clearTimeout(flag);
        flag = setTimeout(updateViewState, 50);
    };

    window.addEventListener('scroll', debouncedUpdate);
    window.addEventListener('resize', debouncedUpdate);
});
</script>

<template>
    <div class="skill-bar">
        <div class="skill-text">{{ props.skill.name }}</div>
        <div class="skill-level-wrapper">
            <div class="skill-level" ref="skillLevel"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
$minWidth: 120px;
$height: 25px;

.skill-bar {
    display: flex;
    width: 100%;
    border: 2px solid black;

    .skill-text,
    .skill-level {
        line-height: $height;
        height: $height;
    }
}
.skill-text {
    color: white;
    text-align: center;
    width: $minWidth;
    background-color: black;
}

.skill-level-wrapper {
    width: calc(100% - $minWidth);
}

.skill-level {
    transition: 800ms ease width;
    box-sizing: border-box;
    width: 0;
    border-right: 2px solid black;
    background-image: repeating-linear-gradient(
        -24deg,
        transparent,
        transparent 4px,
        black 0,
        black 5px
    );
}
</style>
