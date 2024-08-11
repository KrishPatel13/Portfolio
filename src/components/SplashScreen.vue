<template>
  <div class="splash-screen" v-if="isVisible">
    <div class="splash-content">
      <h1>Krish Patel</h1>
      <p>Software Engineer & AI/ML Enthusiast</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 3000); // Change this duration as needed
});
</script>

<style scoped>
.splash-screen {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  animation: fadeOut 1s ease 2.5s forwards;
}

.splash-content {
  text-align: center;
  color: #fff;
  font-family: 'Roboto Slab', sans-serif;
}

.splash-content h1 {
  font-size: 48px;
  font-weight: 800;
  margin: 0;
}

.splash-content p {
  font-size: 18px;
  margin-top: 10px;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
