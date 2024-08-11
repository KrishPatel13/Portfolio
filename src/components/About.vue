<script setup lang="ts">
import Heading from './Heading.vue';
</script>

<template>
    <div id="about">
        <img
            class="profile-image"
            src="/assets/images/profile.png"
            alt="Krish Patel - Software Engineer Profile Picture - krishpatel.info"
            data-aos="zoom-in"
        />

        <div>
            <div class="heading roboto light" data-aos="fade-right">
                <Heading subtle-text="About" emphasized-text="Me" />
            </div>
            <div class="description" data-aos="zoom-out-up">
                I am Krish Patel, currently pursuing an <strong>Honours Bachelor of Science</strong> in <strong>Computer Science</strong> at the <strong>University of Toronto</strong>, with a strong academic focus complemented by practical experience.<br><br>
            </div>

            <div class="description" data-aos="zoom-out-up" style="text-indent: 4em;">
                My professional journey spans several key areas: <strong>Machine Learning</strong>, <strong>Artificial Intelligence</strong>, <strong>Database Technologies</strong>, <strong>Low-level Programming</strong>, and <strong>Full-stack Development</strong>.<br><br>
            </div>

            <div class="description" data-aos="zoom-out-up" style="text-indent: 4em;">
                Beyond industry experience, I have a solid background in academia as a <strong>Teaching Assistant</strong> for various <strong>computer science</strong> and <strong>mathematics</strong> courses at the University of Toronto. This role has allowed me to refine my <strong>technical expertise</strong> and develop strong <strong>teaching</strong> and <strong>mentoring skills</strong>.<br><br>
            </div>

            <div class="description" data-aos="zoom-out-up">
                Driven by a passion for <strong>Software Engineering</strong>, <strong>Machine Learning</strong>, and <strong>Artificial Intelligence</strong> and its transformative potential, I am eager to deepen my knowledge and contribute to <strong>innovative advancements</strong> in this rapidly evolving field that brings impact in society.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        cursor: text;
        font-size: 18px;
    }
</style>
