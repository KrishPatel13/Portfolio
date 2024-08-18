<template>
        <Confetti>
                <TeachingNavBar />
                <div class="main-content">
                        <div class="section" id="teaching">
                                <Heading subtle-text=" Teaching" emphasized-text="Experience" />
                                <ExperienceGroup :experiences="teachingExperiences" />
                        </div>
                </div>
        </Confetti>
</template>

<script setup lang="ts">
import TeachingNavBar from '../../navbars/TeachingNavBar.vue';
import Heading from '../../Heading.vue';
import ExperienceGroup from '../ExperienceGroup.vue';
import Confetti from '../../Confetti.vue';

export type Experience = {
        logo: string;
        organization: string;
        position: string;
        date: string;
        info: string[];
};

const teachingExperiences: Experience[] = [
        {
                logo: 'utoronto.jpg',
                organization: 'University of Toronto',
                position: 'Teaching Assistant',
                date: 'September 2022 – Present',
                info: [
                        'Courses Taught: CSC148, CSC207, CSC209, CSC263, MAT232, MAT135, MAT136.',
                        'Educated 25+ students weekly about low-level OS/Hardware concepts by hosting tutorials, practicals & office hours.',
                        'Promoted the understanding of OS data structures to 100+ students by creating videos around memory management.',
                        'Achieved scheduling targets by grading & preparing feedback for 250+ undergraduate assignments in a timely fashion.',
                ],
        },
        {
                logo: 'ultimatecoders.png',
                organization: 'Ultimate Coders',
                position: 'Coding and Math Tutor',
                date: 'August 2022 – January 2023',
                info: [
                        'Taught Robotics, Scratch, Python, Java, and High-school Math to students ranging from grades Jr. KG to 12.',
                        'Regularly interacted with clients (parents of students) to maintain transparency in their child\'s learning curve.',
                        'Had an opportunity to teach Scratch to a specially-abled child, learning valuable skills like patience and dedication towards teaching.',
                ],
        },
];
</script>

<style scoped>
@import '../experience.scss';
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&family=Roboto+Slab:wght@300;400;800&display=swap');

body {
        font-family: 'Raleway', 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana,
                sans-serif;
        font-weight: 500;
        font-size: 15px;
        margin: 0;
}

.main-content {
        align-content: center;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        max-width: 1080px;
}

.section {
        margin-bottom: 10px;
}
</style>
