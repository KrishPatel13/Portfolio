<script setup lang="ts">
import { computed } from 'vue';
import type { SkillGroupData } from './Skill.vue';
import SkillItem from './SkillItem.vue';
const props = defineProps<{ skillGroup: SkillGroupData }>();
const skills = computed(() => {
    return props.skillGroup.items.sort(
        (a, b) => b.level - a.level || a.name.localeCompare(b.name)
    );
});
</script>

<template>
    <div data-aos="zoom-in-up">
        <div class="group-name bold">{{ props.skillGroup.title }}</div>
        <SkillItem v-for="skill of skills" class="item" :skill="skill" />
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');

.group-name {
    font-size: 18px;
    margin-bottom: 5px;
}

.item {
    margin-bottom: 10px;
}
</style>
