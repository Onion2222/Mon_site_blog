import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        name: 'accueil',
        component: Home
    },
    {
        path: '/about',
        name: 'a_propos',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/articles',
        name: 'articles',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Articles.vue')
    }, {
        path: '/photos',
        name: 'photos',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/cartes',
        name: 'cartes',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;