<template>
        <BlogNavBar />
        <div class="post-container">
                <h1>{{ attributes.title }}</h1>
                <h2>{{ attributes.date }}</h2>

                <h3>Table of Contents</h3>
                <ul>
                        <li v-for="item in toc" :key="item.slug">
                                <a :href="'#' + item.slug">{{ item.content }}</a>
                        </li>
                </ul>

                <div v-html="html"></div>

                <h3>Vue Components within Markdown</h3>
                <ContentMarkdown />
        </div>
</template>

<script>
import BlogNavBar from '../navbars/BlogNavBar.vue';
import { attributes, html, toc, VueComponent, VueComponentWith } from '@/components/blogs/posts/post1.md';

export default {
        name: 'BlogPost',
        components: {
                BlogNavBar,
                ContentMarkdown: VueComponentWith({}),
        },
        data() {
                return {
                        attributes,
                        html,
                        toc,
                };
        },
};
</script>

<style scoped>
.post-container {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1,
h2,
h3 {
        font-family: 'Raleway', sans-serif;
        margin-bottom: 1rem;
}
</style>
