<script setup lang="ts">
import { onMounted } from 'vue';
import Heading from '../Heading.vue';
import ExperienceItem from './ExperienceItem.vue';

export type Experience = {
    logo: string;
    organization: string;
    position: string;
    date: string;
    info: string[];
};

const experiences: Experience[] = [
    {
        logo: 'figma.jpg',
        organization: 'Figma',
        position: 'Software Engineer',
        date: 'July 2023 - Present',
        info: [
            'Working in infrastructure on realtime data systems (LiveGraph)'
        ],
    },
    {
        logo: 'utoronto.jpg',
        organization: 'University of Toronto',
        position: 'Teaching Assistant',
        date: 'Summer 2021, Winter 2022, Fall 2022',
        info: [
            'Educated 25+ students weekly about low-level OS/Hardware concepts by hosting tutorials, practicals & office hours',
            'Promoted the understanding of OS data structures to 100+ students by creating videos around memory management',
            'Achieved scheduling targets by grading & preparing feedback for 250+ undergraduate assignments in a timely fashion',
        ],
    },
    {
        logo: 'amazon.jpg',
        organization: 'Amazon',
        position: 'Software Development Engineer Intern',
        date: 'May 2022 - August 2022',
        info: [
            'Improved developer experiences when working with a 1000+ definition schema by embedding a GraphQL documentation tool within a React (TypeScript) web app, allowing for customization, maintainability & extensibility in the long term',
            'Facilitated automated website generation by provisioning 5+ AWS resources including Lambda, VPC, & others via CDK',
        ],
    },
    {
        logo: 'caseware.jpg',
        organization: 'CaseWare International',
        position: 'Software Developer',
        date: 'September 2020 - April 2021',
        info: [
            'Conceptualized a distributed infrastructure to handle performant data pushes from desktop to cloud environments by designing 3+ approaches, researching 8+ AWS technologies and evaluating the viability of options across 10 metrics',
            'Developed & released an analytics web app to positive UX reception by insisting for and applying customer feedback',
            'Increased unit test coverage 20% by creating solid documentation and incorporating code coverage into CI workflow',
            'Expanded story completion 30%+ by collaborating across teams efficiently and prioritizing customer-specific features',
        ],
    },
    {
        logo: 'svrobotics.jpg',
        organization: 'SV Robotics Academy',
        position: 'Curriculum Designer',
        date: 'July 2020 - August 2020',
        info: [
            'Designed 2 web development courses targeted towards youth aged 12-18, creating course material surrounding HTML / CSS / JS',
            'Curated 15 enjoyable exercises for a Python course aimed towards elementary aged students to develop problem-solving abilities',
        ],
    },
    {
        logo: 'vouchr.jpg',
        organization: 'Vouchr',
        position: 'QA Analyst',
        date: 'September 2019 - December 2019',
        info: [
            'Cleared QA backlog by verifying 12+ bugfixes & feature implementations per day while following Agile workflows',
            'Ensured consistent experiences across platforms by evaluating Web, Android & iOS products against design standards',
            'Supplied effortless access to product progress by applying custom systems on Pivotal Tracker, documents & spreadsheets',
        ],
    },
    {
        logo: 'utoronto.jpg',
        organization: 'University of Toronto',
        position: 'HBSC - Computer Science',
        date: 'September 2018 - December 2022',
        info: [
            'GPA: 3.81/4.00',
            'Designated as a UofT Scholar upon admission',
            'Named on Dean’s List: 2019, 2020, 2021',
            '(4x) Teaching Assistant: Operating Systems (x2), Computer Organization (Hardware), Computer & Network Security',
        ],
    },
];

// computes timeline shape using position deltas across experience items and bullets
const arrangeTimeline = () => {
    const ITEM_OFFSET = 20;
    const expComponents = document.querySelectorAll(
        '.timeline-item'
    ) as any as HTMLElement[];
    const isDisabled =
        (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth) <= 716;
    for (let i = 1; i < expComponents.length; i++) {
        expComponents[i].style.marginTop = 'unset';
        if (isDisabled) continue;

        let directUpperExpPos = -Infinity;
        let lowerDelta = Infinity;

        // get upper circle position
        const directUpperBulletRect =
            expComponents[i - 1].children[0].getBoundingClientRect();
        const directUpperBulletPos =
            directUpperBulletRect.top + directUpperBulletRect.height;

        // get upper box position
        if (i > 1) {
            const directUpperExpRect =
                expComponents[i - 2].getBoundingClientRect();
            directUpperExpPos =
                directUpperExpRect.top + directUpperExpRect.height;
        }

        // get upper delta
        const currentExpPos = expComponents[i].getBoundingClientRect().top;
        const upperDelta =
            currentExpPos - Math.max(directUpperBulletPos, directUpperExpPos);

        // get lower delta
        const adjUpperExpRect = expComponents[i - 1].getBoundingClientRect();
        const adjUpperExpPos = adjUpperExpRect.top + adjUpperExpRect.height;
        const lowerItem =
            i < expComponents.length - 1
                ? expComponents[i + 1]
                : document.getElementById('portfolio');
        lowerDelta = lowerItem!.getBoundingClientRect().top - adjUpperExpPos;

        const finalDelta = -Math.min(upperDelta, lowerDelta) + ITEM_OFFSET;

        expComponents[i].style.marginTop = `${finalDelta}px`;
    }
};
onMounted(() => {
    arrangeTimeline();
    window.addEventListener('resize', arrangeTimeline);
});
</script>

<template>
    <div id="experience">
        <Heading subtle-text="My" emphasized-text="Experience" />
        <div id="exp-timeline">
            <ExperienceItem
                v-for="(experience, idx) of experiences"
                :experience="experience"
                :index="idx % 2"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './experience.scss';
</style>
