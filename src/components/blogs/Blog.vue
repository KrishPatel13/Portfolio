<template>
        <BlogNavBar />
        <div class="blog-container">
                <h1>Welcome to My Blog</h1>
                <div class="blog-card-container">
                        <router-link v-for="(post, index) in posts" :key="index" :to="`/blog/post/${index + 1}`"
                                class="blog-card">
                                <h2>{{ post.title }}</h2>
                                <p>{{ post.excerpt }}</p>
                        </router-link>
                </div>
        </div>
</template>

<script setup lang="ts">
import BlogNavBar from '../navbars/BlogNavBar.vue';

const posts = [
        { title: 'Post 1', excerpt: 'This is the first post.' },
        { title: 'Post 2', excerpt: 'This is the second post.' },
        // Add more posts as needed
];
</script>

<style scoped lang="scss">
.blog-container {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.blog-card-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
}

.blog-card {
        padding: 1rem;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        color: inherit;
}

.blog-card:hover {
        background-color: #f0f0f0;
}

h1 {
        font-family: 'Raleway', sans-serif;
        font-size: 2.5rem;
        margin-bottom: 1rem;
}

h2 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
}

p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 1rem;
}
</style>
