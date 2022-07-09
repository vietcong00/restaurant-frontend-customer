import { RouteRecordRaw } from 'vue-router';
import HomePage from './pages/HomePage.vue';

export default [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            name: 'Home',
        },
    },
] as RouteRecordRaw[];
