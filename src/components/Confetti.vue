<template>
	<div @click="triggerConfetti" class="confetti-wrapper">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import confetti from 'canvas-confetti';

const pointedOvalPath = "M10 20 Q 25 10 40 20 Q 25 30 10 20 Z";
var pointedOvalShape = confetti.shapeFromPath({ path: pointedOvalPath });

const triggerConfetti = (event) => {
	const x = event.clientX / window.innerWidth;
	const y = event.clientY / window.innerHeight;

	// Trigger the custom-shaped confetti at the click position
	confetti({
		particleCount: 5,
		spread: 360,
		startVelocity: 5, 
		origin: { x, y },
		shapes: [pointedOvalShape],
		scalar: 2,
		colors: ["#576444", "#485b7c", "#9fa6af"],
	});
};
</script>

<style scoped>
.confetti-wrapper {
	position: relative;
}
</style>
