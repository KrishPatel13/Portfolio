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
        title: 'Hexagon Security Platform',
        tools: ['React (TS)', 'NodeJS', 'GraphQL', 'MongoDB'],
        date: 'Winter 2022',
        link: 'https://github.com/tahmid-haque/hexagon-security',
        description:
            'A fully secure platform for storing sensitive information on the web. Includes credential management, note storage and autofilling via a Chrome extension',
    },
    {
        title: 'Bytes Restaurant Rewards',
        tools: ['JS', 'JQuery', 'Python (Flask)', 'MongoDB'],
        date: 'Summer 2020',
        link: 'https://github.com/tahmid-haque/bytes-rewards',
        description:
            'A restaurant-oriented rewards platform with 2 web apps to support reward curation and client management alongside a static website to document development progress',
    },
    {
        title: 'YelpCamp',
        tools: ['Bootstrap', 'NodeJS (Express)', 'MongoDB'],
        date: 'Summer 2020',
        link: 'https://github.com/tahmid-haque/YelpCamp',
        description:
            'A simple web app that supports reviewing campsites across the world. The first website I developed and revamped as part of a web development course',
    },
    {
        title: 'DE2 Connect 4',
        tools: ['Verilog'],
        date: 'Summer 2019',
        link: 'https://github.com/tahmid-haque/DE2_Connect-4',
        description:
            'An implementation of the classic 2-player Connect 4 game, designed for FPGAs and tested on a DE2 board',
    },
    {
        title: 'Web Portfolio (This)',
        tools: ['Vue.js (TS)'],
        date: 'Summer 2022',
        link: 'https://github.com/tahmid-haque/portfolio',
        description:
            'My personal website and portfolio. Designed to showcase my experiences and profile to users of all devices',
    },
];
</script>

<template>
    <div id="portfolio">
        <Heading subtle-text="My" emphasized-text="Portfolio" />
        <div id="porfolio-cards">
            <PortfolioCard v-for="project in projects" :project="project" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
@import './portfolio.scss';
</style>
