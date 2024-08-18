import { createApp } from 'vue';
import App from './App.vue';
import HomeLayout from './components/HomeLayout.vue';
import Blog from './components/Blog.vue';
import BlogNavBar from './components/navbars/BlogNavBar.vue'; // Import the new BlogNavBar
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
        path: '/blog',
        components: {
            default: Blog,
            navbar: BlogNavBar // Use BlogNavBar for the /blog route
        }
    },
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
