import { createApp } from 'vue';
import App from './App.vue';
import NotFound from './components/NotFound.vue';
import * as VueRouter from 'vue-router';
import 'aos/dist/aos.css';

export const routes = [{ path: '/:pathMatch(.*)*', component: NotFound }];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
