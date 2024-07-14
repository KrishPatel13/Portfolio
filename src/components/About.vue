<script setup lang="ts">
import Heading from './Heading.vue';
</script>

<template>
    <img
        class="background-image"
        src="/assets/images/profile11.jpg"
    />

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
                As a recent graduate from the University of Toronto with an Honours Bachelor of Science in Computer Science and a minor in Mathematical Science.
                I am passionate about <strong>Artificial Intelligence</strong> and its potential to revolutionize technology.
                My professional experience includes working as a <strong>Database Software Engineer</strong> at Huawei Technologies and a Machine Learning Engineer at MLDSAI Inc., where I contributed to the development of AI-driven solutions.
                Additionally, I have served as a <strong>Teaching Assistant</strong> for various computer science and mathematics courses, honing my skills in both teaching and technical domains. I am eager to further explore AI through a master's program, aiming to contribute to <strong>cutting-edge advancements</strong> in this exciting field.
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
