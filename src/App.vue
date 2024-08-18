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
    cursor: url('/assets/cursor/custom-default-cursor.png'), auto;
    background-color: #e7e5dd;
}


.main-content {
    align-content: center;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 1080px;
}


.section {
    margin-bottom: 16px;
    padding-bottom: 10px;
}
</style>
