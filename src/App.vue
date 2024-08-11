<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Experience from './components/experience/Experience.vue';
import Skills from './components/skills/Skill.vue';
import Confetti from './components/Confetti.vue';
import SplashScreen from './components/SplashScreen.vue';
import AOS from 'aos';
import { onMounted } from 'vue';

onMounted(() => AOS.init());
</script>

<template>
  <SplashScreen />
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
      <div class="arrow bounce"></div>
      <Footer />
    </Confetti>
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

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Animation Keyframes */
@keyframes bounce {
  20%, 50%, 20%, 20%, 20% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* Scroll Indicator Styling */
.arrow {
  position: fixed;
  bottom: 0;
  right: 5%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=);
  background-size: contain;
  background-color: #0d1117;
}

/* Bouncing Animation */
.bounce {
  animation: bounce 3s infinite;
}

</style>
