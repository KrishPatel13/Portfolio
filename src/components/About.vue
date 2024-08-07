<script setup lang="ts">
import Heading from './Heading.vue';
</script>

<template>
    <div id="about">
        <img
            class="profile-image"
            src="/assets/images/profile.png"
            alt="krish's profile image"
            data-aos="zoom-in"
        />

        <div class="glass-overlay"></div>

        <div>
            <Heading subtle-text="About" emphasized-text="Me" />
            <div class="description" data-aos="zoom-out-up">
                I am Krish Patel, currently pursuing an <strong>Honours Bachelor of Science</strong> in <strong>Computer Science</strong> at the <strong>University of Toronto</strong>, with a strong academic focus complemented by practical experience. My journey through the world of technology has been shaped by hands-on roles in <strong>software engineering</strong>, <strong>machine learning</strong>, and <strong>database technologies</strong>.

                My professional experience includes a <strong>Software Engineer Intern</strong> position at <strong>Huawei Technologies Canada</strong>, where I worked on <strong>distributed databases</strong>, optimizing system performance and automating critical processes. I also served as a <strong>Machine Learning Engineer Intern</strong> at <strong>MLDSAI Inc.</strong>, contributing to the development of <strong>AI-driven automation solutions</strong> that significantly improved operational efficiency.

                Beyond industry experience, I have a solid background in academia as a <strong>Teaching Assistant</strong> for various <strong>computer science</strong> and <strong>mathematics</strong> courses at the University of Toronto. This role has allowed me to refine my <strong>technical expertise</strong> and develop strong <strong>teaching</strong> and <strong>mentoring skills</strong>.

                Driven by a passion for <strong>Artificial Intelligence</strong> and its transformative potential, I am eager to deepen my knowledge and contribute to <strong>innovative advancements</strong> in this rapidly evolving field.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('/assets/styles/utils.css');
    @import url('/assets/styles/profile-image.css');

    #about {
        display: flex;
        margin-top: 15px;
        @media (max-width: 716px) {
            flex-direction: column;
            align-items: center;
        }
    }

    .description {
        font-size: 18px;
    }
</style>
