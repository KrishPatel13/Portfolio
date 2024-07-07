<script setup lang="ts">
import Heading from '../Heading.vue';
import SkillGroup from './SkillGroup.vue';

export type SkillItem = {
    name: string;
    level: number;
};

export type SkillGroupData = {
    title: string;
    items: SkillItem[];
};

const skillData: SkillGroupData[] = [
    {
        title: 'Languages',
        items: [
            {
                name: 'C',
                level: 82,
            },
            {
                name: 'C#',
                level: 50,
            },
            {
                name: 'CSS (SCSS)',
                level: 70,
            },
            {
                name: 'Go',
                level: 65,
            },
            {
                name: 'Haskell',
                level: 60,
            },
            {
                name: 'HTML',
                level: 90,
            },
            {
                name: 'NodeJS',
                level: 75,
            },
            {
                name: 'Java',
                level: 85,
            },
            {
                name: 'JavaScript',
                level: 90,
            },
            {
                name: 'Python',
                level: 80,
            },
            {
                name: 'TypeScript',
                level: 95,
            },
            {
                name: 'Verilog',
                level: 50,
            },
        ],
    },

    {
        title: 'Frameworks',
        items: [
            {
                name: 'AngularJS',
                level: 75,
            },
            {
                name: 'Express',
                level: 90,
            },
            {
                name: 'Flask',
                level: 60,
            },
            {
                name: 'Jasmine',
                level: 65,
            },
            {
                name: 'Jest',
                level: 60,
            },
            {
                name: 'JUnit',
                level: 65,
            },
            {
                name: 'PyTest',
                level: 55,
            },
            {
                name: 'ReactJS',
                level: 85,
            },
            {
                name: 'Spring Boot',
                level: 75,
            },
            {
                name: 'Vue.js',
                level: 70,
            },
        ],
    },
    {
        title: 'Databases',
        items: [
            {
                name: 'MongoDB',
                level: 80,
            },
            {
                name: 'SQL (PostGres)',
                level: 70,
            },
            {
                name: 'Redis',
                level: 65,
            },
        ],
    },
    {
        title: 'Others',
        items: [
            {
                name: 'Bash (Unix)',
                level: 75,
            },
            {
                name: 'Bootstrap',
                level: 60,
            },
            {
                name: 'Docker',
                level: 70,
            },
            {
                name: 'Git',
                level: 85,
            },
            {
                name: 'GitHub Actions',
                level: 75,
            },
            {
                name: 'GraphQL',
                level: 70,
            },
            {
                name: 'JQuery',
                level: 50,
            },
            {
                name: 'Terraform',
                level: 55
            }
        ],
    },
];
</script>

<template>
    <div id="skills">
        <Heading subtle-text="My" emphasized-text="Skills" />
        <div id="skillGroups">
            <SkillGroup
                v-for="skillGroup of skillData"
                class="group"
                :skill-group="skillGroup"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');

#skillGroups {
    display: grid;
    row-gap: 1rem;
    column-gap: 1.5rem;

    @media (min-width: 717px) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.group {
    box-sizing: border-box;
}
</style>
