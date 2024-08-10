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
        title: 'Programming Languages',
        items: [
            { name: 'C++', level: 85 },
            { name: 'Java', level: 80 },
            { name: 'C', level: 75 },
            { name: 'Python', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'TypeScript', level: 85 },
            { name: 'PHP', level: 70 },
            { name: 'Assembly', level: 65 },
            { name: 'Racket', level: 65 },
            { name: 'Haskell', level: 65 },
        ],
    },
    {
        title: 'JavaScript Frameworks/Libraries',
        items: [
            { name: 'React', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'Vue.js', level: 75 },
            { name: 'Express.js', level: 85 },
            { name: 'Next.js', level: 70 },
            { name: 'jQuery', level: 60 },
            { name: 'Ajax', level: 70 },
            { name: 'REST API', level: 80 },
        ],
    },
    {
        title: 'Databases',
        items: [
            { name: 'MongoDB', level: 80 },
            { name: 'PostgreSQL', level: 75 },
            { name: 'Redis', level: 70 },
            { name: 'MySQL', level: 70 },
            { name: 'SQLite', level: 65 },
            { name: 'Neo4j', level: 60 },
            { name: 'GaussDB', level: 55 },
        ],
    },
    {
        title: 'AI/ML',
        items: [
            { name: 'Deep Learning', level: 85 },
            { name: 'PyTorch', level: 80 },
            { name: 'TensorFlow', level: 80 },
            { name: 'Hugging Face', level: 75 },
            { name: 'Scikit-learn', level: 75 },
            { name: 'Keras', level: 70 },
            { name: 'OpenCV', level: 70 },
            { name: 'Pandas', level: 85 },
            { name: 'Numpy', level: 85 },
            { name: 'SpaCy', level: 75 },
            { name: 'OpenAI', level: 80 },
        ],
    },
    {
        title: 'Scripting Languages',
        items: [
            { name: 'Bash', level: 75 },
            { name: 'Shell', level: 70 },
            { name: 'PS1', level: 65 },
            { name: 'Groovy', level: 60 },
        ],
    },
    {
        title: 'Version Control',
        items: [
            { name: 'Git', level: 90 },
            { name: 'GitHub', level: 85 },
            { name: 'GitLab', level: 80 },
        ],
    },
    {
        title: 'Code/Text Editors',
        items: [
            { name: 'Vim', level: 80 },
            { name: 'Notepad', level: 70 },
            { name: 'VS Code', level: 90 },
        ],
    },
    {
        title: 'DevOps Tools',
        items: [
            { name: 'Docker', level: 85 },
            { name: 'Jenkins', level: 80 },
            { name: 'Azure', level: 75 },
            { name: 'Jira', level: 70 },
            { name: 'Terraform', level: 65 },
            { name: 'Kubernetes', level: 70 },
            { name: 'Selenium', level: 75 },
            { name: 'Slack', level: 85 },
            { name: 'CI/CD', level: 80 },
        ],
    },
    {
        title: 'Markup/Modeling Languages',
        items: [
            { name: 'HTML', level: 85 },
            { name: 'XML', level: 75 },
            { name: 'CSS', level: 80 },
            { name: 'TailWind', level: 75 },
            { name: 'LaTeX', level: 70 },
            { name: 'Markdown', level: 85 },
            { name: 'SSML', level: 65 },
        ],
    },
    {
        title: 'Operating Systems',
        items: [
            { name: 'Linux', level: 85 },
            { name: 'Unix', level: 75 },
            { name: 'Windows', level: 80 },
            { name: 'macOS', level: 70 },
            { name: 'Android', level: 75 },
            { name: 'CentOS', level: 65 },
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
                :key="skillGroup.title"
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
