<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import About from './About.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Experience from './experience/Experience.vue';
import Skills from './skills/Skill.vue';
import Confetti from './Confetti.vue';
import AOS from 'aos';
import { onMounted } from 'vue';

onMounted(() => AOS.init());

const route = useRoute();
</script>

<template>
	<Confetti>
		<NavBar />
		<div class="main-content">
			<div class="section" id="about">
					<About />
			</div>
			<div class="section" id="experience">
					<Experience />
			</div>
			<div class="section" id="portfolio">
					<Portfolio />
			</div>
			<div class="section" id="skills">
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
        cursor: url('/assets/cursor/cursor7.png'), auto;
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
