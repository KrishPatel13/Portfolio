<template>
  <div id="splash-screen" :class="{ 'slide-up': !isVisible }">
    <div id="loading-content">
      <img src="/assets/typing_krish_patel_intro.gif" alt="Typing Intro" class="intro-gif" @load="onGifLoaded"/>
      <h1 v-if="showWelcome" class="welcome-message">Welcome to my Portfolio Website</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(true);
const showWelcome = ref(false);

const onGifLoaded = () => {
  setTimeout(() => {
    showWelcome.value = true;
    setTimeout(() => {
      isVisible.value = false;
    }, 3000); // 3 seconds for welcome message
  }, 5000); // 5 seconds for GIF duration
};

onMounted(() => {
  // Additional logic if needed
});
</script>

<style scoped lang="scss">
/* Full-screen splash screen */
#splash-screen {
  background-color: #0d1117;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
}

/* Slide-up animation */
#splash-screen.slide-up {
  transform: translateY(-100%);
  opacity: 0;
}

/* Centered content */
#loading-content {
  text-align: center;
}

/* Intro GIF */
.intro-gif {
  width: 100%;
  max-width: 600px;
  height: auto;
}

/* Welcome message */
.welcome-message {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-top: 20px;
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
