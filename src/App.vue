<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Experience from './components/experience/Experience.vue';
import Skills from './components/skills/Skill.vue';
import Confetti from './components/Confetti.vue';
import AOS from 'aos';
import { onMounted } from 'vue';

onMounted(() => AOS.init());
</script>

<template>
    <Confetti>
        <NavBar />
        <div class="main-content">
            <router-view></router-view>
            <div class="section">
                <About />
            </div>
            <div class="section">
                <Experience />
            </div>
            <div class="section">
                <Portfolio />
            </div>
            <div class="section">
                <Skills />
            </div>
        </div>
        <Footer />
    </Confetti>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&family=Roboto+Slab:wght@300;400;800&display=swap');
body {
    font-family: 'Raleway', 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana,
        sans-serif;
    font-weight: 500;
    font-size: 15px;
    margin: 0;
    cursor: url('assets/cursor/cursor7.png'), auto;
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
    margin-bottom: 10px;
}
</style>
