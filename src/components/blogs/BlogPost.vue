<template>
        <div class="blog-post-container">
                <router-link to="/blog">← Back to Blogs</router-link>
                <div v-html="postContent"></div>
        </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const postContent = ref<string | null>(null);
const route = useRoute();

onMounted(async () => {
        const postId = route.params.id;
        const postModule = await import(`./posts/post${postId}.md`);
        postContent.value = postModule.default;
});
</script>

<style scoped lang="scss">
.blog-post-container {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
        font-family: 'Raleway', sans-serif;
        font-size: 2.5rem;
        margin-bottom: 1rem;
}

p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 1rem;
}
</style>
