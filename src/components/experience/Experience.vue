<script setup lang="ts">
import ExperienceSection from './ExperienceSection.vue';

export type Experience = {
    logo: string;
    organization: string;
    position: string;
    date: string;
    info: string[];
};

const professionalExperiences: Experience[] = [
    {
        logo: 'huawei.png',
        organization: 'Huawei Technologies Canada Inc.',
        position: 'Software Engineer Intern Co-op – Distributed Database Lab R&D',
        date: 'May 2024 – April 2025',
        info: [
            'Set up Jenkins pipelines for the team, automating compilation and recovery runs, resulting in a 90% reduction in manual setup time, from 20 minutes to 2 minutes, allowing team members to focus on other tasks.',
            'Improved GaussDB’s recovery speed by 61.53% by optimizing system calls and reducing read operations, increasing recovery speed from 130 MB/s to 210 MB/s on average across 10 runs.',
            'Enhanced SPSCBlockingQueue performance by 42.8% through caching optimizations, achieving 10M operations per second, outperforming Facebook\'s folly queue, as verified through standalone benchmarking scripts.',
            'Optimized thread affinity by balancing distribution across NUMA nodes, which led to a 50% increase in recovery speed, improving from 400 MB/s to 600 MB/s in a distributed database environment.',
        ],
    },
    {
        logo: 'mldsai.png',
        organization: 'MLDSAI Inc.',
        position: 'Machine Learning Engineer Intern',
        date: 'May 2023 – August 2023',
        info: [
            'Spearheaded the development of OpenAdapt AI, an AI-First Process Automation solution, resulting in a 30% reduction in manual tasks and improved operational efficiency.',
            'Contributed to the GitHub repository, implementing recording, tokenization, and synthetic input generation functionalities.',
            'Ensured the reliability and stability of the system through rigorous unit testing and handling of edge cases, reducing errors by 40% and ensuring seamless performance.',
        ],
    },
    {
        logo: 'dotsandcoms.jpeg',
        organization: 'Dots & Coms',
        position: 'Software Engineering Intern – Android',
        date: 'May 2022 – August 2022',
        info: [
            'Helped architect Book Pratha, a full-stack, user-facing, scalable, online bookstore with more than 1000 users.',
            'Created the largest and most organized online Gujarati bookstore over 10,000+ books using Android Studio.',
            'Used Java, XML to create a UI to dynamically query and display the data to users.',
            'Consolidated the search algorithm and perfected the search outcome time by 70%.',
        ],
    },
];

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

const researchExperiences: Experience[] = [
    {
        logo: 'voiceex.png',
        organization: 'VoiceEx – Interactive Systems Supporting Computing Education',
        position: 'Research Assistant',
        date: 'January 2024 – August 2024',
        info: [
            'Developed an instructor dashboard in React with specific functionalities and permissions, allowing English department instructors to customize and manage assignments in VoiceEx, enhancing usability and control over course content and student interactions.',
            'Implemented an admin control system with shutoff and permissions features, enabling instructors to administer specific question types and test VoiceEx features in a controlled environment, resulting in a more tailored and effective educational tool.',
            'Integrated an AI-driven interactive chatbot and STS (Speech-to-Speech) service into VoiceEx, facilitating natural, voice-based conversations between students and the system, improving engagement and accessibility while planning for large-scale deployment.',
            'Researched and explored Azure\'s Avatar AI to incorporate human-like avatars for student interactions, focusing on minimizing lag and enhancing user experience, laying the groundwork for future integration.',
            'Conducted comparative studies on STT providers and Whisper API to evaluate cost-effectiveness and accuracy, informing the design and deployment of VoiceEx’s multilingual and voice-interactive features.',
        ],
    },
];

const otherExperiences: Experience[] = [
    {
        logo: 'amazon.jpg',
        organization: 'Amazon',
        position: 'Sortation Unit Associate',
        date: 'November 2021 – August 2022',
        info: [
            'Worked in a fast-paced environment, scanning and sorting incoming and outgoing packages.',
            'Received, stocked, and stacked items, pulling, packing, and loading packages up to 50lb.',
            'Completed the SmarTrack Project.',
        ],
    },
    {
        logo: 'timhortons.jpg',
        organization: 'Tim Hortons',
        position: 'Cashier Store Front',
        date: 'September 2021 – November 2021',
        info: [
            'Provided customer service in a fast-paced environment.',
            'Handled cash transactions, worked efficiently in a team, and ensured customer satisfaction.',
        ],
    },
];
</script>


<template>
    <div id="experience">
        <ExperienceSection subtle-text="Professional" emphasized-text="Experience" section="professional"
            :experiences="professionalExperiences" />
        <ExperienceSection subtle-text="Teaching" emphasized-text="Experience" section="teaching" :experiences="teachingExperiences" />
        <ExperienceSection subtle-text="Research" emphasized-text="Experience" section="research" :experiences="researchExperiences" />
        <ExperienceSection subtle-text="Other" emphasized-text="Experience" section="other" :experiences="otherExperiences" />
    </div>
</template>


<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
@import './experience.scss';

/* Additional CSS */
.experience-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    h2 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
    }

    .toggle-btn {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: #000;

        svg {
            margin-right: 5px;
        }
    }
}

.toggle-icon {
    width: 16px;
    height: 16px;
    fill: currentColor;
}
</style>
