<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => AOS.init());
</script>

<template>
    <router-view />
    <div class="glass-overlay"></div>
</template>

<style lang="scss">
@import url('/assets/styles/utils.css');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&family=Roboto+Slab:wght@300;400;800&display=swap');

body {
    font-family: 'Raleway', 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana,
        sans-serif;
    font-weight: 500;
    font-size: 15px;
    margin: 0;
    cursor: url('/assets/cursor/cursor7.png'), auto;
}
</style>
