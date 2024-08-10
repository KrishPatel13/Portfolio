import { createApp } from 'vue';
import App from './App.vue';
import TeachingExperience from './components/experience/categories/TeachingExperience.vue';
// import ResearchExperience from './components/experience/ResearchExperience.vue';
// import ProfessionalExperience from './components/experience/ProfessionalExperience.vue';
// import OtherExperience from './components/experience/OtherExperience.vue';
import HomeLayout from './components/HomeLayout.vue';
import NotFound from './components/NotFound.vue';
import * as VueRouter from 'vue-router';
import 'aos/dist/aos.css';

export const routes = [
    {
        path: '/',
        component: HomeLayout,
        children: [
            {
                path: '',
                component: () => import('./components/About.vue'),
            },
            {
                path: '',
                component: () => import('./components/experience/Experience.vue'),
            },
            {
                path: '',
                component: () => import('./components/portfolio/Portfolio.vue'),
            },
            {
                path: '',
                component: () => import('./components/skills/Skill.vue'),
            },
        ],
    },
    {
        path: '/experience/teaching',
        component: TeachingExperience,
    },
    // {
    //     path: '/experience/research',
    //     component: ResearchExperience,
    // },
    // {
    //     path: '/experience/professional',
    //     component: ProfessionalExperience,
    // },
    // {
    //     path: '/experience/other',
    //     component: OtherExperience,
    // },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
