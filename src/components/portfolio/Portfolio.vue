<script setup lang="ts">
import PortfolioCard from './PortfolioCard.vue';
import Heading from '../Heading.vue';
export type Project = {
    title: string;
    tools: string[];
    date: string;
    link: string;
    description: string;
};
const projects = [
    {
        title: 'Snowfall Saga (Multiplayer Web Game)',
        tools: ['HTML5', 'CSS3', 'JavaScript', 'Flask', 'WebSocket', 'Docker'],
        date: 'Summer 2023',
        link: 'https://github.com/krishpatel13/Snowfall-Saga',
        description: 'Developed a real-time multiplayer web game...',
    },
    {
        title: 'DataGuard (PII/PHI Data Anonymization Tool)',
        tools: ['Python', 'Microsoft Presidio', 'spaCy', 'NLP'],
        date: 'Winter 2023',
        link: 'https://github.com/krishpatel13/DataGuard',
        description: 'Developed Scrub, a Python-based tool to anonymize PII and PHI...',
    },
    {
        title: 'Chronos (Time Management System)',
        tools: ['Java', 'SOLID Principles', 'Scrum', 'Agile', 'UML Diagrams'],
        date: 'Fall 2022',
        link: 'https://github.com/krishpatel13/Chronos',
        description: 'Built a web-based Time Management System...',
    },
];
</script>

<template>
    <div id="portfolio">
        <div class="heading roboto light" data-aos="fade-right">
            <Heading subtle-text="My" emphasized-text="Portfolio" />
        </div>
        <div id="porfolio-cards">
            <PortfolioCard v-for="project in projects" :project="project" :key="project.title" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
@import './portfolio.scss';
</style>
