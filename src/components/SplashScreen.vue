<template>
  <div id="splash-screen" :class="{ 'slide-up': !isVisible }">
    <div id="loading-content">
      <h1 id="name">Krish Patel</h1>
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 3000); // 3 seconds for loading
});
</script>

<style scoped lang="scss">
/* Full-screen splash screen */
#splash-screen {
  background-color: #ffffff;
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

/* Your name */
#name {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
}

/* Minimalist spinner */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #333333;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
