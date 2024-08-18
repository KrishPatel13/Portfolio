<template>
        <BlogNavBar />
        <div class="blog-container">
                <h1>My Blog</h1>
                <ul>
                        <li v-for="post in posts" :key="post.id">
                                <router-link :to="'/blog/post/' + post.id">{{ post.title }}</router-link>
                        </li>
                </ul>
        </div>
</template>

<script setup>
import BlogNavBar from '../navbars/BlogNavBar.vue';
const posts = [
        { id: 1, title: "Post 1", path: "@/components/blogs/posts/post1.md" },
        // { id: 2, title: "Post 2", path: "@/components/blogs/posts/post2.md" },
        // Add more posts here
];
</script>

<style scoped>
.blog-container {
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

ul {
        list-style: none;
        padding: 0;
}

li {
        margin: 1rem 0;
}
</style>
