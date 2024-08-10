<template>
        <TeachingNavBar />
        <div id="teaching-experience">
                <Heading subtle-text="Teaching" emphasized-text="Experience" />
                <ExperienceGroup :experiences="teachingExperiences" />
        </div>
</template>

<script setup lang="ts">
import TeachingNavBar from '../../navbars/TeachingNavBar.vue';
import Heading from '../../Heading.vue';
import ExperienceGroup from '../ExperienceGroup.vue';

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
</style>
