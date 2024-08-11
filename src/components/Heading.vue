<script setup lang="ts">
const props = defineProps<{ subtleText: string; emphasizedText: string }>();
</script>

<template>
    <div class="roboto light" data-aos="fade-right">
        {{ props.subtleText
        }}<span class="bold">{{ props.emphasizedText }}</span>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');

.heading {
    cursor: text;
}
</style>
